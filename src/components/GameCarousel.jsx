'use client';

import { useState, useEffect } from 'react';

export default function GameCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timerKey, setTimerKey] = useState(0);
  
  const slides = [
    {
      id: 'cash-clock',
      stamp: 'Featured Product',
      title: 'CASH CLOCK',
      subtitle: 'Our First E-Instant Release',
      description1: 'Cash Clock is a time-based e-instant game built around anticipation and precision.',
      description2: 'The clock is the core mechanic — not a theme — creating meaningful near-miss tension, strong replay curiosity, and immediate clarity for players.',
      partner: 'Distribution partner: EQL Games',
      link: '/games/cash-clock',
      linkText: 'View Cash Clock',
      cardStamp: 'Time-based mechanic',
      cardContent: '12:34',
      cardDescription: 'Time as the core mechanic. Anticipation built in. Immediate player clarity.',
    },
    {
      id: 'chance-lottery',
      stamp: 'Looking Ahead',
      title: 'CHANCE LOTTERY',
      subtitle: null,
      description1: 'E-instants generate momentum. Chance Lottery defines the category.',
      description2: 'Our flagship vision rethinks how players relate to probability over time — designed for multi-state adoption and built to sit alongside legacy lottery staples, not replace them.',
      partner: null,
      link: '/games/chance-lottery',
      linkText: 'Learn More →',
      cardStamp: 'Flagship vision',
      cardContent: null,
      cardDescription: 'Multi-state adoption. Built for scale. Designed to endure.',
    },
  ];

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [timerKey, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setTimerKey(prev => prev + 1); // Reset the timer
  };

  return (
    <div className="relative">
      {/* Slides container */}
      <div className="relative">
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`transition-opacity duration-700 ease-in-out ${currentSlide === index ? 'relative opacity-100' : 'absolute inset-0 opacity-0 pointer-events-none'}`}
            style={{ 
              zIndex: currentSlide === index ? 1 : 0
            }}
          >
            <div className="w-full">
              <div className="lg:grid lg:gap-12 lg:grid-cols-12 lg:items-start">
                {/* Text content with floating image on mobile/tablet */}
                <div className="lg:col-span-7">
                  <div className="text-xs sm:text-sm font-medium" style={{ color: "rgba(0,255,140,0.75)", fontFamily: "var(--font-fira-code)", textTransform: "uppercase" }}>
                    {slide.stamp}
                  </div>
                  <h2 className="mt-2 sm:mt-3 md:mt-4 text-3xl sm:text-3xl lg:text-4xl font-bold tracking-tight" style={{ fontFamily: "var(--font-inter)", textTransform: "uppercase" }}>
                    <a href={slide.link} className="hover:opacity-80 transition-opacity">
                      {slide.title}
                    </a>
                  </h2>

                  {/* Image floated on mobile/tablet — anchored upper-right, after title */}
                  <div className="float-right w-[260px] sm:w-[380px] md:w-[480px] h-[240px] sm:h-[340px] md:h-[420px] lg:hidden ml-3" style={{ marginRight: '-104px' }}>
                    <img
                      src={slide.id === 'cash-clock' ? '/cash-clock.webp' : '/chance.webp'}
                      alt={`${slide.title} key art`}
                      className="w-full h-full object-contain transition-all duration-300"
                      style={{ 
                        imageRendering: "auto",
                        shapeOutside: `url(${slide.id === 'cash-clock' ? '/cash-clock.webp' : '/chance.webp'})`,
                        shapeMargin: '0.25rem'
                      }}
                    />
                  </div>

                  {slide.subtitle && (
                    <p className="mt-2 text-base sm:text-lg" style={{ color: "rgba(0,255,140,0.85)" }}>
                      {slide.subtitle}
                    </p>
                  )}
                  <p className="mt-3 sm:mt-4 md:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-[var(--muted)]">
                    {slide.description1}
                  </p>
                  <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-[var(--muted)]">
                    {slide.description2}
                  </p>
                  {slide.partner && (
                    <p className="mt-3 sm:mt-4 text-sm text-[var(--muted-2)]">
                      {slide.partner}
                    </p>
                  )}
                  
                  {/* Clear float before CTA so buttons render full-width */}
                  <div className="clear-both lg:hidden"></div>

                  <div className="mt-5 sm:mt-6 md:mt-8">
                    <a
                      href={slide.link}
                      className={`inline-flex h-11 sm:h-12 items-center justify-center px-6 sm:px-8 text-sm font-semibold whitespace-nowrap ${
                        slide.id === 'cash-clock' ? 'btn-cta-invert' : 'border btn-hover-green'
                      }`}
                      style={
                        slide.id === 'cash-clock'
                          ? { background: "var(--cta-bg)", color: "var(--cta-fg)" }
                          : {
                              borderColor: "rgba(0,255,140,0.45)",
                              background: "linear-gradient(180deg, rgba(0,0,0,0.40), rgba(0,0,0,0.18))",
                              color: "rgba(220,255,235,0.95)",
                              boxShadow: "0 0 0 1px rgba(0,255,140,0.14) inset",
                            }
                      }
                    >
                      {slide.linkText}
                    </a>
                  </div>
                  
                  {/* Clear float */}
                  <div className="clear-both lg:hidden"></div>
                </div>

                {/* Image on desktop only */}
                <div className="hidden lg:flex lg:col-span-5 lg:items-center lg:justify-center">
                  <div className="w-full max-w-[400px] aspect-square flex items-center justify-center">
                    <img
                      src={slide.id === 'cash-clock' ? '/cash-clock.webp' : '/chance.webp'}
                      alt={`${slide.title} key art`}
                      className="w-full h-full object-contain"
                      style={{ imageRendering: "auto" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Hexagon indicators */}
      <div className="relative mt-12 flex justify-center gap-4" style={{ zIndex: 10 }}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="group relative transition-all duration-300"
            aria-label={`Go to slide ${index + 1}`}
            style={{ width: '16px', height: '18px' }}
          >
            <svg 
              viewBox="0 0 16 18" 
              className="w-full h-full transition-all duration-300"
              style={{
                filter: currentSlide === index ? 'drop-shadow(0 0 6px rgba(0,255,140,0.6))' : 'none',
                transform: currentSlide === index ? 'scale(1.3)' : 'scale(1)',
              }}
            >
              <polygon
                points="8,0 16,4.5 16,13.5 8,18 0,13.5 0,4.5"
                className="transition-all duration-300"
                fill={currentSlide === index ? '#00ff8a' : 'rgba(255,255,255,0.25)'}
                stroke={currentSlide === index ? '#00ff8a' : 'rgba(255,255,255,0.15)'}
                strokeWidth="0.5"
              />
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
}
