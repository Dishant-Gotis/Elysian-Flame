'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ImageSwiper } from '@/components/ui/image-swiper';

interface CandleHeroProps {
  title: React.ReactNode;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
  candleImage1: string;
  candleImage2: string;
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const candlesVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.3,
    },
  },
};

const candleItemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export const CandleHero = ({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  candleImage1,
  candleImage2,
  className,
}: CandleHeroProps) => {
  const gridBackgroundStyle = {
    backgroundImage:
      'linear-gradient(rgba(108, 166, 81, 0.1) 1px, transparent 1px), linear-gradient(to right, rgba(108, 166, 81, 0.1) 1px, transparent 1px)',
    backgroundSize: '3rem 3rem',
  };

  return (
    <section
      className={cn(
        'relative w-full overflow-hidden bg-gradient-to-b from-cream-50 via-white to-cream-50',
        className
      )}
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-40"
        style={gridBackgroundStyle}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/80" />

      <motion.div
        className="relative container mx-auto flex min-h-[80vh] items-center justify-between px-6 py-20 lg:flex-row flex-col gap-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left: Text Content */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:w-1/2 z-10 px-4 sm:px-0">
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/10 text-primary mb-4 sm:mb-6 backdrop-blur-sm border border-primary/20"
            variants={itemVariants}
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm font-medium">100% Natural Soy</span>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-charcoal font-cormorant leading-tight"
            variants={itemVariants}
          >
            {title}
          </motion.h1>

          <motion.p
            className="mt-4 sm:mt-6 max-w-xl text-base sm:text-lg text-gray-600 px-2 sm:px-0"
            variants={itemVariants}
          >
            {description}
          </motion.p>

          <motion.div variants={itemVariants} className="mt-6 sm:mt-8 flex gap-3 sm:gap-4 flex-wrap justify-center lg:justify-start w-full px-2 sm:px-0">
            <a href={primaryButtonLink} className="flex-1 sm:flex-none min-w-[140px]">
              <Button
                size="lg"
                className="w-full h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base shadow-glass-lg hover:scale-105 transition-transform active:scale-95"
              >
                {primaryButtonText}
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </a>
            <a href={secondaryButtonLink} className="flex-1 sm:flex-none min-w-[140px]">
              <Button
                size="lg"
                variant="outline"
                className="w-full h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base shadow-glass hover:scale-105 transition-transform active:scale-95"
              >
                {secondaryButtonText}
              </Button>
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            className="mt-8 sm:mt-10 flex gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500 flex-wrap justify-center lg:justify-start"
            variants={itemVariants}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span>Hand-Poured</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <span>Essential Oils</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-olive"></div>
              <span>Eco-Friendly</span>
            </div>
          </motion.div>
        </div>

        {/* Right: Interactive Image Swiper */}
        <motion.div
          className="relative lg:w-1/2 h-full w-full flex items-center justify-center min-h-[300px] sm:min-h-[400px]"
          variants={candlesVariants}
        >
          <ImageSwiper
            images="/images/Album/rose.jpeg,/images/Album/strawberry.jpeg,/images/Album/blueberry.jpeg,/images/Album/ocean.jpeg,/images/Album/orange.jpeg,/images/Album/clove.jpeg,/images/Album/heart.jpeg,/images/Album/bowl.jpeg,/images/Album/rose-2.jpeg"
            cardWidth={280}
            cardHeight={400}
            className="z-10"
          />

          {/* Floating Botanical Elements */}
          <motion.div
            className="absolute top-10 right-10 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-10 left-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/20 backdrop-blur-md border border-accent/30"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
