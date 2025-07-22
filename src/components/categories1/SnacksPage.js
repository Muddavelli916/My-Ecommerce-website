// src/pages/FruitsPage.jsx
import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import { FaCartPlus, FaPlus, FaMinus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext'; // ✅ Go up 2 folders to reach src
import 'react-multi-carousel/lib/styles.css';
import './Fruitspage.css';
import NotifyModal from '../NotifyModal'; // ✅ Adjust path if needed

const bannerData = [
  {
  title: 'Pizza & Burger Fiesta!',
  description: 'Satisfy your cravings – hot, cheesy & up to 50% off!',
  img: 'https://media.istockphoto.com/id/694189032/photo/hand-held-bbq-favorites.jpg?s=612x612&w=0&k=20&c=mBxrLzHHyV8jtCypC5asdDwxQgDe5prwRCumFt4dVRo='
},
  {
    title: 'Crispy & Crunchy Delights',
    description: 'Your snack cravings end here. Explore our top picks!',
    img: 'https://media.istockphoto.com/id/1300631167/photo/israeli-bissli-wheat-snacks-with-different-flavors-and-shapes.jpg?s=612x612&w=0&k=20&c=uvNR0u-XmEO-DZudeAi7BmkPVNH564IVKYAoyomy3T8='
  },
  {
    title: 'Sweet Moments, Savory Flavors',
    description: 'Laddoos, Bhujia, Chakli, and more festive favorites!',
    img: 'https://media.istockphoto.com/id/1793307295/video/diwali-snacks-diwali-faral-diwali-special-sweet-and-salty-snacks-festival-snacks-from.jpg?s=640x640&k=20&c=nOzyYBDGQ-mu7wLclUV98SkvuxBji2OBMwm-RVBTxQY='
  }
];
const fruits = [
  { name: 'Chakli', originalPrice: 120, discountPrice: 100, offer: '₹20 Off', img: 'https://media.istockphoto.com/id/2198939348/photo/mullu-murukku-also-known-as-moong-dal-chakli.jpg?s=612x612&w=0&k=20&c=Fd1oZOICSGnvboZzEYCL8vPqIVtIEbdPqfPZamU6UZg=', soldOut: false },
  { name: 'Murukku', originalPrice: 110, discountPrice: 90, offer: '₹20 Off', img: 'https://media.istockphoto.com/id/2193879752/photo/traditional-south-indian-crunchy-murukku-snack-isolated-on-white-background-top-view.jpg?s=612x612&w=0&k=20&c=6lGwBhiZflAYiccxF_-ew2_1zsJMHT_AGNqtJU3cHAM=', soldOut: false },
  { name: 'Bhujia', originalPrice: 100, discountPrice: 80, offer: '₹20 Off', img: 'https://media.istockphoto.com/id/2223329070/photo/the-neatly-arranged-plastic-bags-of-a-popular-indian-snack-called-sev-or-mixture.jpg?s=612x612&w=0&k=20&c=jBcOp2QNtbfGHsWIs77zfKvwEUNr3GXtbUymUrze9OU=', soldOut: false },
  { name: 'Banana Chips', originalPrice: 90, discountPrice: 70, offer: '₹20 Off', img: 'https://media.istockphoto.com/id/1499908363/photo/pile-of-dehydrated-fried-banana-chips-with-salt-top-view-chifles-tostones-o-patacones-top.jpg?s=612x612&w=0&k=20&c=rKqyUpEmLuL-2yFb0q1pxLd04kaVZZ3wNb5r7n0KjuA=', soldOut: false },
  { name: 'Aloo Bhujia', originalPrice: 95, discountPrice: 75, offer: '₹20 Off', img: 'https://media.istockphoto.com/id/1281204380/photo/traditional-indian-snacks-are-ready-for-sale-in-navratri-diwali-festival-in-india.jpg?s=612x612&w=0&k=20&c=-45DlFZrCskrtTcxdRlEKL8mrrB_fxfHIaCUCGMRybw=', soldOut: false },
  { name: 'Kachori', originalPrice: 80, discountPrice: 65, offer: '₹15 Off', img: 'https://media.istockphoto.com/id/2167858094/photo/indian-famous-delicious-street-food-onion-kachori-display-at-sho.jpg?s=612x612&w=0&k=20&c=2h3gIHHPVkrLKUk1-ddLObyUYUU4J3LD8RqnDlTJXE0=', soldOut: false },
  { name: 'Samosa', originalPrice: 60, discountPrice: 45, offer: '₹15 Off', img: 'https://media.istockphoto.com/id/1086872416/photo/samosa-indian-staple-food.jpg?s=612x612&w=0&k=20&c=QHZwgvHuhGH9TB2mRUGcrForaeQD6SF-QfGNFAYPZCc=', soldOut: false },
  { name: 'Mixture', originalPrice: 100, discountPrice: 85, offer: '₹15 Off', img: 'https://media.istockphoto.com/id/1033161308/photo/various-types-of-packaged-muruku-popular-indian-food-in-malaysia.jpg?s=612x612&w=0&k=20&c=imlCINBnVnRC9KeCPdqfZe_F4XFH_q0phl_4ABYS8Cs=', soldOut: false },
  { name: 'Sev', originalPrice: 90, discountPrice: 70, offer: '₹20 Off', img: 'https://media.istockphoto.com/id/1421859158/photo/indian-snack-food-aloo-bhujia-close-up-view.jpg?s=612x612&w=0&k=20&c=eJo39QDJtmHlFnA7oCGYmsS6wMkw2m57hFg8SgCnEng=', soldOut: false },
  { name: 'Pizza', originalPrice: 180, discountPrice: 120, offer: '₹60 Off', img: 'https://media.istockphoto.com/id/938742222/photo/cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=D1z4xPCs-qQIZyUqRcHrnsJSJy_YbUD9udOrXpilNpI=', soldOut: false },
  { name: 'Burger', originalPrice: 100, discountPrice: 85, offer: '₹15 Off', img: 'https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4=', soldOut: false },
  { name: 'Mathri', originalPrice: 95, discountPrice: 75, offer: '₹20 Off', img: 'https://media.istockphoto.com/id/1395671518/photo/salty-indian-snack-nimki-is-ready-to-eat.jpg?s=612x612&w=0&k=20&c=9JldvxjKVX-BAnJcN4PBNLj9AzIcIsznoHdde6dX9co=', soldOut: false },
  { name: 'Papdi', originalPrice: 70, discountPrice: 55, offer: '₹15 Off', img: 'https://media.istockphoto.com/id/2158030266/photo/soan-papdi-or-shompapri-garnished-with-cashew-nut-and-saffron-isolate-on-white-background.jpg?s=612x612&w=0&k=20&c=wUsJhL44WoBO8QPfvjsSeDyXq7qxVp2EzoGZnGKZdYE=', soldOut: true },
  { name: 'Mini Samosa', originalPrice: 50, discountPrice: 40, offer: '₹10 Off', img: 'https://media.istockphoto.com/id/530927789/photo/samosas.jpg?s=612x612&w=0&k=20&c=X98H7uNJ2ru9Lr9Nckn_QkJVmKdY2KDhpPcY0XIIpzQ=', soldOut: true },
  { name: 'Curry Leaves Mixture', originalPrice: 100, discountPrice: 85, offer: '₹15 Off', img: 'https://media.istockphoto.com/id/1063169732/photo/broken-cement-ground.jpg?s=612x612&w=0&k=20&c=bn6M7jsl_k68qhc11ffaewZQy76IRTtz-8dJIr6vHaY=', soldOut: true },
  {
  name: 'Masala Corn Bites',
  originalPrice: 95,
  discountPrice: 80,
  offer: '₹15 Off',
  img: 'https://media.istockphoto.com/id/1252882091/photo/crispy-fried-corn-or-kernels-or-pakora.jpg?s=612x612&w=0&k=20&c=MewTScqZ70Xqnm-Xmm8ZO1GH5nW_ylZhlVlWiMGSPWo=', // Spicy Mexican Corn Bites :contentReference[oaicite:1]{index=1}
  soldOut: true
},
{
  name: 'Roasted Chickpeas',
  originalPrice: 85,
  discountPrice: 68,
  offer: '₹17 Off',
  img: 'https://media.istockphoto.com/id/1161600277/photo/roasted-chickpeas-snack.jpg?s=612x612&w=0&k=20&c=Ay9SjyZabizsz_L-FyyzWx7othSNk2W2wMnbefOwA0c=', // Spicy roasted chickpeas :contentReference[oaicite:2]{index=2}
  soldOut: true
},

{ name: 'Onion Pakoda', originalPrice: 80, discountPrice: 60, offer: '₹20 Off', img:'https://media.istockphoto.com/id/1499919451/photo/fried-onion-pakode-or-pyaj-ke-pakore-also-known-as-crispy-kanda-bhaji-bhajji-bujji-favorite.jpg?s=612x612&w=0&k=20&c=0jZB9xTUrcI1cL0Mb-Q6AYBNUjcRYRHUpi-hw5QpR3I=', soldOut: true },
{ name: 'Corn Puff Snack', originalPrice: 70, discountPrice: 55, offer: '₹15 Off', img: 'https://media.istockphoto.com/id/469003561/photo/puffed-spiced-corn.jpg?s=612x612&w=0&k=20&c=B4ElLLS7kOW42Sf_QqhrfN9QS-zyQcdklbxJPlrhQc0=', soldOut: true },
{ name: 'Spicy Cheese Balls', originalPrice: 120, discountPrice: 95, offer: '₹25 Off', img: 'https://media.istockphoto.com/id/1219017386/photo/jalape%C3%B1o-cheese-balls.jpg?s=612x612&w=0&k=20&c=EmOlKiGiKoWYQNLGpmFoVX-j2fqZXxwn1m10fnjzDxs=', soldOut: true }

  // Add more fruits as needed...
];

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

const FruitsPage = () => {
  const navigate = useNavigate();
  const {
    cartItems,
    addToCart,
    incrementQuantity,
    decrementQuantity
  } = useCart();
  const [showNotifyModal, setShowNotifyModal] = useState(false); // ✅ Add this here

  const getQuantity = (name) => {
    const item = cartItems.find(i => i.name === name);
    return item ? item.quantity : 0;
  };

  return (
    <div className="fruits-wrapper">
      <div className="fruits-container">
        {/* === Carousel Banner === */}
        <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={4000}>
          {bannerData.map((item, idx) => (
            <div key={idx} className="fruit-carousel-banner">
              <div className="fruit-offer-text">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
              <img src={item.img} alt="Banner" />
            </div>
          ))}
        </Carousel>

        {/* === Fruit Grid === */}
        <h2 className="fruit-section-title">Available Fruits</h2>
        <div className="fruit-card-grid">
          {fruits.map((fruit, index) => {
            const qty = getQuantity(fruit.name);

            return (
              <div key={index} className="fruit-card-box">
                {fruit.soldOut && <div className="sold-out-overlay">Sold out</div>}
                <img
                  src={fruit.img}
                  alt={fruit.name}
                  className={fruit.soldOut ? 'blurred' : ''}
                />
                <h3>{fruit.name}</h3>
                <p className="fruit-price">
                  {fruit.originalPrice !== fruit.discountPrice && (
                    <span className="fruit-original">₹{fruit.originalPrice}</span>
                  )}
                  <span className="fruit-discount">₹{fruit.discountPrice}</span>
                </p>
                {fruit.offer && <p className="fruit-offer">{fruit.offer}</p>}

                {fruit.soldOut ? (
                  <button className="notify-btn" onClick={() => setShowNotifyModal(true)}>
                    🔔 Notify
                  </button>
                ) : qty > 0 ? (
                  <div className="quantity-controls">
                    <button onClick={() => decrementQuantity(fruit.name)}><FaMinus /></button>
                    <span>{qty}</span>
                    <button onClick={() => incrementQuantity(fruit.name)}><FaPlus /></button>
                  </div>
                ) : (
                  <button className="fruit-add-btn" onClick={() => addToCart(fruit)}>
                    <FaCartPlus /> Add
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {showNotifyModal && <NotifyModal onClose={() => setShowNotifyModal(false)} />}
    </div>
  );
};

export default FruitsPage;