import React, { useState, useEffect } from "react";
import { AiOutlineShoppingCart, AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import Logo from "./Images/Logo.svg";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-all duration-300 border-b
        ${scrolled ? "py-3 shadow-lg" : "py-5"}`}
    >
      <div className="max-w-[1250px] mx-auto px-4 flex items-center justify-between gap-4">
        
        {/* LOGO */}
        <img src={Logo} alt="SHOP.CO" className="h-8 cursor-pointer" />

        {/* NAV (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8 font-medium text-gray-700">
          <a href="#" className="relative group">
            {t("header.shop")}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
          </a>
          <a href="#" className="relative group">
            {t("header.sale")}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
          </a>
          <a href="#" className="relative group">
            {t("header.newArrivals")}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
          </a>
          <a href="#" className="relative group">
            {t("header.brands")}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
          </a>
        </nav>

        {/* SEARCH (Desktop) */}
        <div className="flex-1 hidden md:flex justify-center">
          <div className="relative w-full max-w-md">
            <AiOutlineSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="text"
              placeholder={t("header.search")}
              className="w-full pl-11 pr-4 py-2.5 rounded-full bg-gray-100 focus:bg-white border focus:border-black outline-none shadow-sm transition-all"
            />
          </div>
        </div>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* LANGUAGE */}
          <select
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            className="text-sm border border-gray-300 rounded-md px-3 py-1 cursor-pointer hover:border-black transition"
          >
            <option value="en">EN</option>
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
          </select>

          {/* CART */}
          <div className="relative cursor-pointer">
            <AiOutlineShoppingCart className="text-2xl text-gray-700 hover:text-black transition" />
          </div>

          {/* MOBILE MENU TOGGLE */}
          <div className="lg:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <AiOutlineClose className="text-2xl text-gray-700" /> : <AiOutlineMenu className="text-2xl text-gray-700" />}
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md mt-2 border-t border-gray-200">
          <ul className="flex flex-col gap-4 p-4 font-medium text-gray-700">
            <li className="relative group">
              <a href="#" className="block py-2">{t("header.shop")}</a>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <a href="#" className="block py-2">{t("header.sale")}</a>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <a href="#" className="block py-2">{t("header.newArrivals")}</a>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <a href="#" className="block py-2">{t("header.brands")}</a>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
