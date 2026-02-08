import React, { useEffect } from "react";
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
    useEffect(() => {
        AOS.init({
            duration: 900,
            once: true,
            easing: "ease-in-out",
        });
    }, []);

    return (
        <footer className="w-full bg-white mt-10">
            {/* Newsletter */}
            <div className="max-w-6xl mx-auto px-4">
                <div
                    data-aos="zoom-in"
                    className="bg-black rounded-[30px] p-6 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl"
                >
                    <h2 className="text-white font-extrabold text-2xl md:text-4xl leading-tight text-center md:text-left uppercase">
                        Stay up to date about our <br /> latest offers
                    </h2>

                    <div className="w-full md:w-[420px] flex flex-col gap-4">
                        <div className="relative w-full">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg">
                                ✉
                            </span>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full bg-white rounded-full py-3 pl-12 pr-4 outline-none border border-gray-200 focus:ring-2 focus:ring-gray-400"
                            />
                        </div>

                        <button className="w-full bg-white rounded-full py-3 font-semibold hover:bg-gray-200 transition">
                            Subscribe to Newsletter
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Main */}
            <div className="max-w-6xl mx-auto px-4 mt-12 pb-10">
                {/* Mobil uchun 2 qatorli layout */}
                <div className="md:hidden">
                    {/* Birinchi qator: Brand va Company */}
                    <div className="grid grid-cols-2 gap-8 mb-8">
                        {/* Brand Section */}
                        <div className="col-span-2 mb-6">
                            <h1 className="text-2xl font-extrabold">SHOP.CO</h1>
                            <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                                We have clothes that suits your style and which you're proud to wear. From women to men.
                            </p>
                            <div className="flex gap-4 mt-6 text-black text-lg">
                                <a href="#" className="hover:scale-110 transition">
                                    <FaXTwitter />
                                </a>
                                <a href="#" className="hover:scale-110 transition">
                                    <FaFacebookF />
                                </a>
                                <a href="#" className="hover:scale-110 transition">
                                    <FaInstagram />
                                </a>
                                <a href="#" className="hover:scale-110 transition">
                                    <FaGithub />
                                </a>
                            </div>
                        </div>

                        {/* Column 1 - Company */}
                        <div>
                            <h2 className="font-bold text-black mb-4">Company</h2>
                            <ul className="space-y-3 text-gray-600 text-sm">
                                <li className="hover:text-black cursor-pointer">About</li>
                                <li className="hover:text-black cursor-pointer">
                                    Features of SHOP.CO
                                </li>
                                <li className="hover:text-black cursor-pointer">Works</li>
                                <li className="hover:text-black cursor-pointer">Career</li>
                            </ul>
                        </div>

                        {/* Column 2 - Help */}
                        <div>
                            <h2 className="font-bold text-black mb-4">Help</h2>
                            <ul className="space-y-3 text-gray-600 text-sm">
                                <li className="hover:text-black cursor-pointer">
                                    Customer Support
                                </li>
                                <li className="hover:text-black cursor-pointer">Delivery Details</li>
                                <li className="hover:text-black cursor-pointer">
                                    Terms & Conditions
                                </li>
                                <li className="hover:text-black cursor-pointer">Privacy Policy</li>
                            </ul>
                        </div>
                    </div>

                    {/* Ikkinchi qator: FAQ va Resources */}
                    <div className="grid grid-cols-2 gap-8">
                        {/* Column 3 - FAQ */}
                        <div>
                            <h2 className="font-bold text-black mb-4">FAQ</h2>
                            <ul className="space-y-3 text-gray-600 text-sm">
                                <li className="hover:text-black cursor-pointer">Account</li>
                                <li className="hover:text-black cursor-pointer">
                                    Manage Deliveries
                                </li>
                                <li className="hover:text-black cursor-pointer">Orders</li>
                                <li className="hover:text-black cursor-pointer">Payments</li>
                            </ul>
                        </div>

                        {/* Column 4 - Resources */}
                        <div>
                            <h2 className="font-bold text-black mb-4">Resources</h2>
                            <ul className="space-y-3 text-gray-600 text-sm">
                                <li className="hover:text-black cursor-pointer">Free eBooks</li>
                                <li className="hover:text-black cursor-pointer">
                                    Development Tutorial
                                </li>
                                <li className="hover:text-black cursor-pointer">How to - Blog</li>
                                <li className="hover:text-black cursor-pointer">
                                    Youtube Playlist
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Desktop uchun 5 ustunli layout */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-5 gap-10">
                    {/* Left */}
                    <div data-aos="zoom-in" className="md:col-span-1">
                        <h1 className="text-2xl font-extrabold">SHOP.CO</h1>
                        <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                            We have clothes that suits your style and which you're proud to
                            wear. From women to men.
                        </p>

                        <div className="flex gap-4 mt-6 text-black text-lg">
                            <a
                                href="#"
                                className="hover:scale-110 transition"
                                data-aos="zoom-in"
                            >
                                <FaXTwitter />
                            </a>
                            <a href="#" className="hover:scale-110 transition">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="hover:scale-110 transition">
                                <FaInstagram />
                            </a>
                            <a href="#" className="hover:scale-110 transition">
                                <FaGithub />
                            </a>
                        </div>
                    </div>

                    {/* Column 1 */}
                    <div data-aos="zoom-in">
                        <h2 className="font-bold text-black mb-4">Company</h2>
                        <ul className="space-y-3 text-gray-600 text-sm">
                            <li className="hover:text-black cursor-pointer">About</li>
                            <li className="hover:text-black cursor-pointer">
                                Features of SHOP.CO
                            </li>
                            <li className="hover:text-black cursor-pointer">Works</li>
                            <li className="hover:text-black cursor-pointer">Career</li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div data-aos="zoom-in">
                        <h2 className="font-bold text-black mb-4">Help</h2>
                        <ul className="space-y-3 text-gray-600 text-sm">
                            <li className="hover:text-black cursor-pointer">
                                Customer Support
                            </li>
                            <li className="hover:text-black cursor-pointer">Delivery Details</li>
                            <li className="hover:text-black cursor-pointer">
                                Terms & Conditions
                            </li>
                            <li className="hover:text-black cursor-pointer">Privacy Policy</li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div data-aos="zoom-in">
                        <h2 className="font-bold text-black mb-4">FAQ</h2>
                        <ul className="space-y-3 text-gray-600 text-sm">
                            <li className="hover:text-black cursor-pointer">Account</li>
                            <li className="hover:text-black cursor-pointer">
                                Manage Deliveries
                            </li>
                            <li className="hover:text-black cursor-pointer">Orders</li>
                            <li className="hover:text-black cursor-pointer">Payments</li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div data-aos="zoom-in">
                        <h2 className="font-bold text-black mb-4">Resources</h2>
                        <ul className="space-y-3 text-gray-600 text-sm">
                            <li className="hover:text-black cursor-pointer">Free eBooks</li>
                            <li className="hover:text-black cursor-pointer">
                                Development Tutorial
                            </li>
                            <li className="hover:text-black cursor-pointer">How to - Blog</li>
                            <li className="hover:text-black cursor-pointer">
                                Youtube Playlist
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm text-center md:text-left">
                        Shop.co © 2000-2024, All Rights Reserved
                    </p>

                    <div className="flex gap-3 flex-wrap justify-center">
                        <img
                            className="h-7"
                            src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                            alt="visa"
                        />
                        <img
                            className="h-7"
                            src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                            alt="mastercard"
                        />
                        <img
                            className="h-7"
                            src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                            alt="paypal"
                        />
                        <img
                            className="h-7"
                            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                            alt="applepay"
                        />
                        <img
                            src="https://logo.svgcdn.com/logos/google-pay.svg"
                            alt="gpay"
                            className="h-7 w-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;