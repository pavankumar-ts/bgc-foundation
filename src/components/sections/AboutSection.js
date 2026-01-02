'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '../ui/Card';
import Badge from '../ui/Badge';
import Image from 'next/image';
import { ORGANIZATION, LEADERSHIP, IMAGES, formatCredentials } from '@/config/siteConfig';

const AboutSection = () => {
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

  const missionPillars = [
    {
      title: 'Mobile Healthcare',
      description: 'Hospital-on-wheels bringing advanced medical equipment directly to rural villages',
      icon: (
        <svg className="w-12 h-12 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: 'Expert Care',
      description: 'International gastroenterologists providing world-class digestive health programs',
      icon: (
        <svg className="w-12 h-12 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: 'Community Impact',
      description: 'Free healthcare access transforming rural communities across Karnataka',
      icon: (
        <svg className="w-12 h-12 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="section-spacing bg-white overflow-hidden" id="about" ref={sectionRef}>
      <div className="section-container">
        {/* Hero-style Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div
            className={`opacity-0 ${isVisible ? 'animate-smooth-fade-in-up' : ''}`}
            style={{ animationDelay: isVisible ? '0.1s' : '0s' }}
          >
            <Badge variant="primary" className="mb-6">
              Our Mission
            </Badge>
          </div>
          <div
            className={`opacity-0 ${isVisible ? 'animate-smooth-fade-in-up' : ''}`}
            style={{ animationDelay: isVisible ? '0.2s' : '0s' }}
          >
            <h2 className="section-h2 gradient-text mb-8">
              Pioneering Rural Healthcare Access in Karnataka
            </h2>
          </div>
          <div
            className={`opacity-0 ${isVisible ? 'animate-smooth-fade-in-up' : ''}`}
            style={{ animationDelay: isVisible ? '0.3s' : '0s' }}
          >
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {ORGANIZATION.name} is {ORGANIZATION.subtitle},
              bringing specialized medical care directly to underserved communities through innovative
              mobile healthcare delivery.
            </p>
          </div>
        </div>

        {/* Mission Pillars */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-3 gap-8">
            {missionPillars.map((pillar, index) => (
              <div
                key={index}
                className={`opacity-0 ${isVisible ? 'animate-smooth-fade-in-up' : ''}`}
                style={{ animationDelay: isVisible ? `${0.4 + index * 0.1}s` : '0s' }}
              >
                <Card className="medical-card text-center h-full group hover:shadow-xl transition-all duration-500">
                  <CardContent className="p-8 space-y-6">
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                      <div className="p-6 bg-primary-50 rounded-2xl group-hover:bg-primary-100 transition-colors duration-300">
                        {pillar.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Highlight - Simplified */}
        <div
          className={`opacity-0 ${isVisible ? 'animate-smooth-scale-in' : ''}`}
          style={{ animationDelay: isVisible ? '0.8s' : '0s' }}
        >
          <div className="bg-gradient-to-r from-secondary-50 to-primary-50 rounded-2xl p-8 md:p-12 border border-secondary-200">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="flex-shrink-0">
                <div className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={IMAGES.drYogananda}
                    alt={LEADERSHIP.chiefGastroenterologist.name}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>

              <div className="text-left lg:ml-8 mt-6 lg:mt-0">
                <Badge variant="secondary" className="mb-4">
                  Medical Leadership
                </Badge>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {LEADERSHIP.chiefGastroenterologist.name}
                </h3>
                <div className="text-lg text-primary-600 font-semibold mb-6">
                  {LEADERSHIP.chiefGastroenterologist.titles[0]}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  UK-trained specialist with {LEADERSHIP.chiefGastroenterologist.experience.display} of international experience, pioneering
                  rural healthcare delivery in Karnataka. Bringing NHS-standard care to
                  underserved communities.
                </p>
                <div className="flex flex-wrap gap-2">
                  {LEADERSHIP.chiefGastroenterologist.credentials.slice(1, 4).map((credential, index) => (
                    <Badge key={index} variant="outline" className="text-xs">{credential}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;