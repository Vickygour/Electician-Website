'use client';
import React, { useMemo, useState } from 'react';
import { Calculator, Zap } from 'lucide-react';
import PageBanner from '../Components/PageBanner';
import { PlanCard } from '../Components/StatsSection';
import { plans } from '../../data/plans';
import { money } from '../../data/site';
import { useApp } from '../../context/AppContext';

const priceList = [
  { cat: 'Residential', item: 'Switch / socket replacement', price: 45, unit: 'per point' },
  { cat: 'Residential', item: 'Ceiling fan installation', price: 65, unit: 'per fan' },
  { cat: 'Residential', item: 'MCB / fuse box replacement', price: 150, unit: 'per panel' },
  { cat: 'Residential', item: 'Full-home rewiring (2 BHK)', price: 1800, unit: 'from' },
  { cat: 'Residential', item: 'EV charger installation', price: 450, unit: 'from' },
  { cat: 'Commercial', item: 'Office lighting layout', price: 120, unit: 'per visit' },
  { cat: 'Commercial', item: 'LED retrofit', price: 25, unit: 'per fixture' },
  { cat: 'Commercial', item: 'Structured cabling / data point', price: 55, unit: 'per point' },
  { cat: 'Commercial', item: 'Annual safety inspection', price: 250, unit: 'per site' },
  { cat: 'Industrial', item: 'Three-phase connection', price: 600, unit: 'from' },
  { cat: 'Industrial', item: 'Motor starter installation', price: 350, unit: 'per motor' },
  { cat: 'Industrial', item: 'Preventive maintenance visit', price: 300, unit: 'per visit' },
  { cat: 'Emergency', item: '24/7 emergency call-out', price: 99, unit: 'first hour' },
  { cat: 'Emergency', item: 'Additional hour', price: 70, unit: 'per hour' },
];
const tabs = ['All', 'Residential', 'Commercial', 'Industrial', 'Emergency'];

// ----- estimate calculator rules -----
const jobTypes = {
  'Switch / socket points': { rate: 45, unit: 'points', min: 1, max: 50, service: 'Residential Electrical' },
  'Ceiling fan / light fitting': { rate: 65, unit: 'fittings', min: 1, max: 30, service: 'Residential Electrical' },
  'LED lighting retrofit': { rate: 25, unit: 'fixtures', min: 1, max: 200, service: 'Lighting Design' },
  'New wiring (per room)': { rate: 320, unit: 'rooms', min: 1, max: 20, service: 'Residential Electrical' },
  'Panel / MCB upgrade': { rate: 150, unit: 'panels', min: 1, max: 5, service: 'Panel Changes' },
  'CCTV camera installation': { rate: 80, unit: 'cameras', min: 1, max: 32, service: 'Security Systems' },
};
const propertyMult = { Home: 1, Office: 1.25, Factory: 1.6 };
const urgencyMult = { 'Standard (3-5 days)': 1, 'Priority (next day)': 1.25, 'Emergency (within hours)': 1.6 };

export default function PricesPage() {
  const { openAppointment, toast } = useApp();
  const [tab, setTab] = useState('All');
  const [yearly, setYearly] = useState(false);

  const [job, setJob] = useState('Switch / socket points');
  const [qty, setQty] = useState(5);
  const [property, setProperty] = useState('Home');
  const [urgency, setUrgency] = useState('Standard (3-5 days)');

  const list = tab === 'All' ? priceList : priceList.filter((p) => p.cat === tab);

  const cfg = jobTypes[job];
  const safeQty = Math.min(Math.max(Number(qty) || cfg.min, cfg.min), cfg.max);
  const estimate = useMemo(() => {
    const base = cfg.rate * safeQty * propertyMult[property] * urgencyMult[urgency];
    return { low: Math.round(base * 0.9), high: Math.round(base * 1.15) };
  }, [cfg, safeQty, property, urgency]);

  const onJob = (v) => {
    setJob(v);
    setQty(Math.min(Math.max(Number(qty) || 1, jobTypes[v].min), jobTypes[v].max));
  };

  const sel = 'p-3.5 border border-gray-200 bg-white outline-none focus:border-orange-500 w-full text-slate-800';
  const lbl = 'text-xs font-bold uppercase tracking-widest text-slate-600 mb-1.5 block';

  return (
    <>
      <PageBanner title="Our" accent="Prices" eyebrow="Clear & Fair" />

      {/* PRICE LIST */}
      <section className="py-24 px-6 md:px-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-bold text-xs uppercase tracking-widest block mb-4">Transparent Pricing</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-4">Standard <span className="text-orange-500">Price List</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Typical prices for common jobs. Final quote is fixed after a free site visit, no hidden charges.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                aria-pressed={tab === t}
                className={`px-5 py-2.5 text-sm font-bold transition-colors ${tab === t ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="border border-gray-200 divide-y divide-gray-100 shadow-sm">
            {list.map((row) => (
              <div key={row.item} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-5 hover:bg-orange-50/50 transition-colors">
                <div>
                  <p className="font-bold text-slate-800">{row.item}</p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">{row.cat}</p>
                </div>
                <div className="flex items-center gap-5">
                  <p className="text-xl font-black text-slate-700">
                    {money(row.price).replace('.00', '')} <span className="text-xs font-medium text-gray-400">{row.unit}</span>
                  </p>
                  <button
                    onClick={() => openAppointment({ service: row.cat === 'Emergency' ? 'Emergency Repair' : 'Free Estimate / Quote', message: `Interested in: ${row.item}` })}
                    className="text-xs font-bold uppercase tracking-widest text-orange-500 hover:text-slate-800 transition-colors"
                  >
                    Book
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESTIMATE CALCULATOR */}
      <section className="py-24 px-6 md:px-20 bg-slate-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <div className="bg-white p-8 md:p-10 shadow-xl border-t-8 border-[#2A2C38]">
            <div className="flex items-center gap-3 mb-8">
              <Calculator className="text-orange-500" size={30} />
              <h3 className="text-3xl font-black text-slate-800">Estimate Calculator</h3>
            </div>
            <div className="space-y-5">
              <div>
                <label htmlFor="e-job" className={lbl}>Type of work</label>
                <select id="e-job" className={sel} value={job} onChange={(e) => onJob(e.target.value)}>
                  {Object.keys(jobTypes).map((j) => <option key={j}>{j}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="e-qty" className={lbl}>Quantity ({cfg.unit})</label>
                <div className="flex items-center gap-3">
                  <input
                    id="e-qty" type="range" min={cfg.min} max={cfg.max} value={safeQty}
                    onChange={(e) => setQty(e.target.value)} className="flex-1 accent-orange-500"
                  />
                  <input
                    type="number" min={cfg.min} max={cfg.max} value={qty}
                    onChange={(e) => setQty(e.target.value)}
                    onBlur={() => setQty(safeQty)}
                    className="w-20 p-2.5 border border-gray-200 text-center font-bold outline-none focus:border-orange-500"
                    aria-label="Quantity"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="e-prop" className={lbl}>Property</label>
                  <select id="e-prop" className={sel} value={property} onChange={(e) => setProperty(e.target.value)}>
                    {Object.keys(propertyMult).map((p) => <option key={p}>{p}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="e-urg" className={lbl}>Urgency</label>
                  <select id="e-urg" className={sel} value={urgency} onChange={(e) => setUrgency(e.target.value)}>
                    {Object.keys(urgencyMult).map((u) => <option key={u}>{u}</option>)}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#2A2C38] text-white p-8 md:p-10 flex flex-col justify-center text-center shadow-xl">
            <Zap className="mx-auto text-orange-500 mb-4" size={44} fill="currentColor" />
            <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">Estimated cost</p>
            <p className="text-5xl md:text-6xl font-black mb-2">
              ${estimate.low.toLocaleString('en-US')} <span className="text-gray-500 text-3xl">-</span> ${estimate.high.toLocaleString('en-US')}
            </p>
            <p className="text-gray-400 text-sm mb-8">
              {safeQty} {cfg.unit} · {property} · {urgency}. Final price is confirmed after site visit.
            </p>
            <button
              onClick={() => {
                openAppointment({
                  service: cfg.service,
                  message: `Estimate: ${job} x ${safeQty} (${property}, ${urgency}) - approx $${estimate.low}-$${estimate.high}`,
                });
              }}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 uppercase text-sm tracking-widest transition-colors"
            >
              Book with this estimate
            </button>
            <button
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(`${job} x ${safeQty} (${property}, ${urgency}): $${estimate.low}-$${estimate.high}`);
                  toast('Estimate copied to clipboard');
                } catch {
                  toast('Could not copy. Please copy manually.', 'error');
                }
              }}
              className="mt-4 text-sm text-gray-400 hover:text-orange-500 transition-colors"
            >
              Copy estimate
            </button>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-orange-500 font-bold text-sm mb-2">Save on the Service You Need</p>
          <h2 className="text-4xl font-bold text-slate-800 mb-6">Maintenance Plans</h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-10 text-sm">
            Pick a plan and never worry about who to call. Pay yearly and get 2 months free.
          </p>

          <div className="inline-flex items-center gap-4 mb-14 bg-slate-100 p-1.5">
            <button onClick={() => setYearly(false)} aria-pressed={!yearly} className={`px-6 py-2.5 text-sm font-bold transition-colors ${!yearly ? 'bg-orange-500 text-white' : 'text-slate-600'}`}>Monthly</button>
            <button onClick={() => setYearly(true)} aria-pressed={yearly} className={`px-6 py-2.5 text-sm font-bold transition-colors ${yearly ? 'bg-orange-500 text-white' : 'text-slate-600'}`}>
              Yearly <span className="text-[10px] font-black ml-1">-17%</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {plans.map((plan, i) => (
              <PlanCard
                key={plan.id}
                plan={plan}
                price={yearly ? plan.price * 10 : plan.price}
                period={yearly ? '/yr' : '/mo'}
                isFeatured={i === 1}
                onOrder={() =>
                  openAppointment({
                    service: 'Free Estimate / Quote',
                    message: `I want to order the ${plan.title} plan (${yearly ? 'yearly' : 'monthly'}).`,
                  })
                }
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
