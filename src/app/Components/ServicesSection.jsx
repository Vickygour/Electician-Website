import React from 'react';
import { Zap, Plus } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: 'Commercial',
      image:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
      clipClass: 'lg:[clip-path:polygon(0_0,100%_0,85%_100%,0%_100%)]',
    },
    {
      title: 'Industrial',
      image:
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
      // This panel has slanted edges on both sides to create the overlap effect
      clipClass:
        'lg:[clip-path:polygon(15%_0,100%_0,85%_100%,0%_100%)] lg:-ml-[5%]',
    },
    {
      title: 'Residential',
      image:
        'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop',
      clipClass:
        'lg:[clip-path:polygon(15%_0,100%_0,100%_100%,0%_100%)] lg:-ml-[5%]',
    },
  ];

  return (
    <section className="w-full h-auto lg:h-[600px] flex flex-col lg:flex-row bg-black overflow-hidden">
      {services.map((service, index) => (
        <div
          key={index}
          className={`relative group flex-1 h-[400px] lg:h-full overflow-hidden transition-all duration-500 ease-in-out z-10 hover:z-20 hover:scale-[1.02] lg:hover:scale-105 ${service.clipClass}`}
        >
          {/* Background Image with Zoom Effect */}
          <img
            src={service.image}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          />

          {/* Dark Overlay - Lightens on hover */}
          <div className="absolute inset-0 bg-blue-900/60 transition-colors duration-500 group-hover:bg-black/40" />

          {/* Content Container */}
          <div className="relative h-full flex flex-col items-center justify-center text-white p-6">
            {/* Lightning Icon */}
            <div className="mb-4 transform transition-transform duration-500 group-hover:-translate-y-2">
              <Zap size={48} fill="white" className="drop-shadow-lg" />
            </div>

            {/* Title */}
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 transition-all duration-500 group-hover:tracking-widest">
              {service.title}
            </h3>

            {/* Orange Plus Button */}
            <button className="w-16 h-16 bg-[#f97316] rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-300 hover:bg-orange-600 group-hover:scale-110">
              <Plus size={32} strokeWidth={3} />
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServicesSection;
