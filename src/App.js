// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// === Global Components ===
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Maincontext from './components/Maincontext';
import Footer from './components/Footer';
import NotifyModal from './components/NotifyModal';

// === Pages ===
import CategoriesPage from './pages/Categoriespage';
import OrdersPage from './pages/Orderspage';
import FavouritesPage from './pages/Favouritepage';
import SupportPage from './pages/Supportpage';
import CartPage from './pages/CartPage';

// === Category Pages ===
import FruitsPage from './components/categories1/Fruitspage';
import VegetablesPage from './components/categories1/Vegetablespage';
import MilkProductsPage from './components/categories1/MilkProductsPage';
import MeatProductsPage from './components/categories1/MeatProductsPage';
import StationaryPage from './components/categories1/StationaryPage';
import BreadPage from './components/categories1/BreadPage';
import FrozenPage from './components/categories1/FrozenPage';
import AppliancesPage from './components/categories1/AppliancesPage';
import SnacksPage from './components/categories1/SnacksPage'; 
import BeveragesPage from './components/categories1/BeveragesPage';
import BeautyPage from './components/categories1/BeautyPage'; // <-- Create this page if not yet created    
// === Context & Styles ===
import { CartProvider } from './context/CartContext';
import './App.css';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <CartProvider>
      <Router>
        <div className="app-container">
          {/* === Header === */}
          <Header onToggleSidebar={toggleSidebar} />

          <div className={`content-wrapper ${sidebarOpen ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
            {/* === Sidebar === */}
            <Sidebar isOpen={sidebarOpen} />

            {/* === Main Content === */}
            <div className="main-content">
              <Routes>
                {/* Redirect root to dashboard */}
                <Route path="/" element={<Navigate to="/dashboard" />} />

                {/* Dashboard & Core Pages */}
                <Route path="/dashboard" element={<Maincontext isSidebarOpen={sidebarOpen} />} />
                <Route path="/market/categories" element={<CategoriesPage />} />
                <Route path="/market/orders" element={<OrdersPage />} />
                <Route path="/market/favourites" element={<FavouritesPage />} />
                <Route path="/support" element={<SupportPage />} />
                <Route path="/cart" element={<CartPage />} />

                {/* Category Pages */}
                <Route path="/categories/fruits" element={<FruitsPage />} />
                <Route path="/categories/vegetables" element={<VegetablesPage />} />
                <Route path="/categories/milk" element={<MilkProductsPage />} />
                <Route path="/categories/milk" element={<MilkProductsPage />} />
                <Route path="/categories/meat" element={<MeatProductsPage />} />
                <Route path="/categories/stationary" element={<StationaryPage />} />
                <Route path='/categories/bread' element={<BreadPage/>}/>
                <Route path="/categories/frozen-food" element={<FrozenPage />} />
                <Route path='/categories/appliances' element={<AppliancesPage/>}/>
                <Route path="/categories/snacks" element={<SnacksPage />} />
                <Route path="/categories/beverages" element={<BeveragesPage />} />
                <Route path="/categories/beauty" element={<BeautyPage />} /> {/* ✅ Beauty Route */}
              </Routes>

              {/* === Footer === */}
              <Footer />
            </div>
          </div>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
