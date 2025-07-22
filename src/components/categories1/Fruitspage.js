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
    title: 'Fresh Fruits Offer!',
    description: 'Get up to 30% off on seasonal fruits',
    img: 'https://media.istockphoto.com/id/2219779136/photo/huge-heap-of-ripe-organic-watermelons-at-market-stall-in-india-fresh-tropical-fruits-for-sale.jpg?s=1024x1024&w=is&k=20&c=CybnBhB3uW-uNQ3JOZLtikHP_7k7sHEHfrYMdMeVa0E='
  },
  {
    title: 'Tropical Delights',
    description: 'Mangoes, Bananas and more at best prices',
    img: 'https://media.istockphoto.com/id/1329178954/photo/fresh-fruits-abundance.jpg?s=612x612&w=0&k=20&c=Lutpk9tswbz2A0JGzPt9EcgIreDn69U8t-frCGZk7x4='
  },
  {
    title: 'Exotic Fruits',
    description: 'Kiwi, Dragon Fruit, Passion Fruit & Starfruit',
    img: 'https://plus.unsplash.com/premium_photo-1723449655620-8b34777d1a9f?w=600&auto=format&fit=crop&q=60'
  },
  {
    title: 'Grapes Galore',
    description: 'Green, Black, Red Grapes — fresh & juicy',
    img: 'https://media.istockphoto.com/id/909903696/photo/fresh-bunch-of-black-green-grapes.webp?a=1&b=1&s=612x612&w=0&k=20&c=E8zNOUcaP_xBSkiaQ9B6oriBG4ryFPvyyumRr-DMXrw='
  },
];
const fruits = [
  { name: 'Apples', originalPrice: 150, discountPrice: 120, offer: '₹30 Off', img: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6', soldOut: false },
  { name: 'Bananas', originalPrice: 50, discountPrice: 40, offer: '₹10 Off', img: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224', soldOut: false },
  { name: 'Mangos', originalPrice: 200, discountPrice: 170, offer: '₹30 Off', img: 'https://media.istockphoto.com/id/177352149/photo/close-up-of-mangoes-arranged-inorder-to-sell.jpg?s=612x612&w=0&k=20&c=8oDFed7qvwF02tNAmUuhukaEETUFoqClWg67qxwgHow=', soldOut: false },
  { name: 'Kiwi', originalPrice: 100, discountPrice: 75, offer: '₹25 Off', img: 'https://media.istockphoto.com/id/92185664/photo/kiwi-fruit.jpg?s=612x612&w=0&k=20&c=Ynu9IRac-ZPyIBMtqo3RIlqDJq53RPE3j3n7xMA3-UM=', soldOut: false },
  { name: 'Blackgrapes', originalPrice: 140, discountPrice: 110, offer: '₹30 Off', img: 'https://media.istockphoto.com/id/1078707914/photo/purple-grape.jpg?s=612x612&w=0&k=20&c=S5XCAfqfT2N1jZovJ2keJLwHf3LuqctyD_vnvCH5a4U=', soldOut: false },
  { name:'Pineapples', originalPrice: 100, discountPrice: 85, offer: '₹15 Off', img: 'https://images.unsplash.com/photo-1576380021180-4b60fb58e7ea', soldOut: false },
  { name: 'Watermelons', originalPrice: 70, discountPrice: 55, offer: '₹15 Off', img: 'https://media.istockphoto.com/id/157405770/photo/melon-wallpaper.jpg?s=612x612&w=0&k=20&c=Ino9EP0n7O1CPczzOTk2a2KuoNkLu8GNWavoOk6hw4Y=', soldOut: false },
  { name: 'Dragon Fruit', originalPrice: 180, discountPrice: 120, offer: '₹60 Off', img: 'https://media.istockphoto.com/id/1404193404/photo/dragon-fruit-that-has-been-cut-in-half-for-product-display-dragon-fruit-which-are-beautifully.jpg?s=612x612&w=0&k=20&c=-wqheJKtuEeMB37x7Rp08tchaXGKx9qN0LgMROBU3i8=', soldOut: false},
  { name: 'Plums', originalPrice: 110, discountPrice: 88, offer: '₹22 Off', img: 'https://media.istockphoto.com/id/1442931187/photo/beautiful-picture-of-flame-reddish-grapes-cultivated-in-nashik-maharashtra-india-also-called.jpg?s=612x612&w=0&k=20&c=1cFx0aDe_7hCYIm0R4f_hAT8yaXXok1WNv6FpwjjQwI=', soldOut: false },
  { name: 'Guava', originalPrice: 60, discountPrice: 45, offer: '₹15 Off', img: 'https://media.istockphoto.com/id/2153414266/photo/fresh-white-guava-organic-healthy-food-vegetarian-healthy-lifestyle-fruits-lime.jpg?s=612x612&w=0&k=20&c=WRE0c6hNshDjezgZeoNnuD9w8ShUeDz35Qm6nD1OM7o=', soldOut: false },
  { name: 'Strawberry', originalPrice: 160, discountPrice: 135, offer: '₹25 Off', img: 'https://media.istockphoto.com/id/184136023/photo/fresh-organic-strawberries.jpg?s=612x612&w=0&k=20&c=dxwHhhqGh3DPoy1f08_VOIHBS6SrKy0AZtROowKNk3o=', soldOut: false },
  { name: 'Blueberry', originalPrice: 200, discountPrice: 180, offer: '₹20 Off', img: 'https://media.istockphoto.com/id/692976718/photo/blueberry.jpg?s=612x612&w=0&k=20&c=4ctKFc-3ZgaW3J4C8T7SXfxWZLUOxXOf6fq_6q8pam8=', soldOut: false },
  { name: 'Peach', originalPrice: 140, discountPrice: 115, offer: '₹25 Off', img: 'https://media.istockphoto.com/id/466747975/photo/peaches.jpg?s=612x612&w=0&k=20&c=ZMtNQ40pIcgGAiXdTg7FyuJfqIuAivTyVxS0hfu1smE=', soldOut: false },
  { name: 'Pomegranate', originalPrice: 140, discountPrice: 120, offer: '₹20 Off', img: 'https://media.istockphoto.com/id/1210998321/photo/opened-pomegranate-display-in-a-market.jpg?s=612x612&w=0&k=20&c=SFN8zg52zkrwGD_Qed53DE7xvfOqwJpYos9t9LbOPcU=', soldOut: false },
  { name: 'Grapes', originalPrice: 100, discountPrice: 80, offer: '₹20 Off', img: 'https://media.istockphoto.com/id/1451736857/photo/grapes-bunch-cluster-tablegrapes-vine-fruit-food-angoor-vitis-vinifera-grape-closeup-view.jpg?s=612x612&w=0&k=20&c=OhEtC1GmcJ3Uo44apS5v6tEKkden8ALJelxP51iTYh0=', soldOut: false },
  { name: 'Orange', originalPrice: 80, discountPrice: 65, offer: '₹15 Off', img: 'https://media.istockphoto.com/id/482078328/photo/orange-background.jpg?s=612x612&w=0&k=20&c=A8DJm29nWNNadN1GhosubeWd5ddEzA7V3GRurmtGM88=', soldOut: false },  
 { name: 'Custard Apple (Sitaphal)', originalPrice: 100, discountPrice: 80, offer: '₹20 Off', img: 'https://media.istockphoto.com/id/2180945138/photo/custard-apple-fruit-bangkok-fresh-market.jpg?s=612x612&w=0&k=20&c=NzNdSyFTh6O5iKqODIM3S7ie40ZTyfmq4fSJmdPtWk8=', soldOut: true },
 { name: 'Sapota (Chikoo)', originalPrice: 95, discountPrice: 78, offer: '₹17 Off', img: 'https://media.istockphoto.com/id/1403634773/photo/mamey-sapota-fruit-whole-and-sliced-on-display-at-a-market-in-oaxaca-mexico.jpg?s=612x612&w=0&k=20&c=RFu2ZCVq7nJkLptw_yzNphulehssxrJwPWUVji5hL1U=', soldOut: true },

 { name: 'Green Apples', originalPrice: 85, discountPrice: 68, offer: '₹17 Off', img: 'https://media.istockphoto.com/id/478157668/photo/apple-background.jpg?s=612x612&w=0&k=20&c=_tkw1vIA9YzzpOFaUE7Al_gxAOj3AkhXsZ5VnGTY94U=', soldOut: true },
 { name: 'Red Globe Grapes', originalPrice: 95, discountPrice: 76, offer: '₹19 Off', img: 'https://media.istockphoto.com/id/836065280/photo/red-wine-grapes-background-dark-grapes-blue-grapes-red-grape-cardinal-grape-emperor-grape.jpg?s=612x612&w=0&k=20&c=TVyJ9dtN442SwjWNEr126Zx_HGv8SoEx_9lrXohUtq0=', soldOut: true },
 { name: 'Avocado Premium', originalPrice: 250, discountPrice: 210, offer: '₹40 Off', img: 'https://media.istockphoto.com/id/1302223599/photo/avocado.jpg?s=612x612&w=0&k=20&c=Ha_PbChokYHxyL63NHkphTjWoktvmgv4_J6rrKkx4YY=', soldOut: true },
 { name: 'Jamun', originalPrice: 180, discountPrice: 160, offer: '₹20 Off', img: 'https://media.istockphoto.com/id/1173507695/photo/jambul-syzygium-cumini-or-black-plum-fruit-on-sale-pune-market.jpg?s=612x612&w=0&k=20&c=rBRqWGI4crKynGvbXvUK6_8oUWzdeMbszokd9P3w7LM=', soldOut: true },
 { name: 'Jack fruit', originalPrice: 130, discountPrice: 110, offer: '₹20 Off', img: 'https://media.istockphoto.com/id/483322887/photo/jackfruit-on-the-tree.jpg?s=612x612&w=0&k=20&c=KZQ_SwmC__5qb8UMrJq5NzxODkc_RtFAHsDopnxSF_4=', soldOut: true },
 { name: 'Figs (Anjeer)', originalPrice: 220, discountPrice: 198, offer: '₹22 Off', img: 'https://media.istockphoto.com/id/2208793300/photo/fresh-figs-with-green-leaves-on-a-white-background.jpg?s=612x612&w=0&k=20&c=jhNNps4D5fdiG2FvwijjClbuTwnBmhoUhT_EwoK3l-o=', soldOut: true },

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