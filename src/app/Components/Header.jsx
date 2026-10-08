'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Zap, ChevronDown, ShoppingCart } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import Image from 'next/image';

const navLinks = [
  { name: 'Home', href: '/' },
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
  { name: 'Services', href: '/services' },
  { name: 'Prices', href: '/prices' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Blog', href: '/blog' },
  { name: 'Shop', href: '/shop' },
  { name: 'Faq', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { totals, hydrated, openAppointment } = useApp();

  // page badalte hi mobile menu band
  useEffect(() => setIsOpen(false), [pathname]);

  const isActive = (link) =>
    link.href === '/' ? pathname === '/' : pathname === link.href || pathname.startsWith(link.href + '/');
  // /about ke sub-pages par sirf sub link active dikhe
  const isAboutParent = (link) => link.href === '/about' && pathname.startsWith('/about/');

  const cartCount = hydrated ? totals.count : 0;

  return (
    <header className="bg-[#f3f3f3] w-full sticky top-0 z-50 shadow-sm font-sans print:hidden">
      <div className="max-w-7xl mx-auto px-6 h-25 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 group">
          {/* Dynamic Hover & Scale Effect for Logo */}
          <div className="relative w-28 h-10 md:w-40 md:h-55 transition-transform group-hover:scale-110">
            <Image
              src="/assets/weee.png"
              alt="Electrician Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 lg:space-x-4 xl:space-x-6">
          {navLinks.map((link) => {
            const active = isActive(link);
            return (
              <div key={link.name} className="relative group py-7">
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 text-sm xl:text-[15px] transition-colors duration-300 relative pb-1
                  ${active ? 'text-[#f97316]' : 'text-[#1f2937] hover:text-[#f97316]'}
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
                  ${active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
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
                          className={`block px-4 py-2.5 text-sm hover:bg-gray-50 hover:text-[#f97316] transition-colors ${
                            pathname === sub.href ? 'text-[#f97316]' : 'text-[#1f2937]'
                          }`}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Cart, Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="/cart"
            aria-label="Open cart"
            className="relative p-2 text-[#1f2937] hover:text-[#f97316] transition-colors"
          >
            <ShoppingCart size={26} />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 min-w-5 h-5 px-1 bg-[#f97316] text-white text-[11px] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          <button
            onClick={() => openAppointment()}
            className="hidden sm:flex items-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg shadow-orange-500/20 active:scale-95"
          >
            <Zap size={18} fill="white" />
            <span>Appointment</span>
          </button>

          <button
            className="lg:hidden p-2 text-[#1f2937] hover:bg-gray-200 rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 animate-fade-up max-h-[calc(100vh-100px)] overflow-y-auto">
          <nav className="flex flex-col p-6 space-y-1">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex justify-between items-center py-3 text-lg font-medium ${
                    isActive(link) && !isAboutParent(link) ? 'text-[#f97316]' : 'text-[#1f2937]'
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
                        className={`block py-2 ${pathname === sub.href ? 'text-[#f97316]' : 'text-gray-500'}`}
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
              <button
                onClick={() => {
                  setIsOpen(false);
                  openAppointment();
                }}
                className="flex items-center justify-center gap-2 bg-[#f97316] text-white px-6 py-4 rounded-lg font-bold w-full"
              >
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
