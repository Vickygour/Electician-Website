import React from 'react';
import { Star } from 'lucide-react';

export default function Stars({ rating = 5, size = 16 }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          size={size}
          className={n <= Math.round(rating) ? 'text-orange-500 fill-orange-500' : 'text-gray-300'}
        />
      ))}
    </span>
  );
}
