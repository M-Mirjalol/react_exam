import React from 'react';
import casualImg from '../../assets/k1.svg';
import formalImg from '../../assets/k2.svg';
import partyImg from '../../assets/k3.svg';
import gymImg from '../../assets/k4.svg';

const BrowseByDressStyle = () => {
  const categories = [
    {
      id: 1,
      title: "Casual",
      description: "Comfortable and relaxed outfits for everyday wear.",
      image: casualImg,
      color: "border-blue-100 hover:border-blue-300"
    },
    {
      id: 2,
      title: "Formal",
      description: "Elegant and professional attire for formal occasions.",
      image: formalImg,
      color: "border-gray-100 hover:border-gray-300"
    },
    {
      id: 3,
      title: "Party",
      description: "Trendy and stylish outfits for parties and events.",
      image: partyImg,
      color: "border-purple-100 hover:border-purple-300"
    },
    {
      id: 4,
      title: "Gym",
      description: "Sporty and comfortable wear for workouts and gym.",
      image: gymImg,
      color: "border-green-100 hover:border-green-300"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 md:p-8">
      <div className="max-w-6xl w-full mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12">
        {/* Sarlavha qismi */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 tracking-wide">
            BROWSE BY DRESS STYLE
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover the perfect outfit for every occasion in our curated collection
          </p>
        </div>

        {/* Kategoriyalar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`bg-white rounded-2xl shadow-lg border-2 ${category.color} transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer p-6 flex flex-col items-center text-center`}
            >
              {/* Rasm */}
              <div className="w-32 h-32 md:w-40 md:h-40 mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Matn */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                {category.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {category.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Qo'shimcha matn */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Explore our wide range of clothing options tailored for every style and occasion
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrowseByDressStyle;