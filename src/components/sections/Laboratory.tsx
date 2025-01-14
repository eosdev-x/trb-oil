import React from 'react';
import { Beaker, Microscope, FileSpreadsheet } from 'lucide-react';

export default function Laboratory() {
  return (
    <section id="laboratory" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Laboratory Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Advanced testing facilities ensuring quality and compliance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Beaker className="h-8 w-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Fluid Analysis</h3>
                <p className="text-gray-600">
                  Comprehensive testing of drilling fluids, completion fluids, and cement slurries to ensure optimal performance and reliability.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Microscope className="h-8 w-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Material Testing</h3>
                <p className="text-gray-600">
                  Detailed analysis of materials including metallurgical testing, corrosion studies, and mechanical properties evaluation.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FileSpreadsheet className="h-8 w-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Quality Reporting</h3>
                <p className="text-gray-600">
                  Detailed documentation and certification of all testing procedures and results, ensuring compliance with industry standards.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Testing Capabilities</h3>
            <div className="space-y-4">
              {[
                "API Fluid Loss Testing",
                "Rheological Properties Analysis",
                "Thickening Time Testing",
                "Compressive Strength Testing",
                "Chemical Compatibility Testing",
                "Particle Size Analysis",
                "Temperature Stability Testing",
                "Water Quality Analysis"
              ].map((capability, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-600">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}