'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Badge from '../ui/Badge';

const PartnersSection = () => {
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

  const partners = [
    {
      name: 'Rotary Cubbon Park Trust',
      logo: '/assets/partners/rotary.png',
    },
    {
      name: 'Infosys Foundation',
      logo: '/assets/partners/infosys-foundation.png',
    },
    {
      name: 'Dept of Health & Family Welfare, Govt of Karnataka',
      logo: '/assets/partners/karnataka-govt.png',
    },
    {
      name: 'Bangalore Gastro Centre Hospitals Pvt Ltd',
      logo: '/assets/partners/bangalore gastro centre hospital.png',
    },
  ];

  return (
    <section className="section-spacing bg-gray-50" id="partners" ref={sectionRef}>
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`opacity-0 ${isVisible ? 'animate-smooth-fade-in-up' : ''}`}
            style={{ animationDelay: isVisible ? '0.1s' : '0s' }}
          >
            <Badge variant="primary" className="mb-4">
              Our Partners
            </Badge>
          </div>
          <div
            className={`opacity-0 ${isVisible ? 'animate-smooth-fade-in-up' : ''}`}
            style={{ animationDelay: isVisible ? '0.2s' : '0s' }}
          >
            <h2 className="section-h2 text-gray-900 mb-6">
              Trusted Partners in Rural Healthcare
            </h2>
          </div>
          <div
            className={`opacity-0 ${isVisible ? 'animate-smooth-fade-in-up' : ''}`}
            style={{ animationDelay: isVisible ? '0.3s' : '0s' }}
          >
            <p className="text-xl text-gray-600 leading-relaxed">
              Working together to bring quality healthcare to rural Karnataka
            </p>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`opacity-0 ${isVisible ? 'animate-smooth-fade-in-up' : ''}`}
              style={{ animationDelay: isVisible ? `${0.4 + index * 0.1}s` : '0s' }}
            >
              <div className="bg-white rounded-xl p-8 flex items-center justify-center h-40 hover:shadow-lg transition-shadow border border-gray-200 group">
                <div className="relative w-full h-full">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
