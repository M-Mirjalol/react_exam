import React from 'react';
import { Star } from 'lucide-react'; // Yulduzcha uchun, agar kerak bo'lsa

const HappyCustomers = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      rating: 4,
      text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
    },
    {
      id: 2,
      name: "Alex K.",
      rating: 4,
      text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
    },
    {
      id: 3,
      name: "James L.",
      rating: 4,
      text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
    }
  ];

  // Yulduzchalarni render qilish
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, index) => (
      <svg 
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Sarlavha */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            OUR HAPPY CUSTOMERS
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            See what our customers are saying about their shopping experience
          </p>
        </div>

        {/* Sharhlar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Ism va reyting */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {testimonial.name}
                </h3>
                <div className="flex items-center space-x-1">
                  {renderStars(testimonial.rating)}
                  <span className="text-gray-500 text-sm ml-2">
                    {testimonial.rating}/5
                  </span>
                </div>
              </div>

              {/* Sharh matni */}
              <div className="relative">
                <svg 
                  className="absolute -top-2 -left-2 w-8 h-8 text-blue-100"
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 text-lg leading-relaxed pt-4">
                  {testimonial.text}
                </p>
              </div>

              {/* Chekka bezak */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 text-sm font-medium">
                    Verified Buyer
                  </span>
                  <span className="text-gray-400 text-sm">
                    ★ ★ ★ ★ ★
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Qo'shimcha tugma yoki matn */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg">
            Read More Reviews
          </button>
          <p className="text-gray-500 mt-6">
            Join thousands of satisfied customers who love shopping with us
          </p>
        </div>
      </div>
    </div>
  );
};

export default HappyCustomers;