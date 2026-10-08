import React from 'react';
import {
  Lightbulb, Plug, PlugZap, Fan, ToggleRight, Cable, ShieldCheck,
} from 'lucide-react';

const icons = { Lightbulb, Plug, PlugZap, Fan, ToggleRight, Cable, ShieldCheck };

// Product ke liye image ki jagah icon tile (koi external image nahi chahiye)
export default function ProductImage({ product, size = 64, className = '' }) {
  const Icon = icons[product.icon] || Plug;
  return (
    <div
      className={`bg-gradient-to-br ${product.color} flex items-center justify-center text-white ${className}`}
    >
      <Icon size={size} strokeWidth={1.5} />
    </div>
  );
}
