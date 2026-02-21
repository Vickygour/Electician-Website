'use client';
import React from 'react';
import {
  Clock,
  Banknote,
  HardHat,
  Calculator,
  CheckCircle2,
  Zap,
  Target,
  Rocket,
} from 'lucide-react';
import Header from '../Header/page';
import Footer from '../Components/Footer';

const AboutUs = () => {
  return (
    <>
      <Header />
      <section className="relative h-[300px] md:h-[400px] overflow-hidden flex items-center">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center brightness-[0.7]"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=1600')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-20 w-full">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight">
            About <span className="text-orange-500">Us</span>
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-orange-500 z-20" />
      </section>

      <div className="w-full bg-white font-sans">
        {/* --- SECTION 1: HERO/INTRO --- */}
        <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left: Image with Overlap Effect */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1000"
                  alt="Expert Electrician"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Orange Decorative Box */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-500 -z-0 hidden md:block" />

              {/* Experience Badge */}
              <div className="absolute top-10 -right-8 bg-[#2A2C38] text-white p-6 shadow-2xl z-20">
                <p className="text-4xl font-bold text-orange-500">25+</p>
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold">
                  Years of Experience
                </p>
              </div>
            </div>

            {/* Right: Intro Text */}
            <div className="w-full lg:w-1/2">
              <span className="text-orange-500 font-bold text-xs uppercase tracking-widest block mb-4">
                Get to know us
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-800 leading-tight mb-6">
                Empowering Homes & <br />
                <span className="text-orange-500">Industries</span> Since 1999
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                We provide comprehensive electrical solutions with a focus on
                safety, innovation, and reliability. From small residential
                repairs to massive industrial installations, our team delivers
                excellence.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  'Safety First approach',
                  'Energy saving solutions',
                  'Expert certified team',
                  'Quality workmanship',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-orange-500" />
                    <span className="text-slate-700 font-medium text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <button className="bg-orange-500 text-white px-10 py-4 font-bold uppercase text-xs tracking-widest hover:bg-[#2A2C38] transition-all shadow-lg">
                Download Brochure
              </button>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: WHY CHOOSE US (Same as Image) --- */}
        <section className="bg-slate-50 py-24 px-6 md:px-20 border-y border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              {/* Left Image (Woman with HardHat) */}
              <div className="w-full lg:w-1/3">
                <img
                  src="/assets/choose-us-img.png"
                  alt="Expert Worker"
                  className="w-full h-auto rounded-sm  transition-all duration-700"
                />
              </div>

              {/* Right Content Grid */}
              <div className="w-full lg:w-2/3">
                <h2 className="text-4xl font-black text-slate-800 mb-4">
                  Why Choose <span className="text-orange-500">Us?</span>
                </h2>
                <p className="text-gray-400 text-sm mb-12 max-w-xl">
                  Nullam hendrerit, lacus nluctus tempu est neque suscipit auvel
                  hendrer ligu sed turpis acus nluctus tempu est neque suscipit
                  auvel hendrer ligu.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 border-t border-gray-200 pt-12">
                  {/* Feature 1 */}
                  <div className="flex gap-5 group">
                    <div className="shrink-0">
                      <Banknote
                        size={40}
                        strokeWidth={1}
                        className="text-slate-700 group-hover:text-orange-500 transition-colors"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-800 mb-2">
                        Low Pricing
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Nullam hendrerit, lacus nluctus tempu est neque suscipit
                        auvel hendrer ligu sed turpis.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex gap-5 group">
                    <div className="shrink-0">
                      <HardHat
                        size={40}
                        strokeWidth={1}
                        className="text-slate-700 group-hover:text-orange-500 transition-colors"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-800 mb-2">
                        Genius Workers
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Nullam hendrerit, lacus nluctus tempu est neque suscipit
                        auvel hendrer ligu sed turpis.
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex gap-5 group border-t border-gray-200 pt-8 md:pt-0 md:border-t-0">
                    <div className="shrink-0">
                      <Clock
                        size={40}
                        strokeWidth={1}
                        className="text-slate-700 group-hover:text-orange-500 transition-colors"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-800 mb-2">
                        24/7 Availability
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Nullam hendrerit, lacus nluctus tempu est neque suscipit
                        auvel hendrer ligu sed turpis.
                      </p>
                    </div>
                  </div>

                  {/* Feature 4 */}
                  <div className="flex gap-5 group border-t border-gray-200 pt-8 md:pt-0 md:border-t-0">
                    <div className="shrink-0">
                      <Calculator
                        size={40}
                        strokeWidth={1}
                        className="text-slate-700 group-hover:text-orange-500 transition-colors"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-800 mb-2">
                        Free Estimate
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Nullam hendrerit, lacus nluctus tempu est neque suscipit
                        auvel hendrer ligu sed turpis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 3: CALL TO ACTION --- */}
        <section className="bg-[#2A2C38] py-16 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <Zap
              className="text-orange-500 mx-auto mb-6 animate-pulse"
              size={48}
              fill="currentColor"
            />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ready to start your next electrical project?
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-orange-500 text-white px-8 py-4 font-bold uppercase text-xs tracking-widest hover:scale-105 transition-all">
                Request a Quote
              </button>
              <button className="border-2 border-white text-white px-8 py-4 font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-[#2A2C38] transition-all">
                Contact Support
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* --- SECTION 3: OUR TEAM --- */}
      <section className="py-24 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          {/* Section Heading */}
          <span className="text-orange-500 font-bold text-xs uppercase tracking-widest block mb-4">
            Meet Our Experts
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">
            Our Professional <span className="text-orange-500">Team</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-16">
            Our certified electricians and engineers bring decades of
            experience, innovation, and dedication to every project we
            undertake.
          </p>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                name: 'Michael Carter',
                role: 'Senior Electrician',
                img: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=800',
              },
              {
                name: 'Sarah Johnson',
                role: 'Project Engineer',
                img: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800',
              },
              {
                name: 'David Reynolds',
                role: 'Industrial Specialist',
                img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800',
              },
              {
                name: 'Emily Watson',
                role: 'Operations Manager',
                img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800',
              },
            ].map((member, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-sm shadow-lg"
              >
                {/* Image */}
                <div className="relative h-[400px] overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
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

                {/* Static Info Below Image (Desktop Clean Look) */}
                <div className="bg-white py-6 text-center group-hover:hidden">
                  <h4 className="text-slate-800 font-bold text-lg">
                    {member.name}
                  </h4>
                  <p className="text-gray-400 text-sm uppercase tracking-widest">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION: LEADERSHIP MESSAGE --- */}
      <section className="py-24 px-6 md:px-20 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* CEO Image */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000"
                  alt="CEO Portrait"
                  className="w-full h-[500px] object-cover"
                />
              </div>

              {/* Decorative Accent */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500 hidden md:block" />
            </div>

            {/* CEO Message Content */}
            <div className="w-full lg:w-1/2">
              <span className="text-orange-500 font-bold text-xs uppercase tracking-widest block mb-4">
                Leadership Message
              </span>

              <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-8">
                A Word From Our <span className="text-orange-500">CEO</span>
              </h2>

              <p className="text-xl text-slate-700 leading-relaxed italic mb-6 border-l-4 border-orange-500 pl-6">
                “We believe in powering progress with integrity and innovation.”
              </p>

              <p className="text-gray-500 leading-relaxed mb-8">
                Since our founding, our mission has remained the same — to
                deliver reliable, safe, and forward-thinking electrical
                solutions that empower homes and industries alike. Our
                commitment to excellence, innovation, and customer satisfaction
                continues to drive our success and growth.
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

      {/* --- SECTION: MISSION & VISION (Premium Version) --- */}
      <section className="relative py-28 px-6 md:px-20 bg-slate-50 overflow-hidden">
        {/* Background Decorative Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1 className="text-[120px] md:text-[180px] font-black text-slate-200 opacity-20 tracking-widest">
            PURPOSE
          </h1>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="text-orange-500 font-bold text-xs uppercase tracking-widest block mb-4">
              Our Foundation
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-800">
              Mission & <span className="text-orange-500">Vision</span>
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="group relative bg-white p-14 shadow-xl hover:shadow-2xl transition-all duration-500 border-l-4 border-orange-500">
              <div className="mb-8">
                <Target
                  size={48}
                  strokeWidth={1.5}
                  className="text-orange-500 group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <h3 className="text-3xl font-bold text-slate-800 mb-6">
                Our Mission
              </h3>

              <p className="text-gray-500 leading-relaxed text-lg">
                To deliver safe, innovative, and high-quality electrical
                solutions that exceed client expectations. We are committed to
                maintaining the highest standards of workmanship, safety
                compliance, and customer satisfaction in every project we
                undertake.
              </p>
            </div>

            {/* Vision */}
            <div className="group relative bg-white p-14 shadow-xl hover:shadow-2xl transition-all duration-500 border-l-4 border-orange-500">
              <div className="mb-8">
                <Rocket
                  size={48}
                  strokeWidth={1.5}
                  className="text-orange-500 group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <h3 className="text-3xl font-bold text-slate-800 mb-6">
                Our Vision
              </h3>

              <p className="text-gray-500 leading-relaxed text-lg">
                To become a leading electrical service provider recognized for
                innovation, sustainability, and excellence. We aim to power the
                future through smart energy solutions, advanced technology, and
                a dedicated team of industry professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
