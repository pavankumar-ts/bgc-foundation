'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '../ui/Card';
import Badge from '../ui/Badge';
import { STATISTICS, IMAGES, ORGANIZATION } from '@/config/siteConfig';

const ImpactSection = () => {
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const totalImpactMetrics = [
    {
      key: 'consultations',
      title: 'Consultations',
      value: STATISTICS.patientsConsulted.value,
      subtitle: 'Free medical consultations',
      imageSrc: '/assets/programs/consultations-img.webp'
    },
    {
      key: 'bloodTests',
      title: 'Blood Tests',
      value: STATISTICS.services.bloodTests.value,
      subtitle: 'Diagnostic screenings',
      imageSrc: IMAGES.features.bloodTest
    },
    {
      key: 'endoscopies',
      title: 'Endoscopies',
      value: STATISTICS.services.endoscopies.display,
      subtitle: 'Advanced procedures',
      imageSrc: IMAGES.hero.hero2
    },
    {
      key: 'fibroscans',
      title: 'Fibroscans',
      value: STATISTICS.services.fibroscans.display,
      subtitle: 'Liver assessments',
      imageSrc: IMAGES.features.fibroscan
    },
    {
      key: 'villages',
      title: 'Villages Reached',
      value: STATISTICS.villagesServed.display,
      subtitle: 'Rural communities served',
      imageSrc: IMAGES.features.value
    },
    {
      key: 'specialistHours',
      title: 'Specialist Hours',
      value: STATISTICS.services.specialistHours.display,
      subtitle: 'Expert consultation time',
      imageSrc: IMAGES.features.specialistHours
    }
  ];

  const keyOutcomes = [
    {
      title: STATISTICS.metrics.earlyDetectionRate.label,
      value: STATISTICS.metrics.earlyDetectionRate.display,
      description: 'Successful diagnoses made'
    },
    {
      title: STATISTICS.metrics.livesImpacted.label,
      value: STATISTICS.metrics.livesImpacted.display,
      description: 'Patients served across camps'
    },
    {
      title: 'Digestive Healthcare Access',
      value: '100%',
      description: 'Free healthcare delivery'
    },
    {
      title: STATISTICS.villagesServed.label,
      value: STATISTICS.villagesServed.display,
      description: 'Rural areas served'
    }
  ];

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsInView(true);
          setHasAnimated(true);
        }
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

  const MetricCard = ({ metric, index, isLast }) => (
    <div
      className={`text-center p-4 md:p-6 relative opacity-0 ${isInView ? 'animate-smooth-fade-in-up' : ''}`}
      style={{ animationDelay: isInView ? `${0.4 + index * 0.1}s` : '0s' }}
    >
      {/* Divider Line - Hidden on mobile, shown on larger screens between items */}
      {!isLast && <div className="hidden lg:block absolute right-0 top-4 bottom-4 w-px bg-gray-200"></div>}

      {/* Image */}
      <div className="w-full h-[150px] sm:h-[180px] md:h-[200px] mx-auto mb-2 md:mb-3 relative overflow-hidden rounded-lg group">
        <Image
          src={metric.imageSrc}
          alt={metric.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-600 mb-1 md:mb-2">
        {typeof metric.value === 'number' ? metric.value.toLocaleString() : metric.value}
      </div>
      <h4 className="font-semibold text-gray-900 mb-1 text-xs sm:text-sm">{metric.title}</h4>
      <p className="text-xs text-gray-600">{metric.subtitle}</p>
    </div>
  );

  return (
    <section className="section-spacing bg-white overflow-hidden" id="impact" ref={sectionRef}>
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 md:mb-12 px-4">
          <div
            className={`opacity-0 ${isInView ? 'animate-smooth-fade-in-up' : ''}`}
            style={{ animationDelay: isInView ? '0.1s' : '0s' }}
          >
            <Badge variant="default" className="mb-4 md:mb-6">
              Measurable Impact
            </Badge>
          </div>
          <div
            className={`opacity-0 ${isInView ? 'animate-smooth-fade-in-up' : ''}`}
            style={{ animationDelay: isInView ? '0.2s' : '0s' }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4 md:mb-6">
              {ORGANIZATION.tagline}
            </h2>
          </div>
          <div
            className={`opacity-0 ${isInView ? 'animate-smooth-fade-in-up' : ''}`}
            style={{ animationDelay: isInView ? '0.3s' : '0s' }}
          >
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Our data-driven approach ensures transparency and accountability in every aspect
              of our rural digestive healthcare delivery. See the real impact we&apos;re making.
            </p>
          </div>
        </div>

        {/* Overall Impact Metrics */}
        <div className="mb-12 md:mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-0 bg-gray-50 rounded-xl md:rounded-2xl p-2 md:p-4 border border-gray-200 shadow-lg">
            {totalImpactMetrics.map((metric, index) => (
              <MetricCard
                key={metric.key}
                metric={metric}
                index={index}
                isLast={index === totalImpactMetrics.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Key Outcomes */}
        {/* <div className="mb-12 md:mb-16">
          <div className="text-center mb-8 md:mb-12 px-4">
            <div
              className={`opacity-0 ${isInView ? 'animate-smooth-fade-in-up' : ''}`}
              style={{ animationDelay: isInView ? '1.0s' : '0s' }}
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                Our Key Outcomes
              </h3>
            </div>
            <div
              className={`opacity-0 ${isInView ? 'animate-smooth-fade-in-up' : ''}`}
              style={{ animationDelay: isInView ? '1.1s' : '0s' }}
            >
              <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                Measurable results from our rural digestive healthcare programs demonstrate
                the positive impact we&apos;re making in underserved communities.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-4">
            {keyOutcomes.map((outcome, index) => (
              <div
                key={index}
                className={`opacity-0 ${isInView ? 'animate-smooth-fade-in-up' : ''}`}
                style={{ animationDelay: isInView ? `${1.2 + index * 0.1}s` : '0s' }}
              >
                <Card className="medical-card text-center h-full">
                  <CardContent className="p-6 md:p-8">
                    <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2 md:mb-3">
                      {outcome.value}
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2 text-sm md:text-base">
                      {outcome.title}
                    </h4>
                    <p className="text-xs md:text-sm text-gray-600">
                      {outcome.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ImpactSection;