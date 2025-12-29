'use client';

import { useState, useEffect, useRef } from 'react';
import Badge from '../ui/Badge';
import { FaCalendarCheck, FaAmbulance, FaHospital } from 'react-icons/fa';

const TimelineSection = () => {
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const timelineEvents = [
    {
      date: '29th May 2024',
      title: 'World Digestive Health Day',
      description: 'Bangalore Gastro Center inaugurated its first Rural Digestive Health Camp, launching the initiative to bring digestive healthcare programs to the underserved rural population of Karnataka.',
      icon: FaHospital,
      highlight: true
    },
    {
      date: '2024 onwards',
      title: 'Expansion of Rural Outreach Camps',
      description: 'Conducted multiple camps across rural Karnataka:',
      locations: [
        'Harohalli – Second rural digestive health camp',
        'Kanakapura Road – Third camp, strengthening community reach',
        'Sarjapur – Fourth camp, extending programs to rural belts'
      ],
      icon: FaCalendarCheck
    },
    {
      date: '2025',
      title: "Karnataka's First Endoscopy Unit on Wheels",
      description: 'Historic Mobile Healthcare Milestone in Ramnagara – Karnataka\'s first-ever Gastroenterology on Wheels vehicle was launched and inaugurated by the Honourable Member of Parliament, Shri Dr. C. N. Manjunath, marking a transformative step in taking advanced endoscopic programs directly to rural communities.',
      icon: FaAmbulance,
      highlight: true
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

  return (
    <section className="section-spacing bg-gradient-to-b from-white to-gray-50 overflow-hidden" ref={sectionRef}>
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div
            className={`opacity-0 ${isInView ? 'animate-smooth-fade-in-up' : ''}`}
            style={{ animationDelay: isInView ? '0.1s' : '0s' }}
          >
            <Badge variant="default" className="mb-6">
              Our Journey
            </Badge>
          </div>
          <div
            className={`opacity-0 ${isInView ? 'animate-smooth-fade-in-up' : ''}`}
            style={{ animationDelay: isInView ? '0.2s' : '0s' }}
          >
            <h2 className="section-h2 gradient-text mb-6">
              Rural Digestive Health Outreach Timeline
            </h2>
          </div>
          <div
            className={`opacity-0 ${isInView ? 'animate-smooth-fade-in-up' : ''}`}
            style={{ animationDelay: isInView ? '0.3s' : '0s' }}
          >
            <p className="body-large text-gray-600 leading-relaxed">
              From our first rural camp to launching Karnataka&apos;s first mobile endoscopy unit,
              we&apos;re continuously expanding access to specialized digestive healthcare in rural communities.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 via-primary-500 to-primary-600 transform md:-translate-x-1/2"></div>

          {/* Timeline Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative opacity-0 ${isInView ? 'animate-smooth-fade-in-up' : ''}`}
                  style={{ animationDelay: isInView ? `${0.4 + index * 0.2}s` : '0s' }}
                >
                  <div className={`flex flex-col md:flex-row items-center gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`flex-1 ${isLeft ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} ml-20 md:ml-0`}>
                      <div className={`inline-block ${event.highlight ? 'bg-primary-50 border-2 border-primary-200' : 'bg-white border border-gray-200'} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                        <div className={`text-sm font-semibold ${event.highlight ? 'text-primary-600' : 'text-gray-500'} mb-2`}>
                          {event.date}
                        </div>
                        <h3 className={`text-xl font-bold ${event.highlight ? 'text-primary-700' : 'text-gray-900'} mb-3`}>
                          {event.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {event.description}
                        </p>
                        {event.locations && (
                          <ul className={`mt-4 space-y-2 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                            {event.locations.map((location, idx) => (
                              <li key={idx} className="text-sm text-gray-700">
                                <span className="font-semibold">•</span> {location}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                      <div className={`w-16 h-16 rounded-full ${event.highlight ? 'bg-secondary-600 ring-4 ring-secondary-100' : 'bg-secondary-600 ring-4 ring-secondary-50'} shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110`}>
                        <Icon className="text-white text-2xl" />
                      </div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block flex-1"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
