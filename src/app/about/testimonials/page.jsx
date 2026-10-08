'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { Quote } from 'lucide-react';
import PageBanner from '../../Components/PageBanner';
import Stars from '../../Components/Stars';
import { testimonials as base } from '../../../data/testimonials';
import { useApp, readStore, pushStore } from '../../../context/AppContext';

const filters = ['All', '5 stars', '4 stars'];

export default function TestimonialsPage() {
  const { toast } = useApp();
  const [mine, setMine] = useState([]);
  const [filter, setFilter] = useState('All');
  const [form, setForm] = useState({ name: '', rating: 5, text: '' });
  const [err, setErr] = useState({});

  useEffect(() => setMine(readStore('electrician_reviews', [])), []);

  const all = useMemo(() => [...mine.map((m) => ({ ...m, isNew: true })), ...base], [mine]);
  const shown = all.filter((t) => filter === 'All' || t.rating === Number(filter[0]));
  const avg = (all.reduce((s, t) => s + t.rating, 0) / all.length).toFixed(1);

  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (form.name.trim().length < 2) er.name = 'Enter your name.';
    if (form.text.trim().length < 15) er.text = 'Please write at least 15 characters.';
    setErr(er);
    if (Object.keys(er).length) return;
    const review = { name: form.name.trim(), rating: Number(form.rating), text: form.text.trim(), service: 'Customer', createdAt: new Date().toISOString() };
    setMine(pushStore('electrician_reviews', review));
    setForm({ name: '', rating: 5, text: '' });
    toast('Thank you for your review!');
  };

  return (
    <>
      <PageBanner title="Client" accent="Testimonials" eyebrow="What people say" />

      <section className="py-24 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-6xl font-black text-slate-800">{avg}</p>
            <div className="flex justify-center my-2"><Stars rating={Number(avg)} size={22} /></div>
            <p className="text-gray-500">Based on {all.length} reviews</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((f) => (
              <button key={f} onClick={() => setFilter(f)} aria-pressed={filter === f} className={`px-5 py-2.5 text-sm font-bold transition-colors ${filter === f ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>{f}</button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shown.map((t, i) => (
              <div key={`${t.name}-${i}`} className="bg-slate-50 p-8 border-t-4 border-orange-500 relative flex flex-col">
                <Quote className="text-orange-200 absolute top-6 right-6" size={40} />
                {t.isNew && <span className="self-start mb-3 bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-widest px-2 py-1">New</span>}
                <Stars rating={t.rating} />
                <p className="text-gray-600 italic leading-relaxed my-5 flex-1">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  {t.avatar ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  ) : (
                    <span className="w-12 h-12 rounded-full bg-orange-500 text-white font-black flex items-center justify-center">{t.name[0].toUpperCase()}</span>
                  )}
                  <div>
                    <p className="font-bold text-slate-800">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.service}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {shown.length === 0 && <p className="text-center text-gray-500 py-10">No reviews for this filter.</p>}
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-50">
        <form onSubmit={submit} noValidate className="max-w-2xl mx-auto bg-white p-8 md:p-10 shadow-xl border-t-8 border-[#2A2C38] space-y-5">
          <h2 className="text-3xl font-black text-slate-800">Share your experience</h2>
          <div>
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" aria-label="Your name" className="w-full p-4 border border-gray-200 outline-none focus:border-orange-500" />
            {err.name && <span className="text-red-500 text-xs">{err.name}</span>}
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-600 mb-2">Your rating</p>
            <div className="flex gap-1" role="radiogroup" aria-label="Rating">
              {[1, 2, 3, 4, 5].map((n) => (
                <button type="button" key={n} onClick={() => setForm({ ...form, rating: n })} role="radio" aria-checked={form.rating === n} aria-label={`${n} stars`}>
                  <Stars rating={n <= form.rating ? 5 : 0} size={30} />
                </button>
              ))}
            </div>
          </div>
          <div>
            <textarea rows={4} value={form.text} onChange={(e) => setForm({ ...form, text: e.target.value })} placeholder="Tell us about our service..." aria-label="Your review" className="w-full p-4 border border-gray-200 outline-none focus:border-orange-500 resize-none" />
            {err.text && <span className="text-red-500 text-xs">{err.text}</span>}
          </div>
          <button type="submit" className="w-full bg-orange-500 hover:bg-[#2A2C38] text-white font-black py-4 uppercase tracking-widest text-sm transition-colors">Submit review</button>
        </form>
      </section>
    </>
  );
}
