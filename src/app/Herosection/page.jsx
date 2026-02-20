'use client';

import React from 'react';
import Image from 'next/image';
import { Zap, Phone } from 'lucide-react';
import AboutSection from '../Components/Aboutsection';
import ServicesSection from '../Components/ServicesSection';
import ServicesSlider from '../Components/ServicesSlider';
import CallToAction from '../Components/CallToAction';
import OurProjects from '../Components/OurProjects';
import InfoSection from '../Components/InfoSection';
import StatsSection from '../Components/StatsSection';
import MaintenancePlans from '../Components/StatsSection';
import Video from '../Components/Video';

const HeroSection = () => {
  return (
    <>
      <section className="relative w-full h-[90vh] min-h-[700px] overflow-hidden flex items-center ">
        {/* Background with Dark Overlay and Blur */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1507494924047-60b8ee826ca9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGVsZWN0cmljaWFufGVufDB8fDB8fHww"
            alt="Modern Interior Background"
            fill
            className="object-cover blur-[2px]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/80 to-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center justify-between h-full">
          {/* Left Side Content */}
          <div className="w-full lg:w-[50%] text-center lg:text-left flex flex-col items-center lg:items-start py-12">
            <span className="text-[#f97316] text-sm font-bold tracking-[0.2em] uppercase mb-4">
              24/7 Emergency Service Available
            </span>

            <h1 className="text-white text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6">
              Professional <br />
              Electrical Services.
            </h1>

            <p className="text-gray-300 text-base md:text-lg max-w-lg mb-10 leading-relaxed">
              From emergency repairs to complete rewiring, our certified
              electricians deliver safe, reliable, and affordable electrical
              solutions for your home and business.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              {/* Primary Button */}
              <button className="flex items-center gap-2 bg-[#f97316] hover:bg-orange-600 text-white px-8 py-4 rounded-md font-bold transition-all duration-300 group shadow-lg shadow-orange-900/20">
                <Zap
                  size={20}
                  fill="white"
                  className="group-hover:scale-110 transition-transform"
                />
                <span>BOOK A SERVICE</span>
              </button>

              {/* Outline Button */}
              <button className="flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-md font-bold hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm">
                <Phone size={20} />
                <span>(555) 123-4567</span>
              </button>
            </div>
          </div>

          {/* Right Side Image with Half-Oval Cut */}
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[48%] h-full">
            <div
              className="relative w-full h-full shadow-2xl"
              style={{
                // This creates the smooth half-oval cut on the left
                clipPath: 'ellipse(100% 100% at 100% 50%)',
                WebkitClipPath: 'ellipse(100% 100% at 100% 50%)',
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop"
                alt="Professional electrician"
                fill
                className="object-cover object-center scale-110" // scale-110 helps cover the clip edges perfectly
                priority
              />
              {/* Darker edge for depth */}
              <div
                className="absolute inset-0 bg-black/10 pointer-events-none"
                style={{ clipPath: 'ellipse(100% 100% at 100% 50%)' }}
              />
            </div>
          </div>
        </div>
      </section>
      <AboutSection />
      <ServicesSection />
      <ServicesSlider />
      <CallToAction />
      <OurProjects />
      <InfoSection />
      <MaintenancePlans />
      <Video />
    </>
  );
};

export default HeroSection;
