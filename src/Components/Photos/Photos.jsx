// Photos.jsx
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { ShoppingCart, X, Plus, Minus } from "lucide-react";

import tshirtTape from "./Images/Image1.svg";
import skinnyJeans from "./Images/Image2.svg";
import checkeredShirt from "./Images/image3.svg";
import stripedTshirt from "./Images/image4.svg";
import verticalShirt from "./Images/image5.svg";
import graphiteTshirt from "./Images/image6.svg";
import bermudaShorts from "./Images/image7.svg";
import fadedJeans from "./Images/image8.svg";

// Mahsulotlar
const productsData = {
  newArrivals: [
    {
      id: 1,
      name: "T-shirt with Tape Dots",
      rating: 5,
      price: 120,
      image: tshirtTape,
      colors: ["Black", "White", "Gray", "Navy"],
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 2,
      name: "SKINNY FIT Jeans",
      rating: 5,
      price: 240,
      oldPrice: 260,
      image: skinnyJeans,
      colors: ["Blue", "Black", "Light Blue"],
      sizes: ["28", "30", "32", "34"],
    },
    {
      id: 3,
      name: "Checkered Shirt",
      rating: 5,
      price: 180,
      image: checkeredShirt,
      colors: ["Red/Black", "Blue/White", "Green/Black"],
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 4,
      name: "Sleeve Striped T-shirt",
      rating: 5,
      price: 130,
      oldPrice: 160,
      image: stripedTshirt,
      colors: ["Navy/White", "Black/White", "Red/White"],
      sizes: ["S", "M", "L", "XL"],
    },
  ],
  topSelling: [
    {
      id: 5,
      name: "Vertical Striped Shirt",
      rating: 5,
      price: 212,
      oldPrice: 232,
      image: verticalShirt,
      colors: ["Blue/White", "Black/White", "Gray/White"],
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 6,
      name: "Courage Graphite T-shirt",
      rating: 5,
      price: 145,
      image: graphiteTshirt,
      colors: ["Graphite", "Black", "Charcoal"],
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 7,
      name: "Loose Fit Bermuda Shorts",
      rating: 5,
      price: 80,
      image: bermudaShorts,
      colors: ["Khaki", "Navy", "Black", "Olive"],
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 8,
      name: "Faded Skinny Jeans",
      rating: 5,
      price: 210,
      image: fadedJeans,
      colors: ["Light Blue", "Medium Blue", "Dark Blue"],
      sizes: ["28", "30", "32", "34"],
    },
  ],
};

const Photos = () => {
  const [cart, setCart] = useState([]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setSelectedColor(product.colors[0]);
    setSelectedSize(product.sizes[0]);
    setQuantity(1);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
    setSelectedColor("");
    setSelectedSize("");
    setQuantity(1);
  };

  const addToCart = (product = selectedProduct, color = selectedColor, size = selectedSize) => {
    if (!product || !color || !size) return;

    const newItem = {
      ...product,
      selectedColor: color,
      selectedSize: size,
      quantity,
      totalPrice: product.price * quantity,
    };

    const existingIndex = cart.findIndex(
      (item) =>
        item.id === product.id &&
        item.selectedColor === color &&
        item.selectedSize === size
    );

    if (existingIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingIndex].quantity += quantity;
      updatedCart[existingIndex].totalPrice =
        updatedCart[existingIndex].price * updatedCart[existingIndex].quantity;
      setCart(updatedCart);
    } else setCart([...cart, newItem]);

    closeProductModal();
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const updateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return removeFromCart(index);
    const updatedCart = [...cart];
    updatedCart[index].quantity = newQuantity;
    updatedCart[index].totalPrice = updatedCart[index].price * newQuantity;
    setCart(updatedCart);
  };

  const calculateTotal = () => cart.reduce((sum, item) => sum + item.totalPrice, 0);

  const renderStars = () =>
    Array(5)
      .fill(0)
      .map((_, i) => (
        <span key={i} className="text-yellow-400 text-lg">
          ★
        </span>
      ));

  const renderProductCard = (product, index) => {
    return (
      <div className="bg-white p-4 rounded-2xl shadow-md h-full flex flex-col justify-between">
        <div className="overflow-hidden rounded-xl mb-4 relative group h-64">
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
              index % 2 === 0
                ? "group-hover:-rotate-3"
                : "group-hover:rotate-3"
            }`}
          />
        </div>

        <h3 className="font-bold text-lg mb-2">{product.name}</h3>

        <div className="flex gap-2 mb-2 flex-wrap">
          {product.colors.map((color) => (
            <span
              key={color}
              className={`px-2 py-1 text-xs rounded border ${
                selectedColor === color
                  ? "border-blue-600 bg-blue-50 text-blue-600"
                  : "border-gray-300"
              }`}
              onClick={() => setSelectedColor(color)}
            >
              {color}
            </span>
          ))}
        </div>

        <div className="flex gap-2 mb-2 flex-wrap">
          {product.sizes.map((size) => (
            <span
              key={size}
              className={`px-2 py-1 text-xs rounded border ${
                selectedSize === size
                  ? "border-blue-600 bg-blue-50 text-blue-600"
                  : "border-gray-300"
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center mb-2">
          <span className="font-bold">${product.price}</span>
          {product.oldPrice && <span className="line-through text-gray-400">${product.oldPrice}</span>}
        </div>

        <button
          onClick={() => addToCart(product, selectedColor, selectedSize)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded flex items-center justify-center mt-auto"
        >
          <ShoppingCart className="h-4 w-4 mr-1" /> Add
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* NEW ARRIVALS */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            NEW ARRIVALS
          </h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 4 } }}
          >
            {productsData.newArrivals.map((product, index) => (
              <SwiperSlide key={product.id}>{renderProductCard(product, index)}</SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* TOP SELLING */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            TOP SELLING
          </h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 4 } }}
          >
            {productsData.topSelling.map((product, index) => (
              <SwiperSlide key={product.id}>{renderProductCard(product, index)}</SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* CART */}
        <section id="cart" className="bg-white rounded-2xl shadow-lg p-6 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Shopping Cart ({cart.length})
          </h2>
          {cart.length === 0 ? (
            <p className="text-gray-600">Your cart is empty</p>
          ) : (
            <div className="space-y-4">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <p className="font-bold">{item.name}</p>
                      <p className="text-gray-600">
                        {item.selectedColor} / {item.selectedSize}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button onClick={() => updateQuantity(index, item.quantity - 1)}>
                      <Minus className="h-4 w-4" />
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(index, item.quantity + 1)}>
                      <Plus className="h-4 w-4" />
                    </button>
                    <span className="ml-4 font-bold">${item.totalPrice.toFixed(2)}</span>
                    <button onClick={() => removeFromCart(index)}>
                      <X className="h-5 w-5 text-red-600" />
                    </button>
                  </div>
                </div>
              ))}
              <div className="flex justify-between mt-4 font-bold">
                Total: ${calculateTotal().toFixed(2)}
              </div>

              {/* ------------- BUYURTMA BERISH TUGMASI ------------- */}
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => {
                    // shu yerda buyurtma berish logikasini qo‘sh
                    // Masalan, alert, navigatsiya, yoki modal ochish
                    alert(`Buyurtma berildi! Umumiy summa: $${calculateTotal().toFixed(2)}`);
                  }}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  Buyurtma berish
                </button>
              </div>
              {/* ------------------------------------------------- */}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Photos;
