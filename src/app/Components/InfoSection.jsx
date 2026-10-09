'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Phone } from 'lucide-react';
import { site } from '../../data/site';
import { testimonials } from '../../data/testimonials';

import 'swiper/css';
import 'swiper/css/pagination';

const stats = [
  { label: 'Residential Projects', value: 5000 },
  { label: 'Commercial Projects', value: 1500 },
  { label: 'Industrial Projects', value: 1000 },
];

function Counter({ to }) {
  const ref = useRef(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf;
    const run = () => {
      const start = performance.now();
      const dur = 1600;
      const tick = (t) => {
        const p = Math.min((t - start) / dur, 1);
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to]);

  return <span ref={ref}>{n.toLocaleString('en-US')}+</span>;
}

export default function InfoSection() {
  return (
    <div className="w-full bg-white">

      {/* ═══════════ TOP — STATS ═══════════ */}
      <section className="bg-[#2A2C38] py-12 sm:py-16 lg:py-20 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-16">

            {/* Heading block */}
            <div className="text-center lg:text-left lg:w-1/3 shrink-0">
              <span className="text-orange-500 font-bold text-xs sm:text-sm uppercase tracking-[0.15em]">
                Our Statistics
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2 leading-tight">
                Some Important Facts
              </h2>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 md:gap-8 flex-1 w-full">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center lg:text-left border-l-0 sm:border-l-2 sm:border-orange-500/40 sm:pl-4 md:pl-6"
                >
                  <div className="text-3xl sm:text-4xl font-extrabold text-white">
                    <Counter to={stat.value} />
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ BOTTOM — TESTIMONIALS + IMAGE ═══════════ */}
      <section className="relative flex flex-col lg:flex-row">

        {/* ─── Testimonials (LEFT) ─── */}
        <div className="w-full lg:w-1/2 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-16 lg:py-20">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{
              clickable: true,
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-orange-500',
              bulletClass: 'swiper-pagination-bullet !bg-gray-300 !opacity-70',
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop
            className="pb-12 [&_.swiper-pagination]:!bottom-0"
          >
            {testimonials.slice(0, 5).map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-4 sm:gap-5">

                  {/* Avatar */}
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden ring-4 ring-orange-500/20 shrink-0">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>

                  {/* Text */}
                  <div className="w-full">
                    <span className="text-orange-500 font-bold text-[11px] sm:text-xs uppercase tracking-[0.15em]">
                      What Our Clients Say
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mt-1 mb-3 sm:mb-4">
                      Professional & Reliable
                    </h3>
                    <p className="text-gray-500 text-sm sm:text-base italic mb-4 leading-relaxed">
                      &ldquo;{item.text}&rdquo;
                    </p>
                    <h4 className="font-bold text-slate-800 text-sm sm:text-base">
                      — {item.name}
                    </h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ─── Image + Floating Card (RIGHT) ─── */}
        <div className="w-full lg:w-1/2 relative min-h-[380px] sm:min-h-[440px] lg:min-h-[500px]">
          <Image
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200"
            alt="Electrician on the job"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          {/* Dark scrim so floating card pops on mobile */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:from-black/20 pointer-events-none" />

          {/* Floating emergency card */}
          <div className="absolute left-4 right-4 sm:left-6 sm:right-auto sm:max-w-[300px] bottom-6 sm:bottom-8 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 lg:-left-12 xl:-left-20 bg-orange-500 text-white p-5 sm:p-6 lg:p-8 shadow-2xl rounded-md lg:rounded-none z-10">
            <h3 className="text-lg sm:text-xl font-bold mb-1.5 sm:mb-2">
              Emergency Service
            </h3>
            <p className="text-xs sm:text-sm mb-3 sm:mb-4 opacity-95 leading-relaxed">
              Available 24/7 for urgent electrical issues.
            </p>
            <div className="flex items-center gap-2 font-bold text-sm sm:text-base">
              <Phone size={16} className="shrink-0" />
              <a
                href={site.phoneHref}
                className="hover:underline whitespace-nowrap"
              >
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}