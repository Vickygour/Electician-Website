'use client';
import React from 'react';
import { useApp } from '../../context/AppContext';

// Kisi bhi server page me appointment modal kholne wala button
export default function BookButton({ prefill = {}, className = '', children }) {
  const { openAppointment } = useApp();
  return (
    <button type="button" onClick={() => openAppointment(prefill)} className={className}>
      {children}
    </button>
  );
}
