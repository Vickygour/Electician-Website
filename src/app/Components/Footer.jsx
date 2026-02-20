'use client';
import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Zap,
  ArrowRight,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2A2C38] text-white pt-16 pb-8 px-6 md:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* --- Top Section: Logo & Newsletter --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Logo & About */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6 group cursor-pointer">
              <div className="bg-orange-500 p-2 rounded-lg transition-transform group-hover:rotate-12">
                <Zap size={24} fill="white" className="text-white" />
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase">
                Electric<span className="text-orange-500">ian</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Providing top-notch electrical services for residential,
              commercial, and industrial projects. Reliable, safe, and 24/7
              available.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-all text-gray-400 hover:text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-orange-500"></span>
            </h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              {[
                'Home',
                'About Us',
                'Our Projects',
                'Maintenance Plans',
                'Contact',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-orange-500 flex items-center gap-2 transition-colors group"
                  >
                    <ArrowRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0"
                    />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Services
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-orange-500"></span>
            </h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              {[
                'Residential Wiring',
                'Commercial Lighting',
                'Industrial Repair',
                '24/7 Emergency',
                'Panel Upgrades',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="hover:text-orange-500 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-orange-500"></span>
            </h4>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <MapPin className="text-orange-500 shrink-0" size={20} />
                <p className="text-gray-400 text-sm">
                  123 Electric St, Power City, <br />
                  State 45678
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-orange-500 shrink-0" size={20} />
                <p className="text-gray-400 text-sm font-bold">
                  1 (800) 765-43-21
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-orange-500 shrink-0" size={20} />
                <p className="text-gray-400 text-sm">info@electrician.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- Bottom Bar: Copyright --- */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center">
            © {new Date().getFullYear()}{' '}
            <span className="text-white font-bold">Electrician</span>. All
            rights reserved. Designed for professional electrical contractors.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-orange-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
