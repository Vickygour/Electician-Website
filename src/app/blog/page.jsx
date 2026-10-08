'use client';
import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { Search, Clock, User, ChevronLeft, ChevronRight } from 'lucide-react';
import PageBanner from '../Components/PageBanner';
import Newsletter from '../Components/Newsletter';
import { posts, postCategories } from '../../data/posts';

const PAGE_SIZE = 4;
const fmtDate = (d) =>
  new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

export default function BlogPage() {
  const [cat, setCat] = useState('All');
  const [q, setQ] = useState('');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return posts.filter(
      (p) =>
        (cat === 'All' || p.category === cat) &&
        (!term || p.title.toLowerCase().includes(term) || p.excerpt.toLowerCase().includes(term))
    );
  }, [cat, q]);

  const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  useEffect(() => setPage(1), [cat, q]);
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <>
      <PageBanner title="Our" accent="Blog" eyebrow="News & Tips" />

      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-14">
          {/* Posts */}
          <div className="w-full lg:w-2/3">
            {visible.length === 0 ? (
              <div className="text-center py-20 bg-slate-50">
                <p className="text-xl font-bold text-slate-800 mb-2">No articles found</p>
                <p className="text-gray-500 mb-6">Try a different keyword or category.</p>
                <button onClick={() => { setQ(''); setCat('All'); }} className="bg-orange-500 text-white px-6 py-3 font-bold text-sm">
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {visible.map((post) => (
                  <article key={post.slug} className="group bg-white shadow-lg hover:shadow-2xl transition-shadow flex flex-col">
                    <Link href={`/blog/${post.slug}`} className="block relative h-56 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <span className="absolute top-4 left-4 bg-orange-500 text-white text-[11px] font-bold uppercase tracking-widest px-3 py-1.5">
                        {post.category}
                      </span>
                    </Link>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                        <span className="flex items-center gap-1"><User size={13} /> {post.author}</span>
                        <span className="flex items-center gap-1"><Clock size={13} /> {post.readTime} min read</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 mb-3 leading-snug group-hover:text-orange-500 transition-colors">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">{fmtDate(post.date)}</span>
                        <Link href={`/blog/${post.slug}`} className="text-sm font-bold text-orange-500 hover:text-slate-800 transition-colors">
                          Read more
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {pages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-14">
                <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1} aria-label="Previous page" className="p-3 bg-slate-100 hover:bg-orange-500 hover:text-white disabled:opacity-40 disabled:hover:bg-slate-100 disabled:hover:text-inherit transition-colors">
                  <ChevronLeft size={18} />
                </button>
                {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
                  <button key={n} onClick={() => setPage(n)} aria-current={page === n} className={`w-11 h-11 font-bold text-sm transition-colors ${page === n ? 'bg-orange-500 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`}>
                    {n}
                  </button>
                ))}
                <button onClick={() => setPage((p) => Math.min(pages, p + 1))} disabled={page === pages} aria-label="Next page" className="p-3 bg-slate-100 hover:bg-orange-500 hover:text-white disabled:opacity-40 disabled:hover:bg-slate-100 disabled:hover:text-inherit transition-colors">
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-1/3 space-y-8">
            <div className="relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search articles..."
                aria-label="Search articles"
                className="w-full pl-11 pr-4 py-4 border border-gray-200 outline-none focus:border-orange-500"
              />
            </div>

            <div className="bg-slate-50 p-8">
              <h4 className="text-xl font-bold text-slate-800 mb-5">Categories</h4>
              <ul className="space-y-1">
                {postCategories.map((c) => {
                  const count = c === 'All' ? posts.length : posts.filter((p) => p.category === c).length;
                  return (
                    <li key={c}>
                      <button
                        onClick={() => setCat(c)}
                        className={`w-full flex justify-between py-2.5 px-3 text-sm border-l-2 transition-colors ${
                          cat === c ? 'border-orange-500 text-orange-500 font-bold bg-white' : 'border-transparent text-gray-600 hover:text-orange-500'
                        }`}
                      >
                        <span>{c}</span>
                        <span className="text-gray-400">{count}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <Newsletter />
          </aside>
        </div>
      </section>
    </>
  );
}
