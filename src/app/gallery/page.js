'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { campsData } from '@/data/campsData';

export default function GalleryPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Collect all images from all camps
  const allImages = campsData.flatMap(camp =>
    camp.gallery.images.map(image => ({
      src: image,
      camp: camp.title,
      location: camp.location,
      date: camp.date
    }))
  );

  // Get unique camp titles for filtering
  const campTitles = ['all', ...new Set(campsData.map(camp => camp.title))];

  // Filter images based on selected camp
  const filteredImages = selectedFilter === 'all'
    ? allImages
    : allImages.filter(img => img.camp === selectedFilter);

  // Carousel navigation
  const goToPrevious = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (selectedImageIndex === null) return;

      if (e.key === 'ArrowLeft') {
        goToPrevious(e);
      } else if (e.key === 'ArrowRight') {
        goToNext(e);
      } else if (e.key === 'Escape') {
        setSelectedImageIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImageIndex, filteredImages.length]);

  const selectedImage = selectedImageIndex !== null ? filteredImages[selectedImageIndex] : null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-12 md:py-16 lg:py-20 pt-24 md:pt-28 lg:pt-36">
        <div className="wide-container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Health Camp Gallery
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-primary-50">
              Moments from our rural healthcare initiatives across Karnataka
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-4 md:py-6 lg:py-8 bg-white border-b">
        <div className="wide-container px-4">
          <div className="flex justify-end">
            <div className="relative">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all shadow-md text-sm md:text-base"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                Filter
                <svg
                  className={`w-4 h-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isFilterOpen && (
                <div className="absolute right-0 mt-2 w-56 md:w-64 bg-white rounded-lg shadow-xl border border-gray-200 z-10">
                  <div className="py-2">
                    {campTitles.map((title) => (
                      <button
                        key={title}
                        onClick={() => {
                          setSelectedFilter(title);
                          setIsFilterOpen(false);
                        }}
                        className={`w-full text-left px-3 md:px-4 py-2 md:py-3 transition-colors text-sm md:text-base ${
                          selectedFilter === title
                            ? 'bg-primary-50 text-primary-600 font-medium'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {title === 'all' ? 'All Camps' : title}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 md:py-12 lg:py-16">
        <div className="wide-container px-4">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer bg-white"
                onClick={() => setSelectedImageIndex(index)}
              >
                <Image
                  src={image.src}
                  alt={`${image.camp} - ${image.location}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3 lg:p-4 text-white">
                    <p className="font-semibold text-xs md:text-sm">{image.camp}</p>
                    <p className="text-[10px] md:text-xs text-gray-200">{image.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12 md:py-16 lg:py-20">
              <p className="text-gray-500 text-base md:text-lg">No images found for this filter</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal with Carousel */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 md:p-4"
          onClick={() => setSelectedImageIndex(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-2 md:top-4 right-2 md:right-4 text-white text-3xl md:text-4xl hover:text-gray-300 transition-colors z-10"
            onClick={() => setSelectedImageIndex(null)}
          >
            &times;
          </button>

          {/* Previous Button */}
          <button
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 md:p-3 transition-all z-10"
            onClick={goToPrevious}
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 md:p-3 transition-all z-10"
            onClick={goToNext}
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image Container */}
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage.src}
              alt={`${selectedImage.camp} - ${selectedImage.location}`}
              fill
              className="object-contain"
            />

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 md:p-4 lg:p-6">
              <div className="flex items-center justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm md:text-lg lg:text-xl font-semibold mb-1 md:mb-2 truncate">{selectedImage.camp}</h3>
                  <p className="text-xs md:text-sm text-gray-300 truncate">{selectedImage.location} • {selectedImage.date}</p>
                </div>
                <div className="text-xs md:text-sm text-gray-400 whitespace-nowrap">
                  {selectedImageIndex + 1} / {filteredImages.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
