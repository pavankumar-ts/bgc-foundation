'use client';

import { useState, useEffect } from 'react';
import Button from '../ui/Button';
import Link from 'next/link';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { number: '5+', label: 'Rural Health Camps' },
    { number: '1500+', label: 'Patients Consulted' },
    { number: '100+', label: 'Healthcare Professionals' },
    { number: '₹35L+', label: 'Healthcare Value Delivered' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('stats-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats-section" className="py-20 bg-gray-50">
      <div className="wide-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-8 text-center shadow-sm transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-3">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium text-base leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Content Section */}
          <div className={`lg:pl-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ transitionDelay: '600ms' }}>
            <h2 className="text-5xl font-semibold text-gray-900 mb-6">
              Leading Digestive Healthcare Programs in Rural Karnataka
            </h2>
            <p className="body-large text-gray-600 mb-6">
              Through our mobile endoscopy unit and super specialist outreach programs, BGC Foundation brings world-class digestive health care directly to rural communities across Karnataka, bridging the Digestive Healthcare gap for underserved populations.
            </p>
            <Link href="/about">
              <Button size="sm" className="py-6 px-6">
                LEARN MORE
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;