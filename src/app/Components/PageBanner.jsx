import React from 'react';

// Har inner page ka same banner (About / Services / Contact wala style)
export default function PageBanner({ title, accent, eyebrow, image = 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=1600' }) {
  return (
    <section className="relative h-[300px] md:h-[400px] overflow-hidden flex items-center">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center brightness-[0.7]"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent z-10" />
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-20 w-full">
        {eyebrow && (
          <span className="text-orange-500 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">
            {eyebrow}
          </span>
        )}
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight">
          {title} {accent && <span className="text-orange-500">{accent}</span>}
        </h1>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-orange-500 z-20" />
    </section>
  );
}
