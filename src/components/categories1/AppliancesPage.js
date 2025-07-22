import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import { FaCartPlus } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';
import 'react-multi-carousel/lib/styles.css';
import './AppliancesPage.css';
import NotifyModal from '../NotifyModal'; // adjust path if needed

const bannerData = [
  
 {
  title: 'Mega Appliance Fest!',
  description: 'ACs, TVs, Fridges, Grinders & more – up to 50% off storewide!',
  img: 'https://media.istockphoto.com/id/1174598609/photo/set-of-contemporary-house-appliances-isolated-on-white.jpg?s=612x612&w=0&k=20&c=bBMILbCpLkhIxbL7sAAXaFOaFaSXFCt80ccHgl7iiWM='
},
  {
    title: 'Power Up Your Home',
    description: 'LED lights, irons, geysers, and must-haves for modern living.',
    img: 'https://media.istockphoto.com/id/1324171754/photo/3d-render-of-a-white-electric-water-heater-digital-illustration-of-a-boiler-for-your-business.jpg?s=612x612&w=0&k=20&c=GqSeexvFaQH5wl5YNS5lOtGcMFWnRyBbe_u-GNMkYHg='
  },
  {
    title: 'Clean Smarter, Not Harder',
    description: 'Discover cordless vacuums, robotic cleaners, and more!',
    img: 'https://media.istockphoto.com/id/1134447191/photo/robot-vacuum-and-regular-vacuum-cleaner-next-to-each-other.jpg?s=612x612&w=0&k=20&c=DrVvWors_DUGgjVHtO3ASukgIb1FcRiJMOs_C3y_a9c='
  }

];


const breadProducts = [
 
  {
    name: 'Electric Kettle (1.5L)',
    originalPrice: 1200,
    discountPrice: 999,
    offer: '₹201 Off',
    img: 'https://media.istockphoto.com/id/1254254675/photo/stainless-electric-kettle-on-table.jpg?s=612x612&w=0&k=20&c=ti5mX6n6V3pbnmkGZ_7r36f5SgFgn7_hyEWppWWsadA=',
    soldOut: false
  },
  {
    name: 'Air Fryer (3.5L)',
    originalPrice: 4500,
    discountPrice: 3999,
    offer: '₹501 Off',
    img: 'https://media.istockphoto.com/id/1217653538/photo/roasted-chicken-in-the-hot-air-fryer-oven.jpg?s=612x612&w=0&k=20&c=t41J2Nb-XAXwKHIHvVj_-Od7Vw5bMWLuGfXgWVYXoxM=',
    soldOut: false
  },
  {
   name: 'Smart LED Bulb (Wi-Fi, 9W)',
  originalPrice: 699,
  discountPrice: 599,
  offer: '₹100 Off',
  img: 'https://media.istockphoto.com/id/2187803142/photo/led-ceiling-light-with-smart-remote-control-energy-saving.jpg?s=612x612&w=0&k=20&c=1p2cznZJyXUQmyShvV_TSbNwtCLCBtmPpVBUOuG0R8A=',
  soldOut: false
},
  {
  name: 'Digital Air Cooler (Remote Control)',
  originalPrice: 8500,
  discountPrice: 7999,
  offer: '₹501 Off',
  img: 'https://media.istockphoto.com/id/2146633902/photo/hand-holding-remote-control-in-front-of-the-air-conditioner.jpg?s=612x612&w=0&k=20&c=SCjP-IqVW0Tf6tC3f7IMAvvzoNQr6yrE50rYPBBrqpw=',
  soldOut: false
},

  {
    name: 'Mixer Grinder (500W, 3 Jars)',
    originalPrice: 2800,
    discountPrice: 2499,
    offer: '₹301 Off',
    img: 'https://media.istockphoto.com/id/500455458/photo/single-electric-blender-in-retail-store.jpg?s=612x612&w=0&k=20&c=VmsBTwitK6dqWJ59Y6sLnLe9KniNW97dOjOyKd6q0oQ=',
    soldOut: false
  },
  {
  name: 'Front Load Washing Machine (6kg, Inverter)',
  originalPrice: 28990,
  discountPrice: 25999,
  offer: '₹2991 Off',
  img: 'https://media.istockphoto.com/id/172485535/photo/washing-machine.jpg?s=612x612&w=0&k=20&c=heH0vH2hfuP7QLt4lGQvILj61sD5iuzs8sZk_izSazc=',
  soldOut: false
},
  {
    name: 'Juicer Mixer Grinder',
    originalPrice: 3500,
    discountPrice: 3199,
    offer: '₹301 Off',
    img: 'https://media.istockphoto.com/id/547245778/photo/single-electric-food-processor-in-retail-store.jpg?s=612x612&w=0&k=20&c=hwNjwaRRWXgkWerhqT1apPl48b3gec-72Zki1FkcVeM=',
    soldOut: false
  },
  {
    name: 'Rice Cooker (1.8L)',
    originalPrice: 2200,
    discountPrice: 1999,
    offer: '₹201 Off',
    img: 'https://media.istockphoto.com/id/187333822/photo/electric-rice-cooker.jpg?s=612x612&w=0&k=20&c=YdVeu8NorPE7YsiqXKW43NF-QPWhVZfkfFABcwmlotU=',
    soldOut: false
  },
  {
  name: 'Geyser (15L Storage, 5-Star)',
  originalPrice: 8900,
  discountPrice: 7999,
  offer: '₹901 Off',
  img: 'https://media.istockphoto.com/id/1324171754/photo/3d-render-of-a-white-electric-water-heater-digital-illustration-of-a-boiler-for-your-business.jpg?s=612x612&w=0&k=20&c=GqSeexvFaQH5wl5YNS5lOtGcMFWnRyBbe_u-GNMkYHg=',
  soldOut: false
},
  {
    name: 'TV',
    originalPrice: 1400,
    discountPrice: 1280,
    offer: '₹120 Off',
    img: 'https://media.istockphoto.com/id/1002728980/vector/wide-tv-monitor-mockup.jpg?s=612x612&w=0&k=20&c=1gDEH7ppC9ap8UBuIQmO1gM_Z8VeEaEUDDo-Aw_k8qs=',
    soldOut: false
  },
  {
  name: 'Single Door Fridge (190L, 3-Star)',
  originalPrice: 14500,
  discountPrice: 13499,
  offer: '₹1001 Off',
  img: 'https://media.istockphoto.com/id/1419096365/photo/modern-stainless-fridge-refrigerator-freezer-on-a-gray-background-mockup-layout-banner-3d.jpg?s=612x612&w=0&k=20&c=KtmB9mmkNM7xFqwr_5eezkbY2AbgQ1sRyXMACBtMSLQ=',
  soldOut: false
},
{
  name: 'Cordless Vacuum Cleaner (120W)',
  originalPrice: 6200,
  discountPrice: 5799,
  offer: '₹401 Off',
  img: 'https://media.istockphoto.com/id/1493017506/photo/handheld-vacuum-cleaner.jpg?s=612x612&w=0&k=20&c=919uVuOPs_DQrc3XQgoP1pKMOTde9J4Sq5637BKdfSw=',
  soldOut: false,
},

  {
    name: 'Waffle Maker',
    originalPrice: 2500,
    discountPrice: 2199,
    offer: '₹301 Off',
    img: 'https://media.istockphoto.com/id/2198892068/photo/close-up-of-the-process-of-making-belgian-waffles-in-a-waffle-iron-at-home-belgian-waffles-in.jpg?s=612x612&w=0&k=20&c=HBgTH13B47TUBzh-LtRhd9uBvM-YL5hR8UWM0miJQD8=',
    soldOut: true
  },
  {
    name: 'Roti Maker (Non-stick)',
    originalPrice: 1800,
    discountPrice: 1599,
    offer: '₹201 Off',
    img: 'https://media.istockphoto.com/id/1396253682/photo/kitchen-appliances-closed-black-waffle-maker-isolated-on-neutral-background.jpg?s=612x612&w=0&k=20&c=ycNiJTs6EXwGQeAG6kFOs8_k3iILhRUdR2y7F_GQJ9o=',
    soldOut: true
  },
  {
    name: 'Electric Egg Boiler (7 Eggs)',
    originalPrice: 1200,
    discountPrice: 1099,
    offer: '₹101 Off',
    img: 'https://media.istockphoto.com/id/500877492/photo/egg-cooker.jpg?s=612x612&w=0&k=20&c=OW9YU_g8zb_-dVvbaGWsBPA0gnIrgf0jKdnN0eGHqVU=',
    soldOut: true
  },
  {
    name: 'Mini Sandwich Maker',
    originalPrice: 1300,
    discountPrice: 1150,
    offer: '₹150 Off',
    img: 'https://media.istockphoto.com/id/1935085051/photo/decorative-portable-toaster-or-sandwich-pan-camping-on-white-background.jpg?s=612x612&w=0&k=20&c=TgMMLPwV4bYDz4vGvrny4GDBRhb_cd7hQZz8FLlCIgE=',
    soldOut: true
  },
  {
    name: 'Steam Iron (Non-stick Plate)',
    originalPrice: 1600,
    discountPrice: 1450,
    offer: '₹150 Off',
    img: 'https://media.istockphoto.com/id/1873805642/photo/teflon-isolated-on-white-background-non-stick-wonder-for-a-seamless-culinary-experience.jpg?s=612x612&w=0&k=20&c=Z3Xk7lP956vvo-5-Z0uIOhT0dldXjtpAPjrRaKlGqtk=',
    soldOut: true
  },
  {
    name: 'Dry Iron (750W)',
    originalPrice: 1100,
    discountPrice: 999,
    offer: '₹101 Off',
    img: 'https://media.istockphoto.com/id/1152910424/photo/iron-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=mtmHm0saANeLHVNtMeVWGuFfdAcvN-FtRKZkMamniUU=',
    soldOut: true
  },
  
{
  name: 'Water Purifier (RO+UV)',
  originalPrice: 9800,
  discountPrice: 8999,
  offer: '₹801 Off',
  img: 'https://media.istockphoto.com/id/1313733527/video/smart-water-purifier-water-collection-from-filter.jpg?s=640x640&k=20&c=4PL2GZMujVPVtTp9ZRFaWY3-OhURJ1IOdapWOir0SMI=',
  soldOut: true
},
{
  name: 'Inverter Air Conditioner (1 Ton, WiFi Enabled)',
  originalPrice: 42999,
  discountPrice: 39999,
  offer: '₹3000 Off',
  img: 'https://media.istockphoto.com/id/1502877471/photo/a-woman-cleaning-the-air-conditioner.jpg?s=612x612&w=0&k=20&c=Q5RhkcQAPBz1AerZ941p4H9Se-ClwOdMBkkoMtqrXuE=',
  soldOut: true
},



  
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
    <div className="appliances-wrapper">
      <div className="appliances-container">
        {/* === Carousel Banner === */}
        <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={4000}>
          {bannerData.map((item, idx) => (
            <div key={idx} className="appliances-carousel-banner">
              <div className="appliances-offer-text">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
              <img src={item.img} alt="Milk Banner" />
            </div>
          ))}
        </Carousel>

        {/* === Milk Products Grid === */}
        <h2 className="appliances-section-title"> Appliances Essentials</h2>
        <div className="appliances-card-grid">
          {breadProducts.map((product, index) => {
            const qty = getQuantity(product.name);

            return (
              <div key={index} className="appliances-card-box">
                {product.soldOut && <div className="sold-out-overlay">Sold out</div>}
                <img
                  src={product.img}
                  alt={product.name}
                  className={product.soldOut ? 'blurred' : ''}
                />
                <h3>{product.name}</h3>
                <p className="meat-price">
                  {product.originalPrice !== product.discountPrice && (
                    <span className="appliances-original">₹{product.originalPrice}</span>
                  )}
                  <span className="appliances-discount">₹{product.discountPrice}</span>
                </p>
                {product.offer && <p className="appliances-offer">{product.offer}</p>}

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
                  <button className="appliances-add-btn" onClick={() => addToCart(product)}>
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
