import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check, Phone, Zap } from 'lucide-react';
import PageBanner from '../../Components/PageBanner';
import BookButton from '../../Components/BookButton';
import { services, getService, serviceProcess } from '../../../data/services';
import { site, money } from '../../../data/site';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = getService(slug);
  return s ? { title: s.title, description: s.short } : {};
}

export default async function ServiceDetail({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <PageBanner title={service.title.split(' ')[0]} accent={service.title.split(' ').slice(1).join(' ')} eyebrow="Our Services" image={service.image} />

      <section className="bg-white py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-14">
          {/* Main */}
          <div className="w-full lg:w-2/3">
            <div className="relative w-full h-[320px] md:h-[440px] mb-10 shadow-xl overflow-hidden">
              <Image src={service.image} alt={service.title} fill className="object-cover" sizes="(max-width:1024px) 100vw, 66vw" priority />
            </div>
            <h2 className="text-4xl font-black text-slate-800 mb-5">{service.title}</h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">{service.overview}</p>

            <h3 className="text-2xl font-bold text-slate-800 mb-6">What is included</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <Check size={20} strokeWidth={3} className="text-orange-500 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-bold text-slate-800 mb-6">How it works</h3>
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {serviceProcess.map((step, i) => (
                <li key={step.title} className="bg-slate-50 border-l-4 border-orange-500 p-6">
                  <span className="text-orange-500 font-black text-sm">Step {i + 1}</span>
                  <h4 className="text-lg font-bold text-slate-800 mt-1 mb-2">{step.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-1/3 space-y-8">
            <div className="bg-[#2A2C38] text-white p-8">
              <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">Starting from</p>
              <p className="text-5xl font-black mb-6">{money(service.from).replace('.00', '')}</p>
              <BookButton
                prefill={{ service: service.title }}
                className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 transition-colors"
              >
                <Zap size={18} fill="white" /> Book this service
              </BookButton>
              <a href={site.phoneHref} className="mt-4 flex items-center justify-center gap-2 border-2 border-white/30 hover:bg-white hover:text-[#2A2C38] py-3.5 font-bold transition-all">
                <Phone size={18} /> {site.phone}
              </a>
            </div>

            <div className="bg-slate-50 p-8">
              <h4 className="text-xl font-bold text-slate-800 mb-5">All services</h4>
              <ul className="space-y-1">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className={`block py-2.5 px-3 text-sm border-l-2 transition-colors ${
                        s.slug === service.slug
                          ? 'border-orange-500 text-orange-500 font-bold bg-white'
                          : 'border-transparent text-gray-600 hover:text-orange-500 hover:border-orange-500'
                      }`}
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
