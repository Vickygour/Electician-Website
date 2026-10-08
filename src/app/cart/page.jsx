'use client';
import React from 'react';
import Link from 'next/link';
import { Minus, Plus, Trash2, ShoppingCart } from 'lucide-react';
import OrderSummary from '../Components/OrderSummary';
import PageBanner from '../Components/PageBanner';
import ProductImage from '../Components/ProductImage';
import { useApp } from '../../context/AppContext';
import { money } from '../../data/site';

export default function CartPage() {
  const { lines, setQty, removeFromCart, clearCart, hydrated } = useApp();

  return (
    <>
      <PageBanner title="Your" accent="Cart" eyebrow="Shopping" />
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          {!hydrated ? (
            <p className="text-center text-gray-400 py-20">Loading cart...</p>
          ) : lines.length === 0 ? (
            <div className="text-center py-20">
              <ShoppingCart size={64} className="mx-auto text-gray-300 mb-6" />
              <h2 className="text-3xl font-black text-slate-800 mb-3">Your cart is empty</h2>
              <p className="text-gray-500 mb-8">Add some products and they will show up here.</p>
              <Link href="/shop" className="inline-block bg-orange-500 hover:bg-[#2A2C38] text-white px-10 py-4 font-bold text-sm uppercase tracking-widest transition-colors">Go to shop</Link>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="w-full lg:w-2/3">
                <ul className="divide-y divide-gray-200 border-y border-gray-200">
                  {lines.map(({ product: p, qty, total }) => (
                    <li key={p.id} className="flex flex-wrap sm:flex-nowrap items-center gap-5 py-6">
                      <Link href={`/shop/${p.id}`} className="shrink-0"><ProductImage product={p} size={34} className="w-24 h-24" /></Link>
                      <div className="flex-1 min-w-[160px]">
                        <Link href={`/shop/${p.id}`} className="font-bold text-slate-800 hover:text-orange-500 transition-colors">{p.name}</Link>
                        <p className="text-sm text-gray-400">{money(p.price)} each</p>
                      </div>
                      <div className="flex items-center border border-gray-300">
                        <button onClick={() => setQty(p.id, qty - 1)} aria-label="Decrease quantity" className="w-10 h-10 flex items-center justify-center hover:bg-slate-100"><Minus size={14} /></button>
                        <span className="w-10 text-center font-bold text-sm">{qty}</span>
                        <button onClick={() => setQty(p.id, qty + 1)} aria-label="Increase quantity" className="w-10 h-10 flex items-center justify-center hover:bg-slate-100"><Plus size={14} /></button>
                      </div>
                      <p className="w-24 text-right font-black text-slate-800">{money(total)}</p>
                      <button onClick={() => removeFromCart(p.id)} aria-label={`Remove ${p.name}`} className="text-gray-400 hover:text-red-500 transition-colors"><Trash2 size={20} /></button>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap justify-between gap-4 mt-6">
                  <Link href="/shop" className="text-sm font-bold text-orange-500 hover:text-slate-800">Continue shopping</Link>
                  <button onClick={clearCart} className="text-sm font-bold text-gray-400 hover:text-red-500">Clear cart</button>
                </div>
              </div>
              <div className="w-full lg:w-1/3">
                <OrderSummary />
                <Link href="/checkout" className="mt-6 block text-center bg-orange-500 hover:bg-[#2A2C38] text-white py-4 font-bold text-sm uppercase tracking-widest transition-colors">Proceed to checkout</Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
