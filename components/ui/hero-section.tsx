'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface CandleHeroProps {
  title: React.ReactNode;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
  candleImage1?: string;
  candleImage2?: string;
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const CandleHero = ({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  className,
}: CandleHeroProps) => {
  return (
    <section
      className={cn(
        'relative w-full overflow-hidden min-h-[90vh] md:min-h-screen flex items-center justify-center',
        className
      )}
      style={{
        backgroundImage: 'url(/images/banner-1.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Multi-layer Overlay for Premium Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
      
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 rounded-full border-2 border-primary/30"
        animate={{ 
          y: [0, -30, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-32 right-20 w-32 h-32 rounded-full bg-primary/10 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Content Container */}
      <motion.div
        className="relative z-10 container mx-auto px-4 sm:px-6 py-12 md:py-0 w-full"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-2xl mx-auto md:mx-0 text-center md:text-left flex flex-col items-center md:items-start">
          
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-lg border border-white/20 text-white mb-6 md:mb-8"
            variants={itemVariants}
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">100% Natural Soy • Hand-Poured</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-cormorant text-white leading-tight tracking-tight drop-shadow-lg"
            variants={itemVariants}
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mt-6 md:mt-8 text-lg sm:text-xl text-white/90 max-w-xl drop-shadow-md"
            variants={itemVariants}
          >
            {description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="mt-8 md:mt-12 flex gap-4 flex-col sm:flex-row items-center md:items-start w-full sm:w-auto"
            variants={itemVariants}
          >
            <a href={primaryButtonLink} className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 group">
                {primaryButtonText}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
            <a href={secondaryButtonLink} className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-3.5 bg-white/20 text-white font-semibold rounded-xl border border-white/40 hover:bg-white/30 transition-all duration-300 backdrop-blur-sm hover:scale-105">
                {secondaryButtonText}
              </button>
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="mt-12 md:mt-16 flex flex-wrap gap-6 text-sm text-white/80 justify-center md:justify-start"
            variants={itemVariants}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span>Premium Essential Oils</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <span>100% Eco-Friendly</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary/60"></div>
              <span>Small-Batch Crafted</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};
