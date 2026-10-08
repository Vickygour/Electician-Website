'use client';
import React, { useEffect, useState } from 'react';
import { X, Award } from 'lucide-react';
import PageBanner from '../../Components/PageBanner';
import { team } from '../../../data/team';
import { useApp } from '../../../context/AppContext';

export default function TeamPage() {
  const { openAppointment } = useApp();
  const [sel, setSel] = useState(null);

  useEffect(() => {
    if (!sel) return;
    const onKey = (e) => e.key === 'Escape' && setSel(null);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [sel]);

  return (
    <>
      <PageBanner title="Our" accent="Team" eyebrow="Meet the experts" />
      <section className="py-24 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">Certified people you can <span className="text-orange-500">trust</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-16">Every member of our team is licensed, background checked and trained in customer service. Click a card to read more.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {team.map((m) => (
              <button key={m.name} onClick={() => setSel(m)} className="group text-left shadow-lg hover:shadow-2xl transition-shadow bg-white">
                <div className="relative h-[380px] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6 border-b-4 border-transparent group-hover:border-orange-500 transition-colors">
                  <h3 className="text-xl font-bold text-slate-800">{m.name}</h3>
                  <p className="text-orange-500 text-sm font-medium">{m.role}</p>
                  <p className="text-gray-400 text-xs mt-2">{m.exp} experience</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {sel && (
        <div className="fixed inset-0 z-[150] bg-black/80 flex items-center justify-center p-4" onClick={() => setSel(null)} role="dialog" aria-modal="true" aria-label={sel.name}>
          <div className="bg-white max-w-3xl w-full flex flex-col md:flex-row relative animate-fade-up" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSel(null)} aria-label="Close" className="absolute top-3 right-3 z-10 bg-white/90 p-1.5 text-slate-700 hover:text-orange-500"><X size={22} /></button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={sel.img} alt={sel.name} className="w-full md:w-2/5 h-64 md:h-auto object-cover" />
            <div className="p-8 md:p-10 flex-1">
              <h3 className="text-3xl font-black text-slate-800">{sel.name}</h3>
              <p className="text-orange-500 font-bold mb-4">{sel.role}</p>
              <p className="flex items-center gap-2 text-sm text-gray-500 mb-4"><Award size={18} className="text-orange-500" /> {sel.exp} of experience</p>
              <p className="text-gray-600 leading-relaxed mb-8">{sel.bio}</p>
              <button
                onClick={() => { setSel(null); openAppointment({ service: 'Free Estimate / Quote', message: `I would like to speak with ${sel.name}.` }); }}
                className="bg-orange-500 hover:bg-[#2A2C38] text-white px-8 py-3.5 font-bold text-xs uppercase tracking-widest transition-colors"
              >
                Book a visit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
