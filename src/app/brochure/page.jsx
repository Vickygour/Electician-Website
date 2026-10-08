'use client';
import React from 'react';
import { Printer, Zap, Check } from 'lucide-react';
import { services } from '../../data/services';
import { plans } from '../../data/plans';
import { site } from '../../data/site';

export default function BrochurePage() {
  return (
    <section className="bg-slate-100 print:bg-white py-12 px-4">
      <div className="max-w-3xl mx-auto mb-6 flex justify-between items-center print:hidden">
        <p className="text-sm text-gray-500">Click the button and choose <b>Save as PDF</b> in the print window.</p>
        <button onClick={() => window.print()} className="flex items-center gap-2 bg-orange-500 hover:bg-[#2A2C38] text-white px-6 py-3 font-bold text-sm transition-colors">
          <Printer size={18} /> Download PDF
        </button>
      </div>

      <div className="max-w-3xl mx-auto bg-white shadow-xl print:shadow-none p-10 md:p-14">
        <div className="flex items-center gap-2 mb-2">
          <Zap size={34} className="text-orange-500" fill="currentColor" />
          <span className="text-4xl font-black text-slate-800">{site.name}</span>
        </div>
        <p className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-8">{site.tagline} · Since 1999</p>
        <div className="h-1.5 bg-orange-500 mb-8" />

        <p className="text-gray-600 leading-relaxed mb-10">
          Certified electricians for homes, businesses and industries. Safe, reliable and affordable electrical solutions, with 24/7 emergency service and a 100% satisfaction guarantee.
        </p>

        <h2 className="text-2xl font-black text-slate-800 mb-4">Our services</h2>
        <ul className="grid grid-cols-2 gap-x-8 gap-y-2 mb-10 text-sm text-gray-700">
          {services.map((s) => (
            <li key={s.slug} className="flex items-start gap-2"><Check size={16} className="text-orange-500 mt-0.5 shrink-0" /> <span><b>{s.title}</b> from ${s.from}</span></li>
          ))}
        </ul>

        <h2 className="text-2xl font-black text-slate-800 mb-4">Maintenance plans</h2>
        <div className="grid grid-cols-3 gap-4 mb-10">
          {plans.map((p) => (
            <div key={p.id} className="border border-gray-200 p-4 text-center">
              <p className="font-bold text-slate-800 text-sm mb-1">{p.title}</p>
              <p className="text-2xl font-black text-orange-500">${p.price}<span className="text-xs text-gray-400">/mo</span></p>
            </div>
          ))}
        </div>

        <div className="bg-[#2A2C38] text-white p-6 text-sm space-y-1" style={{ printColorAdjust: 'exact', WebkitPrintColorAdjust: 'exact' }}>
          <p className="font-bold text-orange-400 uppercase tracking-widest text-xs mb-2">Contact us</p>
          <p>Phone: {site.phone} (24/7)</p>
          <p>Email: {site.email}</p>
          <p>Address: {site.address}</p>
          <p>Hours: {site.hours}</p>
        </div>
      </div>
    </section>
  );
}
