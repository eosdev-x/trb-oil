import React from 'react';
import { Wrench, Package, Settings, Users } from 'lucide-react';

const serviceEquipment = [
  {
    category: "Bridge Plugs",
    items: ["Retrievable Plugs", "Abandonment Plugs", "Wireline Set Plugs", "Horizontal Plugs"]
  },
  {
    category: "Packers",
    items: ["Test Packers", "Stimulation Packers", "Wireline Set Packers", "Multi Set Inflatable Test Packers"]
  },
  {
    category: "Rentals",
    items: ["Scrapers", "Bumper Subs", "Tubing Swivels", "Cup Wash Tools", "Portable Test Pump", "Barton Chart Recorder"]
  }
];

const sellableEquipment = [
  {
    category: "Completion Packers",
    items: ["Hydraulic Packers", "Dual String Packers", "Seal Bore Packers", "Inflatable Packers", "Thermal Packers"]
  },
  {
    category: "Completion Accessories",
    items: ["On/Off Tools", "Profile Nipples", "Expansion Joints", "Premium Coating Services"]
  },
  {
    category: "Drillable Products",
    items: ["Cast Iron Bridge Plugs", "Cast Iron Cement Retainers", "Composite Bridge Plugs", "Composite Cement Retainers", "Stimulation Plugs"]
  },
  {
    category: "Production Equipment",
    items: ["Hydraulic Tubing Anchor", "Mechanical Tubing Anchor"]
  }
];

const team = [
  {
    name: "Tim Barman",
    position: "CEO and President"
  },
  {
    name: "Erik Hertin",
    position: "Operations Manager"
  },
  {
    name: "Jonathan Camarena",
    position: "Sales Representative"
  }
];

export default function ToolsSales() {
  return (
    <section id="tools-sales" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Equipment & Sales</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a full line of cased hole completion products for both complex and conventional applications, with an emphasis on safety and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Service Equipment */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Wrench className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Service Equipment</h3>
            </div>
            <div className="space-y-6">
              {serviceEquipment.map((category, index) => (
                <div key={index}>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{category.category}</h4>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Sellable Equipment */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Package className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Sellable Equipment</h3>
            </div>
            <div className="space-y-6">
              {sellableEquipment.map((category, index) => (
                <div key={index}>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{category.category}</h4>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <div className="flex items-center mb-6">
            <Users className="h-8 w-8 text-blue-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-800">Our Team</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{member.name}</h4>
                <p className="text-gray-600">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}