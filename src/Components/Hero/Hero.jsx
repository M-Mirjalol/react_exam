import React, { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import Img1 from "./Images/rasm1.svg";
import Img2 from "./Images/Rasm2.svg";
import Img3 from "./Images/rasm3.svg";

// StarIcon komponenti
const StarIcon = ({ color = "white" }) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 104 104"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M52 0L58.1778 45.8222L104 52L58.1778 58.1778L52 104L45.8222 58.1778L0 52L45.8222 45.8222L52 0Z"
      fill={color}
      fillOpacity="0.4"
    />
  </svg>
);

const Hero = () => {
  const { t } = useTranslation();

  const stats = useMemo(() => [
    { label: t("hero.stats.brands"), value: 200 },
    { label: t("hero.stats.products"), value: 2000 },
    { label: t("hero.stats.customers"), value: 30000 },
  ], [t]);

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
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

    return () => clearInterval(interval);
  }, [stats]);

  return (
    <section className="w-full bg-[#0A0A0A] text-white pt-16 overflow-hidden min-h-screen flex items-center">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between py-16 w-full">

        {/* Matn qismi */}
        <div
          className={`w-full md:w-1/2 flex flex-col justify-center z-10 transition-all duration-1000 ${
            animate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <h1 className="text-[30px] sm:text-[40px] md:text-[60px] lg:text-[72px] font-extrabold leading-[1.1] text-white mb-6 tracking-tight uppercase">
            {t("hero.title")}
          </h1>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl mb-10 max-w-full sm:max-w-[550px] leading-relaxed">
            {t("hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <button className="bg-white text-black px-10 sm:px-14 py-3 sm:py-4 rounded-full font-bold shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:bg-gray-200 transform transition-all active:scale-95 text-sm sm:text-lg">
              {t("hero.button")}
            </button>
          </div>

          {/* Statistika */}
          <div className="flex flex-wrap md:flex-nowrap gap-3 sm:gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl px-4 sm:px-6 py-3 sm:py-4 flex-1 min-w-[100px] sm:min-w-[120px]"
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">
                  {counts[idx].toLocaleString()}+
                </h3>
                <p className="text-gray-400 text-[8px] sm:text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Rasm qismi */}
        <div
          className={`w-full md:w-1/2 relative flex justify-center md:justify-end mt-12 md:mt-0 transition-all duration-[1200ms] delay-300 ${
            animate ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="relative w-full max-w-[500px] sm:max-w-[550px] flex items-center justify-center">

            {/* Orqa fondagi yorug'lik */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-white/10 blur-[80px] sm:blur-[120px] rounded-full" />

            {/* Asosiy rasm */}
            <img
              src={Img1}
              alt="Model"
              className="relative z-10 w-[250px] sm:w-[350px] md:w-[420px] lg:w-[500px] h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            />

            {/* Animatsiyali yulduzlar */}
            <img
              src={Img2}
              alt="Star 1"
              className="absolute w-8 sm:w-12 md:w-16 bottom-8 -left-4 animate-pulse z-20 invert brightness-150 shadow-white"
            />

            <img
              src={Img3}
              alt="Star 2"
              className="absolute w-16 sm:w-20 md:w-28 -top-4 right-0 animate-[bounce_4s_infinite] z-20 invert brightness-200"
            />

            {/* SVG StarIcon */}
            <div className="absolute w-10 sm:w-12 md:w-16 top-1/2 -right-6 animate-pulse delay-700 opacity-50 z-20">
              <StarIcon color="white" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
