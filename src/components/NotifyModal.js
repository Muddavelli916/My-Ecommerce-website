import React, { useState, useEffect } from 'react';
import {
  RecaptchaVerifier,
  PhoneAuthProvider,
  signInWithCredential,
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import './NotifyModal.css';

const NotifyModal = ({ onClose, productName }) => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [verificationId, setVerificationId] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [success, setSuccess] = useState(false);
  const [maskedPhone, setMaskedPhone] = useState('');
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);

  const startTimer = () => {
    setTimer(30);
    setCanResend(false);
    const interval = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible',
        callback: () => console.log('reCAPTCHA verified'),
        'expired-callback': () => alert('reCAPTCHA expired. Try again.'),
      });
    }
  };

  useEffect(() => {
    setupRecaptcha();
    return () => {
      if (window.recaptchaVerifier?.clear) {
        window.recaptchaVerifier.clear();
        window.recaptchaVerifier = null;
      }
    };
  }, []);

  const sendOtp = async () => {
    if (phone.length !== 10) return alert('Enter valid 10-digit number.');
    const fullPhone = `+91${phone}`;
    setMaskedPhone(`******${phone.slice(-4)}`);

    try {
      const provider = new PhoneAuthProvider(auth);
      const id = await provider.verifyPhoneNumber(fullPhone, window.recaptchaVerifier);
      setVerificationId(id);
      setOtpSent(true);
      startTimer();
      alert('📩 OTP sent! Use code from emulator logs.');
    } catch (error) {
      console.error('Error sending OTP:', error);
      alert(error.message);
    }
  };

  const verifyOtp = async () => {
    if (otp.length !== 6 || !verificationId) {
      return alert('Enter valid 6-digit OTP.');
    }

    try {
      const credential = PhoneAuthProvider.credential(verificationId, otp);
      const result = await signInWithCredential(auth, credential);
      const phoneNumber = result.user.phoneNumber;

      const docRef = doc(db, 'notifiedUsers', phoneNumber);
      const docSnap = await getDoc(docRef);
      const products = docSnap.exists() ? docSnap.data().products || [] : [];

      const updatedProducts = [...new Set([...products, productName])];
      await setDoc(docRef, { phone: phoneNumber, products: updatedProducts });

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 2000);
    } catch (error) {
      console.error('Verification failed:', error);
      alert('❌ Invalid OTP. Try again.');
    }
  };

  return (
    <div className="notify-modal-overlay">
      <div className="notify-modal-content">
        <button className="close-btn" onClick={onClose}>✖</button>

        <div className="modal-left">
          <h1>E-Commerce</h1>

          {!otpSent && !success && (
            <>
              <h2>Groceries delivered<br />in 10 minutes</h2>
              <input
                type="tel"
                placeholder="Enter Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                maxLength="10"
              />
              <div id="recaptcha-container"></div>
              <button className="continue-btn" onClick={sendOtp}>Continue</button>
            </>
          )}

          {otpSent && !success && (
            <>
              <h2>Enter OTP sent to<br />{maskedPhone}</h2>
              <input
                type="text"
                placeholder="Enter 6-digit OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                maxLength="6"
              />
              <button className="continue-btn" onClick={verifyOtp}>Verify OTP</button>
              {!canResend ? (
                <p className="terms-text">Resend in 0:{timer < 10 ? '0' + timer : timer}</p>
              ) : (
                <button className="continue-btn resend-btn" onClick={sendOtp}>Resend OTP</button>
              )}
            </>
          )}

          {success && (
            <div className="success-toast">
              🎉 OTP Verified!<br />
              You’ll be notified about <strong>{productName}</strong> on <strong>{maskedPhone}</strong>
            </div>
          )}
        </div>

        <div className="modal-right">
          <img src="https://cdn-icons-png.flaticon.com/512/2906/2906271.png" alt="App Icon" />
          <h3>Order faster & easier everytime</h3>
          <p>with the E-commerce App</p>
          <div className="store-buttons">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
              alt="Google Play"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotifyModal;
