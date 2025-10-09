'use client';

import { useState, useEffect } from 'react';
import Badge from '../ui/Badge';

const GenericHeroSection = ({ 
  badge, 
  title, 
  subtitle, 
  description, 
  stats = [], 
  imageSrc = "/dummy.webp",
  imageAlt = "BGC Foundation healthcare mission",
  fallbackIcon = "🏥"
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[75vh] lg:min-h-[85vh] xl:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <div className="relative h-full w-full">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          {/* Fallback placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-secondary-200 items-center justify-center text-white hidden">
            <div className="text-center space-y-4">
              <div className="text-6xl">{fallbackIcon}</div>
              <div className="text-lg font-semibold">{title}</div>
            </div>
          </div>
        </div>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 wide-container w-full">
        <div className="text-center space-y-8 max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto pt-16 lg:pt-20">
          {/* Main Headline */}
          <div className={`space-y-6 lg:space-y-8 ${isVisible ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
            <Badge variant="default" className="text-sm lg:text-base font-semibold bg-white/10 backdrop-blur-sm border-white/20 text-white">
              {badge}
            </Badge>
            
            <div className="space-y-6 lg:space-y-8">
              <h1 className="hero-h1 max-w-3xl mx-auto text-white drop-shadow-lg">
                {title}
              </h1>
              
              <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl lg:max-w-3xl mx-auto drop-shadow-md">
                {description}
              </p>
            </div>

            {/* Key Stats Row */}
            {stats && stats.length > 0 && (
              <div className={`grid grid-cols-1 ${stats.length === 1 ? 'md:grid-cols-1' : stats.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'} ${stats.length > 3 ? 'lg:grid-cols-4' : ''} gap-6 lg:gap-6 max-w-4xl lg:max-w-5xl mx-auto mt-12 lg:mt-16 ${isVisible ? 'animate-fade-in-up animate-delay-400' : 'opacity-0'}`}>
                {stats.map((stat, index) => (
                  <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 lg:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-white/90 text-sm lg:text-base uppercase tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenericHeroSection;