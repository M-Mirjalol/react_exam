// Photos.jsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { ShoppingCart, X, Plus, Minus } from "lucide-react";

// Rasmlar importi (o'zgarishsiz qoladi)
import tshirtTape from "./Images/Image1.svg";
import skinnyJeans from "./Images/Image2.svg";
import checkeredShirt from "./Images/image3.svg";
import stripedTshirt from "./Images/image4.svg";
import verticalShirt from "./Images/image5.svg";
import graphiteTshirt from "./Images/image6.svg";
import bermudaShorts from "./Images/image7.svg";
import fadedJeans from "./Images/image8.svg";

const productsData = {
  newArrivals: [
    { id: 1, name: "T-shirt with Tape Dots", price: 120, image: tshirtTape, colors: ["Black", "White"], sizes: ["S", "M", "L"] },
    { id: 2, name: "SKINNY FIT Jeans", price: 240, oldPrice: 260, image: skinnyJeans, colors: ["Blue", "Black"], sizes: ["30", "32"] },
    { id: 3, name: "Checkered Shirt", price: 180, image: checkeredShirt, colors: ["Red", "Blue"], sizes: ["M", "L"] },
    { id: 4, name: "Sleeve Striped T-shirt", price: 130, oldPrice: 160, image: stripedTshirt, colors: ["Navy", "Black"], sizes: ["S", "XL"] },
  ],
  topSelling: [
    { id: 5, name: "Vertical Striped Shirt", price: 212, oldPrice: 232, image: verticalShirt, colors: ["Blue", "White"], sizes: ["S", "M"] },
    { id: 6, name: "Courage Graphite T-shirt", price: 145, image: graphiteTshirt, colors: ["Gray", "Black"], sizes: ["L", "XL"] },
    { id: 7, name: "Loose Fit Bermuda Shorts", price: 80, image: bermudaShorts, colors: ["Khaki", "Black"], sizes: ["M", "L"] },
    { id: 8, name: "Faded Skinny Jeans", price: 210, image: fadedJeans, colors: ["Light Blue"], sizes: ["28", "30"] },
  ],
};

const Photos = () => {
  const { t } = useTranslation();
  const [cart, setCart] = useState([]);
  const [selectedProductStates, setSelectedProductStates] = useState({});

  const handleSelection = (productId, type, value) => {
    setSelectedProductStates(prev => ({
      ...prev,
      [productId]: { ...prev[productId], [type]: value }
    }));
  };

  const addToCart = (product) => {
    const state = selectedProductStates[product.id] || {};
    const color = state.color || product.colors[0];
    const size = state.size || product.sizes[0];

    const newItem = {
      ...product,
      selectedColor: color,
      selectedSize: size,
      quantity: 1,
      totalPrice: product.price,
    };

    const existingIndex = cart.findIndex(item => 
      item.id === product.id && item.selectedColor === color && item.selectedSize === size
    );

    if (existingIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingIndex].quantity += 1;
      updatedCart[existingIndex].totalPrice = updatedCart[existingIndex].price * updatedCart[existingIndex].quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (index) => setCart(cart.filter((_, i) => i !== index));
  const updateQuantity = (index, q) => {
    if (q < 1) return removeFromCart(index);
    const updated = [...cart];
    updated[index].quantity = q;
    updated[index].totalPrice = updated[index].price * q;
    setCart(updated);
  };

  const renderProductCard = (product) => {
    const state = selectedProductStates[product.id] || { color: product.colors[0], size: product.sizes[0] };
    
    return (
      <div className="bg-white/5 border border-white/10 p-6 rounded-[2rem] hover:bg-white/10 transition-all duration-500 flex flex-col h-full group">
        <div className="relative overflow-hidden rounded-2xl mb-6 h-64 flex items-center justify-center bg-[#111] border border-white/5">
          <img src={product.image} alt={product.name} className="w-44 h-44 object-contain group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0" />
        </div>

        <h3 className="font-bold text-xl mb-3 text-white truncate">{product.name}</h3>

        <div className="flex gap-2 mb-3 flex-wrap">
          {product.colors.map(c => (
            <button 
              key={c} 
              onClick={() => handleSelection(product.id, 'color', c)}
              className={`px-3 py-1 text-[10px] uppercase tracking-widest rounded-full border transition-all ${state.color === c ? 'bg-white text-black border-white' : 'border-white/20 text-gray-400 hover:border-white/50'}`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="flex gap-2 mb-4 flex-wrap">
          {product.sizes.map(s => (
            <button 
              key={s} 
              onClick={() => handleSelection(product.id, 'size', s)}
              className={`px-3 py-1 text-xs rounded-lg border transition-all ${state.size === s ? 'bg-indigo-600 text-white border-indigo-600' : 'border-white/10 text-gray-500 hover:border-white/30'}`}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="flex justify-between items-center mt-auto">
          <div>
            <span className="text-2xl font-black text-white">${product.price}</span>
            {product.oldPrice && <span className="ml-2 line-through text-gray-600 text-sm">${product.oldPrice}</span>}
          </div>
          <button 
            onClick={() => addToCart(product)}
            className="p-3 bg-white text-black rounded-xl hover:bg-indigo-500 hover:text-white transition-all transform active:scale-90"
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Sections */}
        {['newArrivals', 'topSelling'].map((key) => (
          <section key={key} className="mb-24">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
                {t(`photos.${key}`)}
              </h2>
              <div className="h-[2px] flex-1 bg-gradient-to-r from-white/20 to-transparent ml-8 hidden md:block"></div>
            </div>
            
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 4 } }}
              className="pb-12 !overflow-visible"
            >
              {productsData[key].map((product) => (
                <SwiperSlide key={product.id}>{renderProductCard(product)}</SwiperSlide>
              ))}
            </Swiper>
          </section>
        ))}

        {/* CART - DARK THEME */}
        <section id="cart" className="relative mt-32">
          <div className="absolute inset-0 bg-indigo-600/10 blur-[120px] rounded-full"></div>
          <div className="relative bg-white/5 border border-white/10 backdrop-blur-md rounded-[3rem] p-8 md:p-12 overflow-hidden">
            <h2 className="text-3xl font-black text-white mb-10 flex items-center gap-4">
              <ShoppingCart className="text-indigo-500" /> {t("photos.cartTitle", { count: cart.length })}
            </h2>

            {cart.length === 0 ? (
              <div className="text-center py-20 border-2 border-dashed border-white/10 rounded-3xl">
                <p className="text-gray-500 text-xl">{t("photos.cartEmpty")}</p>
              </div>
            ) : (
              <div className="space-y-8">
                {cart.map((item, index) => (
                  <div key={index} className="flex flex-col md:row items-center justify-between gap-6 p-4 rounded-2xl hover:bg-white/5 transition-colors border-b border-white/5 pb-8">
                    <div className="flex items-center gap-6 w-full">
                      <div className="w-24 h-24 bg-[#111] rounded-2xl p-2 border border-white/10">
                        <img src={item.image} alt="" className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg">{item.name}</h4>
                        <p className="text-indigo-400 text-sm">{item.selectedColor} • {item.selectedSize}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between w-full md:w-auto gap-8">
                      <div className="flex items-center bg-white/5 rounded-xl p-1 border border-white/10">
                        <button onClick={() => updateQuantity(index, item.quantity - 1)} className="p-2 text-white hover:text-indigo-400"><Minus size={16}/></button>
                        <span className="px-4 text-white font-bold">{item.quantity}</span>
                        <button onClick={() => updateQuantity(index, item.quantity + 1)} className="p-2 text-white hover:text-indigo-400"><Plus size={16}/></button>
                      </div>
                      <span className="text-xl font-black text-white w-24 text-right">${item.totalPrice}</span>
                      <button onClick={() => removeFromCart(index)} className="text-gray-500 hover:text-red-500 transition-colors"><X size={20}/></button>
                    </div>
                  </div>
                ))}

                <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="text-gray-400">
                    Total Amount: <span className="text-4xl font-black text-white ml-2">${cart.reduce((s, i) => s + i.totalPrice, 0)}</span>
                  </div>
                  <button className="w-full md:w-auto px-12 py-4 bg-white text-black font-black rounded-2xl hover:bg-indigo-500 hover:text-white transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                    {t("photos.orderNow")}
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Photos;