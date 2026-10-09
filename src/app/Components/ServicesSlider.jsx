'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Wind, ShieldCheck, Cpu, Lightbulb, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';

const ServicesSlider = () => {
  const services = [
    {
      title: 'Air Conditioning',
      slug: 'air-conditioning',
      description:
        'Our installation services ensure that you get the right air conditioner.',
      Icon: Wind,
      image:
        'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop',
    },
    {
      title: 'Security Systems',
      slug: 'security-systems',
      description: 'You can view events over a monitor in our home.',
      Icon: ShieldCheck,
      image:
        'https://images.unsplash.com/photo-1557597774-9d2739f8fa00?q=80&w=2043&auto=format&fit=crop',
    },
    {
      title: 'Panels Changes',
      slug: 'panel-upgrades',
      description: 'Electrical panels are the heart of your electrical system.',
      Icon: Cpu,
      image:
        'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=1887&auto=format&fit=crop',
    },
    {
      title: 'Lighting Solutions',
      slug: 'lighting-design',
      description:
        'Custom lighting designs for both residential and commercial spaces.',
      Icon: Lightbulb,
      image:
        'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=1935&auto=format&fit=crop',
    },
  ];

  return (
    <section className="bg-[#f8f8f8] py-14 sm:py-16 lg:py-20">
      {/* ─── SVG clipPath definition (scales with any container) ─── */}
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <clipPath id="bulbShape" clipPathUnits="objectBoundingBox">
            <path d="M0.5,0 C0.224,0 0,0.199 0,0.444 C0,0.625 0.122,0.781 0.297,0.850 L0.297,1 L0.703,1 L0.703,0.850 C0.878,0.781 1,0.625 1,0.444 C1,0.199 0.776,0 0.5,0 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Subtitle */}
        <div className="text-center mb-3 sm:mb-4">
          <span className="text-[#f97316] text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em]">
            24/7 Electrician Services – Safe and Efficient
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-tight px-2">
            We are a Full Service Electrical Contractor
          </h2>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          loop
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          speed={650}
          pagination={{
            clickable: true,
            bulletActiveClass: 'swiper-pagination-bullet-active !bg-[#f97316]',
            bulletClass: 'swiper-pagination-bullet !bg-gray-400 !opacity-60',
          }}
          breakpoints={{
            480: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 28 },
            1024: { slidesPerView: 3, spaceBetween: 32 },
            1280: { slidesPerView: 4, spaceBetween: 28 },
          }}
          className="pb-12 sm:pb-14 [&_.swiper-pagination]:!bottom-0"
        >
          {services.map((service, index) => {
            const { Icon } = service;
            return (
              <SwiperSlide key={index} className="h-auto">
                <div className="flex flex-col items-center group h-full pt-2">

                  {/* ─── Bulb-shaped image ─── */}
                  <div
                    className="relative w-36 sm:w-40 md:w-44 lg:w-48 aspect-[192/216] mb-4 overflow-hidden"
                    style={{ clipPath: 'url(#bulbShape)', WebkitClipPath: 'url(#bulbShape)' }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      sizes="(max-width: 640px) 144px, (max-width: 1024px) 176px, 192px"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50 transition-colors duration-300 group-hover:bg-black/35" />

                    {/* Center icon */}
                    <div className="absolute inset-0 flex items-center justify-center -translate-y-4">
                      <Icon className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 text-white drop-shadow-md transition-transform duration-500 group-hover:scale-110" />
                    </div>

                    {/* Amber base accent glow */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  </div>

                  {/* Orange base bars */}
                  <div className="flex flex-col items-center gap-1 mb-5 sm:mb-6">
                    <div className="w-10 sm:w-12 h-1.5 bg-[#f97316] rounded-full" />
                    <div className="w-7 sm:w-8 h-1.5 bg-[#f97316] rounded-full" />
                    <div className="w-4 sm:w-5 h-1.5 bg-[#f97316] rounded-full" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2.5 sm:mb-3 text-center px-2">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-xs sm:text-sm text-center max-w-[240px] sm:max-w-[260px] mb-4 px-2 leading-relaxed">
                    {service.description}
                  </p>

                  {/* More info link */}
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-gray-800 hover:text-[#f97316] transition-colors group/link mt-auto"
                  >
                    More info
                    <ChevronRight className="w-3.5 h-3.5 text-[#f97316] transform transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default ServicesSlider;