'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Badge from '../ui/Badge';

const MissionVisionSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="section-spacing bg-white" >
      <div className="section-container" id='vision-mission'>
        <div className="text-center mb-12">
          <div className={`opacity-0 ${isVisible ? 'animate-smooth-fade-in-up' : ''}`} style={{ animationDelay: '0.1s' }}>
            <Badge variant="primary" className="mb-4">
              Our Mission & Vision
            </Badge>
          </div>
          <div className={`opacity-0 ${isVisible ? 'animate-smooth-fade-in-up' : ''}`} style={{ animationDelay: '0.2s' }}>
            <h2 className="section-h2 text-gray-900 mb-6">
              Transforming Rural Digestive Health
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Mission */}
          <div className={`opacity-0 ${isVisible ? 'animate-smooth-fade-in-up' : ''}`} style={{ animationDelay: '0.3s' }}>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl overflow-hidden h-full border-2 border-primary-200 hover:border-primary-300 transition-all shadow-sm hover:shadow-md">
              <div className="relative w-full h-64">
                <Image
                  src="/assets/home/consultations.webp"
                  alt="BGC Foundation Mission - Rural Healthcare Outreach"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-primary-700 mb-4">Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To transform rural digestive health through on-ground outreach, early screening, and access to super-specialist care.
                </p>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className={`opacity-0 ${isVisible ? 'animate-smooth-fade-in-up' : ''}`} style={{ animationDelay: '0.4s' }}>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl overflow-hidden h-full border-2 border-primary-200 hover:border-primary-300 transition-all shadow-sm hover:shadow-md">
              <div className="relative w-full h-64">
                <Image
                  src="/assets/home/hero3.webp"
                  alt="BGC Foundation Vision - Healthier Karnataka"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-primary-700 mb-4">Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A healthier Karnataka where preventable digestive diseases are identified early—no matter where people live.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
