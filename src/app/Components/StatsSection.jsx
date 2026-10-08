'use client';
import React from 'react';
import Link from 'next/link';
import { Check, Home, Zap } from 'lucide-react';
import { plans } from '../../data/plans';
import { useApp } from '../../context/AppContext';

export const PlanCard = ({ plan, price, period = '/mo', isFeatured, onOrder }) => (
  <div
    className={`bg-white p-8 rounded-sm shadow-xl flex flex-col items-center border-t-4 ${isFeatured ? 'border-orange-500' : 'border-transparent'}`}
  >
    <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-6">
      {plan.type === 'res' ? <Home size={32} /> : <Zap size={32} />}
    </div>
    <h3 className="text-2xl font-extrabold text-slate-800 mb-6">{plan.title}</h3>
    <ul className="w-full space-y-3 mb-10">
      {plan.features.map((f, i) => (
        <li key={i} className="flex items-center gap-3 text-sm text-gray-500">
          <Check size={14} className="text-orange-500 font-bold shrink-0" />
          {f}
        </li>
      ))}
    </ul>
    <div className="mt-auto pt-6 border-t w-full text-center">
      <h4 className="text-4xl font-extrabold text-slate-700">
        ${Number(price).toFixed(2)}
        <span className="text-base font-medium text-gray-400">{period}</span>
      </h4>
      <button
        onClick={onOrder}
        className="mt-4 text-xs font-bold uppercase tracking-widest text-slate-800 hover:text-orange-500 transition-colors"
      >
        Order Now
      </button>
    </div>
  </div>
);

const MaintenancePlans = () => {
  const { openAppointment } = useApp();
  return (
    <section className="bg-slate-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-orange-500 font-bold text-sm mb-2">
          Save on the Service You Need
        </p>
        <h2 className="text-4xl font-bold text-slate-800 mb-6">
          Maintenance Plans
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-16 text-sm">
          With an electrical maintenance plan, you won't find yourself in a
          panic wondering <br />
          who to call when you're having problems with your electrical system.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Background dots decoration */}
          <div className="absolute -top-10 -left-10 opacity-10 grid grid-cols-6 gap-2 pointer-events-none">
            {[...Array(36)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 bg-slate-400 rounded-full"
              ></div>
            ))}
          </div>

          {plans.map((plan, i) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              price={plan.price}
              isFeatured={i === 1}
              onOrder={() => openAppointment({ service: 'Free Estimate / Quote', message: `I am interested in the ${plan.title} plan.` })}
            />
          ))}
        </div>

        <Link
          href="/prices"
          className="inline-block mt-12 text-sm font-bold uppercase tracking-widest text-slate-800 hover:text-orange-500 border-b-2 border-orange-500 pb-1 transition-colors"
        >
          Compare all prices
        </Link>
      </div>
    </section>
  );
};

export default MaintenancePlans;
