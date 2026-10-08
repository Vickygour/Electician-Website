'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { projects as allProjects, projectCategories } from '../../data/projects';

const projects = allProjects.slice(0, 9);
const categories = projectCategories;

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState('All');
  // Error fix: Removed TypeScript type definition
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredProjects =
    activeTab === 'All'
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section className="bg-[#0A0A0A] min-h-screen max-w-7xl mx-auto px-4 py-16 font-sans ">
      {/* Header */}
      <div className="text-center mb-10">
        <span className="text-orange-600 text-xs font-bold tracking-widest uppercase">
          @electricians
        </span>
        <h2 className="text-4xl font-extrabold text-white mt-2">
          Our Projects
        </h2>
      </div>

      {/* Navigation Filter */}
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            aria-pressed={activeTab === cat}
            className={`text-sm font-bold uppercase tracking-wider transition-all duration-300 pb-1 border-b-2 ${
              activeTab === cat
                ? 'text-orange-600 border-orange-600'
                : 'text-gray-400 border-transparent hover:text-gray-700'
            }`}
          >
            {cat.replace('_', ' ')}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedImage(project.image)}
            className="aspect-square overflow-hidden bg-gray-50 group cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={project.image}
              alt={project.category}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/gallery"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 font-bold uppercase text-xs tracking-widest transition-colors"
        >
          View Full Gallery
        </Link>
      </div>

      {/* Full Screen Image Preview Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-8 text-white text-5xl font-thin hover:text-orange-500 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>

          <div className="relative max-w-5xl w-full flex justify-center">
            <img
              src={selectedImage}
              alt="Preview"
              className="max-h-[85vh] w-auto object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}
