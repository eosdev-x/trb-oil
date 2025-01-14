import React from 'react';
import { Wrench, Package } from 'lucide-react';
import { CategoryList } from './CategoryList';
import { TeamSection } from './TeamSection';
import { serviceEquipment, sellableEquipment, team } from './data';

export default function ToolsSales() {
  return (
    <section id="tools-sales" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Tools & Sales</h2>
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
            <CategoryList data={serviceEquipment} />
          </div>

          {/* Sellable Equipment */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Package className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Sellable Equipment</h3>
            </div>
            <CategoryList data={sellableEquipment} />
          </div>
        </div>

        <TeamSection team={team} />
      </div>
    </section>
  );
}