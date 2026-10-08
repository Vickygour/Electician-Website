'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Minus, Plus, ShoppingCart, Zap } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function ProductActions({ product }) {
  const { addToCart } = useApp();
  const router = useRouter();
  const [qty, setQty] = useState(1);
  const max = Math.min(product.stock, 20);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center border border-gray-300">
          <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity" className="w-12 h-12 flex items-center justify-center hover:bg-slate-100"><Minus size={16} /></button>
          <span className="w-12 text-center font-bold" aria-live="polite">{qty}</span>
          <button onClick={() => setQty((q) => Math.min(max, q + 1))} aria-label="Increase quantity" className="w-12 h-12 flex items-center justify-center hover:bg-slate-100"><Plus size={16} /></button>
        </div>
        <button onClick={() => addToCart(product.id, qty)} className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 h-12 font-bold text-sm uppercase tracking-widest transition-colors">
          <ShoppingCart size={18} /> Add to cart
        </button>
        <button
          onClick={() => {
            addToCart(product.id, qty, true);
            router.push('/checkout');
          }}
          className="flex items-center gap-2 bg-[#2A2C38] hover:bg-black text-white px-8 h-12 font-bold text-sm uppercase tracking-widest transition-colors"
        >
          <Zap size={18} fill="white" /> Buy now
        </button>
      </div>
      {qty >= max && <p className="text-xs text-gray-400 mt-3">Maximum available quantity selected.</p>}
    </div>
  );
}
