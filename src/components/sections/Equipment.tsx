import React from 'react';

const equipment = [
  {
    image: "https://qxpzubxgahiruuxnzlev.supabase.co/storage/v1/object/sign/TRB-assets/Coiled_Tubing_Unit.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJUUkItYXNzZXRzL0NvaWxlZF9UdWJpbmdfVW5pdC5qcGciLCJpYXQiOjE3MzgwMTgzMDQsImV4cCI6MTc2OTU1NDMwNH0.AeDldMCTfRIFWCp-jyf0KGFtJcL8BoETnjwUIF3ssQs",
    title: "Coiled Tubing Units",
    specs: [
      "Working pressure: 15,000 psi",
      "Tubing sizes: 1.5\" to 2.875\"",
      "Depth capacity: 25,000 ft"
    ]
  },
  {
    image: "https://qxpzubxgahiruuxnzlev.supabase.co/storage/v1/object/sign/TRB-assets/Trailer_Mounted_Cement_Unit.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJUUkItYXNzZXRzL1RyYWlsZXJfTW91bnRlZF9DZW1lbnRfVW5pdC5qcGciLCJpYXQiOjE3MzgwMTgzNzQsImV4cCI6MTc2OTU1NDM3NH0.-JLB79KOFnSxY-P465EAs4Yf2QN2s8DFL3lxQ85Sy8w",
    title: "Cementing Units",
    specs: [
      "Pump rate: 15 bpm",
      "Maximum pressure: 10,000 psi",
      "Mixing capacity: 100 bbl/min"
    ]
  },
  {
    image: "https://qxpzubxgahiruuxnzlev.supabase.co/storage/v1/object/sign/TRB-assets/hydrogenPumpingUnit.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJUUkItYXNzZXRzL2h5ZHJvZ2VuUHVtcGluZ1VuaXQuanBlZyIsImlhdCI6MTczODAxODM4OCwiZXhwIjoxNzY5NTU0Mzg4fQ.LdOB_ugK_BmOWhoQ2M_UyB1ZR85wPoFpRRPa-neNcbw",
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