'use client';
import React from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function Toaster() {
  const { toasts, dismissToast } = useApp();
  return (
    <div
      aria-live="polite"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-6 z-[200] flex flex-col gap-3 w-[92%] sm:w-auto print:hidden"
    >
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`animate-fade-up flex items-center gap-3 px-5 py-4 shadow-2xl text-sm font-medium text-white border-l-4 ${
            t.type === 'error' ? 'bg-red-600 border-red-300' : 'bg-[#2A2C38] border-orange-500'
          }`}
        >
          {t.type === 'error' ? (
            <AlertCircle size={18} />
          ) : (
            <CheckCircle2 size={18} className="text-orange-500" />
          )}
          <span className="flex-1">{t.message}</span>
          <button onClick={() => dismissToast(t.id)} aria-label="Dismiss" className="opacity-70 hover:opacity-100">
            <X size={16} />
          </button>
        </div>
      ))}
    </div>
  );
}
