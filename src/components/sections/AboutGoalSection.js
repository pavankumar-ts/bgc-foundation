'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '../ui/Card';
import Badge from '../ui/Badge';

const AboutGoalSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="section-spacing bg-gray-50" id="about-goal">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="primary" className="mb-4">
            Our Approach
          </Badge>
          <h2 className="section-h2 text-gray-900 mb-6">
            If Patients Can&apos;t Come to Us, We Go to Them
          </h2>
          <p className="body-large text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Bringing world-class gastroenterology care directly to rural Karnataka villages, completely free.
          </p>
        </div>

        {/* Two Column Layout: Content Left, Video Right */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content Cards */}
          <div className="space-y-6">
            {/* Card 1 */}
            <div className={`opacity-0 ${isVisible ? 'animate-smooth-fade-in-up' : ''}`} style={{ animationDelay: '0.1s' }}>
              <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary-600 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        Mobile Hospital on Wheels
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Karnataka&apos;s first mobile gastroenterology unit, a fully-equipped hospital-grade bus with endoscopy rooms, consultation areas, and advanced diagnostic equipment. Third in India.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Card 2 */}
            <div className={`opacity-0 ${isVisible ? 'animate-smooth-fade-in-up' : ''}`} style={{ animationDelay: '0.2s' }}>
              <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary-600 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        Completely Free of Cost
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        All consultations, blood tests, endoscopies, medications, and treatments are provided free. This is about equity in healthcare, rural communities deserve the same quality care as cities.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Card 3 */}
            <div className={`opacity-0 ${isVisible ? 'animate-smooth-fade-in-up' : ''}`} style={{ animationDelay: '0.3s' }}>
              <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary-600 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        Early Detection &amp; Prevention
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Our focus is detecting diseases early before complications develop. We screen for fatty liver, ulcers, GI cancers, TB, and IBD, conditions that are largely preventable with timely intervention.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right: Video */}
          <div className="lg:sticky lg:top-8">
            <div className="relative overflow-hidden rounded-xl shadow-2xl bg-gray-900">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/h2hSQc48GQ8?si=ErRa19iHmBChLEXW"
                  title="BGC Foundation - Mobile Gastroenterology Unit on Wheels"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGoalSection;
