import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { SOFT_SPRING } from '../utils/motionVariants';

export interface Hotspot {
  id: string;
  x: number; // percentage (0 - 100)
  y: number; // percentage (0 - 100)
  shortLabel: string;
  title: string;
  role: string;
  affiliation?: string;
  description: string;
  accent?: 'blush' | 'matcha' | 'butter' | 'lavender' | 'sky';
}

export interface SlideItem {
  id: string;
  title: string;
  caption: string;
  imageUrl: string;
  alt: string;
  hotspots: Hotspot[];
}

export const DC_SPACE_SLIDES: SlideItem[] = [
  {
    id: 'team-booth',
    title: 'DC SPACE Capstone Exhibit Booth',
    caption: 'Live project demonstration at St. Dominic College of Asia (SDCA)',
    imageUrl: '/dscpace.jpg',
    alt: 'DC SPACE Capstone exhibit booth with Amira Rachel Marqueses and Misxa Bien Germino presenting the IoT system',
    hotspots: [
      {
        id: 'hs-banner',
        x: 18,
        y: 33,
        shortLabel: 'DC SPACE Banner',
        title: 'DC SPACE: TAP. ATTEND. TRACK.',
        role: 'Web-Based IoT Attendance System',
        affiliation: 'Capstone Innovation',
        description: 'Eliminates paper logs through RFID technology, real-time logging, and adaptive crowd intelligence.',
        accent: 'butter',
      },
      {
        id: 'hs-amira',
        x: 52,
        y: 28,
        shortLabel: 'Marqueses, A.',
        title: 'Marqueses, Amira Rachel',
        role: 'Capstone Researcher & Co-Developer',
        affiliation: 'BSIT, St. Dominic College of Asia',
        description: 'Co-developer demonstrating the live IoT attendance setup and presenting system capabilities at the SDCA booth.',
        accent: 'lavender',
      },
      {
        id: 'hs-misxa',
        x: 69,
        y: 31,
        shortLabel: 'Germino, M.',
        title: 'Germino, Misxa Bien',
        role: 'Capstone Researcher & Co-Developer',
        affiliation: 'BSIT, St. Dominic College of Asia',
        description: 'Co-developer managing live event check-in workflows, real-time tap-in validation, and system demonstrations.',
        accent: 'blush',
      },
      {
        id: 'hs-live-station',
        x: 59,
        y: 72,
        shortLabel: 'IoT Station',
        title: 'Live IoT Attendance Station',
        role: 'Hardware & Web Interface Integration',
        affiliation: 'ESP32 & RFID Integration',
        description: 'Dual-laptop live testing station running registration and student tap-in/tap-out timestamp logging.',
        accent: 'sky',
      },
    ],
  },
  {
    id: 'hardware-demo',
    title: 'IoT Circuit & RFID Scanning Terminal',
    caption: 'Close-up of the microcontroller hardware and real-time event monitoring system',
    imageUrl: '/dcspace1.jpg',
    alt: 'Close-up of ESP32 microcontroller breadboard, RFID USB card reader, brochures, and live attendance laptops',
    hotspots: [
      {
        id: 'hs-web-dashboard',
        x: 47,
        y: 20,
        shortLabel: 'Live Dashboard',
        title: 'Real-Time Event Monitoring UI',
        role: 'Live Web Application',
        affiliation: 'Software Stack',
        description: 'Web dashboard displaying attendee status, student course, section, and live tap-in/tap-out timestamps.',
        accent: 'lavender',
      },
      {
        id: 'hs-esp32',
        x: 48,
        y: 50,
        shortLabel: 'ESP32 Hub',
        title: 'ESP32 Microcontroller Circuit',
        role: 'IoT Processing & Feedback Hub',
        affiliation: 'Hardware Component',
        description: 'Breadboard circuit equipped with jumper wiring and acoustic buzzer for instant audible tap verification.',
        accent: 'sky',
      },
      {
        id: 'hs-rfid-scanner',
        x: 71,
        y: 65,
        shortLabel: 'RFID Terminal',
        title: 'RFID USB Scanner & Smart Cards',
        role: 'Contactless Reader Terminal',
        affiliation: 'Input Hardware',
        description: 'Plug-and-play RFID reader providing contactless attendee verification under 1 second per tap.',
        accent: 'matcha',
      },
      {
        id: 'hs-brochures',
        x: 24,
        y: 67,
        shortLabel: 'Documentation',
        title: 'DC SPACE Documentation',
        role: 'Lead: Gwyneth Ashley Mucio',
        affiliation: 'Technical Documentation & Systems Analysis',
        description: 'Official system leaflets, process flow manuals, and architectural diagrams authored for the capstone exhibit.',
        accent: 'blush',
      },
    ],
  },
];

export const DcSpaceSlideshow: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [activeHotspotId, setActiveHotspotId] = useState<string | null>(null);

  const currentSlide = DC_SPACE_SLIDES[currentSlideIndex];
  const isAnyActive = activeHotspotId !== null;

  // Auto clear active hotspot on slide transition
  useEffect(() => {
    setActiveHotspotId(null);
  }, [currentSlideIndex]);

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % DC_SPACE_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + DC_SPACE_SLIDES.length) % DC_SPACE_SLIDES.length);
  };

  return (
    <div className="mt-6 rounded-3xl border border-[#E5DCD0] bg-[#FAF7F2] p-4 sm:p-5 shadow-xs">
      {/* Header with Title and Slide Switcher Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FCE1E4] text-[#8A2E3B]">
            <Sparkles className="h-4 w-4" />
          </span>
          <div>
            <h4 className="font-heading text-sm sm:text-base font-bold text-[#26201B]">
              {currentSlide.title}
            </h4>
            <p className="text-xs text-[#7A6F66]">
              {currentSlide.caption}
            </p>
          </div>
        </div>

        {/* Carousel Navigation Buttons & Dots */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-1" role="tablist" aria-label="Slideshow tabs">
            {DC_SPACE_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={idx === currentSlideIndex}
                aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
                onClick={() => setCurrentSlideIndex(idx)}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  idx === currentSlideIndex
                    ? 'w-7 bg-[#8A2E3B]'
                    : 'w-2.5 bg-[#DCD2C6] hover:bg-[#8A2E3B]/50'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous slide"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E5DCD0] bg-white text-[#3D352E] hover:bg-[#FCE1E4] hover:text-[#8A2E3B] transition-colors cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next slide"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E5DCD0] bg-white text-[#3D352E] hover:bg-[#FCE1E4] hover:text-[#8A2E3B] transition-colors cursor-pointer"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Interactive Image Frame */}
      <div
        className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#EBE4DA] border border-[#E5DCD0] select-none"
        onClick={() => setActiveHotspotId(null)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-full w-full"
          >
            <img
              src={currentSlide.imageUrl}
              alt={currentSlide.alt}
              className="h-full w-full object-cover"
              loading="lazy"
            />

            {/* Subtle Gradient Vignette for better hotspot visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10 pointer-events-none" />

            {/* Hotspots */}
            {currentSlide.hotspots.map((hs) => {
              const isActive = activeHotspotId === hs.id;

              // Smart boundary-aware positioning to prevent clipping
              const isLowerHalf = hs.y > 48; // if in lower half, position ABOVE the pin
              const isRightSide = hs.x > 62;
              const isLeftSide = hs.x < 38;

              return (
                <div
                  key={hs.id}
                  style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                    isActive
                      ? 'z-40 opacity-100 scale-105'
                      : isAnyActive
                        ? 'z-10 opacity-20 scale-95 pointer-events-none'
                        : 'z-20 opacity-100 scale-100'
                  }`}
                  onMouseEnter={() => setActiveHotspotId(hs.id)}
                  onMouseLeave={() => setActiveHotspotId(null)}
                >
                  {/* Subtle Pulse Ripple when idle */}
                  {!isAnyActive && (
                    <span
                      className="absolute -inset-1.5 rounded-full border-2 border-[#8A2E3B] opacity-40 animate-ping pointer-events-none"
                      aria-hidden="true"
                    />
                  )}

                  {/* Elegant Theme-Aligned Pastel Pill Pin */}
                  <button
                    type="button"
                    aria-expanded={isActive}
                    aria-label={`View information for ${hs.title}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveHotspotId(isActive ? null : hs.id);
                    }}
                    className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-full border shadow-md backdrop-blur-md transition-all duration-200 cursor-pointer text-xs font-bold whitespace-nowrap ${
                      isActive
                        ? 'bg-[#8A2E3B] text-white border-[#8A2E3B] ring-4 ring-[#FCE1E4]'
                        : 'bg-white/95 text-[#3D352E] border-[#E5DCD0] hover:bg-[#FCE1E4]/90 hover:text-[#8A2E3B] hover:border-[#8A2E3B]/40'
                    }`}
                  >
                    <span className="text-sm leading-none" aria-hidden="true">
                      🌸
                    </span>
                    <span>{hs.shortLabel}</span>
                  </button>

                  {/* Tooltip Card (Smartly Positioned Above or Below) */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: isLowerHalf ? -8 : 8,
                          scale: 0.95,
                        }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{
                          opacity: 0,
                          y: isLowerHalf ? -8 : 8,
                          scale: 0.95,
                        }}
                        transition={SOFT_SPRING}
                        style={{
                          left: isRightSide ? 'auto' : isLeftSide ? '0' : '50%',
                          right: isRightSide ? '0' : 'auto',
                          transform:
                            isRightSide || isLeftSide
                              ? 'none'
                              : 'translateX(-50%)',
                        }}
                        className={`absolute w-64 sm:w-72 rounded-2xl bg-white p-4 text-left shadow-[0_12px_32px_-4px_rgba(61,53,46,0.18)] border border-[#E5DCD0] z-50 pointer-events-auto ${
                          isLowerHalf
                            ? 'bottom-full mb-3 origin-bottom'
                            : 'top-full mt-3 origin-top'
                        }`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {/* Person / Component Title */}
                        <h5 className="font-heading text-sm font-bold text-[#26201B] leading-snug">
                          {hs.title}
                        </h5>

                        {/* Role & Affiliation */}
                        <p className="text-xs font-semibold text-[#8A2E3B] mt-0.5">
                          {hs.role}
                          {hs.affiliation ? ` · ${hs.affiliation}` : ''}
                        </p>

                        {/* Description */}
                        <p className="text-xs text-[#5C5046] mt-1.5 leading-relaxed">
                          {hs.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Role attribution pill bar */}
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#E5DCD0]/70 text-[11px] sm:text-xs text-[#7A6F66]">
        <div className="flex items-center gap-1.5">
          <span className="font-semibold text-[#26201B]">DC SPACE Capstone Team:</span>
          <span>Marqueses, Amira Rachel · Germino, Misxa Bien</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="font-semibold text-[#8A2E3B]">Documentation Lead:</span>
          <span>Gwyneth Ashley Mucio</span>
        </div>
      </div>
    </div>
  );
};
