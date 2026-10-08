'use client';
import React from 'react';
import Link from 'next/link';
import { site } from '../../data/site';
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
import Image from 'next/image';

const Footer = () => {
  const social = [
    { Icon: Facebook, href: site.social.facebook, label: 'Facebook' },
    { Icon: Twitter, href: site.social.twitter, label: 'Twitter' },
    { Icon: Instagram, href: site.social.instagram, label: 'Instagram' },
    { Icon: Linkedin, href: site.social.linkedin, label: 'LinkedIn' },
  ];
  const quick = [
    ['Home', '/'],
    ['About Us', '/about'],
    ['Our Projects', '/gallery'],
    ['Maintenance Plans', '/prices'],
    ['Contact', '/contact'],
  ];
  const serv = [
    ['Residential Wiring', '/services/residential-electrical'],
    ['Commercial Lighting', '/services/lighting-design'],
    ['Industrial Repair', '/services/industrial-systems'],
    ['24/7 Emergency', '/services/maintenance-repair'],
    ['Panel Upgrades', '/services/panel-upgrades'],
  ];
  return (
    <footer className="bg-[#2A2C38] text-white pt-16 pb-8 px-6 md:px-20 font-sans print:hidden">
      <div className="max-w-7xl mx-auto">
        {/* --- Top Section: Logo & Newsletter --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Logo & About */}
          <div className="col-span-1 md:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 mb-6 group w-fit"
            >
              <Image
                src="/assets/weee.png"
                alt="BijliBaaz"
                width={150}
                height={55}
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />

            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Providing top-notch electrical services for residential,
              commercial, and industrial projects. Reliable, safe, and 24/7
              available.
            </p>
            <div className="flex gap-4">
              {social.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href === '#' ? undefined : '_blank'}
                  rel="noopener noreferrer"
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
              {quick.map(([item, href]) => (
                <li key={item}>
                  <Link
                    href={href}
                    className="hover:text-orange-500 flex items-center gap-2 transition-colors group"
                  >
                    <ArrowRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0"
                    />
                    {item}
                  </Link>
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
              {serv.map(([service, href]) => (
                <li key={service}>
                  <Link
                    href={href}
                    className="hover:text-orange-500 transition-colors"
                  >
                    {service}
                  </Link>
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
                <p className="text-gray-400 text-sm">{site.address}</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-orange-500 shrink-0" size={20} />
                <a href={site.phoneHref} className="text-gray-400 text-sm font-bold hover:text-orange-500">
                  {site.phone}
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-orange-500 shrink-0" size={20} />
                <a href={`mailto:${site.email}`} className="text-gray-400 text-sm hover:text-orange-500">{site.email}</a>
              </div>
            </div>
          </div>
        </div>

        {/* --- Bottom Bar: Copyright --- */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center">
            © {new Date().getFullYear()}{' '}
            <span className="text-white font-bold">Electrician</span>. All
            rights reserved. Designed for professional electrical contractors.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <Link href="/privacy" className="hover:text-orange-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-orange-500 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
