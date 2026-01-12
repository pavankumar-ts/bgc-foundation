'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '../ui/Card';
import Badge from '../ui/Badge';

const ValuesSection = () => {
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

  const values = [
    {
      title: 'Accessibility',
      description: 'Bringing specialized healthcare directly to rural communities, eliminating barriers of distance and cost',
      icon: (
        <svg className="w-12 h-12 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Compassion',
      description: 'Treating every patient with dignity, respect, and culturally-sensitive care',
      icon: (
        <svg className="w-12 h-12 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: 'Prevention',
      description: 'Focusing on early detection and education to prevent diseases before they develop',
      icon: (
        <svg className="w-12 h-12 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Community Partnership',
      description: 'Working hand-in-hand with local communities to build lasting health impact',
      icon: (
        <svg className="w-12 h-12 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="section-spacing bg-white overflow-hidden" id="values" ref={sectionRef}>
      <div className="section-container">
        {/* Hero-style Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div
            className={`opacity-0 ${isVisible ? 'animate-smooth-fade-in-up' : ''}`}
            style={{ animationDelay: isVisible ? '0.1s' : '0s' }}
          >
            <Badge variant="primary" className="mb-6">
              Our Values
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
              Our values guide every health camp, every consultation, and every community partnership we build across rural Karnataka.
            </p>
          </div>
        </div>

        {/* Values Cards */}
        <div className="mb-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
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
                        {value.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
