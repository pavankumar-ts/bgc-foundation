'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Card } from '../../../components/ui/Card';
import Badge from '../../../components/ui/Badge';
import Button from '../../../components/ui/Button';
import { notFound } from 'next/navigation';
import { getCampById, digestiveDiseases } from '../../../data/campsData';

export default function CampDetailPage({ params }) {
  const [camp, setCamp] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAllImages, setShowAllImages] = useState(false);

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
      <section className="relative min-h-[75vh] lg:min-h-[85vh] xl:min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={camp.image}
            alt={camp.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 wide-container w-full">
          <div className="text-center space-y-8 max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto pt-16 lg:pt-20">
            <div className="space-y-6 lg:space-y-8">
              <h1 className="hero-h1 text-white drop-shadow-lg">
                {camp.title}
              </h1>
              <div className="flex flex-wrap justify-center gap-6 text-white/90">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {camp.location}
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  {camp.date}
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {camp.participants} participants
                </div>
              </div>
              <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl lg:max-w-3xl mx-auto drop-shadow-md">
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
      <section className="py-16">
        <div className="main-container">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* About Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Camp Overview
                </h2>
                <div className="prose max-w-none text-gray-700">
                  <p className="text-lg leading-relaxed whitespace-pre-line">
                    {camp.detailedDescription}
                  </p>
                </div>
              </div>

              {/* Key Achievements */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Key Achievements
                </h3>
                <div className="grid gap-4">
                  {camp.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Outcomes */}
              {camp.outcomes && camp.outcomes.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Detailed Outcomes</h3>
                  <div className="grid gap-4">
                    {camp.outcomes.map((outcome, index) => (
                      <div key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-secondary-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Fibroscan Innovation (Kanakapura only) */}
              {camp.fibroscanInsight && (
                <div className="mb-12">
                  <Card className="p-6 bg-primary-50 border-primary-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      🔬 {camp.fibroscanInsight.title}
                    </h3>
                    <p className="text-lg text-gray-700 mb-4 italic font-medium">
                      &ldquo;{camp.fibroscanInsight.description}&rdquo;
                    </p>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary-600">{camp.fibroscanInsight.assessmentsPerformed}</div>
                        <div className="text-sm text-gray-600">Fibroscan Assessments</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary-600">{camp.fibroscanInsight.casesIdentified}</div>
                        <div className="text-sm text-gray-600">Liver Disease Cases Identified</div>
                      </div>
                    </div>
                  </Card>
                </div>
              )}

              {/* Cost Breakdown */}
              {camp.costBreakdown && (
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Healthcare Value Delivered</h3>
                  <Card className="p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600">Consultation Services</span>
                        <span className="font-semibold text-gray-900">{camp.costBreakdown.consultationCost}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600">Laboratory Tests</span>
                        <span className="font-semibold text-gray-900">{camp.costBreakdown.bloodTestsCost}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600">Endoscopy Procedures</span>
                        <span className="font-semibold text-gray-900">{camp.costBreakdown.endoscopyCost}</span>
                      </div>
                      {camp.costBreakdown.fibroscanCost && (
                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                          <span className="text-gray-600">Fibroscan Assessments</span>
                          <span className="font-semibold text-gray-900">{camp.costBreakdown.fibroscanCost}</span>
                        </div>
                      )}
                      <div className="flex justify-between items-center py-2 pt-4 border-t-2 border-primary-200">
                        <span className="text-lg font-bold text-gray-900">Total Healthcare Value</span>
                        <span className="text-xl font-bold text-primary-600">{camp.costBreakdown.totalValue}</span>
                      </div>
                    </div>
                  </Card>
                </div>
              )}

              {/* Gallery */}
              {camp.gallery && (camp.gallery.images?.length > 0 || camp.gallery.videos?.length > 0) && (
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h3>

                  {/* Videos Section */}
                  {camp.gallery.videos && camp.gallery.videos.length > 0 && (
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                        </svg>
                        Camp Videos
                      </h4>
                      <div className="grid gap-2 md:grid-cols-3">
                        {camp.gallery.videos.map((video, index) => (
                          <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                            <div className="relative aspect-video bg-gray-100 group/video">
                              <video
                                src={video}
                                controls
                                className="w-full h-full object-cover"
                                preload="metadata"
                              >
                                Your browser does not support the video tag.
                              </video>
                              {/* Play button overlay */}
                              <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover/video:opacity-100 transition-opacity duration-300 pointer-events-none">
                                <div className="bg-white/90 rounded-full p-4 transform scale-75 group-hover/video:scale-100 transition-transform duration-300 shadow-lg">
                                  <svg className="w-8 h-8 text-primary-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Images Section */}
                  {camp.gallery.images && camp.gallery.images.length > 0 && (
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                        Photos
                      </h4>
                      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
                                <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Show more images button */}
                      {camp.gallery.images.length > 8 && !showAllImages && (
                        <div className="mt-4 text-center">
                          <button
                            onClick={() => setShowAllImages(true)}
                            className="inline-flex items-center px-4 py-2 bg-primary-100 hover:bg-primary-200 text-primary-700 rounded-lg transition-colors duration-200 cursor-pointer"
                          >
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                            </svg>
                            +{camp.gallery.images.length - 8} more photos
                          </button>
                        </div>
                      )}

                      {/* Show less button when all images are shown */}
                      {showAllImages && camp.gallery.images.length > 8 && (
                        <div className="mt-4 text-center">
                          <button
                            onClick={() => setShowAllImages(false)}
                            className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200"
                          >
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                            </svg>
                            Show less
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
              {/* Digestive Diseases Identified */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Digestive Diseases Identified</h3>
                <Card className="p-6">
                  <p className="text-gray-600 mb-4">Common conditions identified and treated across our health camps:</p>
                  <div className="grid gap-3">
                    {digestiveDiseases.map((disease, index) => (
                      <div key={index} className="flex items-start">
                        <svg className="w-4 h-4 text-primary-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 text-sm">{disease}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Impact Metrics */}
              <Card className="p-6 mb-8 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Impact Metrics
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Patients Served</span>
                    <span className="font-semibold text-gray-900">{camp.impactMetrics.patientsSeen}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Procedures</span>
                    <span className="font-semibold text-gray-900">{camp.impactMetrics.proceduresCompleted}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Healthcare Value</span>
                    <span className="font-semibold text-gray-900">{camp.costBreakdown.totalValue}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Follow-up Cases</span>
                    <span className="font-semibold text-gray-900">{camp.impactMetrics.followUpCases}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Education Reach</span>
                    <span className="font-semibold text-gray-900">{camp.impactMetrics.healthEducationReach}</span>
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
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
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
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
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
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
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