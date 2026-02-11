import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About Us | Elysian Flame',
  description: 'Learn about our passion for creating hand-poured, Natural luxury soy candles.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-serif font-bold text-primary mb-6">
            Our Story
          </h1>
          <p className="text-gray-600 text-xl">
            Crafting natural luxury, one candle at a time
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-96 rounded-card overflow-hidden">
              <Image
                src="/products/sented-candles.jpeg"
                alt="Handmade Candle Making"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                Born from a Love of Natural Luxury
              </h2>
              <p className="text-gray-600 text-lg mb-4">
                Elysian Flame began with a simple belief: that the products we bring into our homes should be as pure and natural as the nature that surrounds us.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                Every candle we create is hand-poured with intention, using only 100% soy wax sourced from sustainable farms and premium essential oils extracted from the finest botanicals.
              </p>
              <p className="text-gray-600 text-lg">
                We don't just make candles—we craft experiences that transform your space into a sanctuary of calm, warmth, and natural beauty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-accent-sage/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center text-primary mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">100% Natural</h3>
              <p className="text-gray-600">
                Pure soy wax, essential oils, and natural botanical fragrances—no synthetic additives
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-accent-lime rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Handcrafted</h3>
              <p className="text-gray-600">
                Each candle is lovingly hand-poured in small batches with meticulous attention to detail
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-accent-olive rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Sustainable</h3>
              <p className="text-gray-600">
                Eco-friendly materials, recyclable packaging, and a commitment to environmental responsibility
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-accent-sage rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Premium Quality</h3>
              <p className="text-gray-600">
                Only the finest ingredients for a clean burn and authentic, long-lasting fragrance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center text-primary mb-12">
            How We Make Our Candles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-4">1</div>
              <h3 className="text-xl font-serif font-bold mb-3">Select & Blend</h3>
              <p className="text-gray-600">
                We carefully select premium soy wax and essential oils, creating unique fragrance blends inspired by nature
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-accent-lime mb-4">2</div>
              <h3 className="text-xl font-serif font-bold mb-3">Hand Pour</h3>
              <p className="text-gray-600">
                Each candle is hand-poured at the perfect temperature to ensure even wax distribution and scent diffusion
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-accent-olive mb-4">3</div>
              <h3 className="text-xl font-serif font-bold mb-3">Cure & Package</h3>
              <p className="text-gray-600">
                After curing for optimal fragrance throw, we lovingly package each candle for your enjoyment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Experience the Difference
          </h2>
          <p className="text-xl mb-8 text-cream">
            Ready to bring natural luxury into your home?
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary hover:bg-cream">
            Contact Us to Order
          </Link>
        </div>
      </section>
    </>
  );
}
