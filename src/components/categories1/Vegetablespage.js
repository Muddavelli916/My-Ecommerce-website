import React, { useState } from 'react'; // ✅ Fixed: useState included
import Carousel from 'react-multi-carousel';
import { FaCartPlus, FaStar, FaHeart, FaBoxes } from 'react-icons/fa'; // <-- Added FaBoxes
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
export const vegetables = [
  {
    name: 'Tomatoes',
    description: 'Fresh and juicy red tomatoes.',
    originalPrice: 40,
    discountPrice: 32,
    offer: '₹8 Off',
    img: 'https://media.istockphoto.com/id/171589415/photo/tomatoes.jpg?s=612x612&w=0&k=20&c=meLJRFAyGEM6zt6dkpW7uM0x2Wvwr3THCzTA5mFQgFI=',
    rating: 4.2,
    reviews: 1921,
    stock: 120, 
    unit:'kg',
    soldOut: false
  },
  {
    name: 'Broccoli',
    description: 'Crunchy and fresh broccoli perfect for salads.',
    originalPrice: 60,
    discountPrice: 50,
    offer: '₹10 Off',
    img: 'https://media.istockphoto.com/id/147060621/photo/broccoli.jpg?s=612x612&w=0&k=20&c=I1cCxLxci23nrSNZb7o6gsqUYB911z6IZlLdEOk4I9M=',
    rating: 4.4,
    reviews: 105,
    stock: 14,
    soldOut: false
  },
  {
    name: 'Carrots',
    description: 'Sweet and crunchy organic carrots with stems.',
    originalPrice: 45,
    discountPrice: 36,
    offer: '₹9 Off',
    img: 'https://media.istockphoto.com/id/185275579/photo/bundles-of-organic-carrots-with-the-stems-still-attached.jpg?s=612x612&w=0&k=20&c=OIdIDUtDF9jxpCFnZlb7ld5tOj8pDMol1XIcfsHFlEk=',
    rating: 4.5,
    reviews: 130,
    stock: 20,
    soldOut: false
  },
  {
    name: 'Cauliflower',
    description: 'Farm-fresh cauliflower perfect for curries.',
    originalPrice: 50,
    discountPrice: 42,
    offer: '₹8 Off',
    img: 'https://media.istockphoto.com/id/182240577/photo/bin-of-cauliflower-heads.jpg?s=612x612&w=0&k=20&c=56ItH6q1eKSHYrSVSyTGfiO7zrLn2uJkwdj3-aNqFd8=',
    rating: 4.3,
    reviews: 110,
    stock: 18,
    soldOut: false
  },
  {
    name: 'Cabbage',
    description: 'Healthy green cabbage for salads and dishes.',
    originalPrice: 40,
    discountPrice: 32,
    offer: '₹8 Off',
    img: 'https://media.istockphoto.com/id/1163232979/photo/fresh-cabbage-sold-in-the-market-vegetable-natural-background.jpg?s=612x612&w=0&k=20&c=fWzdydlCX0YlII5P-qGIYL4iIGpEKXsv5Vw6bKGiwuU=',
    rating: 4.1,
    reviews: 88,
    stock: 22,
    soldOut: false
  },
  {
    name: 'Green Beans',
    description: 'Tender green beans freshly picked.',
    originalPrice: 60,
    discountPrice: 48,
    offer: '₹12 Off',
    img: 'https://media.istockphoto.com/id/873260124/photo/bunch-of-green-beans.jpg?s=612x612&w=0&k=20&c=72XU-QmtXKsl2A0STsGFBICHaLuUG-OeeGJ98t1nNjw=',
    rating: 4.5,
    reviews: 140,
    stock: 15,
    soldOut: false
  },
  {
    name: 'Lettuce',
    description: 'Crisp organic lettuce for salads.',
    originalPrice: 55,
    discountPrice: 44,
    offer: '₹11 Off',
    img: 'https://media.istockphoto.com/id/641753716/photo/organic-vegetables-garden.jpg?s=612x612&w=0&k=20&c=lvCdViLBuT1Z1XI5a3F213hucwrJN5t1j-yI1tNH204=',
    rating: 4.4,
    reviews: 76,
    stock: 10,
    soldOut: false
  },
  {
    name: 'Sweet Corn',
    description: 'Golden sweet corn cobs ready to cook.',
    originalPrice: 40,
    discountPrice: 35,
    offer: '₹5 Off',
    img: 'https://media.istockphoto.com/id/1336478021/photo/raw-corn-cobs-sweet-corn-harvest-corncobs-with-leaves-and-husk-on-dark-wooden-table-maize.jpg?s=612x612&w=0&k=20&c=Sip8-fwXoel-eWqogn3Hf0griqPXuusBkltJw7MNq_M=',
    rating: 4.3,
    reviews: 98,
    stock: 19,
    soldOut: false
  },
  {
    name: 'Mushrooms',
    description: 'Fresh shiitake mushrooms perfect for stir fry.',
    originalPrice: 70,
    discountPrice: 60,
    offer: '₹10 Off',
    img: 'https://media.istockphoto.com/id/1210040655/photo/shiitake-mushroom-on-wooden-table.jpg?s=612x612&w=0&k=20&c=Bf6Zy95HHfqpgcAQ_SRXoIlmu1s3kLjuPpDY4yWCK_o=',
    rating: 4.6,
    reviews: 152,
    stock: 12,
    soldOut: false
  },
  {
    name: 'Bell Peppers',
    description: 'Colorful and crunchy bell peppers.',
    originalPrice: 90,
    discountPrice: 75,
    offer: '₹15 Off',
    img: 'https://media.istockphoto.com/id/137350104/photo/green-peppers.jpg?s=612x612&w=0&k=20&c=2Da2KdNelBjwbyKZwAIp11HrU0OBZg849nfSbx_eL4w=',
    rating: 4.7,
    reviews: 160,
    stock: 17,
    soldOut: false
  },
  {
    name: 'Beetroot',
    description: 'Fresh beetroot packed with nutrients.',
    originalPrice: 35,
    discountPrice: 30,
    offer: '₹5 Off',
    img: 'https://media.istockphoto.com/id/182837809/photo/beetroot.jpg?s=612x612&w=0&k=20&c=gRxv06cOeN4AjF3G9RVPLevPDpomSgetLN5PdU2hF70=',
    rating: 4.1,
    reviews: 102,
    stock: 14,
    soldOut: false
  },
  {
    name: 'Zucchini',
    description: 'Tender green zucchini, great for cooking.',
    originalPrice: 65,
    discountPrice: 55,
    offer: '₹10 Off',
    img: 'https://media.istockphoto.com/id/873254306/photo/organic-zucchini.jpg?s=612x612&w=0&k=20&c=XCmxDFD3lWGoQtG3sGKAFqTjsQ34flq9p2d1DiBF3KA=',
    rating: 4.4,
    reviews: 112,
    stock: 16,
    soldOut: false
  },
  {
    name: 'Bottle Gourd',
    description: 'Nutritious bottle gourd, good for curries.',
    originalPrice: 30,
    discountPrice: 24,
    offer: '₹6 Off',
    img: 'https://media.istockphoto.com/id/1194258667/photo/bottle-gourd-for-sale-in-market.jpg?s=612x612&w=0&k=20&c=sNSrJ3u5V4Q83pctJnz4qBNw751nxw5tE2d57RNv_Hs=',
    rating: 4.0,
    reviews: 84,
    stock: 10,
    soldOut: true
  },
  {
    name: 'Brinjal (Eggplant)',
    description: 'Fresh purple brinjals, perfect for bharwa.',
    originalPrice: 40,
    discountPrice: 33,
    offer: '₹7 Off',
    img: 'https://media.istockphoto.com/id/865271826/photo/raw-ripe-eggplant-display-at-vegetable-stall.jpg?s=612x612&w=0&k=20&c=ornq52DBAgslGActK1I-w5ESE-fAIx7xR3RA-ksbk8U=',
    rating:  4.1,
    reviews: 95,
    stock: 13,
    soldOut: true
  },
  // ⛔ Sold out items
  {
    name: 'Radish',
    description: 'White radish, perfect for parathas.',
    originalPrice: 30,
    discountPrice: 24,
    offer: '₹6 Off',
    img: 'https://media.istockphoto.com/id/949345916/photo/heap-of-white-radish-in-retail-vegetable-super-market-for-sale.jpg?s=612x612&w=0&k=20&c=aj-CRuKojFdVPC0yrGiDyJ25P52THSJ8G-O_xxXwQ1Q=',
    rating: 4.0,
    reviews: 88,
    stock: 0,
    soldOut: true
  },
  {
    name: 'Drumsticks',
    description: 'Rich in iron and fiber. Great in sambhar.',
    originalPrice: 45,
    discountPrice: 38,
    offer: '₹7 Off',
    img: 'https://media.istockphoto.com/id/1256627637/photo/healthy-drumsticks-with-wooden-backrgound.jpg?s=612x612&w=0&k=20&c=tlD1tYcWJve-fexgQ01gRYhBbAWt272miQ8kVL1-g5s=',
    rating: 4.3,
    reviews: 65,
    stock: 0,
    soldOut: true
  },
  // ...and so on for all the other soldOut vegetables
 {
    name: 'Green Peas',
    description: 'Fresh green peas full of flavor and nutrition.',
    originalPrice: 55,
    discountPrice: 44,
    offer: '₹11 Off',
    img: 'https://media.istockphoto.com/id/183546620/photo/fresh-green-pea.jpg?s=612x612&w=0&k=20&c=2IeS2eiYvsNldh7ap7heZfrrV96RqnNu52dxJ4HXkC4=',
    rating: 4.1,
    reviews: 1043,
    stock: 0,
    soldOut: true
  },
  {
    name: 'Beetroot',
    description: 'Organic beetroot rich in iron and antioxidants.',
    originalPrice: 40,
    discountPrice: 30,
    offer: '₹10 Off',
    img: 'https://media.istockphoto.com/id/182837809/photo/beetroot.jpg?s=612x612&w=0&k=20&c=gRxv06cOeN4AjF3G9RVPLevPDpomSgetLN5PdU2hF70=',
    rating: 4.3,
    reviews: 856,
    stock: 0,
    soldOut: true
  },
  {
    name: 'Cauliflower',
    description: 'Farm-fresh cauliflower ideal for curries and stir-fry.',
    originalPrice: 35,
    discountPrice: 27,
    offer: '₹8 Off',
    img: 'https://media.istockphoto.com/id/182240577/photo/bin-of-cauliflower-heads.jpg?s=612x612&w=0&k=20&c=56ItH6q1eKSHYrSVSyTGfiO7zrLn2uJkwdj3-aNqFd8=',
    rating: 4.0,
    reviews: 689,
    stock: 0,
    soldOut: true
  },
  {
    name: 'Red Bell Pepper',
    description: 'Crisp and sweet red bell peppers full of Vitamin C.',
    originalPrice: 65,
    discountPrice: 52,
    offer: '₹13 Off',
    img: 'https://media.istockphoto.com/id/610957788/photo/red-bell-peppers.jpg?s=612x612&w=0&k=20&c=k8e_g1_z9eRSFZw2iJzXhWj0BWpBZqXCryh9X2J0Ou0=',
    rating: 4.5,
    reviews: 1123,
    stock: 0,
    soldOut: true
  },
  


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

  const [showNotifyModal, setShowNotifyModal] = useState(false);

  // 🔄 Local state for vegetables to manage stock
  const [veggieList, setVeggieList] = useState(vegetables);

  // 🧮 Get current quantity in cart
  const getQuantity = (name) => {
    const item = cartItems.find(i => i.name === name);
    return item ? item.quantity : 0;
  };

  // ➕ Handle Add to Cart with stock update
  const handleAddToCart = (veg) => {
    if (veg.stock > 0) {
      addToCart(veg);
      setVeggieList(prev =>
        prev.map(item =>
          item.name === veg.name
            ? {
                ...item,
                stock: item.stock - 1,
                soldOut: item.stock - 1 <= 0
              }
            : item
        )
      );
    }
  };

  // ➕ Increment quantity with stock check
  const handleIncrement = (veg) => {
    const currentItem = veggieList.find(v => v.name === veg.name);
    if (currentItem && currentItem.stock > 0) {
      incrementQuantity(veg.name);
      setVeggieList(prev =>
        prev.map(item =>
          item.name === veg.name
            ? {
                ...item,
                stock: item.stock - 1,
                soldOut: item.stock - 1 <= 0
              }
            : item
        )
      );
    }
  };

  // ➖ Decrement quantity and increase stock
  const handleDecrement = (veg) => {
    const currentQty = getQuantity(veg.name);
    if (currentQty > 0) {
      decrementQuantity(veg.name);
      setVeggieList(prev =>
        prev.map(item =>
          item.name === veg.name
            ? {
                ...item,
                stock: item.stock + 1,
                soldOut: false
              }
            : item
        )
      );
    }
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

        {/* === Section Title === */}
        <h2 className="vegetable-section-title">Available Vegetables</h2>

        {/* === Vegetable Cards Grid === */}
        <div className="vegetable-card-grid">
          {veggieList.map((veg, index) => {
            const qty = getQuantity(veg.name);

            return (
              <div key={index} className="vegetable-card-box">

                {/* Favorite Icon */}
                <div className="fav-icon"><FaHeart /></div>

                {/* Sold Out Overlay */}
                {veg.soldOut && <div className="sold-out-overlay">Sold Out</div>}

                {/* Image */}
                <img
                  src={veg.img}
                  alt={veg.name}
                  className={veg.soldOut ? 'blurred' : ''}
                />

                {/* Name */}
                <h3>{veg.name}</h3>

                {/* Stock */}
                {!veg.soldOut && (
                  <p className={`vegetable-stock ${veg.stock === 0 ? 'low' : ''}`}>
                    In Stock: {veg.stock}
                  </p>
                )}

                {/* Description */}
                {veg.description && (
                  <p className="vegetable-desc">{veg.description}</p>
                )}

                {/* Rating */}
                <div className="vegetable-rating">
                  <FaStar /> {veg.rating} ({veg.reviews})
                </div>

                {/* Price & Offer */}
                <div className="vegetable-price">
                  {veg.originalPrice !== veg.discountPrice && (
                    <span className="vegetable-original">₹{veg.originalPrice}</span>
                  )}
                  <span className="vegetable-discount">₹{veg.discountPrice}</span>
                </div>
                {veg.offer && <div className="vegetable-offer">{veg.offer}</div>}

                {/* Add / Quantity / Notify */}
                {veg.soldOut ? (
                  <button
                    className="notify-btn"
                    onClick={() => setShowNotifyModal(true)}
                  >
                    🔔 Notify
                  </button>
                ) : qty > 0 ? (
                  <div className="quantity-controls">
                    <button onClick={() => handleDecrement(veg)}>-</button>
                    <span>{qty}</span>
                    <button
                      onClick={() => handleIncrement(veg)}
                      disabled={veg.stock === 0}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    className="vegetable-add-btn"
                    onClick={() => handleAddToCart(veg)}
                    disabled={veg.stock === 0}
                  >
                    <FaCartPlus /> Add
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Notify Modal */}
        {showNotifyModal && (
          <NotifyModal onClose={() => setShowNotifyModal(false)} />
        )}
      </div>
    </div>
  );
};

export default VegetablesPage;