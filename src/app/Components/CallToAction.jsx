import React from 'react';
import { Phone, Zap } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="relative w-full min-h-[600px] flex items-center overflow-hidden">
      {/* 1. Split Background Images */}
      <div className="absolute inset-0 w-full h-full flex flex-col lg:flex-row">
        {/* Left Half */}
        <div className="relative w-full lg:w-1/2 h-1/2 lg:h-full">
          <img
            src="https://plus.unsplash.com/premium_photo-1661911309991-cc81afcce97d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlY3RyaWNpYW58ZW58MHx8MHx8fDA%3D"
            alt="Electrical transformer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Right Half */}
        <div className="relative w-full lg:w-1/2 h-1/2 lg:h-full">
          <img
            src="https://plus.unsplash.com/premium_photo-1661908782924-de673a5c6988?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWxlY3RyaWNpYW58ZW58MHx8MHx8fDA%3D"
            alt="Electrician holding cables"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </div>

      {/* 2. Center Content Card */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex justify-center ">
        <div className="bg-white/20 backdrop-blur-sm border border-white/20 p-8 md:p-14 shadow-2xl rounded-sm max-w-[550px] relative">
          {/* 4. Accent Vertical Line */}
          <div className="absolute left-8 top-14 w-1 h-[60px] bg-[#f97316] hidden md:block" />

          {/* 5. Text Content */}
          <div className="md:pl-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-6">
              Do you <span className="text-[#f97316]">Need Help</span> With
              Electrical Maintenance?
            </h2>

            <p className="text-gray-500 text-base mb-10 leading-relaxed">
              Our electrical repair and service options are proudly offered to
              clients. Give us a call today to schedule a free service estimate!
            </p>

            {/* 6. Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="flex items-center justify-center gap-2 bg-[#f97316] hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-md transition-all duration-300 w-full sm:w-auto shadow-lg shadow-orange-500/20 active:scale-95">
                <Phone size={18} fill="currentColor" />
                <span>Give Us a Call</span>
              </button>

              <button className="flex items-center justify-center gap-2 bg-[#2d323f] hover:bg-[#3d4456] text-white font-bold py-4 px-8 rounded-md transition-all duration-300 w-full sm:w-auto active:scale-95">
                <Zap size={18} fill="currentColor" />
                <span>Free Estimate</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 7. Floating Bottom Icon */}
      <div className="absolute bottom-6 right-6 z-20">
        <button className="w-14 h-14 bg-[#f97316] hover:bg-orange-600 text-white rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:rotate-12 group">
          <Zap
            size={24}
            fill="white"
            className="group-hover:scale-110 transition-transform"
          />
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
