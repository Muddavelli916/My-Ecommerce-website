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
  title: 'Refreshing Beverages!',
  description: 'Juices, Smoothies, and Shakes up to 25% Off',
  img: 'https://media.istockphoto.com/id/124393872/photo/natural-flavored-beverages.jpg?s=612x612&w=0&k=20&c=YejprKPt85X8Gcq92uHYwZ5jpuXALOYZJ-ofmaxxBQY='
},
{
  title: 'Summer Coolers',
  description: 'Stay Hydrated with Lemonades, Mojitos, and Iced Teas',
  img: 'https://media.istockphoto.com/id/1359963051/photo/set-of-various-summer-refreshing-lemonades.jpg?s=612x612&w=0&k=20&c=pRDTnjQZl01GTSBA5Cf5FpjpmBV-cTBaUvg5qZb6XIg='
},
{
  title: 'Health Drinks Zone',
  description: 'Protein shakes, smoothies & energy drinks available now',
  img: 'https://media.istockphoto.com/id/1007786902/photo/sweet-smoothie-in-plastic-cups-on-wooden-table.jpg?s=612x612&w=0&k=20&c=YnOvaMp2PbxRQfSLqN5qTce22h6jTwzZnJMDwFvvpCU='
},
{
  title: 'Desi Delights',
  description: 'Chaas, Lassi, and Masala Soda at Great Prices!',
  img: 'https://media.istockphoto.com/id/1267065377/photo/white-pink-and-green-milkshakes-in-transparent-cups-with-a-straw.jpg?s=612x612&w=0&k=20&c=9cP1cYulS-Hu6abXXwnLsJoslMffEbewItC1q062YMQ='
}

];
const fruits = [
{ name: 'Green Tea', originalPrice: 90, discountPrice: 70, offer: '₹20 Off', img: 'https://media.istockphoto.com/id/172150389/photo/tea.jpg?s=612x612&w=0&k=20&c=h9pQk0SD2FKwDEbS049jU80iSf26HNZ3EjtJ3-aFUtw=', soldOut: false },
{ name: 'Sweet Lassi', originalPrice: 60, discountPrice: 48, offer: '₹12 Off', img: 'https://media.istockphoto.com/id/1142967833/photo/lassi_01.jpg?s=612x612&w=0&k=20&c=pRREsqy25JDaWI64QBh2YeUs83ZZGKmdvAvLBMuhVLY=', soldOut: false },
{ name: 'Sugarcane Juice', originalPrice: 50, discountPrice: 40, offer: '₹10 Off', img: 'https://media.istockphoto.com/id/1270733292/photo/sugar-cane-juice-with-pieces-in-glass-on-wooden-surface.jpg?s=612x612&w=0&k=20&c=zpMn1AwlZeWwZ0zIkHfO7tWW6rW9-WXaIDG1-kxu8zk=', soldOut: false },
{ name: 'Thandai', originalPrice: 120, discountPrice: 100, offer: '₹20 Off', img: 'https://media.istockphoto.com/id/1318179086/photo/rabdi-or-rabri-served-in-clay-pot-diwali-desserts.jpg?s=612x612&w=0&k=20&c=IJgAmvtIJBmVRPXxFqrCELvoeZKAXCh3BVmYE0FdYjU=', soldOut: false },
{ name: 'Aam Panna', originalPrice: 90, discountPrice: 72, offer: '₹18 Off', img: 'https://media.istockphoto.com/id/2159700133/photo/aam-panna.jpg?s=612x612&w=0&k=20&c=9g5MrBThsv2XMKsb6eJIxcJwqNmHFSemi1i6lCNOAdQ=', soldOut: false },
{
    name: 'Coconut Water',
    originalPrice: 50,
    discountPrice: 40,
    offer: '₹10 Off',
    img: 'https://media.istockphoto.com/id/637144244/photo/coconut-ripe-and-tasty-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=6A_d2Xix5qSYkuesCN0o6MQ1qm_W7rcuxl1V3SO_pjA=',
    soldOut: false
  },
{ name: 'Kokum Juice', originalPrice: 85, discountPrice: 68, offer: '₹17 Off', img: 'https://media.istockphoto.com/id/957263020/photo/kokum-sharbat-juice-or-sherbet-or-summer-coolant-drink-made-up-of-garcinia-indica-with-raw.jpg?s=612x612&w=0&k=20&c=UqpztLSf3s3ABsIbT95u2w9yHFYUv0MKerbv4xynRus=', soldOut: false },
{ name: 'Jeera Soda', originalPrice: 40, discountPrice: 32, offer: '₹8 Off', img: 'https://media.istockphoto.com/id/471751217/photo/jaljeera.jpg?s=612x612&w=0&k=20&c=1M25KgTL8s_8SvycdE2RBcta1zTUcW_mQEOfEaab3UM=', soldOut: false },
{ name: 'Mint Mojito', originalPrice: 100, discountPrice: 80, offer: '₹20 Off', img: 'https://media.istockphoto.com/id/1307546222/photo/mojito-cocktail-with-lime-and-mint.jpg?s=612x612&w=0&k=20&c=gHx_HqT6b_zREkORePVRJaDbibixhtjbO1rncgKUGOQ=', soldOut: false },
{ name: 'Chikoo Shake', originalPrice: 110, discountPrice: 90, offer: '₹20 Off', img: 'https://media.istockphoto.com/id/637555276/photo/yogurt-smoothie-in-a-glass-on-white-background.jpg?s=612x612&w=0&k=20&c=1OcPBnoBR3bmgVZhVUXiDBslyR82aYIXW7O25f5Fkto=', soldOut: false },
{ name: 'Falooda', originalPrice: 130, discountPrice: 105, offer: '₹25 Off', img: 'https://media.istockphoto.com/id/478387863/photo/light-vanilla-custard-cream-with-mixed-berries.jpg?s=612x612&w=0&k=20&c=2nhHIcTEUtoAkH2zQ2eIxlMc8HE2ylXC8CtHlS3KCHY=', soldOut: false },
{
    name: 'Chocolate Protein Shake',
    originalPrice: 120,
    discountPrice: 99,
    offer: '₹21 Off',
    img: 'https://media.istockphoto.com/id/170169137/photo/chocolate-milk-shake-smoothie-on-white-background.jpg?s=612x612&w=0&k=20&c=I6ruTBEdjDrlTwNgF5MUeTBMnd00xEF0OuSbbh_33gA=',
    soldOut: false
  },
  {
    name: 'Protein Smoothie',
    originalPrice: 120,
    discountPrice: 105,
    offer: '₹15 Off',
    img: 'https://media.istockphoto.com/id/1018364696/photo/banana-almond-smoothie-with-cinnamon-and-oat-flakes-and-coconut-milk-in-glass-jars.jpg?s=612x612&w=0&k=20&c=FefdMjOaJN-SIW43vUdriEFvHi4n8IOpoOm3wabOvQI=',
    soldOut: true
  },
   {
    name: 'Mango MilkShake',
    originalPrice: 70,
    discountPrice: 55,
    offer: '₹15 Off',
    img: 'https://media.istockphoto.com/id/1150000158/photo/close-up-of-mango-smoothie-in-a-bottle-with-straw-and-mango-slices-on-a-table.jpg?s=612x612&w=0&k=20&c=9pitYGvnwOWxR7UJrHmmZtr57cWF_lKbVVjUoGdU8HQ=',
    soldOut: true
  },
  {
    name: 'Jaljeera Drink',
    originalPrice: 50,
    discountPrice: 40,
    offer: '₹10 Off',
    img: 'https://media.istockphoto.com/id/1150386124/photo/herbal-detoxifying-drink-isolated-on-white-i-e-jeera-water-with-some-raw-organic-cumin-in-a.jpg?s=612x612&w=0&k=20&c=TO9uuRxXJy4f9mYbI3h68fYYql9XAWXKJOYa0fvT9Pc=',
    soldOut: true
  },
{
    name: 'Cold Coffee',
    originalPrice: 120,
    discountPrice: 99,
    offer: '₹21 Off',
    img: 'https://media.istockphoto.com/id/483831034/photo/mocha.jpg?s=612x612&w=0&k=20&c=2tviZmmazFmaaR-2fKU90Cq_1SHnJueVyFo2uFmd13g=',
    soldOut: true
  },
{
    name: 'Masala Chaas',
    originalPrice: 60,
    discountPrice: 45,
    offer: '₹15 Off',
    img: 'https://media.istockphoto.com/id/1223561137/photo/traditional-indian-drink-masala-tea-with-spices-cinnamon-cardamom-anise-sugar-cloves-pepper.jpg?s=612x612&w=0&k=20&c=bZVaCKOInPmROtxzYBcfw2HMXbQeGisM5w44ajBHiPE=',
    soldOut: true
  },
{ name: 'Lemonade', originalPrice: 60, discountPrice: 48, offer: '₹12 Off', img: 'https://media.istockphoto.com/id/1453360556/photo/cocktail-mojito-caipirinha-drink-at-tropical-swimming-pool.jpg?s=612x612&w=0&k=20&c=Esij-vopca_jpBA6thYgqRWVhzU90G4l3luEIH2WeSY=', soldOut: true },
{
    name: 'Strawberry Milkshake',
    originalPrice: 75,
    discountPrice: 63,
    offer: '₹12 Off',
    img: 'https://media.istockphoto.com/id/170128934/photo/strawberry-smoothie.jpg?s=612x612&w=0&k=20&c=tku_jV3kkkfHB3qlfzsIDlkKiGDh6ZWxGzti3p4Ml5E=',
    soldOut: true
  },
{
    name: 'Watermelon Juice',
    originalPrice: 70,
    discountPrice: 55,
    offer: '₹15 Off',
    img: 'https://media.istockphoto.com/id/1328115983/photo/fresh-watermelon-juice-prepared-at-home-its-good-to-keep-your-body-cool-from-the-summer-heat.jpg?s=612x612&w=0&k=20&c=GSvKUTBO5k0t6VLWQEu3gpqzJksCaNsBi9tP6eRognE=',
    soldOut: true
  },




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
        <h2 className="fruit-section-title">Available Beverages</h2>
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