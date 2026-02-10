import React, { useEffect } from "react";
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const socialIcons = [
    { icon: <FaXTwitter />, link: "#" },
    { icon: <FaFacebookF />, link: "#" },
    { icon: <FaInstagram />, link: "#" },
    { icon: <FaGithub />, link: "#" },
  ];

  const columns = [
    {
      title: t("footer.company"),
      items: [
        t("footer.about"),
        t("footer.features"),
        t("footer.works"),
        t("footer.career"),
      ],
    },
    {
      title: t("footer.help"),
      items: [
        t("footer.support"),
        t("footer.delivery"),
        t("footer.terms"),
        t("footer.privacy"),
      ],
    },
    {
      title: t("footer.faq"),
      items: [
        t("footer.account"),
        t("footer.manage"),
        t("footer.orders"),
        t("footer.payments"),
      ],
    },
    {
      title: t("footer.resources"),
      items: [
        t("footer.ebooks"),
        t("footer.tutorial"),
        t("footer.blog"),
        t("footer.youtube"),
      ],
    },
  ];

  const paymentLogos = [
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg",
    "https://logo.svgcdn.com/logos/google-pay.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  ];

  return (
    <footer className="w-full bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900 text-white pt-16">
      {/* Newsletter */}
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <div
          data-aos="zoom-in"
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-[40px] p-6 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 shadow-2xl"
        >
          <h2 className="text-white font-extrabold text-2xl md:text-4xl leading-tight text-center md:text-left uppercase">
            {t("footer.newsletterTitle")}
          </h2>

          <div className="w-full md:w-[420px] flex flex-col sm:flex-row gap-4 mt-4 md:mt-0">
            <div className="relative flex-1">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-200 text-lg">
                ✉
              </span>
              <input
                type="email"
                placeholder={t("footer.emailPlaceholder")}
                className="w-full bg-white rounded-full py-3 pl-12 pr-4 outline-none border border-gray-200 focus:ring-2 focus:ring-blue-400 text-black transition"
              />
            </div>

            <button className="w-full sm:w-auto bg-white rounded-full py-3 px-6 font-semibold text-blue-600 hover:bg-gray-100 transition transform active:scale-95">
              {t("footer.subscribe")}
            </button>
          </div>
        </div>
      </div>

      {/* Footer Main */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand Section */}
          <div
            data-aos="fade-up"
            className="md:col-span-1 space-y-4 flex flex-col items-start"
          >
            <h1 className="text-3xl font-extrabold">SHOP.CO</h1>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t("footer.brandDesc")}
            </p>
            <div className="flex gap-4 mt-4 text-white text-lg">
              {socialIcons.map((icon, i) => (
                <a
                  key={i}
                  href={icon.link}
                  className="hover:scale-125 hover:text-blue-400 transition transform duration-300"
                >
                  {icon.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          {columns.map((col, i) => (
            <div key={i} data-aos="fade-up" className="space-y-4">
              <h2 className="font-bold text-lg">{col.title}</h2>
              <ul className="space-y-2 text-gray-300 text-sm">
                {col.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="hover:text-white hover:underline hover:underline-offset-4 cursor-pointer transition-all duration-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            {t("footer.copyright")}
          </p>

          <div className="flex gap-3 flex-wrap justify-center items-center">
            {paymentLogos.map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="payment"
                className="h-8 object-contain hover:scale-110 hover:opacity-80 transition duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
