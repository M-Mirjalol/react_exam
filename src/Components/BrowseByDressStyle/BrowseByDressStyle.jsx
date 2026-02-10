import React from 'react';
import { useTranslation } from 'react-i18next';
import casualImg from '../../assets/k1.svg';
import formalImg from '../../assets/k2.svg';
import partyImg from '../../assets/k3.svg';
import gymImg from '../../assets/k4.svg';

const BrowseByDressStyle = () => {
  const { t } = useTranslation();

  const categories = [
    {
      id: 1,
      title: t("browse.casualTitle"),
      description: t("browse.casualDesc"),
      image: casualImg,
      glow: "shadow-blue-400/50",
    },
    {
      id: 2,
      title: t("browse.formalTitle"),
      description: t("browse.formalDesc"),
      image: formalImg,
      glow: "shadow-gray-400/50",
    },
    {
      id: 3,
      title: t("browse.partyTitle"),
      description: t("browse.partyDesc"),
      image: partyImg,
      glow: "shadow-purple-400/50",
    },
    {
      id: 4,
      title: t("browse.gymTitle"),
      description: t("browse.gymDesc"),
      image: gymImg,
      glow: "shadow-green-400/50",
    }
  ];

  return (
    <section className="relative bg-[#0A0A0A] py-24 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="w-1 h-1 bg-white/10 rounded-full absolute animate-bounce-slow" style={{ top: '20%', left: '10%' }} />
        <div className="w-2 h-2 bg-white/20 rounded-full absolute animate-bounce-slow delay-500" style={{ top: '60%', left: '70%' }} />
        <div className="w-1.5 h-1.5 bg-white/15 rounded-full absolute animate-bounce-slow delay-1000" style={{ top: '40%', left: '50%' }} />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Sarlavha */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight uppercase">
            {t("browse.title")}
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            {t("browse.subtitle")}
          </p>
        </div>

        {/* Kategoriyalar Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`group relative bg-white/5 border border-white/10 rounded-[2.5rem] p-8 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-4 hover:bg-white/10`}
            >
              {/* Rasm konteyneri */}
              <div className="relative w-40 h-40 mb-8 rounded-full p-1 bg-gradient-to-tr from-white/20 to-transparent">
                <div className={`w-full h-full rounded-full overflow-hidden border-2 border-white/10 bg-[#111] transition-transform duration-700 group-hover:scale-105 ${category.glow}`}>
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                </div>
              </div>

              {/* Matn */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors transform group-hover:-translate-y-1">
                {category.title}
              </h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
                {category.description}
              </p>

              {/* Neon glow button */}
              <button className="mt-auto w-full py-3 px-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold rounded-2xl shadow-[0_0_20px_rgba(128,0,255,0.5)] hover:shadow-[0_0_30px_rgba(128,0,255,0.8)] hover:scale-105 transition-all duration-300 transform active:scale-95">
                {t("browse.explore")}
              </button>
            </div>
          ))}
        </div>

        {/* Footer matni */}
        <div className="mt-24 text-center z-10 relative">
          <p className="text-gray-600 text-sm tracking-widest uppercase">
            {t("browse.footerText")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrowseByDressStyle;
