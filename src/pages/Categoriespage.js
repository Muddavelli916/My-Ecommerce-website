import React, { useState } from "react";
import './Categoriespage.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CategoriesPage = () => {
  const [categories, setCategories] = useState([
    "Vegetables", "Fruits", "Appliances", "Dairy Products", "Stationeries",
    "Bread", "Cold Drinks", "Frozen Food", "Appliances Repair"
  ]);

  const [categoryImages, setCategoryImages] = useState({
    "Vegetables": [
      { name: "Carrot Ooty", price: "₹25/kg", stock: "50kg", img: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=600" },
      { name: "Tomato Hybrid", price: "₹30/kg", stock: "70kg", img: "https://images.unsplash.com/photo-1444731961956-751ed90465a5?w=600" },
      { name: "Broccoli Fresh", price: "₹80/kg", stock: "30kg", img: "https://images.unsplash.com/photo-1685504445355-0e7bdf90d415?w=600" },
      { name: "Cabbage", price: "₹18/kg", stock: "80kg", img: "https://images.unsplash.com/photo-1652860213441-6622f9fec77f?w=600" },
      { name: "Capsicum", price: "₹20/kg", stock: "60kg", img: "https://media.istockphoto.com/id/137350104/photo/green-peppers.jpg?s=612x612&w=0&k=20&c=2Da2KdNelBjwbyKZwAIp11HrU0OBZg849nfSbx_eL4w=" },
      { name: "Ladiesfinger", price: "₹22/kg", stock: "55kg", img: "https://media.istockphoto.com/id/507180560/photo/okras-with-raw-okra-in-farm.jpg?s=612x612&w=0&k=20&c=jU1TKJAq3eUtO9bvLzQsNAXNohznfK6TjGc03TODnk8=" },
      { name: "Pottato", price: "₹24/kg", stock: "100kg", img: "https://media.istockphoto.com/id/464381355/photo/raw-potato.jpg?s=612x612&w=0&k=20&c=D0-YPdJ-zwe1rS2Kv-SxtcCDgefIAC6mP1-is3BlYS0=" },
      { name: "Zucchini", price: "₹28/kg", stock: "40kg", img: "https://media.istockphoto.com/id/148293312/photo/zucchini.jpg?s=612x612&w=0&k=20&c=kBLTo7MgZcCJTJmiRWPH3MrFHJwYachvs4IHXT_Diys=" },
    ],
    "Fruits": [
      { name: "Apple Shimla", price: "₹120/kg", stock: "40kg", img: "https://media.istockphoto.com/id/1473676063/photo/red-apples-on-the-market-stall.jpg?s=612x612&w=0&k=20&c=Q0cBOK5w7xKmtRqX_MJmzDeShzLdEsW2eUS_LuR8Blo=" },
      { name: "Banana", price: "₹45/dozen", stock: "80 dozen", img: "https://media.istockphoto.com/id/922094380/photo/bananas.jpg?s=612x612&w=0&k=20&c=rn2ufKeLZf3wAUmNUKBi6md-U1gQI4_1038v-VUT3JE=" },
      { name: "Mango Alphonso", price: "₹150/kg", stock: "25kg", img: "https://media.istockphoto.com/id/985162774/photo/bunch-of-indian-mangoes.jpg?s=612x612&w=0&k=20&c=d6oH-A-KggkzzhiwjN9X48YTYAOSM2ho7bNmIhlQyUc=" },
      { name: "Pineapple", price: "₹60/pc", stock: "100 pcs", img: "https://media.istockphoto.com/id/2213541742/photo/pineapples-at-the-street-market-in-maldives.jpg?s=612x612&w=0&k=20&c=6fgQJtT5KbrShYf60ouHPH01ivz_G0CnWUxXumX0Nt4=" }
    ],
    "Appliances": [
      { name: "Mixer Grinder", price: "₹2499", stock: "12 units", img: "https://media.istockphoto.com/id/2169446825/photo/electric-mixer-grinder.jpg?s=612x612&w=0&k=20&c=De49p2kBghrLLd-tVLWaC5fMc0RGIV-S4RPLXVBD7Tg=" },
      { name: "Air Fryer", price: "₹4999", stock: "7 units", img: "https://media.istockphoto.com/id/1267626389/photo/air-fryer-machine-with-chicken-and-vegetables.jpg?s=1024x1024&w=is&k=20&c=vS5txZzt-79fTzrRc9VeLtStfNpAsuQ91Bxcfugdpog=" },
      { name: "Microwave Oven", price: "₹7999", stock: "5 units", img: "https://media.istockphoto.com/id/180336565/photo/household-appliances.jpg?s=612x612&w=0&k=20&c=In8pgxTEgrDpuOQUSzycZPvMdi0qRSopYA7uAeMMVE0=" },
      { name: "Kettle", price: "₹999", stock: "20 units", img: "https://media.istockphoto.com/id/617354074/photo/electric-kettle-in-hand-on-the-background-of-the-kitchen.jpg?s=612x612&w=0&k=20&c=irCSU8ZvjnIKpqAe13C1Q_TzSpNsfjLG_zr2NADLuuk=" }
    ],
    "Dairy Products": [
      { name: "Milk Packet", price: "₹26/ltr", stock: "200 ltrs", img: "https://media.istockphoto.com/id/1201270309/vector/realistic-oatmeal-milk-poster-ad.jpg?s=612x612&w=0&k=20&c=lOKrv6FFUCIDmlrX4u9TBTZsnMBpi3qOoiVhqT1wtX4=" },
      { name: "Curd", price: "₹20/500ml", stock: "120 cups", img: "https://media.istockphoto.com/id/624992248/photo/home-made-yogurt-in-sri-lanka.jpg?s=612x612&w=0&k=20&c=qVklSkFXfnukTBuUO1aUeZEGUf07nMtzvKgf5LVK9zE=" },
      { name: "Butter", price: "₹50/100g", stock: "75 packs", img: "https://media.istockphoto.com/id/1338737663/photo/single-butter-stick-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=wPZCCbp2ty2kZRcfDqKiT6gN_jhvSatUqkI6r3j3GWQ=" },
      { name: "Paneer", price: "₹75/200g", stock: "90 packs", img: "https://media.istockphoto.com/id/1085158128/photo/malai-or-achari-paneer-in-a-gravy-made-using-red-gravy-and-green-capsicum-served-in-a-bowl.jpg?s=612x612&w=0&k=20&c=R1baJqIO7z7bMOzONLWO42EudMDOt_c4kxoczMvJJ34=" }
    ],
    "Stationeries": [
      { name: "Pen Pack", price: "₹25", stock: "300 packs", img: "https://media.istockphoto.com/id/1439091192/photo/eight-colorful-pens-on-black-surface-mockup-template.jpg?s=612x612&w=0&k=20&c=WZevrT0JbBiWfz2rGxUfjlMS8syY-NZjln4p4DuDXq0=" },
      { name: "Notebook", price: "₹60", stock: "180 books", img: "https://media.istockphoto.com/id/1460007178/photo/library-books-on-table-and-background-for-studying-learning-and-research-in-education-school.jpg?s=612x612&w=0&k=20&c=OV_sdclWUExHy0VKPeZwyen2mO6g1NwAIBbLPT_Hd30=" },
      { name: "Marker Set", price: "₹120", stock: "90 sets", img: "https://media.istockphoto.com/id/184613125/photo/markers.jpg?s=612x612&w=0&k=20&c=mu4C_xCxS0ZLS8gKTwbl9-nSM5V5JG-oJfMIUZgOm1c=" },
      { name: "A4 Sheets", price: "₹150", stock: "50 reams", img: "https://media.istockphoto.com/id/2033517814/photo/white-sheets-of-a4-paper-on-a-red-background.jpg?s=612x612&w=0&k=20&c=v0kZjXkBxNQC-eeK2L1SN1bY2aNsTsRNS-V8VHHMVRU=" }
    ],
    "Bread": [
      { name: "White Bread", price: "₹40", stock: "80 packs", img: "https://media.istockphoto.com/id/2109092659/photo/sealed-packet-of-slice-bread-on-a-white-isolated-background.jpg?s=612x612&w=0&k=20&c=fkq4V-YCUiLjH62iLfNNkcj7TkSC3nRQq3i6CvlsmLg=" },
      { name: "Brown Bread", price: "₹45", stock: "70 packs", img: "https://media.istockphoto.com/id/461285381/photo/packaged-bread.jpg?s=612x612&w=0&k=20&c=QEZpY0W3of0uflRfzblEQcu9eOY9mE_85eAJk-CG5BI=" },
      { name: "Garlic Bread", price: "₹60", stock: "65 packs", img: "https://media.istockphoto.com/id/1247724575/photo/crispy-garlic-bread-with-herbs-on-baking-paper.jpg?s=612x612&w=0&k=20&c=CN2ck3UL4pKBQxnI-sDnSHiMgmrQka4J4GkB0Cks6ms=" },
      { name: "Multigrain Bread", price: "₹50", stock: "50 packs", img: "https://media.istockphoto.com/id/1191838816/photo/hand-of-young-caucasian-woman-takes-a-piece-of-homemade-rustic-bread.jpg?s=612x612&w=0&k=20&c=h9sxpb4PUCilOp5qJB-0BTGBZwr1uhga1dfktt-M26E=" }
    ],
    "Cold Drinks": [
      { name: "Pepsi Can", price: "₹35", stock: "120 cans", img: "https://media.istockphoto.com/id/459396911/photo/pepsi-can-with-water-droplets.jpg?s=612x612&w=0&k=20&c=S70SRtPQ-bIFbf5lpNF8RWrkX0J-m23MdEZOAV6hmyA=" },
      { name: "Coca Cola", price: "₹38", stock: "110 cans", img: "https://media.istockphoto.com/id/458074487/photo/coca-cola-cup.jpg?s=612x612&w=0&k=20&c=hNF2Ndh5cJyKTteqM70VXqxMBHKw9r5SwdymMKyiL1Q=" },
      { name: "Sprite", price: "₹36", stock: "90 cans", img: "https://media.istockphoto.com/id/458716383/photo/sprite-can-on-white.jpg?s=612x612&w=0&k=20&c=85dIMCB5r97C7YRYdx9ZicKTtjYm527DXulfjD1D5fY=" },
      { name: "Fanta", price: "₹34", stock: "100 cans", img: "https://media.istockphoto.com/id/513933136/photo/fanta-orange-can-and-plastic-bottle.jpg?s=612x612&w=0&k=20&c=ifAPvkThZsA4qFI_lFSDXffduDXhgeqhR0JOrhkruCs=" }
    ],
    "Frozen Food": [
      { name: "Frozen Peas", price: "₹90/kg", stock: "60kg", img: "https://media.istockphoto.com/id/458940895/photo/frozen-green-peas.jpg?s=612x612&w=0&k=20&c=1T-WVGM3-iMomQYDOrw3iv58DCeAqpvkHRhsO-DAJSo=" },
      { name: "Frozen Corn", price: "₹85/kg", stock: "55kg", img: "https://media.istockphoto.com/id/1273493327/photo/open-bag-of-uncooked-frozen-corn.jpg?s=612x612&w=0&k=20&c=gn-nHxESkDnL5x-oH892g5Xfs_DpMSmCGxMtjNYPU-E=" },
      { name: "French Fries", price: "₹120/500g", stock: "40 packs", img: "https://media.istockphoto.com/id/1125378434/vector/french-fried-potatoes-in-paper-box-fast-food-vector-illustration.jpg?s=612x612&w=0&k=20&c=Dl9BJvLh27ZfhJ8CYCSdsotKstOdDteG7I9C7mi_g7c=" },
      { name: "Veg Nuggets", price: "₹140/500g", stock: "35 packs", img: "https://media.istockphoto.com/id/2207803562/photo/fried-nuggets-with-sauce-a-plate-of-nuggets-for-snacks.jpg?s=612x612&w=0&k=20&c=6pnfHTeAKDHqpvA88eBoZGAC5ImRiaV1nS3QJhpZzJk=" }
    ],
    "Appliances Repair": [
      { name: "AC Repair", price: "₹499", stock: "Available", img: "https://media.istockphoto.com/id/1279220367/photo/male-technician-posing-near-air-conditioner-indoors.jpg?s=612x612&w=0&k=20&c=dgjHZtBbiLAWU-X-H13mhHRLqytj7pGDzt4BYzJt-L8=" },
      { name: "Washing Machine", price: "₹399", stock: "Available", img: "https://media.istockphoto.com/id/1325196791/photo/the-young-handsome-repairman-in-worker-suit-with-the-professional-tools-box-is-fixing-the.jpg?s=612x612&w=0&k=20&c=m5BjjBmRtz8SDCKX9sSQ_v2wxYMoFbJWNp_hpc6_0zY=" },
      { name: "Fridge Repair", price: "₹599", stock: "Available", img: "https://media.istockphoto.com/id/591415644/photo/handyman-repairing-refrigerator-at-home.jpg?s=612x612&w=0&k=20&c=PmL8ZgkW6bvJ02273f3qjHM_-8_dJhza-uGOuMwS4Vs=" },
      { name: "Geyser Repair", price: "₹299", stock: "Available", img: "https://media.istockphoto.com/id/542214542/photo/getting-to-the-root-of-the-problem.jpg?s=612x612&w=0&k=20&c=UbWXGKaDqO0Bi4XjvIOfWzrCCBfYMlgUi5_WTDdcqCE=" }
    ]
  });

  const [formData, setFormData] = useState({
    category: "",
    name: "",
    price: "",
    stock: "",
    img: ""
  });

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    const { category, name, price, stock, img } = formData;

    if (!category || !name || !price || !stock || !img) {
      alert("Please fill all fields");
      return;
    }

    const newItem = { name, price, stock, img };

    if (!categories.includes(category)) {
      setCategories([...categories, category]);
    }

    setCategoryImages((prev) => ({
      ...prev,
      [category]: prev[category] ? [...prev[category], newItem] : [newItem]
    }));

    setFormData({ category: "", name: "", price: "", stock: "", img: "" });
  };

  return (
    <div className="categories-page">
      <h1 className="main-title">Categories</h1>

      <form className="add-form" onSubmit={handleAddItem}>
        <h3>Add New Category Item</h3>
        <input type="text" name="category" placeholder="Category Name" value={formData.category} onChange={handleChange} />
        <input type="text" name="name" placeholder="Item Name" value={formData.name} onChange={handleChange} />
        <input type="text" name="price" placeholder="Price (e.g. ₹50/kg)" value={formData.price} onChange={handleChange} />
        <input type="text" name="stock" placeholder="Stock (e.g. 40kg)" value={formData.stock} onChange={handleChange} />
        <input type="text" name="img" placeholder="Image URL" value={formData.img} onChange={handleChange} />
        <button type="submit">Add Item</button>
      </form>

      {categories.map((category, index) => (
        <div className="category-section" key={index}>
          <h2 className="category-title">{category}</h2>
          <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000} className="carousel">
            {categoryImages[category]?.map((item, i) => (
              <div className="carousel-item" key={i}>
                <img src={item.img} alt={item.name} className="carousel-image" />
                <p className="item-name">{item.name}</p>
                <p className="item-price">{item.price}</p>
                <p className="item-stock">Stock: {item.stock}</p>
              </div>
            ))}
          </Carousel>
        </div>
      ))}
    </div>
  );
};

export default CategoriesPage;
