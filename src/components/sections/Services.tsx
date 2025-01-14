import React from 'react';
import { Droplet, Wrench, Beaker, Wind, ShoppingBag, Activity } from 'lucide-react';

const services = [
  {
    icon: Droplet,
    title: 'Well Abandonment',
    description: 'Complete well abandonment services ensuring environmental compliance and safety standards.'
  },
  {
    icon: Wrench,
    title: 'Cementing Operations',
    description: 'Primary and remedial cementing with advanced slurry designs and placement techniques.'
  },
  {
    icon: Activity,
    title: 'Coiled Tubing',
    description: 'Precision coiled tubing intervention for well maintenance and stimulation operations.'
  },
  {
    icon: Beaker,
    title: 'Laboratory Testing',
    description: 'Comprehensive fluid analysis and material testing in our state-of-the-art laboratory.'
  },
  {
    icon: Wind,
    title: 'Nitrogen Services',
    description: 'High-pressure nitrogen services for various well intervention applications.'
  },
  {
    icon: ShoppingBag,
    title: 'Tool Sales',
    description: 'Quality oilfield tools and equipment from trusted manufacturers.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive oilfield solutions delivered with expertise and precision
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <service.icon className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600 mb-4 sm:mb-6" />
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">{service.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}