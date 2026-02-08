// Header.jsx
import React, { useState, useEffect } from "react";
import Logojon from "./Images/Logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  const [isAnnouncementVisible, setIsAnnouncementVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Announcement Bar */}
      <div
        id="announcement-bar"
        className={`sticky top-0 z-50 bg-black text-white py-2 transition-all duration-500 ${
          !isAnnouncementVisible || isScrolled
            ? "-translate-y-16 opacity-0"
            : "translate-y-0 opacity-100"
        }`}
      >
        <div
          id="announcement-container"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between"
        >
          <div
            id="announcement-text-wrapper"
            className="flex items-center justify-center flex-1 gap-2 text-sm"
          >
            <span id="announcement-title" className="font-bold">
              FLASH SALE:
            </span>
            <span id="announcement-description">
              50% OFF everything. Limited time!
            </span>
          </div>

          <button
            id="announcement-close-btn"
            onClick={() => setIsAnnouncementVisible(false)}
            className="text-white hover:text-gray-300"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Header */}
      <header
        id="main-header"
        className={`sticky top-0 z-40 bg-white border-b shadow-md transition-all duration-500 ${
          isScrolled ? "py-2 md:py-3" : "py-4 md:py-5"
        }`}
      >
        <div
          id="header-container"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between"
        >
          {/* Logo */}
          <div id="logo-wrapper">
            <img
              id="header-logo"
              src={Logojon}
              alt="SHOP.CO"
              className="h-8 w-auto ml-[25px]"
            />
          </div>

          {/* Navigation */}
          <nav
            id="header-nav"
            className="hidden md:flex items-center space-x-8"
          >
            <a
              id="nav-shop"
              href="#"
              className="text-gray-800 font-medium hover:text-black flex items-center"
            >
              Shop <span id="nav-shop-arrow" className="ml-1">▼</span>
            </a>

            <a
              id="nav-sale"
              href="#"
              className="text-gray-800 font-medium hover:text-black"
            >
              On Sale
            </a>

            <a
              id="nav-new-arrivals"
              href="#"
              className="text-gray-800 font-medium hover:text-black"
            >
              New Arrivals
            </a>

            <a
              id="nav-brands"
              href="#"
              className="text-gray-800 font-medium hover:text-black"
            >
              Brands
            </a>
          </nav>

          {/* Cart Icon */}
          <div id="header-icons" className="flex items-center space-x-6">
            <a href="#cart" id="cart-link" className="relative">
              <AiOutlineShoppingCart
                id="cart-icon"
                className="h-6 w-6 text-gray-700"
              />
              <span
                id="cart-count"
                className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center"
              >
                3
              </span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
