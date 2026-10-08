'use client';
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { products } from '../data/products';

const AppContext = createContext(null);

// ---------- localStorage helpers (safe) ----------
export const readStore = (key, fallback) => {
  if (typeof window === 'undefined') return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};
export const writeStore = (key, value) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {}
};
export const pushStore = (key, item) => {
  const list = readStore(key, []);
  list.unshift(item);
  writeStore(key, list);
  return list;
};
export const makeId = (prefix) =>
  `${prefix}-${Date.now().toString(36).toUpperCase().slice(-5)}${Math.random()
    .toString(36)
    .slice(2, 5)
    .toUpperCase()}`;

// ---------- pricing rules ----------
export const COUPONS = {
  SAVE10: { type: 'percent', value: 10, label: '10% off' },
  ELEC20: { type: 'percent', value: 20, label: '20% off', min: 100 },
  FREESHIP: { type: 'ship', value: 0, label: 'Free shipping' },
};
export const FREE_SHIPPING_ABOVE = 75;
export const SHIPPING_FEE = 6.99;
export const TAX_RATE = 0.08;

export function AppProvider({ children }) {
  // ----- cart -----
  const [cart, setCart] = useState([]); // [{id, qty}]
  const [coupon, setCoupon] = useState(null); // code string
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setCart(readStore('electrician_cart', []));
    setCoupon(readStore('electrician_coupon', null));
    setHydrated(true);
  }, []);
  useEffect(() => {
    if (hydrated) writeStore('electrician_cart', cart);
  }, [cart, hydrated]);
  useEffect(() => {
    if (hydrated) writeStore('electrician_coupon', coupon);
  }, [coupon, hydrated]);

  // ----- toast -----
  const [toasts, setToasts] = useState([]);
  const toast = useCallback((message, type = 'success') => {
    const id = Date.now() + Math.random();
    setToasts((t) => [...t, { id, message, type }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 3200);
  }, []);
  const dismissToast = useCallback((id) => setToasts((t) => t.filter((x) => x.id !== id)), []);

  const addToCart = useCallback(
    (id, qty = 1, silent = false) => {
      const product = products.find((p) => p.id === id);
      if (!product) return;
      setCart((c) => {
        const found = c.find((i) => i.id === id);
        const current = found ? found.qty : 0;
        const next = Math.min(current + qty, product.stock, 20);
        if (found) return c.map((i) => (i.id === id ? { ...i, qty: next } : i));
        return [...c, { id, qty: next }];
      });
      if (!silent) toast(`${product.name} added to cart`);
    },
    [toast]
  );
  const setQty = useCallback((id, qty) => {
    const product = products.find((p) => p.id === id);
    const max = product ? Math.min(product.stock, 20) : 20;
    setCart((c) =>
      c
        .map((i) => (i.id === id ? { ...i, qty: Math.max(0, Math.min(qty, max)) } : i))
        .filter((i) => i.qty > 0)
    );
  }, []);
  const removeFromCart = useCallback((id) => setCart((c) => c.filter((i) => i.id !== id)), []);
  const clearCart = useCallback(() => {
    setCart([]);
    setCoupon(null);
  }, []);

  const lines = useMemo(
    () =>
      cart
        .map((i) => {
          const product = products.find((p) => p.id === i.id);
          return product ? { ...i, product, total: product.price * i.qty } : null;
        })
        .filter(Boolean),
    [cart]
  );

  const totals = useMemo(() => {
    const subtotal = lines.reduce((s, l) => s + l.total, 0);
    const c = coupon ? COUPONS[coupon] : null;
    let discount = 0;
    if (c && c.type === 'percent' && subtotal >= (c.min || 0)) discount = (subtotal * c.value) / 100;
    const after = subtotal - discount;
    const freeShip = after >= FREE_SHIPPING_ABOVE || (c && c.type === 'ship');
    const shipping = lines.length === 0 || freeShip ? 0 : SHIPPING_FEE;
    const tax = after * TAX_RATE;
    const total = after + shipping + tax;
    return { subtotal, discount, shipping, tax, total, count: lines.reduce((s, l) => s + l.qty, 0) };
  }, [lines, coupon]);

  const applyCoupon = useCallback(
    (raw) => {
      const code = (raw || '').trim().toUpperCase();
      const c = COUPONS[code];
      if (!c) return { ok: false, message: 'Invalid coupon code.' };
      const subtotal = lines.reduce((s, l) => s + l.total, 0);
      if (c.min && subtotal < c.min)
        return { ok: false, message: `This coupon needs a cart value of at least $${c.min}.` };
      setCoupon(code);
      return { ok: true, message: `${code} applied: ${c.label}.` };
    },
    [lines]
  );
  const removeCoupon = useCallback(() => setCoupon(null), []);

  // ----- appointment modal -----
  const [appointment, setAppointment] = useState({ open: false, prefill: {} });
  const openAppointment = useCallback((prefill = {}) => setAppointment({ open: true, prefill }), []);
  const closeAppointment = useCallback(() => setAppointment((a) => ({ ...a, open: false })), []);

  const value = {
    cart, lines, totals, coupon, hydrated,
    addToCart, setQty, removeFromCart, clearCart, applyCoupon, removeCoupon,
    toast, toasts, dismissToast,
    appointment, openAppointment, closeAppointment,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used inside <AppProvider>');
  return ctx;
};
