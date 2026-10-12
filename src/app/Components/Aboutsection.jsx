'use client';

import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';
import Link from 'next/link';

const AboutSection = () => {

  const checklistItems = [
    'Full-service electrical layout, design',
    'Wiring and installation/upgrades',
    'Emergency power solutions (generators)',
    'Virtually any electrical needs you have – just ask!',
  ];

  return (
    <section className="bg-[#f5f5f5] py-16 sm:py-20 lg:py-24 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">

          {/* ═════════════ LEFT — IMAGE COLLAGE ═════════════ */}
          <div className="relative order-2 lg:order-1 w-full max-w-lg mx-auto lg:max-w-none pt-4 lg:pt-10 pb-24 sm:pb-28 lg:pb-20">

            {/* Main large image */}
            <div className="relative z-10 w-[88%] sm:w-[85%] ml-auto">
              <div className="relative aspect-[5/5] overflow-hidden shadow-xl rounded-sm">
                <Image
                  src="/assets/layout01-img01.jpg"
                  alt="BijliBaaz electrician providing residential electrical services in Delhi"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 85vw, 45vw"
                />
              </div>
            </div>

            {/* Small overlapping image */}
            <div className="absolute z-20 bottom-0 left-0 sm:left-2 lg:-left-1 w-[62%] sm:w-[60%] lg:w-[65%]">
              <div className="relative aspect-[3/2] overflow-hidden shadow-2xl rounded-sm ring-4 ring-[#f5f5f5]">
                <Image
                  src="/assets/layout01-img02.jpg"
                  alt="Commercial electrical wiring and power solutions by BijliBaaz"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 60vw, 30vw"
                />
              </div>
            </div>

            {/* Amber accent square behind (desktop only) */}
            <div
              aria-hidden="true"
              className="hidden lg:block absolute -bottom-6 -left-6 w-40 h-40 border-2 border-[#f97316]/40 rounded-sm z-0"
            />
          </div>

          {/* ═════════════ RIGHT — CONTENT ═════════════ */}
          <div className="order-1 lg:order-2 text-center lg:text-left">

            <span className="text-[#f97316] text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] block mb-3 sm:mb-4">
              About BijliBaaz
            </span>

            {/* ✅ SAHI: H2 tag (Homepage ke liye) */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-gray-800 leading-[1.2] mb-5 sm:mb-6">
              Reliable Electrical Services for{' '}
              <br className="hidden sm:block" />
              Homes and Businesses
            </h2>

            <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 mb-7 sm:mb-8 leading-relaxed">
              <strong>BijliBaaz Electrical Services</strong> is committed to providing
              safe, reliable, and affordable solutions for every customer. From
              <strong> residential electrical services</strong> like home wiring and
              lighting to <strong>commercial electrical services</strong> for offices
              and shops, our certified electricians handle it all with a 100%
              satisfaction guarantee. Whether you need a new security light
              installed outdoors or a whole-home generator to keep your appliances
              running during a power outage, we have you covered.
            </p>

            {/* Checklist */}
            <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0">
              {checklistItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700 text-sm sm:text-base font-medium text-left"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <Check
                      className="text-[#f97316]"
                      size={18}
                      strokeWidth={3}
                    />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Signature section */}
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6 sm:gap-8 pt-6 border-t border-gray-200 justify-center lg:justify-start">

              <Link href="/about" className="group">
                <span className="inline-flex items-center gap-2 text-[#f97316] font-semibold text-sm sm:text-base group-hover:gap-3 transition-all">
                  Learn More About Us
                  <span aria-hidden="true">→</span>
                </span>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;