// app/components/OurServices.jsx
'use client';
import Image from 'next/image';
import Header from '../Header/page';
import Footer from '../Components/Footer';
import { Check } from 'lucide-react';

export default function OurServices() {
  const services = [
    {
      title: 'Residential Electrical',
      description: 'Smart home integration and complete wiring solutions.',
      image:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000',
    },
    {
      title: 'Commercial Solutions',
      description: 'Power distribution for retail and office environments.',
      image:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000',
    },
    {
      title: 'Industrial Systems',
      description: 'Heavy-duty machinery power and automation controls.',
      image:
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000',
    },
    {
      title: 'Lighting Design',
      description: 'Architectural LED installations and retrofit upgrades.',
      image:
        'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80&w=1000',
    },
    {
      title: 'Solar & Energy',
      description: 'Sustainable photovoltaic systems and battery storage.',
      image:
        'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1000',
    },
    {
      title: 'Maintenance & Repair',
      description: '24/7 emergency response and preventative care.',
      image:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000',
    },
  ];

  const points = [
    'Fully screened and background checked for your peace of mind',
    'We don’t hire anyone we wouldn’t hire to work inside of our own homes.',
    'Neat, clean and uniformed for safety and security',
    'Knowledgeable, experienced and skilled',
    'Rigorously trained in customer service',
    'Fully licensed, bonded and insured',
    'Friendly, helpful, and reliable',
  ];

  return (
    <>
      <Header />
      <section className="relative h-[300px] md:h-[400px] overflow-hidden flex items-center">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center brightness-[0.7]"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=1600')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-20 w-full">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight">
            Our <span className="text-orange-500">Services</span>
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-orange-500 z-20" />
      </section>

      <section className="w-full bg-gray-100 py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-8 md:flex-row md:gap-16">
          {/* Left - Image with subtle orange gradient overlay */}
          <div className="relative w-full md:w-[55%] h-[420px] md:h-[520px]">
            <Image
              src="/assets/elictric.avif"
              alt="Professional electrical services"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#f97316]/60 via-[#f97316]/10 to-transparent" />
          </div>

          {/* Right - Content */}
          <div className="w-full md:w-[45%] flex flex-col justify-center">
            <p className="text-[#f97316] font-semibold uppercase tracking-wide mb-3">
              Our Services
            </p>
            <h2 className="text-slate-800 text-4xl md:text-5xl font-bold leading-tight mb-6">
              Responsive &amp; Professional
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              We provide reliable, high-quality electrical and corporate
              installation services with an emphasis on precision and safety.
              Every project is handled by certified professionals with an
              unwavering commitment to excellence.
            </p>
            <div>
              <p className="text-slate-800 font-medium mb-2 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#f97316]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2 5a2 2 0 012-2h3.28a2 2 0 011.94 1.515l.85 3.4a2 2 0 01-.72 2.11l-1.27 1.02a11.05 11.05 0 005.08 5.08l1.02-1.27a2 2 0 012.11-.72l3.4.85A2 2 0 0121 18.72V22a2 2 0 01-2 2h-1C9.163 24 2 16.837 2 7V5z"
                  />
                </svg>
                Call us today
              </p>
              <p className="text-[#f97316] text-3xl font-bold leading-none mb-1">
                1-(800)-765-43-21
              </p>
              <p className="text-gray-500 text-sm">
                We're available 24/7, 365 days a year.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Our Services
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light">
              Engineering excellence delivered through precision, safety, and
              modern infrastructure solutions.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative h-80 w-full overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2"
              >
                {/* Background Image with Zoom Effect */}
                <div className="absolute inset-0 w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-110">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Orange Accent Line (Top) */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 z-10 flex flex-col justify-end h-full">
                  <h3 className="text-2xl font-bold text-white mb-2 transform transition-transform duration-500 group-hover:-translate-y-1">
                    {service.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-4 opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 delay-75">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center text-orange-400 font-semibold text-sm tracking-wide uppercase group-hover:text-orange-300 transition-colors">
                    <span className="mr-2">Learn More</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full bg-[#f3f4f6] py-24 overflow-hidden">
        {/* Subtle Dotted Pattern Decorative Element */}
        <div className="absolute top-10 left-10 w-32 h-32 opacity-10 pointer-events-none select-none z-0">
          <div className="grid grid-cols-6 gap-2">
            {[...Array(36)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 bg-slate-400 rounded-full"
              ></div>
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* LEFT SIDE: Text Content */}
            <div className="w-full lg:w-1/2">
              <span className="text-orange-500 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
                Why us?
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-10 leading-tight">
                Our Electricians are:
              </h2>

              <ul className="space-y-5">
                {points.map((point, index) => (
                  <li key={index} className="flex items-start gap-4 group">
                    <div className="mt-1.5 shrink-0">
                      <Check
                        size={18}
                        className="text-orange-500 stroke-[3px]"
                      />
                    </div>
                    <span className="text-gray-600 text-[15px] md:text-base leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT SIDE: Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative w-full h-[400px] md:h-[500px]">
                <Image
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1000" // High-quality electrical work image
                  alt="Professional Electricians at Work"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <Footer />
    </>
  );
}
