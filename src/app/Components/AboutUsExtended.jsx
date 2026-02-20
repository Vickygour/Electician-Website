'use client';
import React from 'react';
import {
  CheckCircle2,
  Zap,
  Award,
  Users,
  ShieldCheck,
  Star,
  Target,
  Heart,
} from 'lucide-react';
import { motion } from 'framer-motion';

const AboutUsExtended = () => {
  // Team Data
  const team = [
    {
      name: 'Robert Fox',
      role: 'Chief Electrician',
      img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
    },
    {
      name: 'Jane Cooper',
      role: 'Project Manager',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
    },
    {
      name: 'Cody Fisher',
      role: 'Safety Inspector',
      img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    },
    {
      name: 'Guy Hawkins',
      role: 'Senior Engineer',
      img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400',
    },
  ];

  // Values Data
  const values = [
    {
      title: 'Our Mission',
      desc: 'To power every home with safety and efficiency.',
      icon: <Target className="text-orange-500" />,
    },
    {
      title: 'Our Vision',
      desc: 'Leading the green energy revolution in the industry.',
      icon: <Zap className="text-orange-500" />,
    },
    {
      title: 'Our Values',
      desc: 'Integrity, transparency, and hard work.',
      icon: <Heart className="text-orange-500" />,
    },
  ];

  return (
    <div className="w-full">
      {/* 1. CORE VALUES SECTION */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-bold text-sm uppercase">
              Why We Are Different
            </span>
            <h2 className="text-4xl font-black text-[#2A2C38] mt-2">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-white p-10 border-t-4 border-orange-500 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-orange-50 flex items-center justify-center rounded-full mx-auto mb-6">
                  {v.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{v.title}</h3>
                <p className="text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. TEAM SECTION */}
      <section className="py-24 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-orange-500 font-bold text-sm uppercase">
                Expert People
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-[#2A2C38] mt-2">
                Meet Our Certified Team Members
              </h2>
            </div>
            <button className="bg-orange-500 text-white px-8 py-4 font-bold uppercase text-xs tracking-widest hover:bg-[#2A2C38] transition-all">
              Join Our Team
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="group relative overflow-hidden">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/90 backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h4 className="text-xl font-bold text-[#2A2C38]">
                    {member.name}
                  </h4>
                  <p className="text-orange-500 font-medium text-sm">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PARTNERS / CLIENT LOGOS */}
      <section className="bg-[#2A2C38] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-around items-center gap-10 opacity-50 grayscale hover:grayscale-0 transition-all">
          <span className="text-white text-3xl font-black italic tracking-tighter">
            ELECTRIC<span className="text-orange-500">PRO</span>
          </span>
          <span className="text-white text-3xl font-black italic tracking-tighter">
            VOLT<span className="text-orange-500">AGE</span>
          </span>
          <span className="text-white text-3xl font-black italic tracking-tighter">
            GRID<span className="text-orange-500">MAX</span>
          </span>
          <span className="text-white text-3xl font-black italic tracking-tighter">
            AMP<span className="text-orange-500">ERE</span>
          </span>
          <span className="text-white text-3xl font-black italic tracking-tighter">
            LIGHT<span className="text-orange-500">HOUSE</span>
          </span>
        </div>
      </section>
    </div>
  );
};

export default AboutUsExtended;
