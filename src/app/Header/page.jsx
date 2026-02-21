'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Zap, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/', active: true },
    {
      name: 'About Us',
      href: '/about',
      hasDropdown: true,
      subLinks: [
        { name: 'Our Story', href: '/about/story' },
        { name: 'Testimonials', href: '/about/testimonials' },
        { name: 'Our Team', href: '/about/team' },
      ],
    },
    { name: 'Services', href: '/Service' },
    { name: 'Prices', href: '/prices' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
    { name: 'Shop', href: '/shop' },
    { name: 'Faq', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-[#f3f3f3] w-full sticky top-0 z-50 shadow-sm font-sans">
      <div className="max-w-7xl mx-auto px-6 h-25 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-1 group">
          <Zap
            size={32}
            fill="#f97316"
            className="text-[#f97316] transition-transform group-hover:scale-110"
          />
          <span className="text-3xl md:text-4xl font-bold text-[#1f2937]">
            Electrician
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 lg:space-x-4 xl:space-x-6">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group py-7">
              <Link
                href={link.href}
                className={`flex items-center gap-1 text-sm xl:text-[15px] transition-colors duration-300 relative pb-1
                  ${link.active ? 'text-[#f97316]' : 'text-[#1f2937] hover:text-[#f97316]'}
                `}
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown
                    size={14}
                    className="group-hover:rotate-180 transition-transform duration-300"
                  />
                )}

                {/* Modern Underline Animation */}
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#f97316] transform transition-transform duration-300 origin-left
                  ${link.active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                `}
                ></span>
              </Link>

              {/* Dropdown Menu - Shows on Hover */}
              {link.hasDropdown && (
                <div className="absolute top-[100%] left-0 w-48 bg-white shadow-xl rounded-b-lg border-t-2 border-[#f97316] opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-2">
                    {link.subLinks?.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block px-4 py-2.5 text-sm text-[#1f2937] hover:bg-gray-50 hover:text-[#f97316] transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:flex items-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg shadow-orange-500/20 active:scale-95">
            <Zap size={18} fill="white" />
            <span>Appointment</span>
          </button>

          <button
            className="lg:hidden p-2 text-[#1f2937] hover:bg-gray-200 rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col p-6 space-y-1">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => !link.hasDropdown && setIsOpen(false)}
                  className={`flex justify-between items-center py-3 text-lg font-medium ${
                    link.active ? 'text-[#f97316]' : 'text-[#1f2937]'
                  }`}
                >
                  {link.name}
                </Link>
                {link.hasDropdown && (
                  <div className="pl-4 border-l-2 border-gray-100 ml-1 space-y-2 pb-2">
                    {link.subLinks?.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block py-2 text-gray-500"
                        onClick={() => setIsOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <button className="flex items-center justify-center gap-2 bg-[#f97316] text-white px-6 py-4 rounded-lg font-bold w-full">
                <Zap size={18} fill="white" />
                Appointment
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
