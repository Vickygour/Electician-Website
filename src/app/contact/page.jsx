'use client';
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { site } from '../../data/site';
import { useApp, pushStore, makeId } from '../../context/AppContext';

const services = ['Residential Service', 'Industrial Systems', 'Emergency Repair', 'Solar Installation'];
const blank = { name: '', email: '', phone: '', service: services[0], message: '' };

const ContactPage = () => {
  const { toast } = useApp();
  const [form, setForm] = useState(blank);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(null);

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((x) => ({ ...x, [k]: undefined }));
  };

  const submit = (e) => {
    e.preventDefault();
    const err = {};
    if (form.name.trim().length < 2) err.name = 'Please enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) err.email = 'Enter a valid email address.';
    if (form.phone.trim() && !/^[+\d][\d\s\-()]{6,17}$/.test(form.phone.trim())) err.phone = 'Enter a valid phone number.';
    if (form.message.trim().length < 10) err.message = 'Message should be at least 10 characters.';
    setErrors(err);
    if (Object.keys(err).length) {
      toast('Please fix the highlighted fields.', 'error');
      return;
    }
    const msg = { id: makeId('MSG'), ...form, createdAt: new Date().toISOString() };
    pushStore('electrician_messages', msg);
    setSent(msg);
    setForm(blank);
    toast('Message sent successfully!');
  };

  const field = (k) =>
    `p-4 border outline-none focus:border-orange-500 transition-all bg-white ${errors[k] ? 'border-red-400' : 'border-gray-200'}`;
  const err = (k) => errors[k] && <span className="text-red-500 text-xs">{errors[k]}</span>;

  return (
    <div className="bg-white font-sans">

      {/* 1. CONTACT BANNER (Full Color & Professional) */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden flex items-center">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center brightness-[0.7]"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-20 w-full">
          <span className="text-orange-500 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">
            Get In Touch
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight">
            Contact <span className="text-orange-500">Us</span>
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-orange-500 z-20" />
      </section>

      {/* 2. CONTACT INFO & FORM SECTION */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left: Contact Information */}
          <div className="w-full lg:w-1/3">
            <h2 className="text-3xl font-black text-slate-800 mb-8 relative">
              Contact Information
              <span className="absolute -bottom-3 left-0 w-12 h-1 bg-orange-500"></span>
            </h2>
            <p className="text-gray-500 mb-10 leading-relaxed">
              Have an electrical emergency or planning a new project? Reach out
              to our experts today.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5 group">
                <div className="bg-orange-50 p-4 rounded-sm text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 uppercase text-xs tracking-widest mb-1">
                    Call Us 24/7
                  </h4>
                  <a href={site.phoneHref} className="text-lg font-black text-slate-700 hover:text-orange-500">
                    {site.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="bg-orange-50 p-4 rounded-sm text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 uppercase text-xs tracking-widest mb-1">
                    Email Address
                  </h4>
                  <a href={`mailto:${site.email}`} className="text-lg font-bold text-slate-700 hover:text-orange-500">
                    {site.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="bg-orange-50 p-4 rounded-sm text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 uppercase text-xs tracking-widest mb-1">
                    Our Location
                  </h4>
                  <p className="text-gray-600">{site.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="bg-orange-50 p-4 rounded-sm text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 uppercase text-xs tracking-widest mb-1">
                    Working Hours
                  </h4>
                  <p className="text-gray-600">
                    {site.hours} <br />{' '}
                    <span className="text-orange-500 font-bold underline">
                      {site.emergency}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form (Professional Card Style) */}
          <div className="w-full lg:w-2/3 bg-slate-50 p-8 md:p-12 shadow-2xl border-t-8 border-[#2A2C38] rounded-sm">
            <div className="mb-10">
              <h3 className="text-3xl font-black text-slate-800 mb-2">
                Send Us a Message
              </h3>
              <p className="text-gray-500">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>
            </div>

            {sent && (
              <div className="mb-8 flex items-start gap-3 bg-green-50 border border-green-200 text-green-800 p-4">
                <CheckCircle2 className="shrink-0 mt-0.5" size={20} />
                <p className="text-sm">
                  Thank you! Your message (ref <b>{sent.id}</b>) has been received. We will reply within 24 hours.
                </p>
              </div>
            )}
            <form onSubmit={submit} noValidate className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="c-name" className="text-xs font-bold uppercase tracking-widest text-slate-600">
                  Full Name
                </label>
                <input id="c-name" type="text" value={form.name} onChange={set('name')} placeholder="e.g. John Doe" className={field('name')} />
                {err('name')}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="c-email" className="text-xs font-bold uppercase tracking-widest text-slate-600">
                  Email Address
                </label>
                <input id="c-email" type="email" value={form.email} onChange={set('email')} placeholder="john@example.com" className={field('email')} />
                {err('email')}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="c-phone" className="text-xs font-bold uppercase tracking-widest text-slate-600">
                  Phone Number
                </label>
                <input id="c-phone" type="tel" value={form.phone} onChange={set('phone')} placeholder="+1 (000) 000-0000" className={field('phone')} />
                {err('phone')}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="c-service" className="text-xs font-bold uppercase tracking-widest text-slate-600">
                  Service Needed
                </label>
                <select id="c-service" value={form.service} onChange={set('service')} className={`${field('service')} appearance-none`}>
                  {services.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label htmlFor="c-msg" className="text-xs font-bold uppercase tracking-widest text-slate-600">
                  Your Message
                </label>
                <textarea id="c-msg" rows="5" value={form.message} onChange={set('message')} placeholder="Tell us about your project..." className={`${field('message')} resize-none`}></textarea>
                {err('message')}
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="w-full bg-orange-500 text-white font-black py-5 uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#2A2C38] transition-all shadow-xl shadow-orange-100">
                  <Send size={18} /> Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 3. GOOGLE MAP (Full Width Placeholder) */}
      <section className="w-full h-[450px] bg-gray-200 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714942211307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-700"
        ></iframe>
      </section>

    </div>
  );
};

export default ContactPage;
