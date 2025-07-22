import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import { FaCartPlus } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';
import 'react-multi-carousel/lib/styles.css';
import './FrozenPage.css';
import NotifyModal from '../NotifyModal'; // adjust path if needed

const bannerData = [
  {
  title: 'Frozen Feasts Await!',
  description: 'Ready-to-heat meals, veggies & snacks – just store and serve!',
  img: 'https://media.istockphoto.com/id/1298530305/photo/mix-of-frozen-vegetables-and-mushrooms-in-plastic-storage-containers-stocks-of-meal-for-the.jpg?s=612x612&w=0&k=20&c=opOXuBT9JKQYHNvcOUm0gTFbHnepAAeFl4-8hyvAWMw='
},
{
  title: 'Chill Deals on Frozen Bites',
  description: 'Up to 40% off on fries, momos, nuggets, and more!',
  img: 'https://media.istockphoto.com/id/1443193919/photo/full-frame-image-of-momos-steamed-and-fried-indian-street-snack-food-disposable-cardboard.jpg?s=612x612&w=0&k=20&c=r-sPFIxDEbVSrbEXlpOODD_eqyAus7eQUslWPxcRSNk='
},
{
  title: 'Always Fresh, Always Frozen',
  description: 'Stock up on frozen peas, corn, and mixes that stay farm-fresh!',
  img: 'https://media.istockphoto.com/id/2209456809/photo/freezing-fresh-vegetables.jpg?s=612x612&w=0&k=20&c=RAEQzvUR6OulUXBaqWIF2N5bZ585QcmbrbFyZKHoliA='
},

];


const breadProducts = [
  {
  name: 'Frozen Green Peas (500g)',
  originalPrice: 80,
  discountPrice: 70,
  offer: '₹10 Off',
  img: 'https://media.istockphoto.com/id/1366739894/photo/frozen-green-peas-in-the-freezer.jpg?s=612x612&w=0&k=20&c=l1cvDLOAYsl_lyqS6ih9ubaqegjUA5v0VoSUAL87rrU=',
  soldOut: false
},
{
  name: 'Frozen French Fries (1kg)',
  originalPrice: 130,
  discountPrice: 115,
  offer: '₹15 Off',
  img: 'https://media.istockphoto.com/id/671770262/photo/frozen-french-fries.jpg?s=612x612&w=0&k=20&c=FRqAf1BcdN5AQwnafAX6VeHQsk8-X2QMblqMqtNZR8k=',
  soldOut: false
},
{
  name: 'Veggie Spring Rolls (Pack of 10)',
  originalPrice: 110,
  discountPrice: 98,
  offer: '₹12 Off',
  img: 'https://media.istockphoto.com/id/1463307526/video/a-deli-worker-put-a-packaged-tray-of-frozen-rolled-pancakes-into-a-pile-of-prepackaged.jpg?s=640x640&k=20&c=mkBbINYENs-r2IdvjSzhCqtWC5Rj1uxNARO7Mg4Sxw8=',
  soldOut: false
},
{
  name: 'Frozen Corn Kernels (500g)',
  originalPrice: 75,
  discountPrice: 65,
  offer: '₹10 Off',
  img: 'https://media.istockphoto.com/id/1073014988/video/frozen-sweet-corn.jpg?s=640x640&k=20&c=BXwUNBfYQsIjzEyUrW_4newH0azxgkmGGUmp4sJD-p8=',
  soldOut: false
},
{
  name: 'Frozen Chicken Nuggets (500g)',
  originalPrice: 160,
  discountPrice: 145,
  offer: '₹15 Off',
  img: 'https://media.istockphoto.com/id/2147708544/photo/packaging-nuggets-on-a-white-background.jpg?s=612x612&w=0&k=20&c=WnmSD4MecDdNJBQ7UqYMRgBQSDjZZnFnl7EFME8Um6U=',
  soldOut: false
},
{
  name: 'Frozen Paneer Tikka (250g)',
  originalPrice: 120,
  discountPrice: 108,
  offer: '₹12 Off',
  img: 'https://media.istockphoto.com/id/1366188094/photo/frozen-paneer-or-cottage-cheese-on-white-background-dairy-product-processed-food.jpg?s=612x612&w=0&k=20&c=LNl5uDBSa4UVkIlBEGRiJuE0AfeE6fQoB_LvACylgsM=',
  soldOut: false
},
{
  name: 'Frozen Mixed Veggies (1kg)',
  originalPrice: 140,
  discountPrice: 125,
  offer: '₹15 Off',
  img: 'https://media.istockphoto.com/id/475470981/photo/frozen-vegetables.jpg?s=612x612&w=0&k=20&c=LDohDG1eW26InpjyN_QHfS9EgpnvEOHS-p2wer7ss6o=',
  soldOut: false
},
{
  name: 'Frozen Momos (Veg, 12 pcs)',
  originalPrice: 150,
  discountPrice: 135,
  offer: '₹15 Off',
  img: 'https://media.istockphoto.com/id/1337930230/photo/frosted-gyoza-or-jiaozi.jpg?s=612x612&w=0&k=20&c=rhWA4t4TPw7xmUd5Ktnl-zPXgdEJuHf7HTotBE_fdOY=',
  soldOut: false
},
{
  name: 'Frozen Aloo Tikki (Pack of 6)',
  originalPrice: 110,
  discountPrice: 98,
  offer: '₹12 Off',
  img: 'https://media.istockphoto.com/id/2161570118/photo/tapai-or-fermented-cassava.jpg?s=612x612&w=0&k=20&c=ic8ka6BBJw9Hg6dxETkE6kt8uyqbZVTLb0MaiDHByF8=',
  soldOut: true
},
{
  name: 'Frozen Cheese Corn Balls (10 pcs)',
  originalPrice: 150,
  discountPrice: 135,
  offer: '₹15 Off',
  img: 'https://media.istockphoto.com/id/1265016199/photo/tasty-round-shaped-yellow-puffs.jpg?s=612x612&w=0&k=20&c=b6Xn8RqcmJLOsqgJSZQrnumRaiQpNWOR7-YnjSNce4U=',
  soldOut: true
},
{
  name: 'Frozen Malai Kofta (250g)',
  originalPrice: 140,
  discountPrice: 125,
  offer: '₹15 Off',
  img: 'https://media.istockphoto.com/id/1458108502/photo/malai-chomchom-indian-dessert.jpg?s=612x612&w=0&k=20&c=qUbjiIZ-pE6tChext38ZMiG_kPRsOzkUUfop91IFEp8=',
  soldOut: true
},
{
  name: 'Frozen Veg Cutlets (Pack of 8)',
  originalPrice: 95,
  discountPrice: 85,
  offer: '₹10 Off',
  img: 'https://media.istockphoto.com/id/1172551633/video/4k-croquette-is-a-breadcrumbed-fried-food-roll-containing-main-ingredients.jpg?s=640x640&k=20&c=z-1DCNQIfoqEPVvgTP50wOd6bQ6416T4sRYCASvXWt8=',
  soldOut: true
},
{
  name: 'Frozen Hakka Noodles (500g)',
  originalPrice: 105,
  discountPrice: 92,
  offer: '₹13 Off',
  img: 'https://media.istockphoto.com/id/854098670/photo/frozen-udon-noodle.jpg?s=612x612&w=0&k=20&c=XXSKcNsvutWqb_q3F90nd81RASnUW4Wuw8bVDUMEWn0=',
  soldOut: true
},
{
  name: 'Frozen Manchurian Balls (250g)',
  originalPrice: 120,
  discountPrice: 108,
  offer: '₹12 Off',
  img: 'https://media.istockphoto.com/id/2029576291/photo/angle-view-pack-of-raw-beef-balls.jpg?s=612x612&w=0&k=20&c=B59RJxFCkrH39BW7gR7_BpKHpgnCuq_jDATXsEPlfms=',
  soldOut: true
},
{
  name: 'Frozen Fish Fingers (400g)',
  originalPrice: 180,
  discountPrice: 160,
  offer: '₹20 Off',
  img: 'https://media.istockphoto.com/id/497530491/photo/frozen-bread-crumbed-fish-fingers-on-white.jpg?s=612x612&w=0&k=20&c=g98_9YLuWyoyl4VUkrUSPf8QDUUBvfK_TgV9Tbgbl4M=',
  soldOut: true
},
{
  name: 'Frozen Chicken Seekh Kebab (6 pcs)',
  originalPrice: 160,
  discountPrice: 145,
  offer: '₹15 Off',
  img: 'https://media.istockphoto.com/id/1393730169/photo/crispy-egg-rolls-with-seaweed.jpg?s=612x612&w=0&k=20&c=OzagSrvFnpvoQ3A4MTmkdnsUejVh2ch0cDda0Bm3ggQ=',
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
    <div className="frozen-wrapper">
      <div className="frozen-container">
        {/* === Carousel Banner === */}
        <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={4000}>
          {bannerData.map((item, idx) => (
            <div key={idx} className="frozen-carousel-banner">
              <div className="frozen-offer-text">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
              <img src={item.img} alt="Milk Banner" />
            </div>
          ))}
        </Carousel>

        {/* === Milk Products Grid === */}
        <h2 className="frozen-section-title"> Frozen Essentials</h2>
        <div className="frozen-card-grid">
          {breadProducts.map((product, index) => {
            const qty = getQuantity(product.name);

            return (
              <div key={index} className="frozen-card-box">
                {product.soldOut && <div className="sold-out-overlay">Sold out</div>}
                <img
                  src={product.img}
                  alt={product.name}
                  className={product.soldOut ? 'blurred' : ''}
                />
                <h3>{product.name}</h3>
                <p className="frozen-price">
                  {product.originalPrice !== product.discountPrice && (
                    <span className="frozen-original">₹{product.originalPrice}</span>
                  )}
                  <span className="frozen-discount">₹{product.discountPrice}</span>
                </p>
                {product.offer && <p className="frozen-offer">{product.offer}</p>}

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
                  <button className="milk-add-btn" onClick={() => addToCart(product)}>
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
