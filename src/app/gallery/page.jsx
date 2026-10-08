'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import PageBanner from '../Components/PageBanner';
import { projects, projectCategories } from '../../data/projects';

export default function GalleryPage() {
  const [tab, setTab] = useState('All');
  const [active, setActive] = useState(null); // index in filtered list

  const filtered = tab === 'All' ? projects : projects.filter((p) => p.category === tab);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() => setActive((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length)), [filtered.length]);
  const next = useCallback(() => setActive((i) => (i === null ? i : (i + 1) % filtered.length)), [filtered.length]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [active, close, prev, next]);

  const current = active !== null ? filtered[active] : null;

  return (
    <>
      <PageBanner title="Our" accent="Gallery" eyebrow="Recent Work" />

      <section className="bg-[#0A0A0A] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-orange-600 text-xs font-bold tracking-widest uppercase">@electricians</span>
            <h2 className="text-4xl font-extrabold text-white mt-2">Projects we are proud of</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setTab(cat)}
                aria-pressed={tab === cat}
                className={`text-sm font-bold uppercase tracking-wider transition-all duration-300 pb-1 border-b-2 ${
                  tab === cat ? 'text-orange-600 border-orange-600' : 'text-gray-400 border-transparent hover:text-white'
                }`}
              >
                {cat.replace('_', ' ')}
              </button>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mb-8">{filtered.length} projects</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActive(i)}
                className="relative aspect-square overflow-hidden group cursor-pointer text-left bg-gray-900"
                aria-label={`Open ${p.title}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <p className="text-orange-500 text-xs font-bold uppercase tracking-widest">{p.category.replace('_', ' ')}</p>
                    <p className="text-white font-bold text-lg">{p.title}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {current && (
        <div
          className="fixed inset-0 z-[160] bg-black/95 flex items-center justify-center p-4 print:hidden"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
        >
          <button onClick={close} aria-label="Close" className="absolute top-6 right-6 text-white hover:text-orange-500 transition-colors">
            <X size={38} />
          </button>
          {filtered.length > 1 && (
            <>
              <button onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous" className="absolute left-3 md:left-8 text-white hover:text-orange-500 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                <ChevronLeft size={30} />
              </button>
              <button onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next" className="absolute right-3 md:right-8 text-white hover:text-orange-500 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                <ChevronRight size={30} />
              </button>
            </>
          )}
          <div className="max-w-5xl w-full text-center" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={current.image} alt={current.title} className="max-h-[78vh] w-auto mx-auto object-contain shadow-2xl" />
            <p className="text-white font-bold mt-4">{current.title}</p>
            <p className="text-gray-400 text-sm">{active + 1} / {filtered.length}</p>
          </div>
        </div>
      )}
    </>
  );
}
