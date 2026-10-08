'use client';
import React, { useState } from 'react';
import { Tag, X } from 'lucide-react';
import { useApp, COUPONS, FREE_SHIPPING_ABOVE } from '../../context/AppContext';
import { money } from '../../data/site';

export default function OrderSummary({ showCoupon = true }) {
  const { totals, coupon, applyCoupon, removeCoupon, toast } = useApp();
  const [code, setCode] = useState('');
  const [msg, setMsg] = useState(null);

  const apply = (e) => {
    e.preventDefault();
    const r = applyCoupon(code);
    setMsg(r);
    if (r.ok) {
      setCode('');
      toast(r.message);
    }
  };

  const row = 'flex justify-between text-sm text-gray-600';
  const remaining = FREE_SHIPPING_ABOVE - (totals.subtotal - totals.discount);

  return (
    <div className="bg-slate-50 p-8 border-t-4 border-orange-500">
      <h3 className="text-2xl font-black text-slate-800 mb-6">Order summary</h3>

      {showCoupon && (
        <div className="mb-6">
          {coupon ? (
            <div className="flex items-center justify-between bg-green-50 border border-green-200 text-green-700 text-sm font-bold px-4 py-3">
              <span className="flex items-center gap-2"><Tag size={16} /> {coupon} ({COUPONS[coupon].label})</span>
              <button onClick={() => { removeCoupon(); setMsg(null); }} aria-label="Remove coupon"><X size={16} /></button>
            </div>
          ) : (
            <form onSubmit={apply} className="flex">
              <input value={code} onChange={(e) => { setCode(e.target.value); setMsg(null); }} placeholder="Coupon code" aria-label="Coupon code" className="flex-1 min-w-0 p-3 border border-gray-200 bg-white outline-none focus:border-orange-500 uppercase" />
              <button type="submit" className="bg-[#2A2C38] hover:bg-orange-500 text-white px-5 font-bold text-xs uppercase tracking-widest transition-colors">Apply</button>
            </form>
          )}
          {msg && !msg.ok && <p className="text-red-500 text-xs mt-2">{msg.message}</p>}
          {!coupon && <p className="text-gray-400 text-xs mt-2">Try SAVE10, ELEC20 (over $100) or FREESHIP</p>}
        </div>
      )}

      <div className="space-y-3">
        <p className={row}><span>Subtotal</span><span>{money(totals.subtotal)}</span></p>
        {totals.discount > 0 && <p className={`${row} text-green-600`}><span>Discount</span><span>-{money(totals.discount)}</span></p>}
        <p className={row}><span>Shipping</span><span>{totals.shipping === 0 ? 'Free' : money(totals.shipping)}</span></p>
        <p className={row}><span>Tax (8%)</span><span>{money(totals.tax)}</span></p>
        <p className="flex justify-between text-xl font-black text-slate-800 pt-4 border-t border-gray-200"><span>Total</span><span>{money(totals.total)}</span></p>
      </div>
      {totals.shipping > 0 && remaining > 0 && (
        <p className="text-xs text-orange-600 mt-4">Add {money(remaining)} more for free shipping.</p>
      )}
    </div>
  );
}
