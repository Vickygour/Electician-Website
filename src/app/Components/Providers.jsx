'use client';
import React from 'react';
import { AppProvider } from '../../context/AppContext';
import Header from './Header';
import Footer from './Footer';
import AppointmentModal from './AppointmentModal';
import Toaster from './Toaster';
import ScrollTop from './ScrollTop';

export default function Providers({ children }) {
  return (
    <AppProvider>
      <Header />
      <main>{children}</main>
      <Footer />
      <AppointmentModal />
      <Toaster />
      <ScrollTop />
    </AppProvider>
  );
}
