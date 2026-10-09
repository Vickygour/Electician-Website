'use client';
import React from 'react';
import Link from 'next/link';
import { Check, Home, Zap, Star } from 'lucide-react';
import { plans } from '../../data/plans';
import { useApp } from '../../context/AppContext';

export const PlanCard = ({ plan, price, period = '/mo', isFeatured, onOrder }) => (
  <div
    className={`relative bg-white rounded-lg shadow-xl flex flex-col items-center border-t-4 transition-all duration-300 h-full
      ${isFeatured
        ? 'border-orange-500 lg:scale-[1.04] lg:-translate-y-2 shadow-2xl shadow-orange-500/10 ring-2 ring-orange-500/20'
        : 'border-transparent hover:shadow-2xl hover:-translate-y-1'}
    `}
  >
    {/* Featured badge */}
    {isFeatured && (
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md flex items-center gap-1">
        <Star size={10} fill="white" />
        Popular
      </span>
    )}

    {/* Card content */}
    <div className="p-6 sm:p-8 flex flex-col items-center w-full h-full">

      {/* Icon */}
      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-5 sm:mb-6">
        {plan.type === 'res' ? (
          <Home size={26} className="sm:w-8 sm:h-8" />
        ) : (
          <Zap size={26} className="sm:w-8 sm:h-8" fill="currentColor" />
        )}
      </div>

      {/* Title */}
      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800 mb-5 sm:mb-6 text-center">
        {plan.title}
      </h3>

      {/* Features */}
      <ul className="w-full space-y-2.5 sm:space-y-3 mb-8 sm:mb-10">
        {plan.features.map((f, i) => (
          <li
            key={i}
            className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-500 leading-relaxed"
          >
            <Check
              size={14}
              strokeWidth={3}
              className="text-orange-500 shrink-0 mt-0.5"
            />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {/* Price + Order */}
      <div className="mt-auto pt-5 sm:pt-6 border-t border-gray-100 w-full text-center">
        <h4 className="text-3xl sm:text-4xl font-extrabold text-slate-700">
          ${Number(price).toFixed(2)}
          <span className="text-sm sm:text-base font-medium text-gray-400 ml-0.5">
            {period}
          </span>
        </h4>
        <button
          onClick={onOrder}
          className={`mt-4 text-[11px] sm:text-xs font-bold uppercase tracking-widest transition-colors py-1.5 px-4 rounded-sm active:scale-95
            ${isFeatured
              ? 'text-white bg-orange-500 hover:bg-orange-600'
              : 'text-slate-800 hover:text-orange-500'}
          `}
        >
          Order Now
        </button>
      </div>
    </div>
  </div>
);

const MaintenancePlans = () => {
  const { openAppointment } = useApp();

  return (
    <section className="bg-slate-50 py-14 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">

        {/* Header */}
        <p className="text-orange-500 font-bold text-xs sm:text-sm uppercase tracking-[0.15em] mb-2">
          Save on the Service You Need
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4 sm:mb-6 leading-tight">
          Maintenance Plans
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-10 sm:mb-14 text-sm sm:text-base leading-relaxed px-2">
          With an electrical maintenance plan, you won&apos;t find yourself in a
          panic wondering who to call when you&apos;re having problems with your
          electrical system.
        </p>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">

          {/* Background dots decoration (desktop only) */}
          <div
            aria-hidden="true"
            className="hidden lg:grid absolute -top-10 -left-10 grid-cols-6 gap-2 opacity-10 pointer-events-none"
          >
            {[...Array(36)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
            ))}
          </div>

          {plans.map((plan, i) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              price={plan.price}
              isFeatured={i === 1}
              onOrder={() =>
                openAppointment({
                  service: 'Free Estimate / Quote',
                  message: `I am interested in the ${plan.title} plan.`,
                })
              }
            />
          ))}
        </div>

        {/* Compare link */}
        <Link
          href="/prices"
          className="inline-block mt-10 sm:mt-14 text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-800 hover:text-orange-500 border-b-2 border-orange-500 pb-1 transition-colors"
        >
          Compare all prices
        </Link>
      </div>
    </section>
  );
};

export default MaintenancePlans;