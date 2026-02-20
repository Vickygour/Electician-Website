'use client';

import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';

const AboutSection = () => {
  const checklistItems = [
    'Full-service electrical layout, design',
    'Wiring and installation/upgrades',
    'Emergency power solutions (generators)',
    'Virtually any electrical needs you have – just ask!',
  ];

  return (
    <section className="bg-[#f5f5f5] py-24 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE — IMAGE COLLAGE LAYOUT */}
          <div className="relative order-2 lg:order-1 pt-10 pb-10 lg:pb-20">
            <div className="relative z-10 w-[85%] lg:w-[%] ml-auto">
              {/* Main large image */}
              <div className="relative aspect-[5/5]  overflow-hidden shadow-xl">
                <Image
                  src="/assets/layout01-img01.jpg"
                  alt="Electrician working" // Alt text accessibility ke liye zaroori hai
                  fill // Isse image apne parent div (aspect-[4/5]) ko pura fill karegi
                  className="object-cover" // Image aspect ratio maintain karte hue cover karegi
                  sizes="(max-width: 768px) 100vw, 50vw" // Responsive loading ke liye
                />
              </div>
            </div>

            {/* Small bottom overlapping image */}
            <div className="absolute z-20 bottom-0 left-0 lg:-left-1 lg:-bottom-[-5%] w-[60%] lg:w-[65%]">
              <div className="relative aspect-[3/2]  overflow-hidden shadow-2xl ">
                <Image
                  src="/assets/layout01-img02.jpg"
                  alt="Electrical power lines"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — CONTENT */}
          <div className="order-1 lg:order-2">
            <span className="text-[#f97316] text-sm font-semibold uppercase tracking-wider block mb-4">
              About Us
            </span>

            <h2 className="text-4xl md:text-4xl font-bold text-gray-800 leading-tight mb-6">
              Outstanding Residential & <br className="hidden md:block" />
              Commercial Services
            </h2>

            <p className="text-gray-600 max-w-xl mb-8 leading-relaxed">
              All of our services are backed by our 100% satisfaction guarantee.
              Our electricians can install anything from new security lighting
              for your outdoors to a whole home generator that will keep your
              appliances working during a power outage.
            </p>

            {/* Checklist */}
            <ul className="space-y-4 mb-10">
              {checklistItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-gray-700 font-medium"
                >
                  <div className="flex-shrink-0">
                    <Check
                      className="text-[#f97316]"
                      size={20}
                      strokeWidth={3}
                    />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            {/* BOTTOM SIGNATURE SECTION */}
            <div className="flex flex-wrap items-center gap-8 pt-6">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden shadow-md">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                    alt="Mark Smith"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg leading-tight">
                    Mark Smith
                  </h4>
                  <p className="text-sm text-gray-500">Your own electrician</p>
                </div>
              </div>

              {/* Separator and Signature */}
              <div className="pl-8 border-l border-gray-300">
                <span className="text-3xl font-serif italic text-gray-700 opacity-80 select-none">
                  Mark Smith
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
