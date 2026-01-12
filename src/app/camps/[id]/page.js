'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Card } from '../../../components/ui/Card';
import { notFound } from 'next/navigation';
import { getCampById, digestiveDiseases } from '../../../data/campsData';
import { FaMapMarkerAlt, FaCalendarAlt, FaCheckCircle, FaVideo, FaImage, FaPlay, FaSearchPlus, FaTimes, FaChevronLeft, FaChevronRight, FaChevronUp } from 'react-icons/fa';
import { MdPeopleAlt } from 'react-icons/md';

export default function CampDetailPage({ params }) {
  const [camp, setCamp] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAllImages, setShowAllImages] = useState(false);
  const [playingVideos, setPlayingVideos] = useState({});

  useEffect(() => {
    async function loadCamp() {
      const { id } = await params;
      const campData = getCampById(id);
      if (!campData) {
        notFound();
      }
      setCamp(campData);
      setLoading(false);
    }
    loadCamp();
  }, [params]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading camp details...</p>
        </div>
      </div>
    );
  }

  if (!camp) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-[75vh] lg:min-h-[85vh] xl:min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={camp.image}
            alt={camp.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 md:bg-black/40" />
        </div>

        <div className="relative z-10 w-full px-4 md:px-6 lg:px-8">
          <div className="text-center space-y-6 md:space-y-8 max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto pt-20 md:pt-16 lg:pt-20">
            <div className="space-y-4 md:space-y-6 lg:space-y-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg leading-tight px-2">
                {camp.title}
              </h1>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-white/90 text-sm md:text-base">
                <div className="flex items-center">
                  <FaMapMarkerAlt className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  {camp.location}
                </div>
                <div className="flex items-center">
                  <FaCalendarAlt className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  {camp.date}
                </div>
                <div className="flex items-center">
                  <MdPeopleAlt className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  {camp.participants} participants
                </div>
              </div>
              <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl lg:max-w-3xl mx-auto drop-shadow-md px-4">
                {camp.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-4 bg-gray-50 border-b border-gray-200">
        <div className="main-container">
          <nav className="flex text-sm">
            <Link href="/" className="text-primary-600 hover:text-primary-700">Home</Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link href="/camps" className="text-primary-600 hover:text-primary-700">Camps</Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-900">{camp.title}</span>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-12 lg:py-16">
        <div className="main-container">
          <div className="grid gap-8 md:gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* About Section */}
              <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-0">
                  Camp Overview
                </h2>
                <div className="prose max-w-none text-gray-700">
                  <p className="text-base md:text-lg leading-relaxed whitespace-pre-line">
                    {camp.detailedDescription}
                  </p>
                </div>
              </div>

              {/* Key Achievements */}
              <div className="mb-8 md:mb-12">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                  Key Achievements
                </h3>
                <div className="grid gap-3 md:gap-4">
                  {camp.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-primary-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm md:text-base text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Outcomes */}
              {camp.outcomes && camp.outcomes.length > 0 && (
                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Detailed Outcomes</h3>
                  <div className="grid gap-3 md:gap-4">
                    {camp.outcomes.map((outcome, index) => (
                      <div key={index} className="flex items-start">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-secondary-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm md:text-base text-gray-700">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Fibroscan Innovation (Kanakapura only) */}
              {camp.fibroscanInsight && (
                <div className="mb-8 md:mb-12">
                  <Card className="p-4 md:p-6 bg-primary-50 border-primary-200">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                      {camp.fibroscanInsight.title}
                    </h3>
                    <p className="text-base md:text-lg text-gray-700 mb-3 md:mb-4 italic font-medium">
                      &ldquo;{camp.fibroscanInsight.description}&rdquo;
                    </p>
                    <div className="grid gap-3 md:gap-4 grid-cols-2">
                      <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-primary-600">{camp.fibroscanInsight.assessmentsPerformed}</div>
                        <div className="text-xs md:text-sm text-gray-600">Fibroscan Assessments</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-primary-600">{camp.fibroscanInsight.casesIdentified}</div>
                        <div className="text-xs md:text-sm text-gray-600">Liver Disease Cases Identified</div>
                      </div>
                    </div>
                  </Card>
                </div>
              )}

              {/* Gallery */}
              {camp.gallery && (camp.gallery.images?.length > 0 || camp.gallery.videos?.length > 0) && (
                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Gallery</h3>

                  {/* Videos Section */}
                  {camp.gallery.videos && camp.gallery.videos.length > 0 && (
                    <div className="mb-6 md:mb-8">
                      <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 md:mb-6 flex items-center">
                        <FaVideo className="w-4 h-4 md:w-5 md:h-5 mr-2 text-primary-500" />
                        Camp Videos
                      </h4>
                      <div className="grid gap-2 md:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {camp.gallery.videos.map((video, index) => (
                          <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                            <div className="relative aspect-video bg-gray-100 group/video">
                              <video
                                src={video}
                                controls
                                className="w-full h-full object-cover"
                                preload="metadata"
                                onPlay={() => setPlayingVideos(prev => ({ ...prev, [index]: true }))}
                                onPause={() => setPlayingVideos(prev => ({ ...prev, [index]: false }))}
                                onEnded={() => setPlayingVideos(prev => ({ ...prev, [index]: false }))}
                              >
                                Your browser does not support the video tag.
                              </video>
                              {/* Play button overlay - Hidden on mobile */}
                              {!playingVideos[index] && (
                                <div className="hidden md:flex absolute inset-0 items-center justify-center bg-black/20 opacity-0 group-hover/video:opacity-100 transition-opacity duration-300 pointer-events-none">
                                  <div className="bg-white/90 rounded-full p-4 transform scale-75 group-hover/video:scale-100 transition-transform duration-300 shadow-lg">
                                    <FaPlay className="w-8 h-8 text-primary-600 ml-1" />
                                  </div>
                                </div>
                              )}
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Images Section */}
                  {camp.gallery.images && camp.gallery.images.length > 0 && (
                    <div>
                      <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-4 flex items-center">
                        <FaImage className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                        Photos
                      </h4>
                      <div className="grid gap-3 md:gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {(showAllImages ? camp.gallery.images : camp.gallery.images.slice(0, 8)).map((image, index) => (
                          <div
                            key={index}
                            className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
                            onClick={() => setSelectedImage({ src: image, alt: `${camp.title} photo ${index + 1}`, index })}
                          >
                            <Image
                              src={image}
                              alt={`${camp.title} photo ${index + 1}`}
                              fill
                              className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                              <div className="bg-white/90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <FaSearchPlus className="w-5 h-5 text-gray-800" />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Show more images button */}
                      {camp.gallery.images.length > 8 && !showAllImages && (
                        <div className="mt-3 md:mt-4 text-center">
                          <button
                            onClick={() => setShowAllImages(true)}
                            className="inline-flex items-center px-3 py-2 md:px-4 md:py-2 bg-primary-100 hover:bg-primary-200 text-primary-700 rounded-lg transition-colors duration-200 cursor-pointer text-sm md:text-base"
                          >
                            <FaImage className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                            +{camp.gallery.images.length - 8} more photos
                          </button>
                        </div>
                      )}

                      {/* Show less button when all images are shown */}
                      {showAllImages && camp.gallery.images.length > 8 && (
                        <div className="mt-3 md:mt-4 text-center">
                          <button
                            onClick={() => setShowAllImages(false)}
                            className="inline-flex items-center px-3 py-2 md:px-4 md:py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200 text-sm md:text-base"
                          >
                            <FaChevronUp className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                            Show less
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
              {/* Digestive Diseases Identified */}
              <div className="mb-8 md:mb-12">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Digestive Diseases Identified</h3>
                <Card className="p-4 md:p-6">
                  <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">Common conditions identified and treated across our health camps:</p>
                  <div className="grid gap-2 md:gap-3">
                    {digestiveDiseases.map((disease, index) => (
                      <div key={index} className="flex items-start">
                        <svg className="w-3 h-3 md:w-4 md:h-4 text-primary-500 mr-2 md:mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 text-xs md:text-sm">{disease}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Impact Metrics */}
              <Card className="p-4 md:p-6 mb-6 md:mb-8 lg:sticky lg:top-24">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">
                  Impact Metrics
                </h3>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm md:text-base text-gray-600">Patients Served</span>
                    <span className="text-sm md:text-base font-semibold text-gray-900">{camp.impactMetrics.patientsSeen}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm md:text-base text-gray-600">Procedures</span>
                    <span className="text-sm md:text-base font-semibold text-gray-900">{camp.impactMetrics.proceduresCompleted}</span>
                  </div>
                  {camp.impactMetrics.laboratoryTests && (
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-sm md:text-base text-gray-600">Laboratory Tests</span>
                      <span className="text-sm md:text-base font-semibold text-gray-900">{camp.impactMetrics.laboratoryTests}</span>
                    </div>
                  )}
                  {camp.impactMetrics.medicationDistributed && (
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-sm md:text-base text-gray-600">Medicines Distributed</span>
                      <span className="text-sm md:text-base font-semibold text-gray-900">{camp.impactMetrics.medicationDistributed}</span>
                    </div>
                  )}
                  {camp.impactMetrics.followUpCases && (
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-sm md:text-base text-gray-600">Follow-up Cases</span>
                      <span className="text-sm md:text-base font-semibold text-gray-900">{camp.impactMetrics.followUpCases}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm md:text-base text-gray-600">Education Reach</span>
                    <span className="text-sm md:text-base font-semibold text-gray-900">{camp.impactMetrics.healthEducationReach}</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <FaTimes className="w-8 h-8" />
            </button>

            {/* Navigation arrows */}
            {camp.gallery.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const currentIndex = camp.gallery.images.findIndex(img => img === selectedImage.src);
                    const prevIndex = currentIndex > 0 ? currentIndex - 1 : camp.gallery.images.length - 1;
                    setSelectedImage({
                      src: camp.gallery.images[prevIndex],
                      alt: `${camp.title} photo ${prevIndex + 1}`,
                      index: prevIndex
                    });
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
                >
                  <FaChevronLeft className="w-8 h-8" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const currentIndex = camp.gallery.images.findIndex(img => img === selectedImage.src);
                    const nextIndex = currentIndex < camp.gallery.images.length - 1 ? currentIndex + 1 : 0;
                    setSelectedImage({
                      src: camp.gallery.images[nextIndex],
                      alt: `${camp.title} photo ${nextIndex + 1}`,
                      index: nextIndex
                    });
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
                >
                  <FaChevronRight className="w-8 h-8" />
                </button>
              </>
            )}

            {/* Image */}
            <div className="relative">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                {camp.gallery.images.findIndex(img => img === selectedImage.src) + 1} of {camp.gallery.images.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}