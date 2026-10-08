'use client';
import React, { useMemo, useState } from 'react';
import { Plus, Minus, Search } from 'lucide-react';
import PageBanner from '../Components/PageBanner';
import { faqs, faqCategories } from '../../data/faqs';
import { useApp } from '../../context/AppContext';
import { site } from '../../data/site';

export default function FaqPage() {
  const { openAppointment } = useApp();
  const [cat, setCat] = useState('All');
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(0);

  const list = useMemo(() => {
    const term = q.trim().toLowerCase();
    return faqs.filter(
      (f) => (cat === 'All' || f.cat === cat) && (!term || f.q.toLowerCase().includes(term) || f.a.toLowerCase().includes(term))
    );
  }, [cat, q]);

  return (
    <>
      <PageBanner title="Frequently Asked" accent="Questions" eyebrow="Help Centre" />

      <section className="py-24 px-6 md:px-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="relative mb-8">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={q}
              onChange={(e) => { setQ(e.target.value); setOpen(0); }}
              placeholder="Search your question..."
              aria-label="Search questions"
              className="w-full pl-11 pr-4 py-4 border border-gray-200 outline-none focus:border-orange-500"
            />
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
            {faqCategories.map((c) => (
              <button
                key={c}
                onClick={() => { setCat(c); setOpen(0); }}
                aria-pressed={cat === c}
                className={`px-5 py-2.5 text-sm font-bold transition-colors ${cat === c ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                {c}
              </button>
            ))}
          </div>

          {list.length === 0 ? (
            <p className="text-center text-gray-500 py-12 bg-slate-50">No matching questions. Try other words or ask us directly below.</p>
          ) : (
            <div className="space-y-3">
              {list.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div key={f.q} className={`border transition-colors ${isOpen ? 'border-orange-500 shadow-lg' : 'border-gray-200'}`}>
                    <button
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-4 text-left p-5 md:p-6"
                    >
                      <span className={`font-bold text-lg ${isOpen ? 'text-orange-500' : 'text-slate-800'}`}>{f.q}</span>
                      <span className={`shrink-0 w-8 h-8 flex items-center justify-center ${isOpen ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-600'}`}>
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </span>
                    </button>
                    {isOpen && <p className="px-5 md:px-6 pb-6 text-gray-500 leading-relaxed">{f.a}</p>}
                  </div>
                );
              })}
            </div>
          )}

          <div className="mt-16 bg-[#2A2C38] text-white p-10 text-center">
            <h3 className="text-2xl font-black mb-2">Still have a question?</h3>
            <p className="text-gray-400 mb-6">Call us on <a href={site.phoneHref} className="text-orange-500 font-bold hover:underline">{site.phone}</a> or book a free consultation.</p>
            <button onClick={() => openAppointment({ service: 'Free Estimate / Quote' })} className="bg-orange-500 hover:bg-orange-600 px-8 py-4 font-bold text-xs uppercase tracking-widest transition-colors">
              Book a consultation
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
