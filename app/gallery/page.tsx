'use client';

import { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ZoomParallax } from '@/components/ui/zoom-parallax';
import Lenis from '@studio-freight/lenis';

export default function Gallery() {
  // Smooth scroll
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Parallax images from Album folder
  const parallaxImages = [
    { src: '/images/Album/rose.jpeg', alt: 'Rose Garden Candle' },
    { src: '/images/Album/blueberry.jpeg', alt: 'Blueberry Fields Candle' },
    { src: '/images/Album/orange.jpeg', alt: 'Orange Zest Candle' },
    { src: '/images/Album/strawberry.jpeg', alt: 'Strawberry Dreams Candle' },
    { src: '/images/Album/ocean.jpeg', alt: 'Ocean Mist Candle' },
    { src: '/images/Album/rose-2.jpeg', alt: 'Wild Rose Candle' },
    { src: '/images/Album/bowl.jpeg', alt: 'Wax Bowl - Behind the Scenes' },
  ];

  // All gallery images for the grid at the end
  const galleryImages = [
    { src: '/images/Album/rose.jpeg', title: 'Rose Garden', category: 'Floral' },
    { src: '/images/Album/orange.jpeg', title: 'Orange Zest', category: 'Citrus' },
    { src: '/images/Album/blueberry.jpeg', title: 'Blueberry Fields', category: 'Fruity' },
    { src: '/images/Album/strawberry.jpeg', title: 'Strawberry Dreams', category: 'Fruity' },
    { src: '/images/Album/ocean.jpeg', title: 'Ocean Mist', category: 'Fresh' },
    { src: '/images/Album/rose-2.jpeg', title: 'Wild Rose', category: 'Floral' },
    { src: '/images/Album/bowl.jpeg', title: 'Wax Bowl', category: 'Behind the Scenes' },
    { src: '/images/Album/clove.jpeg', title: 'Clove Spice', category: 'Warm' },
    { src: '/images/Album/heart.jpeg', title: 'Heart Candle', category: 'Special Edition' },
  ];

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-b from-cream-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-cormorant text-charcoal mb-4 sm:mb-6">
              Gallery
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 px-4 sm:px-0">
              Explore our handcrafted collection of botanical candles
            </p>
          </div>
        </div>
      </section>

      {/* Scroll Down Indicator */}
      <div className="relative flex h-[20vh] sm:h-[30vh] items-center justify-center bg-white">
        <div className="text-center">
          <p className="text-base sm:text-lg text-gray-500 mb-4">Scroll Down</p>
          <div className="animate-bounce">
            <svg className="w-6 h-6 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Zoom Parallax Section */}
      <ZoomParallax images={parallaxImages} />

      {/* Gallery Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-cormorant text-charcoal mb-4">
              Our Collection
            </h2>
            <p className="text-gray-600 text-base sm:text-lg px-4 sm:px-0">
              Handcrafted with love and natural ingredients
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-glass hover:shadow-glass-lg transition-all duration-300 aspect-square"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-xs uppercase tracking-wider mb-1 text-accent">
                      {image.category}
                    </p>
                    <h3 className="text-xl font-bold font-cormorant">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
