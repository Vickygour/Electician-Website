'use client';
import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="fixed bottom-6 left-6 z-40 w-12 h-12 bg-[#2A2C38] hover:bg-orange-500 text-white rounded-full shadow-xl flex items-center justify-center transition-colors print:hidden"
    >
      <ArrowUp size={20} />
    </button>
  );
}
