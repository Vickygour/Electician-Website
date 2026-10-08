'use client';
import React, { useEffect, useState } from 'react';
import { Copy, Facebook, Twitter, MessageCircle, Send } from 'lucide-react';
import { useApp, readStore, writeStore } from '../../context/AppContext';

export function ShareBar({ title, slug }) {
  const { toast } = useApp();
  const url = () => `${window.location.origin}/blog/${slug}`;
  const open = (href) => window.open(href, '_blank', 'noopener,noreferrer');
  const btn = 'w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all';
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-bold text-slate-700 mr-1">Share:</span>
      <button className={btn} aria-label="Share on Facebook" onClick={() => open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url())}`)}><Facebook size={16} /></button>
      <button className={btn} aria-label="Share on Twitter" onClick={() => open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url())}`)}><Twitter size={16} /></button>
      <button className={btn} aria-label="Share on WhatsApp" onClick={() => open(`https://wa.me/?text=${encodeURIComponent(title + ' ' + url())}`)}><MessageCircle size={16} /></button>
      <button
        className={btn}
        aria-label="Copy link"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(url());
            toast('Link copied to clipboard');
          } catch {
            toast('Could not copy the link.', 'error');
          }
        }}
      >
        <Copy size={16} />
      </button>
    </div>
  );
}

export function Comments({ slug }) {
  const { toast } = useApp();
  const key = `electrician_comments_${slug}`;
  const [list, setList] = useState([]);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [err, setErr] = useState({});

  useEffect(() => setList(readStore(key, [])), [key]);

  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (name.trim().length < 2) er.name = 'Enter your name.';
    if (text.trim().length < 5) er.text = 'Comment is too short.';
    setErr(er);
    if (Object.keys(er).length) return;
    const next = [{ id: Date.now(), name: name.trim(), text: text.trim(), at: new Date().toISOString() }, ...list];
    setList(next);
    writeStore(key, next);
    setName('');
    setText('');
    toast('Comment posted');
  };

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-black text-slate-800 mb-6">Comments ({list.length})</h3>
      <form onSubmit={submit} noValidate className="bg-slate-50 p-6 md:p-8 mb-8 space-y-4">
        <div>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" aria-label="Your name" className="w-full p-3.5 border border-gray-200 bg-white outline-none focus:border-orange-500" />
          {err.name && <span className="text-red-500 text-xs">{err.name}</span>}
        </div>
        <div>
          <textarea value={text} onChange={(e) => setText(e.target.value)} rows={4} placeholder="Write a comment..." aria-label="Comment" className="w-full p-3.5 border border-gray-200 bg-white outline-none focus:border-orange-500 resize-none" />
          {err.text && <span className="text-red-500 text-xs">{err.text}</span>}
        </div>
        <button type="submit" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-[#2A2C38] text-white px-8 py-3.5 font-bold text-xs uppercase tracking-widest transition-colors">
          <Send size={15} /> Post comment
        </button>
      </form>
      {list.length === 0 ? (
        <p className="text-gray-400 text-sm">No comments yet. Be the first to comment.</p>
      ) : (
        <ul className="space-y-5">
          {list.map((c) => (
            <li key={c.id} className="border-l-4 border-orange-500 bg-white shadow-sm p-5">
              <p className="font-bold text-slate-800">{c.name} <span className="text-xs font-normal text-gray-400 ml-2">{new Date(c.at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span></p>
              <p className="text-gray-600 text-sm mt-1 whitespace-pre-line">{c.text}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
