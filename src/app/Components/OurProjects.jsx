'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects as allProjects, projectCategories } from '../../data/projects';

const projects = allProjects.slice(0, 9);
const categories = projectCategories;

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredProjects =
    activeTab === 'All'
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    /* Full-width dark wrapper — background spans edge to edge */
    <section className="w-full bg-[#0A0A0A] font-sans">
      {/* Inner constraint — content stays centered */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">

        {/* ─── Header ─── */}
        <div className="text-center mb-8 sm:mb-10">
          <span className="text-orange-500 text-[11px] sm:text-xs font-bold tracking-widest uppercase">
            @electricians
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 leading-tight">
            Our Projects
          </h2>
        </div>

        {/* ─── Filter Tabs ─── */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-3 mb-8 sm:mb-12">
          {categories.map((cat) => {
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                aria-pressed={isActive}
                className={`text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 pb-1 border-b-2 whitespace-nowrap ${isActive
                    ? 'text-orange-500 border-orange-500'
                    : 'text-gray-400 border-transparent hover:text-white'
                  }`}
              >
                {cat.replace('_', ' ')}
              </button>
            );
          })}
        </div>

        {/* ─── Image Grid ─── */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 lg:gap-6">
          {filteredProjects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedImage(project.image)}
              aria-label={`View ${project.category} project`}
              className="relative aspect-square overflow-hidden bg-gray-900 group cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-[#0A0A0A]"
            >
              <Image
                src={project.image}
                alt={project.category}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 30vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              {/* Tiny zoom indicator on hover (desktop) */}
              <div className="absolute inset-0 hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-[10px] font-bold uppercase tracking-widest border border-white/60 px-3 py-1.5 rounded-full backdrop-blur-sm">
                  View
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* ─── CTA Button ─── */}
        <div className="text-center mt-10 sm:mt-12">
          <Link
            href="/gallery"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 sm:px-10 py-3.5 sm:py-4 font-bold uppercase text-[11px] sm:text-xs tracking-widest transition-colors rounded-sm active:scale-95"
          >
            View Full Gallery
          </Link>
        </div>
      </div>

      {/* ─── Full Screen Image Preview Modal ─── */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          {/* Close button — tap-friendly on mobile */}
          <button
            className="absolute top-4 right-4 sm:top-6 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white text-3xl sm:text-4xl font-thin rounded-full bg-white/10 hover:bg-orange-500 transition-colors z-10"
            onClick={() => setSelectedImage(null)}
            aria-label="Close preview"
          >
            &times;
          </button>

          <div className="relative w-full max-w-5xl flex items-center justify-center">
            <div className="relative w-full h-[75vh] sm:h-[85vh]">
              <Image
                src={selectedImage}
                alt="Project preview"
                fill
                className="object-contain"
                sizes="100vw"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>

          {/* Bottom hint */}
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-500 text-[10px] sm:text-xs tracking-widest uppercase">
            Tap anywhere to close
          </p>
        </div>
      )}
    </section>
  );
}