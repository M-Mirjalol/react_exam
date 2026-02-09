// BrowseByDressStyle.jsx
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
      glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]", // Moviy nur
    },
    {
      id: 2,
      title: t("browse.formalTitle"),
      description: t("browse.formalDesc"),
      image: formalImg,
      glow: "group-hover:shadow-[0_0_30px_rgba(156,163,175,0.3)]", // Kumushrang nur
    },
    {
      id: 3,
      title: t("browse.partyTitle"),
      description: t("browse.partyDesc"),
      image: partyImg,
      glow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]", // Binafsharang nur
    },
    {
      id: 4,
      title: t("browse.gymTitle"),
      description: t("browse.gymDesc"),
      image: gymImg,
      glow: "group-hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]", // Yashil nur
    }
  ];

  return (
    <section className="bg-[#0A0A0A] py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Sarlavha */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight uppercase">
            {t("browse.title")}
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div> {/* Dekorativ chiziq */}
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            {t("browse.subtitle")}
          </p>
        </div>

        {/* Kategoriyalar Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`group relative bg-white/5 border border-white/10 rounded-[2.5rem] p-8 flex flex-col items-center text-center transition-all duration-500 hover:bg-white/10 hover:-translate-y-4 ${category.glow}`}
            >
              {/* Rasm konteyneri */}
              <div className="relative w-40 h-40 mb-8 rounded-full p-1 bg-gradient-to-tr from-white/20 to-transparent">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/10 bg-[#111]">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                </div>
              </div>

              {/* Matnli qism */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors">
                {category.title}
              </h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
                {category.description}
              </p>

              {/* Button - Minimalistik dizayn */}
              <button className="mt-auto w-full py-3 bg-white text-black font-bold rounded-2xl hover:bg-gray-200 transition-all duration-300 transform active:scale-95 shadow-lg">
                {t("browse.explore")}
              </button>
            </div>
          ))}
        </div>

        {/* Footer qismi */}
        <div className="mt-24 text-center">
          <p className="text-gray-600 text-sm tracking-widest uppercase">
            {t("browse.footerText")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrowseByDressStyle;