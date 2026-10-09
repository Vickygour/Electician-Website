'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Wrench,
  Building2,
  MessageSquare,
  ShieldCheck,
  MapPin,
  CheckCircle2,
  Zap,
  Target,
  Rocket,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { team } from '../../data/team';

const AboutUs = () => {
  const { openAppointment } = useApp();

  return (
    <>
      {/* ═══════════ PAGE HERO ═══════════ */}
      <section className="relative h-[240px] sm:h-[300px] md:h-[400px] overflow-hidden flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=1600"
          alt="About BijliBaaz"
          fill
          className="object-cover brightness-[0.7]"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-6 md:px-10 lg:px-20 w-full">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-tight">
            About <span className="text-orange-500">Us</span>
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-orange-500 z-20" />
      </section>

      <div className="w-full bg-white font-sans">

        {/* ═══════════ SECTION 1: INTRO ═══════════ */}
        <section className="py-14 sm:py-16 lg:py-20 px-5 sm:px-6 md:px-10 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

              {/* Left: Image + Badges */}
              <div className="w-full lg:w-1/2 relative">
                <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl">
                  <div className="relative w-full aspect-[4/5] sm:aspect-[5/5] lg:aspect-[4/5]">
                    <Image
                      src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1000"
                      alt="Expert Electrician"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Orange Decorative Box (desktop only) */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-500 -z-0 hidden md:block" />

                {/* Experience Badge */}
                <div className="absolute top-6 sm:top-10 -right-2 sm:-right-4 md:-right-8 bg-[#2A2C38] text-white p-4 sm:p-5 md:p-6 shadow-2xl z-20">
                  <p className="text-3xl sm:text-4xl font-bold text-orange-500">25+</p>
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-bold leading-tight">
                    Years of<br />Experience
                  </p>
                </div>
              </div>

              {/* Right: Text */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <span className="text-orange-500 font-bold text-xs uppercase tracking-widest block mb-4">
                  Get to know us
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-800 leading-tight mb-6">
                  Reliable Electrical{' '}
                  <span className="text-orange-500">Solutions</span> for Homes
                  and Businesses
                </h2>
                <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8">
                  At BijliBaaz, we aim to make electrical services convenient
                  and accessible for residential and commercial customers. From
                  electrical repairs and wiring to lighting installation and
                  maintenance, we help customers address their electrical
                  requirements with a focus on safety and quality workmanship.
                </p>
                <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8">
                  Our services are available in Burari Delhi-110084. Contact us
                  to discuss your requirements and check service availability in
                  your location.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 text-left">
                  {[
                    'Electrical Repairs and Troubleshooting',
                    'Wiring and Electrical Installation',
                    'Lighting Installation and Upgrades',
                    'Residential Electrical Services',
                    'Commercial Electrical Services',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2
                        size={18}
                        className="text-orange-500 shrink-0 mt-0.5"
                      />
                      <span className="text-slate-700 font-medium text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/brochure"
                  className="inline-block bg-orange-500 text-white px-8 sm:px-10 py-3.5 sm:py-4 font-bold uppercase text-xs tracking-widest hover:bg-[#2A2C38] transition-all shadow-lg active:scale-95"
                >
                  Download Brochure
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ SECTION 2: WHY CHOOSE US ═══════════ */}
        <section className="bg-slate-50 py-14 sm:py-16 lg:py-20 px-5 sm:px-6 md:px-10 lg:px-20 border-y border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">

              {/* Left Image */}
              <div className="w-full lg:w-1/3 max-w-md mx-auto lg:max-w-none">
                <div className="relative w-full aspect-[4/5] rounded-sm overflow-hidden">
                  <Image
                    src="/assets/choose-us-img.png"
                    alt="Expert Worker"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
              </div>

              {/* Right Content */}
              <div className="w-full lg:w-2/3 text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl font-black text-slate-800 mb-4 leading-tight">
                  Why Choose <span className="text-orange-500">BijliBaaz?</span>
                </h2>
                <p className="text-gray-500 text-sm sm:text-base mb-10 sm:mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Electrical Services Focused on Safety and Quality
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-12 gap-y-10 sm:gap-y-12 border-t border-gray-200 pt-10 sm:pt-12 text-left">

                  {/* Feature 1 */}
                  <div className="flex gap-5 group">
                    <div className="shrink-0">
                      <Wrench
                        size={40}
                        strokeWidth={1}
                        className="text-slate-700 group-hover:text-orange-500 transition-colors"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-2">
                        Service-Focused Approach
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        Solutions based on your electrical requirements.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex gap-5 group">
                    <div className="shrink-0">
                      <Building2
                        size={40}
                        strokeWidth={1}
                        className="text-slate-700 group-hover:text-orange-500 transition-colors"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-2">
                        Residential &amp; Commercial Support
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        Services for eligible home and business requirements.
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex gap-5 group">
                    <div className="shrink-0">
                      <MessageSquare
                        size={40}
                        strokeWidth={1}
                        className="text-slate-700 group-hover:text-orange-500 transition-colors"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-2">
                        Clear Communication
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        Understand the work required before proceeding.
                      </p>
                    </div>
                  </div>

                  {/* Feature 4 */}
                  <div className="flex gap-5 group">
                    <div className="shrink-0">
                      <ShieldCheck
                        size={40}
                        strokeWidth={1}
                        className="text-slate-700 group-hover:text-orange-500 transition-colors"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-2">
                        Safety-Conscious Work
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        Electrical work should be carried out using appropriate
                        safety practices.
                      </p>
                    </div>
                  </div>

                  {/* Feature 5 — full width on md+ */}
                  <div className="flex gap-5 group md:col-span-2">
                    <div className="shrink-0">
                      <MapPin
                        size={40}
                        strokeWidth={1}
                        className="text-slate-700 group-hover:text-orange-500 transition-colors"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-2">
                        Local Service Coverage
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        Support across confirmed service locations in Delhi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ SECTION 3: CTA ═══════════ */}
        <section className="bg-[#2A2C38] py-14 sm:py-16 px-5 sm:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <Zap
              className="text-orange-500 mx-auto mb-6 animate-pulse"
              size={44}
              fill="currentColor"
            />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 px-2">
              Ready to start your next electrical project?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-6 max-w-md sm:max-w-none mx-auto">
              <button
                onClick={() =>
                  openAppointment({ service: 'Free Estimate / Quote' })
                }
                className="bg-orange-500 text-white px-8 py-4 font-bold uppercase text-xs tracking-widest hover:bg-orange-600 transition-all active:scale-95"
              >
                Request a Quote
              </button>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-[#2A2C38] transition-all active:scale-95 text-center"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════ SECTION 4: TEAM ═══════════ */}
        <section className="py-14 sm:py-20 lg:py-24 px-5 sm:px-6 md:px-10 lg:px-20 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <span className="text-orange-500 font-bold text-xs uppercase tracking-widest block mb-4">
              Meet Our Experts
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-800 mb-5">
              Our Professional <span className="text-orange-500">Team</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto mb-8 sm:mb-10 text-sm sm:text-base leading-relaxed px-2">
              Our certified electricians and engineers bring decades of
              experience, innovation, and dedication to every project we
              undertake.
            </p>

            <div className="mb-10 sm:mb-12">
              <Link
                href="/about/team"
                className="text-orange-500 font-bold text-xs sm:text-sm uppercase tracking-widest hover:underline"
              >
                See the full team →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
              {team.slice(0, 4).map((member, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-sm shadow-lg bg-white"
                >
                  {/* Image */}
                  <div className="relative h-[340px] sm:h-[380px] lg:h-[400px] overflow-hidden">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />

                    {/* Hover overlay with name */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                      <div className="p-6 text-left">
                        <h4 className="text-white font-bold text-lg">
                          {member.name}
                        </h4>
                        <p className="text-orange-400 text-sm uppercase tracking-widest">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Static info (hides on hover) */}
                  <div className="bg-white py-5 sm:py-6 text-center group-hover:opacity-0 transition-opacity duration-300">
                    <h4 className="text-slate-800 font-bold text-base sm:text-lg">
                      {member.name}
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-widest">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ SECTION 5: LEADERSHIP ═══════════ */}
        <section className="py-14 sm:py-20 lg:py-24 px-5 sm:px-6 md:px-10 lg:px-20 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

              {/* CEO Image */}
              <div className="w-full lg:w-1/2 relative max-w-md mx-auto lg:max-w-none">
                <div className="relative w-full aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000"
                    alt="CEO Portrait"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500 hidden md:block -z-0" />
              </div>

              {/* CEO Message */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <span className="text-orange-500 font-bold text-xs uppercase tracking-widest block mb-4">
                  Leadership Message
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-800 mb-6 lg:mb-8 leading-tight">
                  A Word From Our <span className="text-orange-500">CEO</span>
                </h2>

                <p className="text-lg sm:text-xl text-slate-700 leading-relaxed italic mb-6 border-l-4 border-orange-500 pl-4 sm:pl-6 text-left">
                  &ldquo;We believe in powering progress with integrity and
                  innovation.&rdquo;
                </p>

                <p className="text-gray-500 leading-relaxed mb-8 text-sm sm:text-base">
                  Since our founding, our mission has remained the same — to
                  deliver reliable, safe, and forward-thinking electrical
                  solutions that empower homes and industries alike. Our
                  commitment to excellence, innovation, and customer
                  satisfaction continues to drive our success and growth.
                </p>

                <div>
                  <h4 className="text-slate-800 font-bold text-lg">
                    Jonathan Mitchell
                  </h4>
                  <p className="text-orange-500 text-sm uppercase tracking-widest">
                    Chief Executive Officer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ SECTION 6: MISSION & VISION ═══════════ */}
        <section className="relative py-16 sm:py-20 lg:py-28 px-5 sm:px-6 md:px-10 lg:px-20 bg-slate-50 overflow-hidden">
          {/* Background decorative word */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            <h1 className="text-[80px] sm:text-[120px] md:text-[180px] font-black text-slate-200 opacity-20 tracking-widest">
              PURPOSE
            </h1>
          </div>

          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <span className="text-orange-500 font-bold text-xs uppercase tracking-widest block mb-4">
                Our Foundation
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-800">
                Mission &amp; <span className="text-orange-500">Vision</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

              {/* Mission */}
              <div className="group relative bg-white p-8 sm:p-12 lg:p-14 shadow-xl hover:shadow-2xl transition-all duration-500 border-l-4 border-orange-500">
                <div className="mb-6 sm:mb-8">
                  <Target
                    size={44}
                    strokeWidth={1.5}
                    className="text-orange-500 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4 sm:mb-6">
                  Our Mission
                </h3>
                <p className="text-gray-500 leading-relaxed text-base sm:text-lg">
                  To deliver safe, innovative, and high-quality electrical
                  solutions that exceed client expectations. We are committed
                  to maintaining the highest standards of workmanship, safety
                  compliance, and customer satisfaction in every project we
                  undertake.
                </p>
              </div>

              {/* Vision */}
              <div className="group relative bg-white p-8 sm:p-12 lg:p-14 shadow-xl hover:shadow-2xl transition-all duration-500 border-l-4 border-orange-500">
                <div className="mb-6 sm:mb-8">
                  <Rocket
                    size={44}
                    strokeWidth={1.5}
                    className="text-orange-500 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4 sm:mb-6">
                  Our Vision
                </h3>
                <p className="text-gray-500 leading-relaxed text-base sm:text-lg">
                  To become a leading electrical service provider recognized
                  for innovation, sustainability, and excellence. We aim to
                  power the future through smart energy solutions, advanced
                  technology, and a dedicated team of industry professionals.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;