'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Quote, Phone } from 'lucide-react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const stats = [
  { label: 'Residential Projects', value: '5000+' },
  { label: 'Commercial Projects', value: '1500+' },
  { label: 'Industrial Projects', value: '1000+' },
];

const testimonials = [
  {
    name: 'Teresa and Kevin K.',
    text: "We've been using your company and from the very beginning found him and his team to be extremely professional and knowledgeable.",
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200',
  },
  {
    name: 'John Doe',
    text: 'Excellent service! The team was on time and fixed the issue quickly.',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200',
  },
];

export default function InfoSection() {
  return (
    <div className="w-full bg-white">
      {/* --- Top Section --- */}
      <section className="bg-[#2A2C38] py-16 px-6 md:px-20 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="md:w-1/3">
            <span className="text-orange-500 font-bold text-sm">
              Our Statistics
            </span>
            <h2 className="text-4xl font-bold mt-2">Some Important Facts</h2>
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-extrabold">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Bottom Section --- */}
      <section className="relative flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-10 md:p-24">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            className="pb-12"
          >
            {testimonials.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col md:flex-row gap-6">
                  <img
                    src={item.avatar}
                    className="w-20 h-20 rounded-full object-cover"
                    alt=""
                  />
                  <div>
                    <span className="text-orange-500 font-bold text-xs uppercase">
                      What Our Clients Say
                    </span>
                    <h3 className="text-2xl font-bold text-slate-800 mt-1 mb-4">
                      Professional & Reliable
                    </h3>
                    <p className="text-gray-500 italic mb-4">"{item.text}"</p>
                    <h4 className="font-bold">— {item.name}</h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="w-full md:w-1/2 relative min-h-[400px]">
          <img
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200"
            className="w-full h-full object-cover"
            alt=""
          />
          <div className="absolute top-1/2 left-0 md:-left-20 bg-orange-500 text-white p-8 shadow-2xl max-w-[300px] -translate-y-1/2">
            <h3 className="text-xl font-bold mb-2">Emergency Service</h3>
            <p className="text-xs mb-4">
              Available 24/7 for urgent electrical issues.
            </p>
            <div className="flex items-center gap-2 font-bold">
              <Phone size={18} />
              <span>1 (800) 765-43-21</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
