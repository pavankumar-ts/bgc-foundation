'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '../ui/Card';
import Badge from '../ui/Badge';

const ImpactSection = () => {
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const totalImpactMetrics = [
    {
      key: 'consultations',
      title: 'Consultations',
      value: 1500,
      subtitle: 'Free medical consultations',
      imageSrc: '/assets/home/consultations.webp'
    },
    {
      key: 'bloodTests',
      title: 'Blood Tests',
      value: 300,
      subtitle: 'Diagnostic screenings',
      imageSrc: '/assets/home/blood-test.webp'
    },
    {
      key: 'endoscopies',
      title: 'Endoscopies',
      value: '100+',
      subtitle: 'Advanced procedures',
      imageSrc: '/assets/home/hero2.webp'
    },
    {
      key: 'fibroscans',
      title: 'Fibroscans',
      value: '100+',
      subtitle: 'Liver assessments',
      imageSrc: '/assets/home/fibroscan.webp'
    },
    {
      key: 'totalValue',
      title: 'Healthcare Value',
      value: 3500000,
      subtitle: 'Total value delivered',
      imageSrc: '/assets/home/value.webp'
    },
    {
      key: 'specialistHours',
      title: 'Specialist Hours',
      value: '100+',
      subtitle: 'Expert consultation time',
      imageSrc: '/assets/home/specialist-hours.webp'
    }
  ];

  const keyOutcomes = [
    { title: 'Early Detection Rate', value: '95%', description: 'Successful diagnoses made' },
    { title: 'Lives Impacted', value: '1.5k', description: 'Patients served across camps' },
    { title: 'Digestive Healthcare Access', value: '100%', description: 'Free healthcare delivery' },
    { title: 'Communities Reached', value: '4+', description: 'Rural areas served' }
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

  const formatCurrency = (value) => {
    return `₹${(value / 100000).toFixed(2)}L`;
  };

  const MetricCard = ({ metric, index, isLast }) => (
    <div
      className={`text-center p-6 relative opacity-0 ${isInView ? 'animate-smooth-fade-in-up' : ''}`}
      style={{ animationDelay: isInView ? `${0.4 + index * 0.1}s` : '0s' }}
    >
      {/* Divider Line */}
      {!isLast && <div className="absolute right-0 top-4 bottom-4 w-px bg-gray-200"></div>}

      {/* Image */}
      <div className="w-[100%] h-[200px] mx-auto mb-3 relative overflow-hidden rounded-lg group">
        <Image
          src={metric.imageSrc}
          alt={metric.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="text-4xl font-bold text-primary-600 mb-2">
        {metric.key === 'totalValue' ? formatCurrency(metric.value) : metric.value?.toLocaleString()}
      </div>
      <h4 className="font-semibold text-gray-900 mb-1 text-sm">{metric.title}</h4>
      <p className="text-xs text-gray-600">{metric.subtitle}</p>
    </div>
  );

  return (
    <section className="section-spacing bg-white overflow-hidden" id="impact" ref={sectionRef}>
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div
            className={`opacity-0 ${isInView ? 'animate-smooth-fade-in-up' : ''}`}
            style={{ animationDelay: isInView ? '0.1s' : '0s' }}
          >
            <Badge variant="default" className="mb-6">
              Measurable Impact
            </Badge>
          </div>
          <div
            className={`opacity-0 ${isInView ? 'animate-smooth-fade-in-up' : ''}`}
            style={{ animationDelay: isInView ? '0.2s' : '0s' }}
          >
            <h2 className="section-h2 gradient-text mb-6">
              Transforming Rural DigestiveHealthcare, One Patient at a Time
            </h2>
          </div>
          <div
            className={`opacity-0 ${isInView ? 'animate-smooth-fade-in-up' : ''}`}
            style={{ animationDelay: isInView ? '0.3s' : '0s' }}
          >
            <p className="body-large text-gray-600 leading-relaxed">
              Our data-driven approach ensures transparency and accountability in every aspect
              of our rural digestive healthcare delivery. See the real impact we&apos;re making.
            </p>
          </div>
        </div>

        {/* Overall Impact Metrics */}
        <div className="mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-0 bg-gray-50 rounded-2xl p-4 border border-gray-200 shadow-lg">
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
        <div className="mb-16">
          <div className="text-center mb-12">
            <div
              className={`opacity-0 ${isInView ? 'animate-smooth-fade-in-up' : ''}`}
              style={{ animationDelay: isInView ? '1.0s' : '0s' }}
            >
              <h3 className="subsection-h3 text-gray-900 mb-4">
                Our Key Outcomes
              </h3>
            </div>
            <div
              className={`opacity-0 ${isInView ? 'animate-smooth-fade-in-up' : ''}`}
              style={{ animationDelay: isInView ? '1.1s' : '0s' }}
            >
              <p className="body-large text-gray-600 max-w-3xl mx-auto">
                Measurable results from our rural digestive healthcare programs demonstrate
                the positive impact we&apos;re making in underserved communities.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyOutcomes.map((outcome, index) => (
              <div
                key={index}
                className={`opacity-0 ${isInView ? 'animate-smooth-fade-in-up' : ''}`}
                style={{ animationDelay: isInView ? `${1.2 + index * 0.1}s` : '0s' }}
              >
                <Card className="medical-card text-center">
                  <CardContent className="p-8">
                    <div className="text-4xl font-bold text-primary-600 mb-3">
                      {outcome.value}
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      {outcome.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {outcome.description}
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

export default ImpactSection;