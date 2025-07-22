import { useState } from 'react';
import Carousel from 'react-multi-carousel';
import { FaCartPlus } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';
import 'react-multi-carousel/lib/styles.css';
import './StationaryPage.css';
import NotifyModal from '../NotifyModal'; // ✅ Adjust path if needed

const bannerData = [
  {
    title: 'Back-to-School Essentials',
    description: 'Notebooks, pens, geometry boxes & more – everything your child needs!',
    img: 'https://media.istockphoto.com/id/499695518/photo/school-and-office-accessories.jpg?s=612x612&w=0&k=20&c=WzaVtQqQjkEVnNAZn-cLe_8R-h7atfLstgZuIT_9Pjc='
  },
  {
    title: 'Premium Writing Tools',
    description: 'Shop top-quality pens, markers, and highlighters at discounted prices!',
    img: 'https://media.istockphoto.com/id/1162140865/vector/back-to-school-sale-banner-for-special-shopping-discount-offer-with-high-quality-3d.jpg?s=612x612&w=0&k=20&c=CUjDNFw_FCQSrcVeU5b-CF0ExB2iTiRXySyUJXMEXgA='
  },
  {
    title: 'Exam Time Toolkit',
    description: 'Scientific calculators, geometry boxes, pens & more for exams.',
    img: 'https://media.istockphoto.com/id/476136548/photo/back-to-school.jpg?s=612x612&w=0&k=20&c=oAYmUKFornfIpeyIoLJa8wF4BJgMesPwt2eqKLNfAy0='
  }
];

const milkProducts = [
  
  {
    name: 'Classmate Notebook (200 Pages)',
    originalPrice: 70,
    discountPrice: 60,
    offer: '₹10 Off',
    img: 'https://media.istockphoto.com/id/164901009/photo/stack-of-blank-hardcover-books-on-white-background.jpg?s=612x612&w=0&k=20&c=z_lAJ0J0bGViE6ROQccO1nBfoVfdrLki38Y-S2AYBaI=',
    soldOut: false
  },
  {
    name: 'Gel Pens (Pack of 5)',
    originalPrice: 100,
    discountPrice: 85,
    offer: '₹15 Off',
    img: 'https://media.istockphoto.com/id/1255329280/photo/colored-gel-pens-carousel-of-colored-pens-colored-gel-pen-tips.jpg?s=612x612&w=0&k=20&c=Nzr7VF6nj2Y8VNgnsskg-e5y4Gu07D1-tCoFWfPOZyc=',
    soldOut: false
  },
  {
    name: 'A4 Paper Sheets (500 Pack)',
    originalPrice: 320,
    discountPrice: 290,
    offer: '₹30 Off',
    img: 'https://media.istockphoto.com/id/945782756/photo/the-white-paper-on-the-wooden-table.jpg?s=612x612&w=0&k=20&c=zRNzhpHAP0kjZtRpw_kcw90RXyVzTpvodIUmpdSXsQY=',
    soldOut: false
  },
  {
    name: 'Geometry Box - Classmate',
    originalPrice: 150,
    discountPrice: 130,
    offer: '₹20 Off',
    img: 'https://media.istockphoto.com/id/1281191148/photo/geometry-box.jpg?s=612x612&w=0&k=20&c=358DjuP1aGPTzlmD1rBylTFAPN0pBMWA8C4QkUC0HUI=',
    soldOut: false
  },
  {
    name: 'Stapler Set with Pins',
    originalPrice: 110,
    discountPrice: 95,
    offer: '₹15 Off',
    img: 'https://media.istockphoto.com/id/1182640395/video/many-clips-for-a-stapler-on-a-wooden-table-stapler-with-a-bunch-of-paper-clips-on-the-table.jpg?s=640x640&k=20&c=QCRgEHexKLjCCKJcGaAuQD6Q6h71KvTlyoizy82Gjzo=',
    soldOut: false
  },
  {
    name: 'Sticky Notes (Multi-Color)',
    originalPrice: 60,
    discountPrice: 50,
    offer: '₹10 Off',
    img: 'https://media.istockphoto.com/id/471206670/photo/colorful-sticky-notes-seamless-background.jpg?s=612x612&w=0&k=20&c=TPsQyDJMkuNqnKanM7ooNT17u6NWowGt_4iLUakg2yo=',
    soldOut: false
  },
  {
    name: 'Drawing Book (40 Pages)',
    originalPrice: 45,
    discountPrice: 38,
    offer: '₹7 Off',
    img: 'https://media.istockphoto.com/id/682187304/photo/drawing-tools-stationary-workplace-of-artist.jpg?s=612x612&w=0&k=20&c=RT-y33rzOG4qUmhF4tOz5LF8MgMKIuahdME8faUIjm8=',
    soldOut: false
  },
  {
    name: 'Color Pencil Set (12 Shades)',
    originalPrice: 90,
    discountPrice: 75,
    offer: '₹15 Off',
    img: 'https://media.istockphoto.com/id/508191656/vector/twelve-colored-pencils.jpg?s=612x612&w=0&k=20&c=Z6xhmvOtM8z6kmc6g6JgBAk0eh018LgSTmNIMMi_560=',
    soldOut: false
  },
  {
    name: 'Highlighters (Pack of 3)',
    originalPrice: 75,
    discountPrice: 60,
    offer: '₹15 Off',
    img: 'https://media.istockphoto.com/id/533712162/vector/collection-of-colored-highlighters-with-markings.jpg?s=612x612&w=0&k=20&c=HXSearnnhmPHQ83Jc8sq7ArFJLGGGRiI0t1KK88XfB0=',
    soldOut: true
  },
  {
    name: 'Brown Cover Sheets (10 Pack)',
    originalPrice: 30,
    discountPrice: 25,
    offer: '₹5 Off',
    img: 'https://media.istockphoto.com/id/2207429970/vector/notebook-vector-set-design-back-to-school-notebook-element-isolated-for-student-tools.jpg?s=612x612&w=0&k=20&c=Au99t6ztO8s_jBIqT21VyLSBekMRYPIZV1G_8XQ0Lgo=',
    soldOut: true
  },
  {
    name: 'Desk Organizer',
    originalPrice: 240,
    discountPrice: 210,
    offer: '₹30 Off',
    img: 'https://media.istockphoto.com/id/2183846514/photo/wooden-pen-stand-with-clock-pen-and-pencil-holder-blank-template.jpg?s=612x612&w=0&k=20&c=1aAPrkFaMLR6DnB1xsyqa9AsAP29q-2ffsvvRieC0kY=',
    soldOut: true
  },
  {
    name: 'White Board Marker (Black)',
    originalPrice: 20,
    discountPrice: 18,
    offer: '₹2 Off',
    img: 'https://media.istockphoto.com/id/118813454/photo/markers.jpg?s=612x612&w=0&k=20&c=JKwacEPUM4aN2CaYiJ3GgmR49m7GUnzdML2CQAfcqBU=',
    soldOut: true
  },
  {
  name: 'Plastic Scale (30cm)',
  originalPrice: 15,
  discountPrice: 12,
  offer: '₹3 Off',
  img: 'https://media.istockphoto.com/id/1172276145/vector/set-of-15cm-and-30cm-measure-tape-ruler-school-metric-measurement-metric-ruler-vector.jpg?s=612x612&w=0&k=20&c=GozI-13q7W-_3bh5wygKaFeeeGNjMc5XnirI10qYNn4=',
  soldOut: true
},
{
  name: 'Sharpener (Dual Blade)',
  originalPrice: 20,
  discountPrice: 16,
  offer: '₹4 Off',
  img: 'https://media.istockphoto.com/id/1473402128/photo/twin-pencil-sharpener.jpg?s=612x612&w=0&k=20&c=3TZydtUYfp7yi9m2PHCZPn3K6mwAo-VlZwlMtlyH1P4=',
  soldOut: true
},

  {
  name: 'Compass with Pencil',
  originalPrice: 25,
  discountPrice: 20,
  offer: '₹5 Off',
  img: 'https://media.istockphoto.com/id/1331451475/photo/view-of-compasses-protractor-and-pencil-drawing-background.jpg?s=612x612&w=0&k=20&c=otMh6gy-0OKyxlWgbR-WIK2PWAhvCgFgw4YtVptDFME=',
  soldOut: true
},

  {
    name: 'Eraser (Dust Free)',
    originalPrice: 10,
    discountPrice: 8,
    offer: '₹2 Off',
    img: 'https://media.istockphoto.com/id/2147579671/photo/rubber-eraser-isolated-white-background-close-up.jpg?s=612x612&w=0&k=20&c=nkbvj81eY4pV-0_qN7jIv8qnTe0e02OSZXXPmQ5IrHg=',
    soldOut: true
  }


];


const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

const MilkProductsPage = () => {
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
    <div className="stationary-wrapper">
      <div className="stationary-container">
        {/* === Carousel Banner === */}
        <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={4000}>
          {bannerData.map((item, idx) => (
            <div key={idx} className="stationary-carousel-banner">
              <div className="stationary-offer-text">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
              <img src={item.img} alt="Milk Banner" />
            </div>
          ))}
        </Carousel>

        {/* === Milk Products Grid === */}
        <h2 className="stationary-section-title"> Stationary Essentials</h2>
        <div className="stationary-card-grid">
          {milkProducts.map((product, index) => {
            const qty = getQuantity(product.name);

            return (
              <div key={index} className="stationary-card-box">
                {product.soldOut && <div className="sold-out-overlay">Sold out</div>}
                <img
                  src={product.img}
                  alt={product.name}
                  className={product.soldOut ? 'blurred' : ''}
                />
                <h3>{product.name}</h3>
                <p className="milk-price">
                  {product.originalPrice !== product.discountPrice && (
                    <span className="stationary-original">₹{product.originalPrice}</span>
                  )}
                  <span className="stationary-discount">₹{product.discountPrice}</span>
                </p>
                {product.offer && <p className="stationary-offer">{product.offer}</p>}

                {product.soldOut ? (
                 <button className="notify-btn" onClick={() => setShowNotifyModal(true)}>
                                🔔 Notify
                     </button>
                ) : qty > 0 ? (
                  <div className="quantity-controls">
                    <button onClick={() => decrementQuantity(product.name)}>-</button>
                    <span>{qty}</span>
                    <button onClick={() => incrementQuantity(product.name)}>+</button>
                  </div>
                ) : (
                  <button className="stationary-add-btn" onClick={() => addToCart(product)}>
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

export default MilkProductsPage;
