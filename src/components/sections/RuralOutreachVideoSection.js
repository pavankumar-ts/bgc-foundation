'use client';

import { useState, useEffect, useRef } from 'react';
import Badge from '../ui/Badge';

const RuralOutreachVideoSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setIsVisible(true);
            setHasAnimated(true);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <section
      ref={sectionRef}
      className="section-spacing bg-gradient-to-br from-primary-50 to-white overflow-hidden"
      id="rural-outreach-video"
    >
      <div className="main-container">
        {/* Section Header */}
        <div className="narrow-container text-center mb-8">
          <div
            className={`opacity-0 ${isVisible ? 'animate-smooth-fade-in-up' : ''
              }`}
            style={{ animationDelay: isVisible ? '0.2s' : '0s' }}
          >
            <Badge variant="primary" className="mb-6">
              Our Rural Outreach Programs
            </Badge>
          </div>

          <div
            className={`opacity-0 ${isVisible ? 'animate-smooth-fade-in-up' : ''
              }`}
            style={{ animationDelay: isVisible ? '0.4s' : '0s' }}
          >
            <h2 className="section-h2 text-gray-900 mb-4">
              Free Healthcare in Rural Karnataka
            </h2>
          </div>

          <div
            className={`opacity-0 ${isVisible ? 'animate-smooth-fade-in-up' : ''
              }`}
            style={{ animationDelay: isVisible ? '0.6s' : '0s' }}
          >
            <p className="body-large text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Watch our dedicated team of healthcare professionals bringing comprehensive digestive health programs directly to rural communities across Karnataka.
            </p>
          </div>
        </div>

        {/* Video Container */}
        <div
          className={`max-w-5xl mx-auto opacity-0 cursor-pointer ${isVisible ? 'animate-smooth-scale-in' : ''
            }`}
          style={{ animationDelay: isVisible ? '0.8s' : '0s' }}
        >
          <div className="relative group">
            <div className={`relative aspect-video rounded-2xl overflow-hidden bg-gray-900 shadow-2xl hover:shadow-3xl transition-all duration-700 ease-out group ${isVisible ? 'animate-video-glow' : ''}`}>
              <video
                ref={videoRef}
                controls
                className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700 ease-out"
                // poster="/dummy.webp"
                preload="metadata"
                onPlay={handlePlay}
                onPause={handlePause}
                onEnded={handlePause}
              >
                <source src="/assets/main-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Enhanced overlay with gradient */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/15 via-transparent to-black/5 opacity-60 group-hover:opacity-30 transition-opacity duration-500"></div>

              {/* Play/Pause button overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className={`w-20 h-20 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl transform transition-all duration-500 ease-out ${
                  isPlaying ? 'scale-0 group-hover:scale-100' : 'scale-0 group-hover:scale-100'
                }`}>
                  {isPlaying ? (
                    /* Pause icon */
                    <div className="flex gap-1">
                      <div className="w-2 h-6 bg-primary-600 rounded-sm"></div>
                      <div className="w-2 h-6 bg-primary-600 rounded-sm"></div>
                    </div>
                  ) : (
                    /* Play icon */
                    <div className="w-0 h-0 border-l-[20px] border-l-primary-600 border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent ml-1 drop-shadow-sm"></div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RuralOutreachVideoSection;