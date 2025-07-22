import { useState } from 'react';

import Carousel from 'react-multi-carousel';
import { FaCartPlus } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';
import 'react-multi-carousel/lib/styles.css';
import './MeatProductsPage.css';
import NotifyModal from '../NotifyModal'; // ✅ Adjust path if needed

const bannerData = [
  {
    title: 'Fresh Cuts Daily',
    description: 'Order fresh chicken, mutton & fish – hygienically packed!',
    img: 'https://media.istockphoto.com/id/1326405707/photo/set-of-natural-food-high-in-protein-on-grey-background-top-view.jpg?s=612x612&w=0&k=20&c=YUi9fftqZxrgCzYcMT1rMTi3_Vt254nK6f7e4NgU6Ig='
  },
  {
  title: 'Egg-citing Deals!',
  description: 'Start your day sunny side up – fresh eggs at cracking prices!',
  img: 'https://media.istockphoto.com/id/1443223138/photo/full-frame-image-of-stacks-cardboard-egg-trays-containing-batches-of-white-chicken-eggs-focus.jpg?s=612x612&w=0&k=20&c=xROU6pIyN2JdiAPiC7jLiKB44Vf30c1cwmp2GGMERLA='
},

  {
    title: 'Seafood Specials',
    description: 'Fresh fish & prawns – from the coast to your plate!',
    img: 'https://media.istockphoto.com/id/1185677996/photo/group-of-raw-seafood-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=dS10THUgufhCZPdO1Kn5LOhtpc2ZSlHXKmI9SdfXpoQ='
  },
];


const meatProducts = [
  {
    name: 'Chicken Curry Cut (500g)',
    originalPrice: 160,
    discountPrice: 140,
    offer: '₹20 Off',
    img: 'https://media.istockphoto.com/id/1487436087/photo/chicken-thighs.jpg?s=612x612&w=0&k=20&c=xqPQekiZUxnL-vXGUJ9Hnc7JS2byhYYzWn8pvkMZfXo=',
    soldOut: false
  },
  {
    name: 'Mutton (500g)',
    originalPrice: 380,
    discountPrice: 350,
    offer: '₹30 Off',
    img: 'https://media.istockphoto.com/id/1323655255/photo/fresh-raw-uncooked-goat-meat-or-mutton-or-lamb-pieces-preparation-for-indian-mutton-curry.jpg?s=612x612&w=0&k=20&c=79lYIHJcKzKfNgzHxAxhvEcrk6WHdnHUXovw0vb0Xcs=',
    soldOut: false
  },
  {
    name: 'Fish Fillet (500g)',
    originalPrice: 300,
    discountPrice: 270,
    offer: '₹30 Off',
    img: 'https://media.istockphoto.com/id/2191903755/photo/pile-of-fresh-raw-fish-fillets-isolated-white.jpg?s=612x612&w=0&k=20&c=rMuEfoz3J9VpA3h0qQmMkDxWs3U1MyhFwL_aK_t5M0E=',
    soldOut: false
  },
  {
    name: 'Prawns (250g)',
    originalPrice: 240,
    discountPrice: 220,
    offer: '₹20 Off',
    img: 'https://media.istockphoto.com/id/2210565585/photo/uncooked-shrimps-for-sale-on-supermarket-flat-lay-or-top-view.jpg?s=612x612&w=0&k=20&c=zHMJEON93Jlmqu17zCto4NdHLeulRV0iPv6dayCJuqU=',
    soldOut: false
  },
 {
  name: 'Brown Eggs (12 pcs)',
  originalPrice: 95,
  discountPrice: 85,
  offer: '₹10 Off',
  img: 'https://media.istockphoto.com/id/2216018870/photo/carton-box-full-of-chicken-eggs-isolated-fresh-raw-eggs.jpg?s=612x612&w=0&k=20&c=q74lUPkbYKrffPpcoKGTv0T6b0EuEStExrUK3FUzX_I=',
  soldOut: false
},
{
  name: 'White Eggs (12 pcs)',
  originalPrice: 90,
  discountPrice: 80,
  offer: '₹10 Off',
  img: 'https://media.istockphoto.com/id/1342610247/photo/white-chicken-eggs-in-blue-tray-selective-focus.jpg?s=612x612&w=0&k=20&c=qHgWaacfConfje-V_K6ZJqs3Ca6x1nrSwaVCFzYv-SM=',
  soldOut: false
},

  {
  name: 'Smoked Turkey Breast Slices (200g)',
  originalPrice: 220,
  discountPrice: 200,
  offer: '₹20 Off',
  img: 'https://media.istockphoto.com/id/2168676821/photo/smoked-chicken-fillet-isolated-on-wooden-background.jpg?s=612x612&w=0&k=20&c=KwdN6rc2JTeElaP7FfRxWYZVIcY1VrDui8e2as72fAg=',
  soldOut: false
},
  {
  name: 'Turkey Mince (500g)',
  originalPrice: 340,
  discountPrice: 310,
  offer: '₹30 Off',
  img: 'https://media.istockphoto.com/id/1414219242/photo/raw-turkey-on-plastic-tray-isolated-on-white.jpg?s=612x612&w=0&k=20&c=zUvg1KjTfxwdwkQQEM9IZ0yeosLBlfUXaz6N2Cni2_c=',
  soldOut: false
},
  
  {
    name: 'Chicken Wings (1Kg)',
    originalPrice: 280,
    discountPrice: 250,
    offer: '₹30 Off',
    img: 'https://media.istockphoto.com/id/1130423940/photo/raw-chicken-wings.jpg?s=612x612&w=0&k=20&c=NAvfuaM_H6Ik0aBk2RW_cWvxCXSdBJTugLKOTsAWaNg=',
    soldOut: true
  },
  {
  name: 'Chicken Drumsticks (500g)',
  originalPrice: 160,
  discountPrice: 140,
  offer: '₹20 Off',
  img: 'https://media.istockphoto.com/id/1351966504/photo/raw-chicken-biriyani-cut-without-skin.jpg?s=612x612&w=0&k=20&c=FIn6KsAgXMBDUmwg57s4dUTHpXoEJ2vF01QJMzhOAsk=',
  soldOut: true
},
{
  name: 'Turkey Drumsticks (500g)',
  originalPrice: 320,
  discountPrice: 290,
  offer: '₹30 Off',
  img: 'https://media.istockphoto.com/id/685772924/photo/barbecue-smoked-turkey-leg.jpg?s=612x612&w=0&k=20&c=82_2B0tbn7xDvq5TgqpjYoFalTzBIJVC5tW9QxI8EVk=',
  soldOut: true
},
{
  name: 'Chicken Breast Boneless (500g)',
  originalPrice: 180,
  discountPrice: 165,
  offer: '₹15 Off',
  img: 'https://media.istockphoto.com/id/1287642849/photo/top-view-of-raw-chicken-fillet-chunks.jpg?s=612x612&w=0&k=20&c=ZE_XJSgfWCCw4UxIW5Yy3cnb3oZpZU0qe9mPn_ryzXw=',
  soldOut: true
},
{
  name: 'Fresh Prawns (Medium - 250g)',
  originalPrice: 220,
  discountPrice: 200,
  offer: '₹20 Off',
  img: 'https://media.istockphoto.com/id/636170476/photo/fresh-vannamei-shrimp-on-white-background.jpg?s=612x612&w=0&k=20&c=iqglU0zoTwFiNVYj601VIklEZZ0jUhUVtC03O76xW6A=',
  soldOut: true
},
{
  name: 'Fish Steaks (Rohu - 500g)',
  originalPrice: 260,
  discountPrice: 230,
  offer: '₹30 Off',
  img: 'https://media.istockphoto.com/id/1130564143/photo/falling-salmon-trout-steak-slice-of-fresh-raw-fish-isolated-on-white-background-clipping-path.jpg?s=612x612&w=0&k=20&c=pflQQZ8RmUMtDfiPPZWlYFzND1LH_iwCarFkCpLBI84=',
  soldOut: true
},
{
  name: 'Lamb Chops (400g)',
  originalPrice: 350,
  discountPrice: 320,
  offer: '₹30 Off',
  img: 'https://media.istockphoto.com/id/1221725371/photo/flat-layout-of-lamb-chops-pile-lying-on-the-ground.jpg?s=612x612&w=0&k=20&c=yaC98psYdp6c-AVogDDbiXAUFDbARbJz5NnOe0rzsIM=',
  soldOut: true
},
{
  name: 'Marinated Chicken Tikka (250g)',
  originalPrice: 150,
  discountPrice: 135,
  offer: '₹15 Off',
  img: 'https://media.istockphoto.com/id/1287642849/photo/top-view-of-raw-chicken-fillet-chunks.jpg?s=612x612&w=0&k=20&c=ZE_XJSgfWCCw4UxIW5Yy3cnb3oZpZU0qe9mPn_ryzXw=',
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
    <div className="meat-wrapper">
      <div className="meat-container">
        {/* === Carousel Banner === */}
        <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={4000}>
          {bannerData.map((item, idx) => (
            <div key={idx} className="milk-carousel-banner">
              <div className="milk-offer-text">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
              <img src={item.img} alt="Milk Banner" />
            </div>
          ))}
        </Carousel>

        {/* === Milk Products Grid === */}
        <h2 className="meat-section-title"> Meat Essentials</h2>
        <div className="meat-card-grid">
          {meatProducts.map((product, index) => {
            const qty = getQuantity(product.name);

            return (
              <div key={index} className="milk-card-box">
                {product.soldOut && <div className="sold-out-overlay">Sold out</div>}
                <img
                  src={product.img}
                  alt={product.name}
                  className={product.soldOut ? 'blurred' : ''}
                />
                <h3>{product.name}</h3>
                <p className="meat-price">
                  {product.originalPrice !== product.discountPrice && (
                    <span className="meat-original">₹{product.originalPrice}</span>
                  )}
                  <span className="meat-discount">₹{product.discountPrice}</span>
                </p>
                {product.offer && <p className="meat-offer">{product.offer}</p>}

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
