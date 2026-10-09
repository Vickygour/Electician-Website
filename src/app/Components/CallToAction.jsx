'use client';
import React from 'react';
import Image from 'next/image';
import { Phone, Zap } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { site } from '../../data/site';

const CallToAction = () => {
  const { openAppointment } = useApp();

  return (
    <section className="relative w-full min-h-[560px] sm:min-h-[620px] lg:min-h-[600px] flex items-center overflow-hidden">

      {/* ─── 1. Split Background Images ─── */}
      <div className="absolute inset-0 w-full h-full flex flex-col lg:flex-row">
        {/* Left Half (top on mobile) */}
        <div className="relative w-full lg:w-1/2 h-1/2 lg:h-full">
          <Image
            src="https://plus.unsplash.com/premium_photo-1661911309991-cc81afcce97d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlY3RyaWNpYW58ZW58MHx8MHx8fDA%3D"
            alt="Electrical transformer"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          <div className="absolute inset-0 bg-black/55 lg:bg-black/35" />
        </div>

        {/* Right Half (bottom on mobile) */}
        <div className="relative w-full lg:w-1/2 h-1/2 lg:h-full">
          <Image
            src="https://plus.unsplash.com/premium_photo-1661908782924-de673a5c6988?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWxlY3RyaWNpYW58ZW58MHx8MHx8fDA%3D"
            alt="Electrician holding cables"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/55 lg:bg-black/45" />
        </div>
      </div>

      {/* ─── 2. Center Content Card ─── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full flex justify-center py-16 sm:py-20 lg:py-0">
        <div className="bg-white/95 lg:bg-white/20 backdrop-blur-md border border-white/40 lg:border-white/20 p-6 sm:p-8 md:p-12 lg:p-14 shadow-2xl rounded-lg lg:rounded-sm max-w-[560px] w-full relative">

          {/* Accent vertical line (desktop only) */}
          <div
            aria-hidden="true"
            className="absolute left-8 top-14 w-1 h-[60px] bg-[#f97316] hidden lg:block"
          />

          <div className="lg:pl-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-[1.2] sm:leading-tight mb-4 sm:mb-6">
              Do you <span className="text-[#f97316]">Need Help</span> With
              Electrical Maintenance?
            </h2>

            <p className="text-gray-600 lg:text-gray-500 text-sm sm:text-base mb-8 sm:mb-10 leading-relaxed">
              Our electrical repair and service options are proudly offered to
              clients. Give us a call today to schedule a free service estimate!
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href={site.phoneHref}
                className="flex items-center justify-center gap-2 bg-[#f97316] hover:bg-orange-600 text-white font-bold py-3.5 sm:py-4 px-6 sm:px-8 rounded-md transition-all duration-300 w-full sm:w-auto shadow-lg shadow-orange-500/20 active:scale-95 text-sm sm:text-base whitespace-nowrap"
              >
                <Phone size={18} fill="currentColor" className="shrink-0" />
                <span>Give Us a Call</span>
              </a>

              <button
                onClick={() => openAppointment({ service: 'Free Estimate / Quote' })}
                className="flex items-center justify-center gap-2 bg-[#2d323f] hover:bg-[#3d4456] text-white font-bold py-3.5 sm:py-4 px-6 sm:px-8 rounded-md transition-all duration-300 w-full sm:w-auto active:scale-95 text-sm sm:text-base whitespace-nowrap"
              >
                <Zap size={18} fill="currentColor" className="shrink-0" />
                <span>Free Estimate</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ─── 3. Floating Emergency Button ─── */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20">
        <button
          onClick={() => openAppointment({ service: 'Emergency Repair' })}
          aria-label="Book emergency service"
          className="w-12 h-12 sm:w-14 sm:h-14 bg-[#f97316] hover:bg-orange-600 text-white rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:rotate-12 active:scale-90 group"
        >
          <Zap
            size={22}
            fill="white"
            className="group-hover:scale-110 transition-transform"
          />
        </button>
      </div>
    </section>
  );
};

export default CallToAction;