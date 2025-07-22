import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import { FaCartPlus } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';
import 'react-multi-carousel/lib/styles.css';
import './BreadPage.css';
import NotifyModal from '../NotifyModal'; // adjust path if needed

const bannerData = [
  {
    title: 'Baked Fresh Everyday',
    description: 'From oven to table – discover soft loaves & crispy buns!',
    img: 'https://media.istockphoto.com/id/908511632/photo/loaf-of-bread.jpg?s=612x612&w=0&k=20&c=k7L9QEEiwcYzekNsNjfS_prCCNn4Xpkr-Fo71sYiv2I='
  },
  {
    title: 'Hot Deals on Breads!',
    description: 'Flatbreads, buns, kulchas & more at mouthwatering discounts!',
    img: 'https://media.istockphoto.com/id/969153278/photo/ramadan-pita-fresh-baked-pide.jpg?s=612x612&w=0&k=20&c=SWNMYkAlvBs9OS3l0NwChCnGrxfJnF33hJqNAkr5f6w='
  },
  {
   title: 'Perfect Pairing Picks',
    description: 'Enjoy parathas, naans, & rotis with your favorite curry!',
    img: 'https://media.istockphoto.com/id/459298475/photo/indian-bread-or-lachha-paratha.jpg?s=612x612&w=0&k=20&c=PyS0omv0CxWnbljCuFmXVpCexwUOony5mB3H1WuHklo='
  },
];


const breadProducts = [
  {
    name: 'Whole Wheat Bread (400g)',
    originalPrice: 50,
    discountPrice: 45,
    offer: '₹5 Off',
    img: 'https://media.istockphoto.com/id/172410199/photo/sliced-loaf-of-wholemeal-brown-bread-on-a-white-background.jpg?s=612x612&w=0&k=20&c=1QHEXikE6qsj7ljIx0aW9trLVCTC1CnhVFe_KzJvtHQ=',
    soldOut: false
  },
  {
    name: 'Brown Bread (400g)',
    originalPrice: 55,
    discountPrice: 48,
    offer: '₹7 Off',
    img: 'https://media.istockphoto.com/id/185074511/photo/sliced-of-bread.jpg?s=612x612&w=0&k=20&c=x5DepAC60SjZdbStRMt6vex-EGVzdiSA00xu6Lyg8qA=',
    soldOut: false
  },
  {
    name: 'Multigrain Bread (400g)',
    originalPrice: 60,
    discountPrice: 52,
    offer: '₹8 Off',
    img: 'https://media.istockphoto.com/id/182732282/photo/sliced-loaf-of-multi-grain-oat-bread.jpg?s=612x612&w=0&k=20&c=bxLYkpTq2tx5Zb3ACPXvDc5kEPHoxH__FVSrEQ9a-rM=',
    soldOut: false
  },
  {
    name: 'Garlic Bread Loaf',
    originalPrice: 80,
    discountPrice: 70,
    offer: '₹10 Off',
    img: 'https://media.istockphoto.com/id/1247724575/photo/crispy-garlic-bread-with-herbs-on-baking-paper.jpg?s=612x612&w=0&k=20&c=CN2ck3UL4pKBQxnI-sDnSHiMgmrQka4J4GkB0Cks6ms=',
    soldOut: false
  },
  {
    name: 'Buns (6 pcs)',
    originalPrice: 40,
    discountPrice: 35,
    offer: '₹5 Off',
    img: 'https://media.istockphoto.com/id/902830972/photo/fresh-dinner-rolls-buns.jpg?s=612x612&w=0&k=20&c=HygfTNOlUE4kDtpb-gif_LMYOxDAj1lJsZEmMApFolA=',
    soldOut: false
  },
  {
    name: 'Pav Bread (6 pcs)',
    originalPrice: 30,
    discountPrice: 25,
    offer: '₹5 Off',
    img: 'https://media.istockphoto.com/id/1329213718/photo/vada-pav.jpg?s=612x612&w=0&k=20&c=Yy3pm53KrPAnZXL9weCJDzXjxa2My34oVFx7RBCPmZ8=',
    soldOut: false
  },
  {
    name: 'Focaccia Bread (200g)',
    originalPrice: 90,
    discountPrice: 80,
    offer: '₹10 Off',
    img: 'https://media.istockphoto.com/id/157606535/photo/italian-panino.jpg?s=612x612&w=0&k=20&c=poP2CPbpkg-M15LOz7zYzo5O-NoBAAde1qXVopD0fNI=',
    soldOut: false
  },
  {
    name: 'Garlic Naan (Pack of 4)',
    originalPrice: 85,
    discountPrice: 75,
    offer: '₹10 Off',
    img: 'https://media.istockphoto.com/id/460519819/photo/garlic-naan-bread-seasoned-with-cilantro.jpg?s=612x612&w=0&k=20&c=1SPbyYIILW2nv-yp6-4T87pT7n2rWIz-ggzcQh5OHdk=',
    soldOut: false
  },
 {
    name: 'Stuffed Kulcha (2 pcs)',
    originalPrice: 65,
    discountPrice: 58,
    offer: '₹7 Off',
    img: 'https://media.istockphoto.com/id/2224132242/photo/stuffed-paneer-kulcha-on-paper.jpg?s=612x612&w=0&k=20&c=8h0wevez8N_ZHZgMRVrf5kItR2f2pvYrIcuy0K5UCK8=',
    soldOut: true
  },
  {
  name: 'Sweet Milk Bread (400g)',
  originalPrice: 55,
  discountPrice: 48,
  offer: '₹7 Off',
  img: 'https://media.istockphoto.com/id/916599074/photo/slice-of-bread-in-the-plate-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=wMoikX_KXYbDpVzkwRnEE8QB9upP9U-jEQqyNjVWsUQ=',
  soldOut: true
},
 {
  name: 'Masala Bread Roll (Pack of 4)',
  originalPrice: 65,
  discountPrice: 60,
  offer: '₹5 Off',
  img: 'https://media.istockphoto.com/id/2216987061/photo/stuffed-vegetable-masala-buns.jpg?s=612x612&w=0&k=20&c=e2b37ljc8MGz4wO2W4NF38Wf4X5JX1FkTkHPd2Yvh2s=',
  soldOut: true
},
  {
  name: 'French Baguette (1 pc)',
  originalPrice: 90,
  discountPrice: 80,
  offer: '₹10 Off',
  img: 'https://media.istockphoto.com/id/621696364/photo/french-baguettes-in-wicker-basket-in-bakery.jpg?s=612x612&w=0&k=20&c=FnSNClYZXjSXFm5MMTZxbpAqnW2dIgVKJyoYLGrRD-8=',
  soldOut: true
},
  {
  name: 'Whole Grain Loaf (500g)',
  originalPrice: 70,
  discountPrice: 62,
  offer: '₹8 Off',
  img: 'https://media.istockphoto.com/id/474679296/photo/organic-homemade-whole-wheat-bread.jpg?s=612x612&w=0&k=20&c=b3TU_bz4r6gxeo2COsY2N4t9PxMoVmWdFO0kfnOJg4I=',
  soldOut: true
},
  {
  name: 'Crusty Ciabatta Bread (300g)',
  originalPrice: 95,
  discountPrice: 85,
  offer: '₹10 Off',
  img: 'https://media.istockphoto.com/id/172181465/photo/crusty-bread.jpg?s=612x612&w=0&k=20&c=FZv-aaghA7bl2iI5AVzYhb3kda1_E84q1vXyJZR5WTI=',
  soldOut: true
},
 {
    name: 'Plain Naan (Pack of 4)',
    originalPrice: 80,
    discountPrice: 70,
    offer: '₹10 Off',
    img: 'https://media.istockphoto.com/id/1177694095/photo/bakery-products.jpg?s=612x612&w=0&k=20&c=T7IzkAFs9sgIPU3uZAr4cGMmbo1sJ78oIEgWNc7xkIA=',
    soldOut: true
  },
  {
  name: 'Milk Bun (Pack of 6)',
  originalPrice: 55,
  discountPrice: 49,
  offer: '₹6 Off',
  img: 'https://media.istockphoto.com/id/674096884/photo/little-buns.jpg?s=612x612&w=0&k=20&c=oVkTdKdCZ_oQ46hoFCQNRSHHn5xj1nMn5mU91FSVBWI=',
  soldOut:true
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
    <div className="bread-wrapper">
      <div className="bread-container">
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
        <h2 className="bread-section-title"> Bread Essentials</h2>
        <div className="bread-card-grid">
          {breadProducts.map((product, index) => {
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
                    <span className="bread-original">₹{product.originalPrice}</span>
                  )}
                  <span className="bread-discount">₹{product.discountPrice}</span>
                </p>
                {product.offer && <p className="bread-offer">{product.offer}</p>}

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
