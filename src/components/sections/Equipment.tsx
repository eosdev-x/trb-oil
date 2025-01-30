import React from 'react';

const equipment = [
  {
    image: "src/assets/trb_cpu_op.jpg",
    title: "Coiled Tubing Units",
    specs: [
      "Working pressure: 15,000 psi",
      "Tubing sizes: 1.5\" to 2.875\"",
      "Depth capacity: 25,000 ft"
    ]
  },
  {
    image: "src/assets/trb_cement_op.jpg",
    title: "Cementing Units",
    specs: [
      "Pump rate: 15 bpm",
      "Maximum pressure: 10,000 psi",
      "Mixing capacity: 100 bbl/min"
    ]
  },
  {
    image: "src/assets/trb_nitro_op.jpg",
    title: "Nitrogen Pumping Units",
    specs: [
      "Discharge pressure: 10,000 psi",
      "Flow rate: 180 m³/min",
      "Storage capacity: 15,000 gal"
    ]
  }
];

export default function Equipment() {
  return (
    <section id="equipment" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Equipment</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            State-of-the-art machinery maintained to the highest industry standards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipment.map((item, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                <ul className="space-y-2">
                  {item.specs.map((spec, specIndex) => (
                    <li key={specIndex} className="text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}