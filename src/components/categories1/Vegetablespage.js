import React, { useState } from 'react'; // ✅ Fixed: useState included
import Carousel from 'react-multi-carousel';
import { FaCartPlus } from 'react-icons/fa';
import { useCart } from '../../context/CartContext'; // ✅ Correct path
import 'react-multi-carousel/lib/styles.css';
import './Vegetablespage.css';
import NotifyModal from '../NotifyModal'; // ✅ Adjust path if needed

const bannerData = [
  {
    title: 'Fresh Veggies Bonanza!',
    description: 'Up to 25% off on organic vegetables',
    img: 'https://media.istockphoto.com/id/1188859172/photo/colourful-bonanza.jpg?s=612x612&w=0&k=20&c=sU-BBxSKHH27Yoh-u_0gG8dpuO6rZVKLc1P8lW4TDcU='
  },
  {
    title: 'Leafy Greens Special',
    description: 'Spinach, Lettuce & More — Fresh & Healthy',
    img: 'https://media.istockphoto.com/id/1247073860/photo/healthy-fresh-organic-vegetables-in-a-crate-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=_28r5elxratu0UWnold2uA2RF0f3Atvkv_kQoDfqG5Y='
  },
  {
    title: 'Daily Essentials',
    description: 'Potatoes, Tomatoes, Onions at lowest prices',
    img: 'https://media.istockphoto.com/id/139496979/photo/assortment-of-fruits-and-vegetables-background.jpg?s=612x612&w=0&k=20&c=Tns4-67GV8LoJoN9YYwRM9PhpYKQ4kfbWg70_NJc9L8='
  },
];
const vegetables = [
  
  { name: 'Tomatoes', originalPrice: 40, discountPrice: 32, offer: '₹8 Off', img: 'https://media.istockphoto.com/id/171589415/photo/tomatoes.jpg?s=612x612&w=0&k=20&c=meLJRFAyGEM6zt6dkpW7uM0x2Wvwr3THCzTA5mFQgFI=', soldOut: false },
  { name: 'Potatoes', originalPrice: 30, discountPrice: 25, offer: '₹5 Off', img: 'https://media.istockphoto.com/id/116008750/photo/potatoes.jpg?s=612x612&w=0&k=20&c=zmm43nm6GcoFGp5-xyWBDTrt5Ik6xltzsP8eFYlB9mk=', soldOut: false },
  { name: 'Onions', originalPrice: 35, discountPrice: 28, offer: '₹7 Off', img: 'https://media.istockphoto.com/id/1135657897/photo/onions-at-vegetable-market.jpg?s=612x612&w=0&k=20&c=DfHLCpCFJp5mQSugDq8eFBLRqebIIYwGM0dGVzNoboA=', soldOut: false },
  { name: 'Spinach', originalPrice: 25, discountPrice: 20, offer: '₹5 Off', img: 'https://media.istockphoto.com/id/2189452125/photo/fresh-green-spinach.jpg?s=612x612&w=0&k=20&c=cx8JOe_l6MkpyrgzLtXstr_PYSbmqas4-vtol5w4Fxc=', soldOut: false },
  { name: 'Broccoli', originalPrice: 60, discountPrice: 50, offer: '₹10 Off', img: 'https://media.istockphoto.com/id/147060621/photo/broccoli.jpg?s=612x612&w=0&k=20&c=I1cCxLxci23nrSNZb7o6gsqUYB911z6IZlLdEOk4I9M=', soldOut: false },
  { name: 'Carrots', originalPrice: 45, discountPrice: 36, offer: '₹9 Off', img: 'https://media.istockphoto.com/id/185275579/photo/bundles-of-organic-carrots-with-the-stems-still-attached.jpg?s=612x612&w=0&k=20&c=OIdIDUtDF9jxpCFnZlb7ld5tOj8pDMol1XIcfsHFlEk=', soldOut: false },
  { name: 'Cauliflower', originalPrice: 50, discountPrice: 42, offer: '₹8 Off', img: 'https://media.istockphoto.com/id/182240577/photo/bin-of-cauliflower-heads.jpg?s=612x612&w=0&k=20&c=56ItH6q1eKSHYrSVSyTGfiO7zrLn2uJkwdj3-aNqFd8=', soldOut: false },
  { name: 'Cabbage', originalPrice: 40, discountPrice: 32, offer: '₹8 Off', img: 'https://media.istockphoto.com/id/1163232979/photo/fresh-cabbage-sold-in-the-market-vegetable-natural-background.jpg?s=612x612&w=0&k=20&c=fWzdydlCX0YlII5P-qGIYL4iIGpEKXsv5Vw6bKGiwuU=', soldOut: false },
  { name: 'Green Beans', originalPrice: 60, discountPrice: 48, offer: '₹12 Off', img: 'https://media.istockphoto.com/id/873260124/photo/bunch-of-green-beans.jpg?s=612x612&w=0&k=20&c=72XU-QmtXKsl2A0STsGFBICHaLuUG-OeeGJ98t1nNjw=', soldOut: false },
  { name: 'Lettuce', originalPrice: 55, discountPrice: 44, offer: '₹11 Off', img: 'https://media.istockphoto.com/id/641753716/photo/organic-vegetables-garden.jpg?s=612x612&w=0&k=20&c=lvCdViLBuT1Z1XI5a3F213hucwrJN5t1j-yI1tNH204=', soldOut: false },
  { name: 'Sweet Corn', originalPrice: 40, discountPrice: 35, offer: '₹5 Off', img: 'https://media.istockphoto.com/id/1336478021/photo/raw-corn-cobs-sweet-corn-harvest-corncobs-with-leaves-and-husk-on-dark-wooden-table-maize.jpg?s=612x612&w=0&k=20&c=Sip8-fwXoel-eWqogn3Hf0griqPXuusBkltJw7MNq_M=', soldOut: false },
  { name: 'Mushrooms', originalPrice: 70, discountPrice: 60, offer: '₹10 Off', img: 'https://media.istockphoto.com/id/1210040655/photo/shiitake-mushroom-on-wooden-table.jpg?s=612x612&w=0&k=20&c=Bf6Zy95HHfqpgcAQ_SRXoIlmu1s3kLjuPpDY4yWCK_o=', soldOut: false },
  { name: 'Bell Peppers', originalPrice: 90, discountPrice: 75, offer: '₹15 Off', img: 'https://media.istockphoto.com/id/137350104/photo/green-peppers.jpg?s=612x612&w=0&k=20&c=2Da2KdNelBjwbyKZwAIp11HrU0OBZg849nfSbx_eL4w=', soldOut: false },
  { name: 'Beetroot', originalPrice: 35, discountPrice: 30, offer: '₹5 Off', img: 'https://media.istockphoto.com/id/182837809/photo/beetroot.jpg?s=612x612&w=0&k=20&c=gRxv06cOeN4AjF3G9RVPLevPDpomSgetLN5PdU2hF70=', soldOut: false },
  { name: 'Zucchini', originalPrice: 65, discountPrice: 55, offer: '₹10 Off', img: 'https://media.istockphoto.com/id/873254306/photo/organic-zucchini.jpg?s=612x612&w=0&k=20&c=XCmxDFD3lWGoQtG3sGKAFqTjsQ34flq9p2d1DiBF3KA=', soldOut: false },
  { name: 'Bottle Gourd', originalPrice: 30, discountPrice: 24, offer: '₹6 Off', img: 'https://media.istockphoto.com/id/1194258667/photo/bottle-gourd-for-sale-in-market.jpg?s=612x612&w=0&k=20&c=sNSrJ3u5V4Q83pctJnz4qBNw751nxw5tE2d57RNv_Hs=', soldOut: false },
  { name: 'Brinjal (Eggplant)', originalPrice: 40, discountPrice: 33, offer: '₹7 Off', img: 'https://media.istockphoto.com/id/865271826/photo/raw-ripe-eggplant-display-at-vegetable-stall.jpg?s=612x612&w=0&k=20&c=ornq52DBAgslGActK1I-w5ESE-fAIx7xR3RA-ksbk8U=', soldOut: false },
  { name: 'Coriander', originalPrice: 20, discountPrice: 15, offer: '₹5 Off', img: 'https://media.istockphoto.com/id/2191020352/photo/a-close-up-photo-of-a-bunch-of-fresh-cilantro-leaves-cilantro-is-bright-green-and-has.jpg?s=612x612&w=0&k=20&c=iy9yIq5QtXIBZAeUPg4azHBhAZSu8-HEWaGU_xrQibM=', soldOut: false },
  { name: 'Cucumber', originalPrice: 35, discountPrice: 28, offer: '₹7 Off', img: 'https://media.istockphoto.com/id/2163397975/photo/horizontal-image-of-fresh-kheera-or-desi-kheere-or-cucumber-salad-vegetable-heap-pile-at.jpg?s=612x612&w=0&k=20&c=zA4fl8PI2W-syGGQS-FAL4ZESraevAZlxn8C1OIH0vY=', soldOut: false },
  { name: 'Fenugreek Leaves', originalPrice: 25, discountPrice: 18, offer: '₹7 Off', img: 'https://media.istockphoto.com/id/1372304685/photo/bunch-of-fresh-green-fenugreek-vegetable-healthy-and-nutritious-for-sale-at-a-market-in-india.jpg?s=612x612&w=0&k=20&c=XFR7HjeJESwu4Oi9Ty_ORwlhKkb5a2VE5NE1Gzx-f30=', soldOut: false },
  { name: 'Radish', originalPrice: 30, discountPrice: 24, offer: '₹6 Off', img: 'https://media.istockphoto.com/id/949345916/photo/heap-of-white-radish-in-retail-vegetable-super-market-for-sale.jpg?s=612x612&w=0&k=20&c=aj-CRuKojFdVPC0yrGiDyJ25P52THSJ8G-O_xxXwQ1Q=', soldOut: true },
  { name: 'Drumsticks', originalPrice: 45, discountPrice: 38, offer: '₹7 Off', img: 'https://media.istockphoto.com/id/1256627637/photo/healthy-drumsticks-with-wooden-backrgound.jpg?s=612x612&w=0&k=20&c=tlD1tYcWJve-fexgQ01gRYhBbAWt272miQ8kVL1-g5s=', soldOut: true },
  { name: 'Raw Banana', originalPrice: 50, discountPrice: 42, offer: '₹8 Off', img: 'https://media.istockphoto.com/id/621839788/photo/red-bananas-sri-lanka.jpg?s=612x612&w=0&k=20&c=fmKy1jIjQG62F4U31oUAkMUqTFnrJVkmj09OtHiBJqk=', soldOut: true },
 { name: 'Snake Gourd', originalPrice: 40, discountPrice: 32, offer: '₹8 Off', img: 'https://media.istockphoto.com/id/1175880633/photo/pile-of-green-fresh-snake-gourd.jpg?s=612x612&w=0&k=20&c=gQ2YTqVHdDdHQQzheDcvJm7aMxTdg5kOSK_zeCkxQCo=', soldOut: true },
 { name: 'Ridge Gourd', originalPrice: 35, discountPrice: 29, offer: '₹6 Off', img: 'https://media.istockphoto.com/id/924389338/photo/close-up-of-fresh-ridge-gourd.jpg?s=612x612&w=0&k=20&c=GtC2Mk-QeVjmTOggaC-o3cEfNkGeq-qllcELPL190WE=', soldOut: true },
 { name: 'Spring Onions', originalPrice: 25, discountPrice: 20, offer: '₹5 Off', img: 'https://media.istockphoto.com/id/903099756/photo/fresh-vegetable-for-sale-on-market-in-india.jpg?s=612x612&w=0&k=20&c=UPwOXzB2Xu8eBIaT9H75XoE7Jo_YIXXdJKgQ4H4MCqQ=', soldOut: true },
 { name: 'Turnip', originalPrice: 38, discountPrice: 30, offer: '₹8 Off', img: 'https://media.istockphoto.com/id/2197803697/photo/fresh-organic-purple-and-white-turnips-healthy-vegetable-food-display-at-farmers-market-stall.jpg?s=612x612&w=0&k=20&c=5vGgozgKaqlHAwt8CP055WPHcpIj-2euEZcD_MkZQG4=', soldOut: true },
{ name: 'Parwal (Pointed Gourd)', originalPrice: 40, discountPrice: 30, offer: '₹10 Off', img: 'https://media.istockphoto.com/id/2197606440/photo/fresh-green-ivy-gourd-or-kundru-scattered-in-one-place-kundru-kudri-pile-in-vegetable-market.jpg?s=612x612&w=0&k=20&c=YqkZzdO-jRHQWtAmiVSfBwmFFFqDMevZeCiMGKZ19PU=', soldOut: true },


];

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

const VegetablesPage = () => {
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
    <div className="vegetables-wrapper">
      <div className="vegetables-container">
        {/* === Carousel Banner === */}
        <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={4000}>
          {bannerData.map((item, idx) => (
            <div key={idx} className="vegetable-carousel-banner">
              <div className="vegetable-offer-text">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
              <img src={item.img} alt="Banner" />
            </div>
          ))}
        </Carousel>

        {/* === Vegetable Grid === */}
        <h2 className="vegetable-section-title">Available Vegetables</h2>
        <div className="vegetable-card-grid">
          {vegetables.map((veg, index) => {
            const qty = getQuantity(veg.name);

            return (
              <div key={index} className="vegetable-card-box">
                {veg.soldOut && <div className="sold-out-overlay">Sold out</div>}
                <img
                  src={veg.img}
                  alt={veg.name}
                  className={veg.soldOut ? 'blurred' : ''}
                />
                <h3>{veg.name}</h3>
                <p className="vegetable-price">
                  {veg.originalPrice !== veg.discountPrice && (
                    <span className="vegetable-original">₹{veg.originalPrice}</span>
                  )}
                  <span className="vegetable-discount">₹{veg.discountPrice}</span>
                </p>
                {veg.offer && <p className="vegetable-offer">{veg.offer}</p>}

                {veg.soldOut ? (
                 <button className="notify-btn" onClick={() => setShowNotifyModal(true)}>
                                🔔 Notify
                     </button>
                ) : qty > 0 ? (
                  <div className="quantity-controls">
                    <button onClick={() => decrementQuantity(veg.name)}>-</button>
                    <span>{qty}</span>
                    <button onClick={() => incrementQuantity(veg.name)}>+</button>
                  </div>
                ) : (
                  <button className="vegetable-add-btn" onClick={() => addToCart(veg)}>
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

export default VegetablesPage;
