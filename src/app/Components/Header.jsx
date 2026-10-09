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

  useEffect(() => setIsOpen(false), [pathname]);

  const isActive = (link) =>
    link.href === '/' ? pathname === '/' : pathname === link.href || pathname.startsWith(link.href + '/');
  const isAboutParent = (link) => link.href === '/about' && pathname.startsWith('/about/');

  const cartCount = hydrated ? totals.count : 0;

  return (
    <header className="bg-[#f3f3f3] w-full sticky top-0 z-50 shadow-sm font-sans print:hidden">
      {/* ─── Main bar ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">

        {/* ─── Logo ─── */}
        <Link href="/" className="flex items-center group shrink-0">
          <div className="relative w-24 h-10 sm:w-28 sm:h-12 md:w-32 md:h-14 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/assets/weee.png"
              alt="Electrician Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* ─── Desktop Navigation ─── */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 flex-1 justify-center">
          {navLinks.map((link) => {
            const active = isActive(link);
            return (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className={`flex items-center gap-0.5 text-[12px] xl:text-[14px] font-medium transition-colors duration-300 relative py-2 px-1.5 xl:px-2 whitespace-nowrap
                    ${active ? 'text-[#f97316]' : 'text-[#1f2937] hover:text-[#f97316]'}
                  `}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown
                      size={12}
                      className="group-hover:rotate-180 transition-transform duration-300 shrink-0"
                    />
                  )}

                  {/* Underline */}
                  <span
                    className={`absolute bottom-0 left-1 right-1 h-[2px] bg-[#f97316] transform transition-transform duration-300 origin-left
                      ${active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                    `}
                  />
                </Link>

                {/* Dropdown */}
                {link.hasDropdown && (
                  <div className="absolute top-full left-0 w-48 bg-white shadow-xl rounded-b-lg border-t-2 border-[#f97316] opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 z-50">
                    <div className="py-2">
                      {link.subLinks?.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className={`block px-4 py-2.5 text-sm hover:bg-gray-50 hover:text-[#f97316] transition-colors ${pathname === sub.href ? 'text-[#f97316]' : 'text-[#1f2937]'
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

        {/* ─── Actions ─── */}
        <div className="flex items-center gap-1 sm:gap-2 md:gap-3 shrink-0">

          {/* Cart */}
          <Link
            href="/cart"
            aria-label="Open cart"
            className="relative p-1.5 sm:p-2 text-[#1f2937] hover:text-[#f97316] transition-colors"
          >
            <ShoppingCart size={22} className="sm:w-6 sm:h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 bg-[#f97316] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Appointment button */}
          <button
            onClick={() => openAppointment()}
            className="hidden md:flex items-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white px-4 lg:px-6 py-2.5 lg:py-3 rounded-lg font-bold text-sm lg:text-base transition-all duration-300 shadow-lg shadow-orange-500/20 active:scale-95"
          >
            <Zap size={16} className="lg:w-[18px] lg:h-[18px]" fill="white" />
            <span className="whitespace-nowrap">Appointment</span>
          </button>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-1.5 sm:p-2 text-[#1f2937] hover:bg-gray-200 rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* ─── Mobile Menu ─── */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 max-h-[calc(100vh-64px)] sm:max-h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="flex flex-col px-4 sm:px-6 py-4">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex justify-between items-center py-3 text-base sm:text-lg font-medium border-b border-gray-100 ${isActive(link) && !isAboutParent(link) ? 'text-[#f97316]' : 'text-[#1f2937]'
                    }`}
                >
                  {link.name}
                </Link>

                {link.hasDropdown && (
                  <div className="pl-4 border-l-2 border-gray-100 ml-1 space-y-1 py-2">
                    {link.subLinks?.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className={`block py-2 text-sm ${pathname === sub.href ? 'text-[#f97316]' : 'text-gray-500'
                          }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-5 pb-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  openAppointment();
                }}
                className="flex items-center justify-center gap-2 bg-[#f97316] text-white px-6 py-4 rounded-lg font-bold w-full active:scale-[0.98] transition-transform"
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