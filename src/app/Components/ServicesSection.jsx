'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Zap, Plus } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: 'Commercial',
      slug: 'commercial-solutions',
      image:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
      clipClass: 'lg:[clip-path:polygon(0_0,100%_0,85%_100%,0%_100%)]',
    },
    {
      title: 'Industrial',
      slug: 'industrial-systems',
      image:
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
      clipClass:
        'lg:[clip-path:polygon(15%_0,100%_0,85%_100%,0%_100%)] lg:-ml-[5%]',
    },
    {
      title: 'Residential',
      slug: 'residential-electrical',
      image:
        'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop',
      clipClass:
        'lg:[clip-path:polygon(15%_0,100%_0,100%_100%,0%_100%)] lg:-ml-[5%]',
    },
  ];

  return (
    <section className="w-full flex flex-col lg:flex-row lg:h-[600px] bg-black overflow-hidden">

      {services.map((service, index) => (
        <div
          key={index}
          className={`relative group w-full h-[380px] sm:h-[440px] lg:h-full lg:flex-1 overflow-hidden transition-all duration-500 ease-in-out z-10 hover:z-20 lg:hover:scale-105 ${service.clipClass}`}
        >
          {/* Background Image with Zoom on hover */}
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            sizes="(max-width: 1024px) 100vw, 33vw"
            priority={index === 0}
          />

          {/* Overlay — lightens on hover */}
          <div className="absolute inset-0 bg-blue-900/60 transition-colors duration-500 group-hover:bg-black/40" />

          {/* Mobile divider line at bottom */}
          <div
            aria-hidden="true"
            className="lg:hidden absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent"
          />

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center text-white px-6 text-center">

            {/* Lightning icon */}
            <div className="mb-3 sm:mb-4 transform transition-transform duration-500 group-hover:-translate-y-2">
              <Zap
                size={40}
                className="sm:w-12 sm:h-12 drop-shadow-lg"
                fill="white"
              />
            </div>

            {/* Title */}
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight sm:tracking-tighter mb-5 sm:mb-6 transition-all duration-500 lg:group-hover:tracking-widest">
              {service.title}
            </h3>

            {/* Plus button */}
            <Link
              href={`/services/${service.slug}`}
              aria-label={`${service.title} services`}
              className="w-14 h-14 sm:w-16 sm:h-16 bg-[#f97316] rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-300 hover:bg-orange-600 group-hover:scale-110 active:scale-95"
            >
              <Plus size={26} className="sm:w-8 sm:h-8" strokeWidth={3} />
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServicesSection;