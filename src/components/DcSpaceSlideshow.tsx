import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export interface Hotspot {
  id: string;
  x: number; // percentage (0 - 100)
  y: number; // percentage (0 - 100)
  shortLabel: string;
  title: string;
  role: string;
  affiliation?: string;
  description: string;
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
      },
    ],
  },
];

export const DcSpaceSlideshow: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [activeHotspotId, setActiveHotspotId] = useState<string | null>(null);

  const currentSlide = DC_SPACE_SLIDES[currentSlideIndex];
  const isAnyActive = activeHotspotId !== null;
  const activeHotspot = currentSlide.hotspots.find((h) => h.id === activeHotspotId);

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
    <div className="space-y-3">
      {/* Header with Title and Slide Switcher Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3">
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

      {/* Interactive Image Frame (Clean, Unobscured) */}
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

            {/* Subtle Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none" />

            {/* Hotspots: Clean Tags */}
            {currentSlide.hotspots.map((hs) => {
              const isActive = activeHotspotId === hs.id;

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
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dedicated Unobscured Info Drawer (Directly Below the Photo) */}
      <div className="mt-3.5 min-h-[92px] rounded-2xl bg-white p-4 border border-[#E5DCD0] shadow-xs flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {activeHotspot ? (
            <motion.div
              key={activeHotspot.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="space-y-1 text-left"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm leading-none" aria-hidden="true">
                    🌸
                  </span>
                  <h5 className="font-heading text-sm sm:text-base font-bold text-[#26201B]">
                    {activeHotspot.title}
                  </h5>
                </div>
                <span className="rounded-full bg-[#FCE1E4] px-2.5 py-0.5 text-[11px] font-bold text-[#8A2E3B]">
                  {activeHotspot.role}
                </span>
              </div>

              {activeHotspot.affiliation && (
                <p className="text-xs font-semibold text-[#8A2E3B]">
                  {activeHotspot.affiliation}
                </p>
              )}

              <p className="text-xs sm:text-sm text-[#5C5046] leading-relaxed pt-0.5">
                {activeHotspot.description}
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="idle-state"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#7A6F66]"
            >
              <div className="space-y-1 text-left">
                <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#3D352E]">
                  <span className="font-bold text-[#26201B]">
                    👥 Capstone Team:
                  </span>
                  <span>Marqueses, Amira Rachel · Germino, Misxa Bien</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs">
                  <span className="font-bold text-[#8A2E3B]">
                    Documentation Lead:
                  </span>
                  <span>Gwyneth Ashley Mucio</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#8A2E3B] bg-[#FCE1E4]/60 px-3 py-1.5 rounded-full shrink-0">
                <span>✨ Hover or tap any tag above to view details</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
