'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, ShoppingCart } from 'lucide-react';
import PageBanner from '../Components/PageBanner';
import OrderSummary from '../Components/OrderSummary';
import { useApp, pushStore, makeId } from '../../context/AppContext';
import { money } from '../../data/site';

const blank = { name: '', phone: '', email: '', address: '', city: '', zip: '', payment: 'cod', notes: '' };

export default function CheckoutPage() {
  const { lines, totals, coupon, clearCart, toast, hydrated } = useApp();
  const [form, setForm] = useState(blank);
  const [errors, setErrors] = useState({});
  const [order, setOrder] = useState(null);

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((x) => ({ ...x, [k]: undefined }));
  };

  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (form.name.trim().length < 2) er.name = 'Enter your full name.';
    if (!/^[+\d][\d\s\-()]{6,17}$/.test(form.phone.trim())) er.phone = 'Enter a valid phone number.';
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) er.email = 'Enter a valid email address.';
    if (form.address.trim().length < 5) er.address = 'Enter your full address.';
    if (form.city.trim().length < 2) er.city = 'Enter your city.';
    if (!/^[A-Za-z0-9\s-]{4,10}$/.test(form.zip.trim())) er.zip = 'Enter a valid ZIP / PIN code.';
    setErrors(er);
    if (Object.keys(er).length) {
      toast('Please fix the highlighted fields.', 'error');
      window.scrollTo({ top: 300, behavior: 'smooth' });
      return;
    }
    const placed = {
      id: makeId('ORD'),
      customer: form,
      items: lines.map((l) => ({ id: l.product.id, name: l.product.name, qty: l.qty, price: l.product.price })),
      coupon,
      totals,
      createdAt: new Date().toISOString(),
    };
    pushStore('electrician_orders', placed);
    setOrder(placed);
    clearCart();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const field = (k) => `p-4 border outline-none focus:border-orange-500 transition-all bg-white w-full ${errors[k] ? 'border-red-400' : 'border-gray-200'}`;
  const lbl = 'text-xs font-bold uppercase tracking-widest text-slate-600';
  const err = (k) => errors[k] && <span className="text-red-500 text-xs">{errors[k]}</span>;

  if (order) {
    return (
      <>
        <PageBanner title="Order" accent="Placed" eyebrow="Thank you" />
        <section className="py-20 px-6 bg-white">
          <div className="max-w-2xl mx-auto text-center">
            <CheckCircle2 size={72} className="mx-auto text-green-500 mb-6" />
            <h2 className="text-3xl font-black text-slate-800 mb-3">Your order is confirmed!</h2>
            <p className="text-gray-500 mb-8">
              Order ID <b className="text-slate-800">{order.id}</b>. We will contact you on {order.customer.phone} to confirm delivery.
            </p>
            <div className="bg-slate-50 border border-gray-200 p-6 text-left mb-8">
              <ul className="divide-y divide-gray-200 text-sm">
                {order.items.map((i) => (
                  <li key={i.id} className="flex justify-between py-3"><span>{i.name} x {i.qty}</span><span className="font-bold">{money(i.price * i.qty)}</span></li>
                ))}
              </ul>
              <p className="flex justify-between font-black text-lg pt-4 mt-2 border-t border-gray-300"><span>Total paid on delivery</span><span>{money(order.totals.total)}</span></p>
              <p className="text-xs text-gray-400 mt-3">Delivering to: {order.customer.address}, {order.customer.city} {order.customer.zip}</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/shop" className="bg-orange-500 hover:bg-[#2A2C38] text-white px-8 py-4 font-bold text-sm uppercase tracking-widest transition-colors">Continue shopping</Link>
              <button onClick={() => window.print()} className="border-2 border-[#2A2C38] text-[#2A2C38] hover:bg-[#2A2C38] hover:text-white px-8 py-4 font-bold text-sm uppercase tracking-widest transition-colors print:hidden">Print receipt</button>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageBanner title="Check" accent="out" eyebrow="Almost there" />
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          {!hydrated ? (
            <p className="text-center text-gray-400 py-20">Loading...</p>
          ) : lines.length === 0 ? (
            <div className="text-center py-20">
              <ShoppingCart size={64} className="mx-auto text-gray-300 mb-6" />
              <h2 className="text-3xl font-black text-slate-800 mb-3">Nothing to check out</h2>
              <p className="text-gray-500 mb-8">Your cart is empty.</p>
              <Link href="/shop" className="inline-block bg-orange-500 text-white px-10 py-4 font-bold text-sm uppercase tracking-widest">Go to shop</Link>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="flex flex-col lg:flex-row gap-12">
              <div className="w-full lg:w-2/3">
                <h2 className="text-3xl font-black text-slate-800 mb-8">Delivery details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2"><label className={lbl} htmlFor="k-name">Full name *</label><input id="k-name" value={form.name} onChange={set('name')} className={field('name')} />{err('name')}</div>
                  <div className="flex flex-col gap-2"><label className={lbl} htmlFor="k-phone">Phone *</label><input id="k-phone" type="tel" value={form.phone} onChange={set('phone')} className={field('phone')} />{err('phone')}</div>
                  <div className="flex flex-col gap-2 md:col-span-2"><label className={lbl} htmlFor="k-email">Email *</label><input id="k-email" type="email" value={form.email} onChange={set('email')} className={field('email')} />{err('email')}</div>
                  <div className="flex flex-col gap-2 md:col-span-2"><label className={lbl} htmlFor="k-addr">Address *</label><input id="k-addr" value={form.address} onChange={set('address')} className={field('address')} />{err('address')}</div>
                  <div className="flex flex-col gap-2"><label className={lbl} htmlFor="k-city">City *</label><input id="k-city" value={form.city} onChange={set('city')} className={field('city')} />{err('city')}</div>
                  <div className="flex flex-col gap-2"><label className={lbl} htmlFor="k-zip">ZIP / PIN code *</label><input id="k-zip" value={form.zip} onChange={set('zip')} className={field('zip')} />{err('zip')}</div>
                  <div className="flex flex-col gap-2 md:col-span-2"><label className={lbl} htmlFor="k-notes">Order notes</label><textarea id="k-notes" rows={3} value={form.notes} onChange={set('notes')} className={`${field('notes')} resize-none`} placeholder="Delivery instructions (optional)" /></div>
                </div>

                <h3 className="text-xl font-black text-slate-800 mt-10 mb-4">Payment</h3>
                <label className="flex items-start gap-3 border-2 border-orange-500 bg-orange-50 p-5 cursor-pointer">
                  <input type="radio" name="payment" checked readOnly className="mt-1 accent-orange-500" />
                  <span>
                    <b className="text-slate-800">Cash on delivery / pay at installation</b>
                    <span className="block text-sm text-gray-500">Pay when your order arrives. Online payment can be added later.</span>
                  </span>
                </label>
              </div>

              <div className="w-full lg:w-1/3">
                <div className="mb-6 bg-white border border-gray-200 p-5">
                  <ul className="divide-y divide-gray-100 text-sm">
                    {lines.map((l) => (
                      <li key={l.product.id} className="flex justify-between gap-3 py-2.5"><span className="text-gray-600">{l.product.name} x {l.qty}</span><span className="font-bold shrink-0">{money(l.total)}</span></li>
                    ))}
                  </ul>
                </div>
                <OrderSummary />
                <button type="submit" className="mt-6 w-full bg-orange-500 hover:bg-[#2A2C38] text-white py-4 font-black text-sm uppercase tracking-widest transition-colors">Place order</button>
                <Link href="/cart" className="block text-center mt-4 text-sm text-gray-500 hover:text-orange-500">Back to cart</Link>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
