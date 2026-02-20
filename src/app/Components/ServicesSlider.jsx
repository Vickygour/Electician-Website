import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Wind, ShieldCheck, Cpu, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const ServicesSlider = () => {
  const services = [
    {
      title: 'Air Conditioning',
      description:
        'Our installation services ensure that you get the right air conditioner.',
      icon: <Wind className="w-12 h-12 text-white" />,
      image:
        'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop',
    },
    {
      title: 'Security Systems',
      description: 'You can view events over a monitor in our home.',
      icon: <ShieldCheck className="w-12 h-12 text-white" />,
      image:
        'https://images.unsplash.com/photo-1557597774-9d2739f8fa00?q=80&w=2043&auto=format&fit=crop',
    },
    {
      title: 'Panels Changes',
      description: 'Electrical panels are the heart of your electrical system.',
      icon: <Cpu className="w-12 h-12 text-white" />,
      image:
        'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=1887&auto=format&fit=crop',
    },
    {
      title: 'Lighting Solutions',
      description:
        'Custom lighting designs for both residential and commercial spaces.',
      icon: <Cpu className="w-12 h-12 text-white" />, // Using Cpu as placeholder for logic
      image:
        'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=1935&auto=format&fit=crop',
    },
  ];

  return (
    <section className="bg-[#f8f8f8] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Subtitle */}
        <div className="text-center mb-4">
          <span className="text-[#f97316] text-xs font-semibold uppercase tracking-[0.2em]">
            24/7 Electrician Services – Safe and Efficient
          </span>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            We are a Full Service Electrical Contractor
          </h2>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={600}
          pagination={{
            clickable: true,
            bulletActiveClass: 'swiper-pagination-bullet-active !bg-gray-800',
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-5"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center group">
                {/* Bulb-shaped image container */}
                <div
                  className="relative w-48 h-64 mb-4 overflow-hidden"
                  style={{
                    clipPath:
                      'path("M96,0 C42.98,0 0,42.98 0,96 C0,135.09 23.33,168.73 57,183.65 L57,216 L135,216 L135,183.65 C168.67,168.73 192,135.09 192,96 C192,42.98 149.02,0 96,0 Z")',
                  }}
                >
                  {/* Background image */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/50 transition-colors duration-300 group-hover:bg-black/40" />

                  {/* Center Icon */}
                  <div className="absolute inset-0 flex items-center justify-center -translate-y-4">
                    {service.icon}
                  </div>
                </div>

                {/* Orange base element */}
                <div className="flex flex-col items-center gap-1 mb-6">
                  <div className="w-12 h-1.5 bg-[#f97316] rounded-full" />
                  <div className="w-8 h-1.5 bg-[#f97316] rounded-full" />
                  <div className="w-5 h-1.5 bg-[#f97316] rounded-full" />
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm text-center max-w-[260px] mb-4">
                  {service.description}
                </p>

                {/* More Info Link */}
                <a
                  href="#"
                  className="flex items-center gap-1 text-sm font-bold text-gray-800 hover:text-[#f97316] transition-colors group/link"
                >
                  More info
                  <ChevronRight className="w-3 h-3 text-[#f97316] transform transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #d1d5db;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #1f2937 !important;
          
        }
      `}</style>
    </section>
  );
};

export default ServicesSlider;
