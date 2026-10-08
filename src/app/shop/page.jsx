'use client';
import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart } from 'lucide-react';
import PageBanner from '../Components/PageBanner';
import ProductImage from '../Components/ProductImage';
import Stars from '../Components/Stars';
import { products, productCategories } from '../../data/products';
import { money } from '../../data/site';
import { useApp } from '../../context/AppContext';

export default function ShopPage() {
  const { addToCart } = useApp();
  const [cat, setCat] = useState('All');
  const [q, setQ] = useState('');
  const [sort, setSort] = useState('featured');
  const [maxPrice, setMaxPrice] = useState(100);

  const list = useMemo(() => {
    const term = q.trim().toLowerCase();
    let l = products.filter(
      (p) => (cat === 'All' || p.category === cat) && p.price <= maxPrice && (!term || p.name.toLowerCase().includes(term) || p.category.toLowerCase().includes(term))
    );
    if (sort === 'low') l = [...l].sort((a, b) => a.price - b.price);
    if (sort === 'high') l = [...l].sort((a, b) => b.price - a.price);
    if (sort === 'rating') l = [...l].sort((a, b) => b.rating - a.rating);
    return l;
  }, [cat, q, sort, maxPrice]);

  return (
    <>
      <PageBanner title="Our" accent="Shop" eyebrow="Genuine Products" />

      <section className="py-20 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* Filters */}
          <aside className="w-full lg:w-1/4 space-y-6">
            <div className="relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search products..." aria-label="Search products" className="w-full pl-11 pr-4 py-4 border border-gray-200 bg-white outline-none focus:border-orange-500" />
            </div>

            <div className="bg-white p-6 shadow-sm">
              <h4 className="font-bold text-slate-800 mb-4">Categories</h4>
              <ul className="space-y-1">
                {productCategories.map((c) => (
                  <li key={c}>
                    <button onClick={() => setCat(c)} className={`w-full text-left py-2 px-3 text-sm border-l-2 transition-colors ${cat === c ? 'border-orange-500 text-orange-500 font-bold bg-orange-50' : 'border-transparent text-gray-600 hover:text-orange-500'}`}>
                      {c}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 shadow-sm">
              <h4 className="font-bold text-slate-800 mb-1">Max price</h4>
              <p className="text-orange-500 font-black text-lg mb-3">${maxPrice}</p>
              <input type="range" min={10} max={100} step={5} value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} aria-label="Maximum price" className="w-full accent-orange-500" />
            </div>
          </aside>

          {/* Grid */}
          <div className="w-full lg:w-3/4">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <p className="text-gray-500 text-sm">Showing <b className="text-slate-800">{list.length}</b> products</p>
              <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort products" className="p-3 border border-gray-200 bg-white text-sm outline-none focus:border-orange-500">
                <option value="featured">Featured</option>
                <option value="low">Price: low to high</option>
                <option value="high">Price: high to low</option>
                <option value="rating">Top rated</option>
              </select>
            </div>

            {list.length === 0 ? (
              <div className="bg-white py-20 text-center">
                <p className="text-xl font-bold text-slate-800 mb-2">No products match</p>
                <button onClick={() => { setQ(''); setCat('All'); setMaxPrice(100); }} className="mt-4 bg-orange-500 text-white px-6 py-3 font-bold text-sm">Reset filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {list.map((p) => (
                  <div key={p.id} className="group bg-white shadow-md hover:shadow-2xl transition-shadow flex flex-col">
                    <Link href={`/shop/${p.id}`} className="relative block overflow-hidden">
                      <ProductImage product={p} className="h-52 transition-transform duration-500 group-hover:scale-105" />
                      {p.oldPrice && (
                        <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-3 py-1">
                          -{Math.round((1 - p.price / p.oldPrice) * 100)}%
                        </span>
                      )}
                    </Link>
                    <div className="p-5 flex flex-col flex-1">
                      <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">{p.category}</p>
                      <h3 className="font-bold text-slate-800 mb-2 leading-snug hover:text-orange-500 transition-colors">
                        <Link href={`/shop/${p.id}`}>{p.name}</Link>
                      </h3>
                      <div className="flex items-center gap-2 mb-4">
                        <Stars rating={p.rating} size={14} />
                        <span className="text-xs text-gray-400">({p.reviews})</span>
                      </div>
                      <div className="mt-auto flex items-center justify-between">
                        <p className="text-xl font-black text-slate-800">
                          {money(p.price)}
                          {p.oldPrice && <span className="ml-2 text-sm font-medium text-gray-400 line-through">{money(p.oldPrice)}</span>}
                        </p>
                        <button onClick={() => addToCart(p.id)} aria-label={`Add ${p.name} to cart`} className="w-11 h-11 bg-orange-500 hover:bg-[#2A2C38] text-white flex items-center justify-center transition-colors">
                          <ShoppingCart size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
