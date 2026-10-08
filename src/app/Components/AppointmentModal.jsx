'use client';
import React, { useEffect, useState } from 'react';
import { X, Zap, CheckCircle2, MessageCircle } from 'lucide-react';
import { useApp, pushStore, makeId } from '../../context/AppContext';
import { services } from '../../data/services';
import { site } from '../../data/site';

export const serviceOptions = [
  ...services.map((s) => s.title),
  'Free Estimate / Quote',
  'Emergency Repair',
  'Other',
];

const timeSlots = [
  '08:00 AM - 10:00 AM',
  '10:00 AM - 12:00 PM',
  '12:00 PM - 02:00 PM',
  '02:00 PM - 04:00 PM',
  '04:00 PM - 06:00 PM',
];

const today = () => new Date().toISOString().split('T')[0];
const empty = { name: '', phone: '', email: '', service: serviceOptions[0], date: '', time: timeSlots[0], address: '', message: '' };

export function validateBooking(f) {
  const e = {};
  if (f.name.trim().length < 2) e.name = 'Please enter your full name.';
  if (!/^[+\d][\d\s\-()]{6,17}$/.test(f.phone.trim())) e.phone = 'Enter a valid phone number.';
  if (f.email.trim() && !/^\S+@\S+\.\S+$/.test(f.email.trim())) e.email = 'Enter a valid email address.';
  if (!f.date) e.date = 'Please choose a date.';
  else if (f.date < today()) e.date = 'Date cannot be in the past.';
  return e;
}

export default function AppointmentModal() {
  const { appointment, closeAppointment, toast } = useApp();
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(null);

  // modal khulte hi prefill + reset
  useEffect(() => {
    if (appointment.open) {
      setForm({ ...empty, ...appointment.prefill });
      setErrors({});
      setDone(null);
    }
  }, [appointment.open, appointment.prefill]);

  // ESC se band + background scroll lock
  useEffect(() => {
    if (!appointment.open) return;
    const onKey = (e) => e.key === 'Escape' && closeAppointment();
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [appointment.open, closeAppointment]);

  if (!appointment.open) return null;

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((x) => ({ ...x, [k]: undefined }));
  };

  const submit = (e) => {
    e.preventDefault();
    const errs = validateBooking(form);
    setErrors(errs);
    if (Object.keys(errs).length) {
      toast('Please fix the highlighted fields.', 'error');
      return;
    }
    const booking = { id: makeId('EL'), ...form, createdAt: new Date().toISOString() };
    pushStore('electrician_bookings', booking);
    setDone(booking);
  };

  const waText = done
    ? encodeURIComponent(
        `Hi, I booked an appointment on your website.\nBooking ID: ${done.id}\nName: ${done.name}\nService: ${done.service}\nDate: ${done.date} (${done.time})`
      )
    : '';

  const input = (k) =>
    `p-3.5 border outline-none focus:border-orange-500 transition-all bg-white text-slate-800 w-full ${
      errors[k] ? 'border-red-400' : 'border-gray-200'
    }`;
  const label = 'text-xs font-bold uppercase tracking-widest text-slate-600';

  return (
    <div
      className="fixed inset-0 z-[150] flex items-start sm:items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto print:hidden"
      onClick={closeAppointment}
      role="dialog"
      aria-modal="true"
      aria-label="Book an appointment"
    >
      <div
        className="relative bg-white w-full max-w-2xl my-6 shadow-2xl border-t-8 border-orange-500 animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeAppointment}
          aria-label="Close"
          className="absolute top-4 right-4 text-gray-400 hover:text-orange-500 transition-colors"
        >
          <X size={26} />
        </button>

        {done ? (
          <div className="p-8 md:p-12 text-center">
            <CheckCircle2 size={64} className="text-green-500 mx-auto mb-4" />
            <h3 className="text-3xl font-black text-slate-800 mb-2">Appointment Booked!</h3>
            <p className="text-gray-500 mb-6">
              Thank you, {done.name}. We will call you on {done.phone} to confirm.
            </p>
            <div className="bg-slate-50 border border-gray-200 text-left p-5 mb-8 text-sm space-y-2">
              <p><span className="font-bold">Booking ID:</span> {done.id}</p>
              <p><span className="font-bold">Service:</span> {done.service}</p>
              <p><span className="font-bold">Date &amp; time:</span> {done.date}, {done.time}</p>
              {done.address && <p><span className="font-bold">Address:</span> {done.address}</p>}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/${site.whatsapp}?text=${waText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 font-bold text-sm transition-colors"
              >
                <MessageCircle size={18} /> Share on WhatsApp
              </a>
              <button
                onClick={closeAppointment}
                className="px-6 py-3 font-bold text-sm bg-[#2A2C38] hover:bg-orange-500 text-white transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={submit} noValidate className="p-6 md:p-10">
            <div className="flex items-center gap-3 mb-2">
              <Zap size={26} className="text-orange-500" fill="currentColor" />
              <h3 className="text-3xl font-black text-slate-800">Book an Appointment</h3>
            </div>
            <p className="text-gray-500 text-sm mb-8">
              Tell us what you need and pick a time. We will confirm by phone.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className={label} htmlFor="ap-name">Full Name *</label>
                <input id="ap-name" className={input('name')} value={form.name} onChange={set('name')} placeholder="e.g. John Doe" />
                {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={label} htmlFor="ap-phone">Phone *</label>
                <input id="ap-phone" type="tel" className={input('phone')} value={form.phone} onChange={set('phone')} placeholder="+1 (000) 000-0000" />
                {errors.phone && <span className="text-red-500 text-xs">{errors.phone}</span>}
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={label} htmlFor="ap-email">Email</label>
                <input id="ap-email" type="email" className={input('email')} value={form.email} onChange={set('email')} placeholder="john@example.com" />
                {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={label} htmlFor="ap-service">Service Needed</label>
                <select id="ap-service" className={input('service')} value={form.service} onChange={set('service')}>
                  {!serviceOptions.includes(form.service) && <option>{form.service}</option>}
                  {serviceOptions.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={label} htmlFor="ap-date">Preferred Date *</label>
                <input id="ap-date" type="date" min={today()} className={input('date')} value={form.date} onChange={set('date')} />
                {errors.date && <span className="text-red-500 text-xs">{errors.date}</span>}
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={label} htmlFor="ap-time">Preferred Time</label>
                <select id="ap-time" className={input('time')} value={form.time} onChange={set('time')}>
                  {timeSlots.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label className={label} htmlFor="ap-address">Address</label>
                <input id="ap-address" className={input('address')} value={form.address} onChange={set('address')} placeholder="House no, street, city" />
              </div>
              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label className={label} htmlFor="ap-msg">Describe the work</label>
                <textarea id="ap-msg" rows={3} className={`${input('message')} resize-none`} value={form.message} onChange={set('message')} placeholder="Tell us about the problem or project..." />
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-[#2A2C38] text-white font-black py-4 uppercase tracking-widest text-sm transition-all"
            >
              <Zap size={18} fill="white" /> Confirm Appointment
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
