'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '../ui/Card';
import Badge from '../ui/Badge';
import Image from 'next/image';

const LeadershipSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setIsVisible(true);
            setHasAnimated(true);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="section-spacing bg-white overflow-hidden"
      id="leadership"
    >
      <div className="main-container">
        {/* Section Header */}
        <div className="narrow-container text-center mb-12">
          <div
            className={`opacity-0 ${isVisible ? 'animate-smooth-fade-in-up' : ''}`}
            style={{ animationDelay: isVisible ? '0.1s' : '0s' }}
          >
            <Badge variant="secondary" className="inline-block mb-4">
              Our Leadership
            </Badge>
            <h2 className="section-h2 text-gray-900 mb-6">
              Expert Medical Leadership
            </h2>
          </div>
          <div
            className={`opacity-0 ${isVisible ? 'animate-smooth-fade-in-up' : ''}`}
            style={{ animationDelay: isVisible ? '0.3s' : '0s' }}
          >
            <p className="body-large text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Our programs are led by internationally trained specialists committed to bringing world-class healthcare to rural communities.
            </p>
          </div>
        </div>

        {/* Leadership Card */}
        <div
          className={`mx-auto opacity-0 ${isVisible ? 'animate-smooth-scale-in' : ''}`}
          style={{ animationDelay: isVisible ? '0.5s' : '0s' }}
        >
          <Card className="p-8 lg:p-12 shadow-lg border border-gray-200">
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">

              {/* Profile Image */}
              <div
                className={`flex-shrink-0 opacity-0 ${isVisible ? 'animate-smooth-fade-in-up' : ''}`}
                style={{ animationDelay: isVisible ? '0.7s' : '0s' }}
              >
                <Image
                  src="/assets/home/dr-yoganada.webp"
                  alt="Dr. Yogananda Reddy - Chief Gastroenterologist"
                  width={280}
                  height={350}
                  className="w-[400px] h-80 object-cover rounded-xl shadow-lg"
                />
              </div>

              {/* Profile Content */}
              <div className="flex-1 text-center lg:text-left space-y-6">
                <div
                  className={`opacity-0 ${isVisible ? 'animate-smooth-fade-in-up' : ''}`}
                  style={{ animationDelay: isVisible ? '0.9s' : '0s' }}
                >
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    Dr. Yogananda Reddy
                  </h3>
                  <p className="text-primary-600 font-semibold text-lg mb-6">
                    Chief Gastroenterologist & Program Director
                  </p>
                </div>

                <div
                  className={`opacity-0 ${isVisible ? 'animate-smooth-fade-in-up' : ''}`}
                  style={{ animationDelay: isVisible ? '1.1s' : '0s' }}
                >
                  <p className="body-large text-gray-700 leading-relaxed">
                    International gastroenterologist with over 20 years of clinical excellence, bringing NHS-trained expertise and world-class medical standards to rural Karnataka healthcare programs.
                  </p>
                </div>

                <div
                  className={`opacity-0 ${isVisible ? 'animate-smooth-fade-in-up' : ''}`}
                  style={{ animationDelay: isVisible ? '1.3s' : '0s' }}
                >
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Professional Credentials</h4>
                    <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                      <Badge variant="outline" className="text-xs">MBBS, FRCP (London)</Badge>
                      <Badge variant="outline" className="text-xs">MRCP (UK)</Badge>
                      <Badge variant="outline" className="text-xs">CCT Gastroenterology</Badge>
                      <Badge variant="outline" className="text-xs">NHS Excellence Award</Badge>
                    </div>
                  </div>
                </div>

                <div
                  className={`opacity-0 ${isVisible ? 'animate-smooth-fade-in-up' : ''}`}
                  style={{ animationDelay: isVisible ? '1.5s' : '0s' }}
                >
                  <div className="pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      <span className="font-medium">Former Chief of Gastroenterology</span> at Manchester University Hospitals, UK.<br/>
                      <span className="font-medium">Medical Director</span> at Bangalore Gastro Centre.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;