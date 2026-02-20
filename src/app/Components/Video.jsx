'use client';
import React, { useState } from 'react';
import { Play, X, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const VideoSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const videoId = 'dQw4w9WgXcQ'; // Apni YouTube ID yahan dalein

  return (
    <section className="relative w-full md:h-[600px] flex flex-col md:flex-row overflow-visible font-sans bg-white mb-20 md:mb-0">
      {/* --- Left Side: Image with Play Button --- */}
      <div className="relative w-full md:w-[60%] h-[350px] md:h-full">
        <img
          src="https://plus.unsplash.com/premium_photo-1670984939697-ba4e444c537f?w=800&auto=format&fit=crop&q=80"
          alt="Modern Stairs Lighting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />

        {/* Play Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform group z-20"
        >
          <div className="absolute inset-0 bg-orange-500 rounded-full animate-ping opacity-25 group-hover:opacity-40" />
          <Play fill="currentColor" size={30} className="ml-1" />
        </button>
      </div>

      {/* --- Right Side: Content Area --- */}
      <div className="relative w-full md:w-[40%] h-[300px] md:h-full flex items-center bg-gray-100">
        <img
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800"
          alt="Electrician working"
          className="w-full h-full object-cover hidden md:block opacity-40 md:opacity-100"
        />

        {/* --- Floating White Card (Perfect Overlap) --- */}
        <div
          className="absolute 
            md:left-[-40%] md:top-1/2 md:-translate-y-1/2 
            left-6 right-6 -bottom-16 md:bottom-auto
            bg-white p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.15)] 
             border-orange-500 z-30 max-w-lg"
        >
          <div className="w-1 h-16 bg-orange-500 absolute left-0 top-12 hidden md:block" />

          <h1 className="text-3xl md:text-5xl font-bold text-slate-800 leading-[1.1]">
            Your <span className="text-orange-500">Best Option</span> <br />
            in Electrical <br />
            Contractors 24/7
          </h1>

          <p className="mt-6 text-gray-500 text-sm md:text-base leading-relaxed">
            Our experienced electricians are highly trained in all aspects of
            electrical service, from office lighting and security systems to
            emergency repair.
          </p>

          <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-sm font-bold flex items-center gap-3 transition-all uppercase text-xs tracking-widest shadow-lg shadow-orange-200">
            <Zap size={16} fill="white" />
            Explore services
          </button>
        </div>

        {/* Floating Lightning Bolt Icon */}
        <div className="absolute bottom-6 right-6 w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-xl cursor-pointer hover:rotate-12 transition-transform z-40">
          <Zap size={28} fill="white" />
        </div>
      </div>

      {/* --- YouTube Modal --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          >
            <button
              className="absolute top-8 right-8 text-white hover:text-orange-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <X size={40} />
            </button>
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VideoSection;
