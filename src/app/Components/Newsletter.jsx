'use client';
import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { useApp, pushStore, readStore } from '../../context/AppContext';

export default function Newsletter() {
  const { toast } = useApp();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const submit = (e) => {
    e.preventDefault();
    const v = email.trim().toLowerCase();
    if (!/^\S+@\S+\.\S+$/.test(v)) {
      setError('Enter a valid email address.');
      return;
    }
    if (readStore('electrician_subscribers', []).some((s) => s.email === v)) {
      setError('');
      toast('You are already subscribed.');
      return;
    }
    pushStore('electrician_subscribers', { email: v, createdAt: new Date().toISOString() });
    setEmail('');
    setError('');
    toast('Subscribed! Thank you.');
  };

  return (
    <form onSubmit={submit} noValidate className="bg-[#2A2C38] text-white p-8">
      <Mail className="text-orange-500 mb-3" size={30} />
      <h4 className="text-xl font-bold mb-2">Get electrical tips</h4>
      <p className="text-gray-400 text-sm mb-5">Safety advice and offers in your inbox. No spam.</p>
      <input
        type="email"
        value={email}
        onChange={(e) => { setEmail(e.target.value); setError(''); }}
        placeholder="your@email.com"
        aria-label="Email address"
        className="w-full p-3.5 bg-white text-slate-800 outline-none border-2 border-transparent focus:border-orange-500"
      />
      {error && <p className="text-red-400 text-xs mt-2">{error}</p>}
      <button type="submit" className="mt-4 w-full bg-orange-500 hover:bg-orange-600 font-bold py-3.5 uppercase text-xs tracking-widest transition-colors">
        Subscribe
      </button>
    </form>
  );
}
