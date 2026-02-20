'use client';
import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    category: 'Offices',
    image:
      'https://plus.unsplash.com/premium_photo-1706548911842-7162d4bd2c98?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2FsbGVyeXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 2,
    category: 'Offices',
    image:
      'https://images.unsplash.com/photo-1514195385834-0853a6eda41c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdhbGxlcnl8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 3,
    category: 'Residences',
    image:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800',
  },
  {
    id: 4,
    category: 'Retail_objects',
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800',
  },
  {
    id: 5,
    category: 'Industrial_objects',
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800',
  },
  {
    id: 6,
    category: 'Offices',
    image:
      'https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=800',
  },
  {
    id: 7,
    category: 'Offices',
    image:
      'https://images.unsplash.com/photo-1563099045-dd7d9aebaa49?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEVsZWN0cmljaWFuJTIwbGlnaHRzfGVufDB8fDB8fHww',
  },
  {
    id: 8,
    category: 'Offices',
    image:
      'https://images.unsplash.com/photo-1606335545623-5d90040a4756?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGd5bSUyMGxpZ2h0c3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 9,
    category: 'Offices',
    image:
      'https://plus.unsplash.com/premium_photo-1674823993410-518765572fb6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3ltJTIwbGlnaHRzfGVufDB8fDB8fHww',
  },
];

const categories = [
  'All',
  'Residences',
  'Industrial_objects',
  'Offices',
  'Retail_objects',
];

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
