'use client';
import React from 'react';
import { Check, Home, Zap } from 'lucide-react';

const PlanCard = ({ type, title, price, features, isFeatured }) => (
  <div
    className={`bg-white p-8 rounded-sm shadow-xl flex flex-col items-center border-t-4 ${isFeatured ? 'border-orange-500' : 'border-transparent'}`}
  >
    <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-6">
      {type === 'res' ? <Home size={32} /> : <Zap size={32} />}
    </div>
    <h3 className="text-2xl font-extrabold text-slate-800 mb-6">{title}</h3>
    <ul className="w-full space-y-3 mb-10">
      {features.map((f, i) => (
        <li key={i} className="flex items-center gap-3 text-sm text-gray-500">
          <Check size={14} className="text-orange-500 font-bold" />
          {f}
        </li>
      ))}
    </ul>
    <div className="mt-auto pt-6 border-t w-full text-center">
      <h4 className="text-4xl font-extrabold text-slate-700">${price}</h4>
      <button className="mt-4 text-xs font-bold uppercase tracking-widest text-slate-800 hover:text-orange-500 transition-colors">
        Order Now
      </button>
    </div>
  </div>
);

const MaintenancePlans = () => {
  const plans = [
    {
      type: 'res',
      title: 'Residential Service',
      price: '12.00',
      features: [
        'Annual A/C inspection',
        'Annual electrical inspection',
        'Design-Build Services',
        'Supply and install Sensor light',
        'Lighting Fixtures',
        'Replace hot plates',
        'Switchboard Upgrade',
      ],
    },
    {
      type: 'com',
      title: 'Commercial Service',
      price: '89.00',
      features: [
        'Indoor/outdoor Lighting Installation',
        'Appliance & Fixture Installation',
        'Annual Electrical Inspection',
        'Ceiling Fan Installation',
        'New & Replacement Wiring',
        'Surge Protection Maintenance',
        '24-hour Response',
      ],
    },
    {
      type: 'com',
      title: 'Commercial Service',
      price: '89.00',
      features: [
        'Indoor/outdoor Lighting Installation',
        'Appliance & Fixture Installation',
        'Annual Electrical Inspection',
        'Ceiling Fan Installation',
        'New & Replacement Wiring',
        'Surge Protection Maintenance',
        '24-hour Response',
      ],
    },
  ];

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
            <PlanCard key={i} {...plan} isFeatured={i === 1} />
          ))}
        </div>

        {/* Pagination Dots (UI mock) */}
        <div className="flex justify-center gap-2 mt-12">
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-800"></div>
        </div>
      </div>
    </section>
  );
};

export default MaintenancePlans;
