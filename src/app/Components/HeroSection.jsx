'use client';

import React from 'react';
import Image from 'next/image';
import { Zap, Phone } from 'lucide-react';
import AboutSection from './Aboutsection';
import ServicesSection from './ServicesSection';
import ServicesSlider from './ServicesSlider';
import CallToAction from './CallToAction';
import OurProjects from './OurProjects';
import InfoSection from './InfoSection';
import MaintenancePlans from './StatsSection';
import Video from './Video';
import { useApp } from '../../context/AppContext';
import { site } from '../../data/site';

const HeroSection = () => {
  const { openAppointment } = useApp();

  const heroImg =
    '/assets/Main.png';

  return (
    <>
      {/* ───────── ROYAL CROWN + PRINCE ANIMATION ───────── */}
      <style>{`
        /* Crown container */
        .royal-wrap {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }
        @media (min-width: 768px) {
          .royal-wrap { gap: 0.75rem; }
        }

        /* Soft radial aura behind the crown */
        .crown-aura {
          position: absolute;
          inset: -20% -10% -20% -30%;
          background: radial-gradient(
            ellipse at 30% 50%,
            rgba(245, 158, 11, 0.35) 0%,
            rgba(245, 158, 11, 0.12) 35%,
            transparent 70%
          );
          filter: blur(6px);
          opacity: 0;
          animation: auraIn 1.2s ease-out 0.2s forwards,
                     auraPulse 3.5s ease-in-out 1.6s infinite;
          pointer-events: none;
          z-index: 0;
        }
        @keyframes auraIn { to { opacity: 1; } }
        @keyframes auraPulse {
          0%, 100% { opacity: 0.75; transform: scale(1); }
          50%      { opacity: 1;    transform: scale(1.06); }
        }

        /* Crown SVG — floats gently after intro */
        .crown-svg {
          position: relative;
          z-index: 1;
          overflow: visible;
          animation: crownFloat 6s ease-in-out 2.2s infinite;
          will-change: transform;
        }
        @keyframes crownFloat {
          0%, 100% { transform: translateY(0) rotate(-1deg); }
          50%      { transform: translateY(-5px) rotate(1deg); }
        }

        /* Crown path — draws itself then fills */
        .crown-path, .crown-base {
          fill-opacity: 0;
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          animation:
            crownDraw 1.3s cubic-bezier(0.65, 0, 0.35, 1) forwards,
            crownFill 0.6s ease-out 1.1s forwards;
        }
        .crown-base { animation-delay: 0.35s, 1.35s; }

        @keyframes crownDraw { to { stroke-dashoffset: 0; } }
        @keyframes crownFill { to { fill-opacity: 1; } }

        /* Gems — pop in one-by-one */
        .crown-gem {
          opacity: 0;
          transform-box: fill-box;
          transform-origin: center;
          animation: gemPop 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) forwards,
                     gemGlint 3.2s ease-in-out 2.5s infinite;
        }
        .gem-1 { animation-delay: 1.55s, 2.5s; }
        .gem-2 { animation-delay: 1.70s, 3.0s; }
        .gem-3 { animation-delay: 1.85s, 3.5s; }
        .gem-4 { animation-delay: 2.00s, 4.0s; }

        @keyframes gemPop {
          0%   { opacity: 0; transform: scale(0.2); }
          60%  { opacity: 1; transform: scale(1.35); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes gemGlint {
          0%, 100% { filter: brightness(1); }
          50%      { filter: brightness(1.9) drop-shadow(0 0 3px #fde68a); }
        }

        /* PRINCE word */
        .prince-word {
          position: relative;
          display: inline-block;
          letter-spacing: 0.03em;
          opacity: 0;
          transform: translateY(14px) scale(0.96);
          animation: princeIn 1s cubic-bezier(0.2, 0.9, 0.2, 1) 1s forwards;
          will-change: transform, opacity;
        }
        @keyframes princeIn {
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* Base metallic gold letters */
        .prince-text {
          background-image: linear-gradient(
            100deg,
            #b45309 0%,
            #f59e0b 25%,
            #fde68a 45%,
            #fbbf24 55%,
            #f59e0b 75%,
            #b45309 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
        }

        /* The diagonal light beam that sweeps across */
        .prince-shine {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(
            115deg,
            transparent 0%,
            transparent 42%,
            rgba(255, 255, 255, 0.95) 50%,
            transparent 58%,
            transparent 100%
          );
          background-size: 260% 100%;
          background-position: 200% 0;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
          animation: shineBeam 4.5s cubic-bezier(0.7, 0, 0.3, 1) 2.5s infinite;
          pointer-events: none;
        }
        @keyframes shineBeam {
          0%   { background-position: 200% 0; }
          60%  { background-position: -100% 0; }
          100% { background-position: -100% 0; }
        }

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .crown-aura, .crown-svg, .crown-path, .crown-base,
          .crown-gem, .prince-word, .prince-shine {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            fill-opacity: 1 !important;
            stroke-dashoffset: 0 !important;
          }
          .prince-text {
            background-image: linear-gradient(90deg, #f59e0b, #fde68a, #f59e0b);
          }
        }
      `}</style>
      {/* ───────── END STYLES ───────── */}

      <section className="relative w-full min-h-screen lg:min-h-[700px] lg:h-[90vh] overflow-hidden flex items-center">
        {/* Background with Dark Overlay and Blur */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1507494924047-60b8ee826ca9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGVsZWN0cmljaWFufGVufDB8fDB8fHww"
            alt="Modern Interior Background"
            fill
            className="object-cover blur-[2px]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/80 to-black/60" />
        </div>

        {/* ===================== DESKTOP half-oval image (lg+) ===================== */}
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[40%] h-full z-[5]">
          <div
            className="relative w-full h-full shadow-2xl"
            style={{
              clipPath: 'ellipse(100% 100% at 100% 50%)',
              WebkitClipPath: 'ellipse(100% 100% at 100% 50%)',
            }}
          >
            <Image
              src={heroImg}
              alt="Professional electrician"
              fill
              className="object-cover object-center"
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
            />
            <div
              className="absolute inset-0 bg-black/10 pointer-events-none"
              style={{ clipPath: 'ellipse(100% 100% at 100% 50%)' }}
            />
          </div>
        </div>

        {/* ===================== CONTENT ===================== */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 lg:py-0">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8">

            {/* ─── Left Content ─── */}
            <div className="w-full lg:w-[50%] text-center lg:text-left flex flex-col items-center lg:items-start">
              <span className="text-[#f97316] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4">
                24/7 Emergency Service Available
              </span>

              <div className="flex flex-col gap-1 mb-6">
                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1]">
                  {/* ─── Royal crown + PRINCE ─── */}
                  <span className="royal-wrap relative">
                    <span className="crown-aura" aria-hidden="true" />

                    <svg
                      viewBox="0 0 64 48"
                      className="crown-svg w-9 h-7 sm:w-11 sm:h-8 md:w-14 md:h-10 lg:w-16 lg:h-12"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <defs>
                        <linearGradient id="crownGrad" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#fde68a" />
                          <stop offset="45%" stopColor="#f59e0b" />
                          <stop offset="100%" stopColor="#b45309" />
                        </linearGradient>
                      </defs>

                      <path
                        className="crown-path"
                        d="M6 40 L2 14 L16 24 L24 6 L32 22 L40 6 L48 24 L62 14 L58 40 Z"
                        fill="url(#crownGrad)"
                        stroke="#78350f"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        pathLength="1"
                      />
                      <rect
                        className="crown-base"
                        x="6" y="40" width="52" height="6" rx="2"
                        fill="url(#crownGrad)"
                        stroke="#78350f"
                        strokeWidth="1.8"
                        pathLength="1"
                      />
                      <circle className="crown-gem gem-1" cx="16" cy="43" r="2" fill="#7c2d12" />
                      <circle className="crown-gem gem-2" cx="32" cy="43" r="2" fill="#7c2d12" />
                      <circle className="crown-gem gem-3" cx="48" cy="43" r="2" fill="#7c2d12" />
                      <circle className="crown-gem gem-4" cx="32" cy="14" r="2.6" fill="#fef3c7" />
                    </svg>

                    <span className="prince-word">
                      <span className="prince-text">PRINCE</span>
                      <span className="prince-shine" aria-hidden="true">PRINCE</span>
                    </span>
                  </span>

                  <br />
                  <span className="text-white">Electrical Services.</span>
                </h1>
              </div>

              <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-lg mb-8 sm:mb-10 leading-relaxed">
                From emergency repairs to complete rewiring, our certified
                electricians deliver safe, reliable, and affordable electrical
                solutions for your home and business.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto">
                <button
                  onClick={() => openAppointment({ service: 'Free Estimate / Quote' })}
                  className="flex items-center justify-center gap-2 bg-[#f97316] hover:bg-orange-600 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-md font-bold transition-all duration-300 group shadow-lg shadow-orange-900/20"
                >
                  <Zap size={18} fill="white" className="group-hover:scale-110 transition-transform" />
                  <span>BOOK A SERVICE</span>
                </button>

                <a
                  href={site.phoneHref}
                  className="flex items-center justify-center gap-2 border-2 border-white/30 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-md font-bold hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
                >
                  <Phone size={18} />
                  <span>{site.phone}</span>
                </a>
              </div>
            </div>

            {/* ─── Right image for mobile / tablet (< lg) ─── */}
            <div className="lg:hidden w-full max-w-md mx-auto">
              <div className="relative w-full aspect-[4/5] sm:aspect-[5/5] md:aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src={heroImg}
                  alt="Professional electrician"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1023px) 90vw, 100vw"
                  priority
                />
                {/* subtle gradient at bottom for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </section>

      <AboutSection />
      <ServicesSection />
      <ServicesSlider />
      <CallToAction />
      <OurProjects />
      <InfoSection />
      <MaintenancePlans />
      <Video />
    </>
  );
};

export default HeroSection;