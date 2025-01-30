import React from 'react';

export default function Hero() {
  return (
    <div className="relative min-h-[600px] h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("src/assets/trb_hero_op.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 pt-20">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Advanced Oilfield Solutions for Tomorrow's Challenges
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8">
              Delivering comprehensive well services with cutting-edge technology and unmatched expertise
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#services" 
                className="inline-block bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
              >
                Our Services
              </a>
              <a 
                href="#contact" 
                className="inline-block bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors text-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}