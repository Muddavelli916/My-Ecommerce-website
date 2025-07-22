import { useState } from 'react';
import Carousel from 'react-multi-carousel';
import { FaCartPlus } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';
import 'react-multi-carousel/lib/styles.css';
import './MilkProductsPage.css';
import NotifyModal from '../NotifyModal'; // adjust path if needed


const bannerData = [
  {
    title: 'Fresh Dairy Delivered',
    description: 'Get your daily milk, butter, and ghee at your doorstep!',
    img: 'https://t3.ftcdn.net/jpg/02/01/35/10/240_F_201351071_PK6sm94UdDuBSwsCYcsLkcKRXwzZK7qZ.jpg'
  },
  {
    title: 'Pure Desi Ghee',
    description: 'Traditional and homemade – now at 20% off',
    img: 'https://t3.ftcdn.net/jpg/11/44/57/92/240_F_1144579279_K4jCFPQ26CEjahGOp5qDWMT7HT4C7N62.jpg'
  },
 {
    title: 'Paneer Perfection',
    description: 'Soft & creamy – perfect for curries, snacks & more!',
    img: 'https://t3.ftcdn.net/jpg/08/53/02/30/240_F_853023014_fwAHbnsw34TLrgJbyQeeFBA9YvcCMS8k.jpg'
  },
];

const milkProducts = [
  { name: 'Cow Milk (1L)', originalPrice: 60, discountPrice: 50, offer: '₹10 Off', img: 'https://media.istockphoto.com/id/2189089226/photo/three-whole-milk-cartons-blue-and-green-packaging-grazing-cows-clean-design-purple-background.jpg?s=612x612&w=0&k=20&c=rqphBF7Gde7ysRDvzz_5wg-cyQumtPIyCs_a9eIhjWU=', soldOut: false },
  { name: 'Toned Milk (500ml)', originalPrice: 30, discountPrice: 25, offer: '₹5 Off', img: 'https://t3.ftcdn.net/jpg/11/60/63/52/240_F_1160635297_fqLSFdmZxuCIn3aAXYMr5hIK9XFqR9it.jpg', soldOut: false },
  { name: 'Butter (500g)', originalPrice: 220, discountPrice: 200, offer: '₹20 Off', img: 'https://t3.ftcdn.net/jpg/15/52/36/60/240_F_1552366081_G1EK54IIXL4ZuA5qaPmhQ3m4H6Q1y2Ww.jpg', soldOut: false },
  
  { name: 'Ghee(500ml)', originalPrice: 400, discountPrice: 360, offer: '₹40 Off', img: 'https://t4.ftcdn.net/jpg/01/75/23/25/240_F_175232535_7zTq2HsUthmHYQ0JjdS8zaSiAoWmy1Yv.jpg', soldOut: false },
  { name: 'Cow Ghee', originalPrice: 440, discountPrice: 400, offer: '₹40 Off', img: 'https://t3.ftcdn.net/jpg/06/04/35/36/240_F_604353630_RRF9ZpVOiDrjSai7VQWddsNsgTmtaMY0.jpg', soldOut: false },
  { name: 'Curd (1Kg)', originalPrice: 70, discountPrice: 60, offer: '₹10 Off', img: 'https://media.istockphoto.com/id/165700150/photo/just-opened-box-cream-cheese-isolated-on-white.jpg?s=612x612&w=0&k=20&c=vD54eUo7twuPCd0fdtV9AnYuml_i12ehEwccvU1SlZw=', soldOut: false },
  { name: 'Paneer (250g)', originalPrice: 90, discountPrice: 75, offer: '₹15 Off', img: 'https://media.istockphoto.com/id/2184529359/photo/indian-paneer-cheese-made-from-fresh-milk-and-lemon-juice-cut-into-cubes-on-grey-background.jpg?s=612x612&w=0&k=20&c=y1eJU1KBSFpEiYk2O8rbzBKxjlEDV5IWu47CG4TvkWI=', soldOut: false },
  { name: 'Fresh Cream (250ml)', originalPrice: 90, discountPrice: 75, offer: '₹15 Off', img: 'https://t3.ftcdn.net/jpg/02/53/96/08/240_F_253960817_dpWv9VmIx10mPRRsEO3ElNM1xoOUQGet.jpg', soldOut: false },
  { name: 'Buffalo Milk (1L)', originalPrice: 65, discountPrice: 55, offer: '₹10 Off', img: 'https://t3.ftcdn.net/jpg/15/56/11/52/240_F_1556115242_HOEhfFydJZxUiSk0hv9PXth3KScEYcVv.jpg', soldOut: false },
  {
    name: 'Milk Powder Pouch (500g)',
    originalPrice: 210,
    discountPrice: 190,
    offer: '₹20 Off',
    img: 'https://media.istockphoto.com/id/1351395943/photo/baby-milk-powder-in-a-container-on-blue-background.jpg?s=612x612&w=0&k=20&c=awHGbu-oW-HKN0iKUzl6P2p8dLdnh4og5T38ef6t2R0=',
    soldOut: false
  },
  {
  name: 'Flavored Milk - Badam (200ml)',
  originalPrice: 35,
  discountPrice: 30,
  offer: '₹5 Off',
  img: 'https://media.istockphoto.com/id/1404811559/photo/badam-milk-with-pistachios.jpg?s=612x612&w=0&k=20&c=X9xh5zofCK6zUHEAjCEipO4JX0vPGWbTcsqBkBVmM-0=',
  soldOut: false
},
{
  name: 'Misti Doi (250ml)',
  originalPrice: 40,
  discountPrice: 35,
  offer: '₹5 Off',
  img: 'https://t3.ftcdn.net/jpg/04/29/95/00/240_F_429950009_vxAg3fnpldRZ4hgSY9M91NrEAKJG3yNp.jpg',
  soldOut: false
},

{
  name: 'Cheddar Cheese Block (200g)',
  originalPrice: 130,
  discountPrice: 115,
  offer: '₹15 Off',
  img: 'https://t3.ftcdn.net/jpg/14/73/15/56/240_F_1473155669_s4P2nJJ6gBfMlgEgrCZk8kqUYiGBmEof.jpg',
  soldOut: false
},
{
  name: 'Rasgulla Tin (1Kg)',
  originalPrice: 180,
  discountPrice: 160,
  offer: '₹20 Off',
  img: 'https://t4.ftcdn.net/jpg/13/34/77/69/240_F_1334776953_O4eVAAdn6BR3CKUeidFnt2nL8RyUZ9s8.jpg',
  soldOut: false
},
 {
    name: 'A2 Cow Milk (1L)',
    originalPrice: 75,
    discountPrice: 68,
    offer: '₹7 Off',
    img: 'https://t4.ftcdn.net/jpg/05/08/71/83/360_F_508718375_SpxUZmP4TLNpVa1e83QVc3mIwLR4aS96.jpg',
    soldOut: false
  },
{
  name: 'Kulfi Sticks (Pack of 4)',
  originalPrice: 100,
  discountPrice: 85,
  offer: '₹15 Off',
  img: 'https://t4.ftcdn.net/jpg/15/13/91/21/240_F_1513912120_CkePgxorhxivNKsYQKZhiGRyIX0kcnmk.jpg',
  soldOut: false
},

  { name: 'Lassi (200ml)', originalPrice: 25, discountPrice: 20, offer: '₹5 Off', img: 'https://t4.ftcdn.net/jpg/04/30/64/99/240_F_430649983_EGFu67eE6hwRZSsVBXRD6aI3D7a6ws51.jpg', soldOut: true },
  { name: 'Sweet Lassi (200ml)', originalPrice: 30, discountPrice: 25, offer: '₹5 Off', img: 'https://t3.ftcdn.net/jpg/15/71/39/84/240_F_1571398463_pmrIC2AtByCh4jmY1eerYg6XQEfttXEu.jpg', soldOut: true },
  { name: 'Buttermilk (200ml)', originalPrice: 20, discountPrice: 18, offer: '₹2 Off', img: 'https://t4.ftcdn.net/jpg/14/98/97/73/240_F_1498977314_GOKyNhXDBuiWgDaOFI8eRCWCXmVDHaok.jpg', soldOut: true },
  { name: 'Flavored Lassi (Strawberry)', originalPrice: 35, discountPrice: 30, offer: '₹5 Off', img: 'https://media.istockphoto.com/id/172457488/photo/vanilla-chocolate-and-strawberry-milkshakes-on-white.jpg?s=612x612&w=0&k=20&c=GHkxgZcd-yKwRI_HXgGMNqtTYHRKkptBmXhT4oNJKZs=', soldOut: true },
  { name: 'Cheese Block (200g)', originalPrice: 120, discountPrice: 110, offer: '₹10 Off', img: 'https://t4.ftcdn.net/jpg/12/96/24/15/240_F_1296241550_n4d1jcEnQ1SwTaBYLIZVTSgFERMdvB6R.jpg', soldOut: true},
  { name: 'Shrikhand (200g)', originalPrice: 45, discountPrice: 40, offer: '₹5 Off', img: 'https://t4.ftcdn.net/jpg/03/32/19/07/240_F_332190753_PIxXf39xS0HpwbOn7g2TkzE41aMABoEQ.jpg', soldOut: true },
  { name: 'Rabri (250ml)', originalPrice: 70, discountPrice: 60, offer: '₹10 Off', img: 'https://t4.ftcdn.net/jpg/15/63/74/21/240_F_1563742101_oi8ReCRNtoANQAd4zfqMRoabNe0BbGfY.jpg', soldOut: true },
  { name: 'Cheese (200ml)', originalPrice: 25, discountPrice: 20, offer: '₹5 Off', img: 'https://media.istockphoto.com/id/171577237/photo/diced-gruyere.jpg?s=612x612&w=0&k=20&c=kWbI9w06N7MvdRi3NU6Nl9CTkvmqrhMjRqBzWGJquPs=', soldOut: true }

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
    <div className="milk-wrapper">
      <div className="milk-container">
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
        <h2 className="milk-section-title">Dairy Essentials</h2>
        <div className="milk-card-grid">
          {milkProducts.map((product, index) => {
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
                <p className="milk-price">
                  {product.originalPrice !== product.discountPrice && (
                    <span className="milk-original">₹{product.originalPrice}</span>
                  )}
                  <span className="milk-discount">₹{product.discountPrice}</span>
                </p>
                {product.offer && <p className="milk-offer">{product.offer}</p>}

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
