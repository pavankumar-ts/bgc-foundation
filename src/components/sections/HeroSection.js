'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Badge from '../ui/Badge';
import { STATISTICS, ORGANIZATION } from '@/config/siteConfig';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden pt-10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative section-container py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center mb-8 sm:mb-12 md:mb-16">

          {/* Left Column - Text Content */}
          <div className={`space-y-4 sm:space-y-6 md:space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <Badge variant="default" className="text-xs sm:text-sm font-semibold bg-primary-100 text-primary-700 border-primary-200">
              {ORGANIZATION.subtitle}
            </Badge>

            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                Bringing Digestive Healthcare to{' '}
                <span className="text-primary-600">Rural Communities</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                If patients can&apos;t come to us, we go to them. World-class gastroenterology care delivered directly to rural Karnataka villages, <b>completely free</b>.
              </p>

              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                Backed by{' '}
                <a
                  href="https://www.bangaloregastrocentre.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 font-semibold underline decoration-2 underline-offset-2 transition-colors"
                >
                  Bangalore Gastro Centre Hospitals
                </a>
                , Pioneers in Digestive Health
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-gray-200">
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-600">{STATISTICS.patientsConsulted.display}</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600">{STATISTICS.patientsConsulted.label}</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-600">{STATISTICS.villagesServed.display}</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600">{STATISTICS.villagesServed.label}</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-600">{STATISTICS.healthCamps.display}</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600">{STATISTICS.healthCamps.label}</div>
              </div>
            </div>
          </div>

          {/* Right Column - Video and Partners */}
          <div className={`space-y-6 sm:space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            {/* Video */}
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl bg-gray-900 border-2 sm:border-4 border-white">
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

            {/* Partners Section */}
            <div className="text-left">
              <p className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3 sm:mb-4">
                Trusted Partners in Rural Healthcare
              </p>

              {/* Partners Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {partners.map((partner, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-2 sm:p-3 flex items-center justify-center hover:shadow-lg transition-all duration-300 border border-gray-200 group hover:scale-105"
                  >
                    <div className="relative w-full h-12 sm:h-14 md:h-16">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
