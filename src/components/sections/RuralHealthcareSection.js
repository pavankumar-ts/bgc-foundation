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
    <section className="mb-8 md:mb-12 lg:mb-16" id="rural-healthcare-crisis">
      <div className="main-container">
        {/* Healthcare Crisis Overview */}
        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6 md:p-8 lg:p-12 border border-primary-200">
          <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
            <Badge variant="primary" className="mb-3 md:mb-4 text-xs md:text-sm">
              The Healthcare Challenge
            </Badge>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary-800 mb-4 md:mb-6 px-4">Rural Healthcare Crisis in India</h3>
            <p className="text-base md:text-lg lg:text-xl text-secondary-700 leading-relaxed px-4">
              Rural communities in India suffer from a significant lack of access to healthcare, creating a critical need for innovative solutions like our mobile healthcare initiative.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
            {healthcareChallenges.map((challenge, index) => (
              <div
                key={index}
                className={`flex items-start space-x-3 md:space-x-4 p-4 md:p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-primary-200/50 hover:bg-white hover:shadow-md hover:border-primary-300 transition-all duration-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-primary-100 rounded-xl flex items-center justify-center">
                  <Image
                    src={challenge.icon}
                    alt={challenge.title}
                    width={100}
                    height={100}
                    className="p-2"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-secondary-900 text-base md:text-lg mb-1 md:mb-2">{challenge.title}</h4>
                  <p className="text-secondary-700 text-xs md:text-sm leading-relaxed">
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