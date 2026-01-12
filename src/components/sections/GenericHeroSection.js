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
    <section className="relative min-h-[90vh] md:min-h-[75vh] lg:min-h-[85vh] xl:min-h-[90vh] flex items-center justify-center overflow-hidden">
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
            <div className="text-center space-y-4 px-4">
              <div className="text-4xl md:text-6xl">{fallbackIcon}</div>
              <div className="text-base md:text-lg font-semibold">{title}</div>
            </div>
          </div>
        </div>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 md:bg-black/40"></div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 w-full px-4 md:px-6 lg:px-8">
        <div className="text-center space-y-6 md:space-y-8 max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto pt-20 md:pt-16 lg:pt-20">
          {/* Main Headline */}
          <div className={`space-y-4 md:space-y-6 lg:space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <Badge variant="default" className="text-xs md:text-sm lg:text-base font-semibold bg-white/10 backdrop-blur-sm border-white/20 text-white">
              {badge}
            </Badge>

            <div className="space-y-4 md:space-y-6 lg:space-y-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl mx-auto text-white drop-shadow-lg leading-tight px-2">
                {title}
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl lg:max-w-3xl mx-auto drop-shadow-md px-4">
                {description}
              </p>
            </div>

            {/* Key Stats Row */}
            {stats && stats.length > 0 && (
              <div className={`flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl lg:max-w-5xl mx-auto mt-8 md:mt-12 lg:mt-16 ${isVisible ? 'animate-fade-in-up animate-delay-100' : 'opacity-0'}`}>
                {stats.map((stat, index) => (
                  <div key={index} className={`text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 ${stats.length === 1 ? 'w-full max-w-xs' : stats.length === 2 ? 'w-[calc(50%-0.5rem)] md:w-[calc(50%-0.75rem)] max-w-xs' : stats.length === 3 ? 'w-[calc(50%-0.5rem)] md:w-[calc(33.333%-1rem)] max-w-xs' : 'w-[calc(50%-0.5rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.125rem)] max-w-xs'}`}>
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-white/90 text-xs md:text-sm lg:text-base uppercase tracking-wide">{stat.label}</div>
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