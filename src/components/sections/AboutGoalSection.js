'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '../ui/Card';
import Badge from '../ui/Badge';

const AboutGoalSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="section-spacing bg-gradient-to-br from-gray-50 to-primary-50/30" id="about-goal">
      <div className="main-container">
        {/* Section Header */}
        <div className=" text-center mb-8">
          <Badge variant="primary" className="mb-4">
            Our Main Goal
          </Badge>
          <h2 className="section-h2 text-gray-900 mb-6">
            Bringing Digestive Healthcare to Every Village
          </h2>
          <p className="body-large text-gray-600 leading-relaxed max-w-4xl mx-auto">
            We aim to bridge the digestive healthcare gap by bringing comprehensive digestive health programs to rural communities. 
            Our approach focuses on early diagnosis, preventive care, and building lasting digestive healthcare infrastructure in underserved areas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="space-y-6">
             
              {/* Key Points with Enhanced Design */}
              <div className="space-y-6 mt-8">
                <Card className="p-6 border-l-4 border-l-primary-500 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="card-h4 text-gray-900 mb-2">Direct Community Access</h4>
                      <p className="body-regular text-gray-600">
                        We eliminate barriers by bringing specialist care directly to rural areas, 
                        making digestive healthcare accessible and affordable for every family.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-l-secondary-600 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary-600 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="card-h4 text-gray-900 mb-2">Education & Prevention</h4>
                      <p className="body-regular text-gray-600">
                        Beyond treatment, we focus exclusively on digestive health education in Kannada and preventive care to improve long-term community health outcomes.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-l-primary-500 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="card-h4 text-gray-900 mb-2">Comprehensive Care</h4>
                      <p className="body-regular text-gray-600">
                        From consultations to advanced endoscopy procedures, we provide complete 
                        digestive health programs with a patient-centered approach.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Visual Side */}
          <div className={`relative ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative">
              {/* Main Healthcare Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-6">
                <Image
                  src="/assets/home/about.webp"
                  alt="BGC Foundation healthcare program - Mobile health camp in rural Karnataka"
                  width={600}
                  height={400}
                  className="w-full h-[300px] sm:h-[350px] lg:h-[400px] object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                />
              </div>
           </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGoalSection;