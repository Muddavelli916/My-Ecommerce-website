import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Favouritepage.css'; // Optional: your styles

const categories = [
  "Vegetables", "Fruits", "Appliances", "Dairy Products", "Stationeries",
  "Bread", "Cold Drinks", "Frozen Food", "Appliances Repair"
];

const dummyImages = [
  'https://media.istockphoto.com/id/1175880633/photo/pile-of-green-fresh-snake-gourd.jpg?s=612x612&w=0&k=20&c=gQ2YTqVHdDdHQQzheDcvJm7aMxTdg5kOSK_zeCkxQCo=', // Vegetables
  'https://cdn.pixabay.com/photo/2016/03/05/19/02/fruit-1238248_1280.jpg', // Fruits
  'https://cdn.pixabay.com/photo/2014/09/16/20/56/washing-machine-448429_1280.jpg', // Appliances
  'https://cdn.pixabay.com/photo/2017/09/21/15/06/milk-2775256_1280.jpg', // Dairy
  'https://cdn.pixabay.com/photo/2016/03/27/17/42/pencils-1280558_1280.jpg', // Stationery
  'https://cdn.pixabay.com/photo/2017/05/07/08/56/bread-2296460_1280.jpg', // Bread
  'https://cdn.pixabay.com/photo/2016/07/14/15/38/coca-cola-1516930_1280.jpg', // Cold Drinks
  'https://cdn.pixabay.com/photo/2021/12/16/15/51/dumplings-6874860_1280.jpg', // Frozen Food
  'https://cdn.pixabay.com/photo/2017/07/18/16/17/repair-2515283_1280.jpg' // Appliance Repair
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const FavouritesPage = () => {
  return (
    <div className="favourites-page">
      <h1 className="main-title">Favorites Page</h1>

      {categories.map((category, index) => (
        <div className="category-section" key={index}>
          <h2 className="category-title">{category}</h2>
          <Carousel
            responsive={responsive}
            infinite
            autoPlay
            autoPlaySpeed={3000}
            className="carousel"
          >
            {dummyImages.map((img, i) => (
              <div className="carousel-item" key={i}>
                <img src={img} alt={`Item ${i}`} className="carousel-image" />
              </div>
            ))}
          </Carousel>
        </div>
      ))}
    </div>
  );
};

export default FavouritesPage;
