import React from 'react';
import ScrollCardSection from '../components/ScrollCardSection'; // ✅ reusable scroll section
import { useNavigate } from 'react-router-dom'; // ✅ navigation support
import Carousel from 'react-multi-carousel'; // ✅ banner carousel
import 'react-multi-carousel/lib/styles.css'; // ✅ carousel styles
import './Maincontext.css'; // ✅ your custom styling


const exploreitems = [
  { name: 'Mobile Accessories', img: 'https://cdn-icons-png.flaticon.com/128/2920/2920083.png' },
  { name: 'Home Appliances', img: 'https://cdn-icons-png.flaticon.com/128/6781/6781214.png' },
  { name: 'Eyewear & More', img: 'https://cdn-icons-png.flaticon.com/128/189/189686.png' },
  { name: 'Blocks & Puzzles', img: 'https://cdn-icons-png.flaticon.com/128/3134/3134981.png' },
  { name: 'Bags & Accessories', img: 'https://cdn-icons-png.flaticon.com/128/732/732284.png' },
  { name: 'Pet Treats & Toys', img: 'https://cdn-icons-png.flaticon.com/128/616/616408.png' },
  { name: 'Speakers & More', img: 'https://cdn-icons-png.flaticon.com/128/1980/1980414.png' },
  { name: 'Battery Extensions', img: 'https://cdn-icons-png.flaticon.com/128/1045/1045128.png' },
  { name: 'Crafts & Hobby', img: 'https://cdn-icons-png.flaticon.com/128/3062/3062634.png' },
  { name: 'Kitchen Appliances', img: 'https://cdn-icons-png.flaticon.com/128/1046/1046751.png' },
  { name: 'Card & Board Games', img: 'https://cdn-icons-png.flaticon.com/128/3159/3159066.png' },
  { name: 'Earbuds & More', img: 'https://cdn-icons-png.flaticon.com/128/11355/11355108.png' },
  { name: 'Massagers & More', img: 'https://cdn-icons-png.flaticon.com/128/4728/4728210.png' }
];

const DashboardMain = () => {
  const navigate = useNavigate();

  const banners = [
    {
      img: 'https://media.istockphoto.com/id/1025966854/photo/set-of-household-kitchen-technics-on-yellow-background-set-of-appliance-in-the-new.webp?a=1&b=1&s=612x612&w=0&k=20&c=il5X9LZdTI3C226oySVqw4bFPuGt0gionZQAFewWuLM=',
      title: 'Price Drop Alert!',
      subtitle: 'From ₹5,300',
      offer: 'Save on Samsung, LG & more'
    },
    {
      img: 'https://images.unsplash.com/photo-1527960471264-932f39eb5846?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D',
      title: 'Cold Drinks & Juices',
      subtitle: 'Min. 30% Off',
      offer: 'Pepsi, Tropicana, Slice & more'
    },
    {
      img: 'https://media.istockphoto.com/id/1205748678/photo/fruit-and-vegetable-aisle-in-the-supermarket.webp?a=1&b=1&s=612x612&w=0&k=20&c=CpQDw9GKRfNyTLezIKF1v9IybzS7UqLSHkBr3AmXvQA=',
      title: 'Fresh Groceries',
      subtitle: 'Up to 40% Off',
      offer: 'Daily Staples, Fruits & Veggies'
    }
  ];

  const categories = [
    
  { name: 'Fruits', img: 'https://cdn.pixabay.com/photo/2017/01/20/15/06/fruits-1995056_1280.jpg' },
  { name: 'Vegetables', img: 'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=600&auto=format&fit=crop&q=60' },
  { name: 'Milk', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGCfyzYeHpkhk0lGNJXoDot_rdb18GuhOrTg&s' },
  { name: 'Meat', img: 'https://media.istockphoto.com/id/1443190699/photo/different-types-of-raw-meat.webp?a=1&b=1&s=612x612&w=0&k=20&c=Pcs0bkEze6K24oulI48pyf0Tk9k1r02T7fJJlD9elB4=' },
  { name: 'Bread', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6jIOhI0EbqvDsNyHO6r-FWaiamV4qJcl09A&s' },
  { name: 'Stationary', img: 'https://t3.ftcdn.net/jpg/00/88/27/24/240_F_88272498_AaiQuZIlV9imGmemkE0BIwdFF5TJJbIK.jpg' },
  { name: 'Frozen Food', img: 'https://t3.ftcdn.net/jpg/09/65/45/82/240_F_965458205_RBcUgnf6YrWabIxjLpNTRp83VrlkEhrd.jpg' },
  { name: 'Appliances', img: 'https://t4.ftcdn.net/jpg/01/51/00/87/240_F_151008771_Kvl6PeN8PeXL7cfeqtKJloSX7UDgHDxS.jpg' },
  { name: 'Snacks', img: 'https://media.istockphoto.com/id/855455706/photo/stock-photo-of-collage-of-diwali-food-or-indian-festival-food-like-anarsa-bakarvadi-chakli-sev.jpg?s=612x612&w=0&k=20&c=3fSey5ztl81EJB2MJ9Npsn81xCaZvLSlTABVC8HLgmQ=' },
  { name: 'Beverages', img: 'https://media.istockphoto.com/id/1081369140/photo/healthy-appetizing-red-smoothie-dessert-in-glasses.jpg?s=612x612&w=0&k=20&c=ayAj4LQwwNIdY3aJ7fmzzG4HP_vtGboSeiP-FFO6Wm8=' },
  { name: 'Beauty & Personal Care', img: 'https://media.istockphoto.com/id/1141698953/photo/spa-products-for-home-skin-care.jpg?s=612x612&w=0&k=20&c=HxtIt73MwCZBY0APYngv0poZCEtyDhckTuT8SxJSxPE=' },
  { name: 'Baby Care', img: 'https://media.istockphoto.com/id/458945833/photo/food-donation-collection.jpg?s=612x612&w=0&k=20&c=fzDGOBFv4wjcAL8eVdz5-JQyM3e4-n6kiAWVT7p4ukM=' },
  { name: 'Cleaning Essentials', img: 'https://media.istockphoto.com/id/620730254/photo/plastic-bucket-with-cleaning-supplies-in-home.jpg?s=612x612&w=0&k=20&c=ZOAEoE4M6QoIwduuXL16H-shGbI5MOl6thkoMmV9BnA=' },
  { name: 'Health & Wellness', img: 'https://media.istockphoto.com/id/1280587810/photo/healthy-eating-exercising-weight-and-blood-pressure-control.jpg?s=612x612&w=0&k=20&c=iCQnBHXhRf6HIzPGMUMwjnBDtIZDuE5UzrPG6AeKMZE=' },
  { name: 'Grains & Pulses', img: 'https://media.istockphoto.com/id/1217443344/photo/five-types-of-lentils-that-are-widely-consumed-in-india-these-are-mung-bean-chickpea-lentil.jpg?s=612x612&w=0&k=20&c=nAcReg-Gt8ocT15RHRlSKkOCfnoCgJBRKEoyeQKUpsA=' },
  { name: 'Dry Fruits & Nuts', img: 'https://media.istockphoto.com/id/1218693828/photo/wooden-bowl-with-mixed-nuts-on-rustic-table-top-view-healthy-food-and-snack.jpg?s=612x612&w=0&k=20&c=89-ko7nwlcqM6HPvwaQ3tZus4apArtwHkFAB0IxPQpo=' },
  { name: 'Oils & Spices', img: 'https://media.istockphoto.com/id/852068056/photo/spices-and-herbs-on-rustic-wood-kitchen-table.jpg?s=612x612&w=0&k=20&c=v3S73D0CX8RgiqdUwdqdMQvtiJ2AplQGoebOFnyQRNk=' },
  { name: 'Toys & Games', img: 'https://media.istockphoto.com/id/667108156/photo/colorful-plastic-toys-in-childrens-room.jpg?s=612x612&w=0&k=20&c=WJXkRX42gPteAshb1GU0O2vexV9zSowtVfCs9ikciV0=' },
  { name: 'Pet Supplies', img: 'https://media.istockphoto.com/id/1207056849/photo/everything-for-the-dog-flat-lay-of-dog-accessories-equipment.jpg?s=612x612&w=0&k=20&c=NAQqu96K4xU1e_ymy5F0sAUnPff6W8lJEezgbC-DuVc=' },
  { name: 'Kitchenware', img: 'https://media.istockphoto.com/id/2091231476/photo/cooking-kitchenware-utensils-on-table.jpg?s=612x612&w=0&k=20&c=1jU-J2eWTgK-nDQsgAcZWYpoOdVtv0w6tnAhuBEEhqo=' }


  ];
  const superSonicItems = [
  { label: ' Watches', img: 'https://media.istockphoto.com/id/1321100934/photo/unbranded-white-analog-wristwatch-with-black-hands.jpg?s=612x612&w=0&k=20&c=2qou7yzYwHdvy1vG9Oe04KF5oqSUVxLWhmf4xdah5QA=', discount: 'UP TO 90% OFF' },
  { label: 'Home & Kitchen Appliances', img: 'https://media.istockphoto.com/id/993760082/photo/3d-set-of-home-appliances-on-white-background.jpg?s=612x612&w=0&k=20&c=HrfQd_TbAHORYDu29Z-o9538X05OSw0flSPIZdi-aMQ=', discount: 'UP TO 80% OFF' },
  { label: 'Tech Accessories', img: 'https://media.istockphoto.com/id/635790376/photo/computer-peripherals-laptop-accessories-composition-on-stone.jpg?s=612x612&w=0&k=20&c=EIu4Pmadacbq6Kk2iSezHUZFiCeLEGP5BhYjajTCSBU=', discount: 'UP TO 75% OFF' },
  { label: 'Charging Needs', img: 'https://media.istockphoto.com/id/1129485571/photo/six-multi-colored-usb-cables-on-a-white-isolated-background.jpg?s=612x612&w=0&k=20&c=5grnq6kuhdLZougtOnIPzGR6wtbv6BaMdDCOwATlfco=', discount: 'UP TO 80% OFF' },
  { label: 'Personal Care & Grooming', img: 'https://media.istockphoto.com/id/584574708/photo/soap-bar-and-liquid-shampoo-shower-gel-towels-spa-kit.jpg?s=612x612&w=0&k=20&c=TFeQmTwVUwKY0NDKFFORe3cwDCxRtotFgEujMswn3dc=', discount: 'UP TO 80% OFF' }
];

const beautyLitItems = [
  { label: 'Luscious Lips stick', img: 'https://media.istockphoto.com/id/1323502301/photo/different-color-shades-of-lipstick-isolated-on-white-background-with-harsh-shadows-empty.jpg?s=612x612&w=0&k=20&c=ZImWNggftEyPkOX6asr96iLYFl2fSO8aorSvhR1QMWA=', discount: 'UP TO 40% OFF' },
  { label: 'Flawless Face cream', img: 'https://media.istockphoto.com/id/1403642872/photo/background-white-face-cream-with-cucumber-extract.jpg?s=612x612&w=0&k=20&c=dGYpHVZEfl4xzcUGTjyscjBA9WbONr9aspEmnZ_bkhw=', discount: 'UP TO 45% OFF' },
  { label: 'Dazzling Eyes', img: 'https://media.istockphoto.com/id/657776506/photo/classic-color-triangle-cosmetic-jar-open-cap.jpg?s=612x612&w=0&k=20&c=9giuQSeQ04L1p_XYsSU5sWeQCBLFoMvfoADh0vCJzPc=', discount: 'UP TO 60% OFF' },
  { label: 'Makeup Essentials', img: 'https://media.istockphoto.com/id/2155031694/photo/a-set-of-makeup-brushes-and-beauty-products-arranged-on-a-desk-at-the-beauticians-salon.jpg?s=612x612&w=0&k=20&c=j-DupJ247vYuwHJa_w7LY8C4GeCqRh5htVMThQA-cIo=', discount: 'UP TO 55% OFF' },
  { label: 'Korean Beauty', img: 'https://media.istockphoto.com/id/1329626562/photo/glass-clear-cosmetics-jar-for-cream-mock-up-banner-cosmetic-beauty-product-package-luxury.jpg?s=612x612&w=0&k=20&c=AIqksC-CYr_f-MCx8ToyfjBqyL1XcG_ZdmTBakhKsl8=', discount: 'UP TO 60% OFF' }
];


  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  const handleCategoryClick = (name) => {
    const route = `/categories/${name.toLowerCase().replace(/\s+/g, '-')}`;
    navigate(route);
  };

  return (
    <div className="main-content">
      <div className="main-wrapper">
        <Carousel responsive={responsive} autoPlay infinite showDots arrows={false}>
          {banners.map((banner, idx) => (
            <div className="banner-slide" key={idx}>
              <div className="banner-content">
                <h2 className="banner-title">{banner.title}</h2>
                <p className="banner-subtitle">{banner.subtitle}</p>
                <p className="banner-offer">{banner.offer}</p>
              </div>
              <img src={banner.img} alt={`banner-${idx}`} className="banner-img" />
            </div>
          ))}
        </Carousel>

        <div className="section categories">
          <h2>Shop by Category</h2>
          <div className="card-list">
            {categories.map((cat, idx) => (
              <div
                className="card category-card"
                key={idx}
                onClick={() => handleCategoryClick(cat.name)}
                style={{ cursor: 'pointer' }}
              >
                <img src={cat.img} alt={cat.name} className="category-img" />
                <span className="category-name">{cat.name}</span>
              </div>
            ))}
          </div>
         <ScrollCardSection title="Super Sonic Deals"  items={superSonicItems} />
        <ScrollCardSection title="Beauty LIT Fest" items={beautyLitItems} />

        </div>
       

        <div className="explore-wrapper">
          <div className="explore-left">
            <p className="more-to-love">MORE TO LOVE</p>
            <h2 className="explore-title">Explore more &<br />uncover hidden<br />gems</h2>
          </div>

          <div className="explore-right">
            {exploreitems.map((item, idx) => (
              <div key={idx} className="explore-item">
                <div className="explore-icon-circle">
                  <img src={item.img} alt={item.name} />
                </div>
                <p className="explore-label">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;