'use client';

import { useState, useEffect } from 'react';
import Badge from '../ui/Badge';
import Image from 'next/image';

const RuralHealthcareSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const healthcareChallenges = [
    {
      title: 'High Mortality Rates',
      description: 'High rates of maternal & infant mortality',
      icon: '/assets/icons/highestmortality.svg'
    },
    {
      title: 'Malnutrition Crisis',
      description: 'Malnutrition and delayed diagnosis',
      icon: '/assets/icons/malnutrition.svg'
    },
    {
      title: 'Low Life Expectancy',
      description: 'Low life expectancy and vaccination rates',
      icon: '/assets/icons/lowlifeexpectancy.svg'
    },
    {
      title: 'Economic Burden',
      description: 'Strong economic burden on families',
      icon: '/assets/icons/economicburden.svg'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="section-spacing bg-gray-50" id="rural-healthcare-crisis">
      <div className="main-container">
        {/* Healthcare Crisis Overview */}
        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-8 md:p-12 mb-20 border border-primary-200">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge variant="primary" className="mb-4">
              The Healthcare Challenge
            </Badge>
            <h3 className="subsection-h3 text-secondary-800 mb-6">Rural Healthcare Crisis in India</h3>
            <p className="body-large text-secondary-700 leading-relaxed">
              Rural communities in India suffer from a significant lack of access to healthcare, creating a critical need for innovative solutions like our mobile healthcare initiative.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {healthcareChallenges.map((challenge, index) => (
              <div
                key={index}
                className={`flex items-start space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-primary-200/50 hover:bg-white hover:shadow-md hover:border-primary-300 transition-all duration-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <Image
                    src={challenge.icon}
                    alt={challenge.title}
                    width={24}
                    height={24}
                    className="opacity-70"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-secondary-900 text-lg mb-2">{challenge.title}</h4>
                  <p className="text-secondary-700 text-sm leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RuralHealthcareSection;