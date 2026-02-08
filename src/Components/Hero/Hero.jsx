import React, { useState, useEffect } from "react";
import Img1 from "./Images/rasm1.svg";
import Img2 from "./Images/rasm2.svg";
import Img3 from "./Images/rasm3.svg";

const Hero = () => {
  const stats = [
    { label: "International Brands", value: 200 },
    { label: "High-Quality Products", value: 2000 },
    { label: "Happy Customers", value: 30000 },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Statistika animatsiyasi
    const duration = 2000;
    const intervalTime = 30;
    const increments = stats.map(stat =>
      Math.ceil(stat.value / (duration / intervalTime))
    );

    const interval = setInterval(() => {
      setCounts(prev =>
        prev.map((count, idx) =>
          count < stats[idx].value
            ? Math.min(count + increments[idx], stats[idx].value)
            : count
        )
      );
    }, intervalTime);

    // Hero chiqib kelish effektini faollashtirish
    setAnimate(true);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#F2F0F1] w-full min-h-screen flex items-center">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between py-14">

        {/* Matn qismi */}
        <div
          className={`w-full md:w-1/2 flex flex-col justify-center z-10 transition-all duration-1000 ${animate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
        >
          <h1 className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[72px] font-black leading-[1.1] text-black mb-6 tracking-tighter">
            FIND CLOTHES <br />
            THAT MATCHES <br />
            YOUR STYLE
          </h1>

          <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-10 max-w-[650px]">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of style.
          </p>

          <button className="w-full md:w-auto bg-black text-white px-16 py-4 rounded-full font-medium hover:bg-black/80 transition-all mb-14">
            Shop Now
          </button>

          {/* Statistika */}
          <div className="flex flex-wrap gap-10 md:gap-14">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold">{counts[idx].toLocaleString()}</h3>
                <p className="text-gray-500 text-xs md:text-sm lg:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Rasm qismi */}
        <div
          className={`w-full md:w-1/2 relative flex justify-center md:justify-end mt-10 md:mt-0 transition-all duration-1000 ${animate ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
        >
          <div className="relative w-full max-w-[700px] flex items-center justify-center">

            {/* Asosiy rasm */}
            <img
              src={Img1}
              alt="Main Model"
              className="relative left-20 z-10 w-[320px] md:w-[420px] lg:w-[520px] h-auto object-contain"
            />


            {/* Chap pastdagi yulduz */}
            <img
              src={Img2}
              alt="Star 1"
              className="absolute w-16 md:w-24 bottom-12 left-6 md:left-0 animate-pulse z-20"
            />

            {/* O'ng yuqoridagi yulduz */}
            <img
              src={Img3}
              alt="Star 2"
              className="absolute w-24 md:w-32 top-6 right-6 md:right-0 animate-pulse delay-700 z-20"
            />

            {/* Qo'shimcha yulduz */}
            <div className="absolute w-12 md:w-16 bottom-36 right-12 animate-pulse delay-300 opacity-70">
              <StarIcon />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StarIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M52 0L58.1778 45.8222L104 52L58.1778 58.1778L52 104L45.8222 58.1778L0 52L45.8222 45.8222L52 0Z" fill="black" fillOpacity="0.2" />
  </svg>
);

export default Hero;
