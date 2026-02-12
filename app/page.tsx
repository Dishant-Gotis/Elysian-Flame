import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CandleHero } from '@/components/ui/hero-section';

export default function Home() {
    return (
        <main>
            <Navbar />

            {/* Hero Section */}
            <CandleHero
                title={
                    <>
                        Hand-Poured Botanical <br />
                        <span className="text-primary">Luxury</span>
                    </>
                }
                description="Discover our collection of 100% natural soy candles, infused with premium essential oils. Each candle is hand-poured with care to bring warmth and tranquility to your home."
                primaryButtonText="Shop Collections"
                primaryButtonLink="/gallery"
                secondaryButtonText="Explore Gift Sets"
                secondaryButtonLink="/gallery"
                candleImage1="/images/Album/rose.jpeg"
                candleImage2="/images/Album/strawberry.jpeg"
            />

            {/* Value Propositions Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-cream-50">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        {/* Natural Soy */}
                        <div className="p-6 sm:p-8 rounded-2xl backdrop-blur-lg bg-white/60 border border-white/80 shadow-glass hover:shadow-glass-lg transition-all duration-300 hover:-translate-y-2 group touch-manipulation">
                            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold font-cormorant text-charcoal mb-3">100% Natural Soy</h3>
                            <p className="text-gray-600">Eco-friendly, clean-burning candles made from sustainable soy wax</p>
                        </div>

                        {/* Artisan Crafted */}
                        <div className="p-6 sm:p-8 rounded-2xl backdrop-blur-lg bg-white/60 border border-white/80 shadow-glass hover:shadow-glass-lg transition-all duration-300 hover:-translate-y-2 group">
                            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold font-cormorant text-charcoal mb-3">Artisan Crafted</h3>
                            <p className="text-gray-600">Each candle is hand-poured with care in small batches for quality</p>
                        </div>

                        {/* Premium Fragrances */}
                        <div className="p-6 sm:p-8 rounded-2xl backdrop-blur-lg bg-white/60 border border-white/80 shadow-glass hover:shadow-glass-lg transition-all duration-300 hover:-translate-y-2 group">
                            <div className="w-16 h-16 rounded-full bg-olive/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-olive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold font-cormorant text-charcoal mb-3">Premium Fragrances</h3>
                            <p className="text-gray-600">Unique blends using pure essential oils and natural botanicals</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Collections */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold font-cormorant text-charcoal mb-4">
                            Featured Collections
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Explore our curated scent collections
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="relative h-96 rounded-2xl overflow-hidden group cursor-pointer shadow-glass hover:shadow-glass-lg transition-all">
                            <img
                                src="/images/lavander.jpeg"
                                alt="Floral Collection"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                <h3 className="text-3xl font-bold font-cormorant mb-2">Floral Collection</h3>
                                <p className="text-white/80 mb-4">12 products</p>
                                <button className="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/40 rounded-full text-white hover:bg-white/30 transition-colors">
                                    Shop Now
                                </button>
                            </div>
                        </div>

                        <div className="relative h-96 rounded-2xl overflow-hidden group cursor-pointer shadow-glass hover:shadow-glass-lg transition-all">
                            <img
                                src="/images/orange.jpeg"
                                alt="Citrus Collection"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                <h3 className="text-3xl font-bold font-cormorant mb-2">Citrus Collection</h3>
                                <p className="text-white/80 mb-4">8 products</p>
                                <button className="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/40 rounded-full text-white hover:bg-white/30 transition-colors">
                                    Shop Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="relative py-20 bg-primary overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                        backgroundSize: '30px 30px'
                    }}></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-2xl mx-auto text-center text-white">
                        <h2 className="text-4xl font-bold font-cormorant mb-4">
                            Join Our Community
                        </h2>
                        <p className="text-white/90 text-lg mb-8">
                            Subscribe to receive exclusive offers, candle care tips, and new collection launches
                        </p>
                        <div className="flex gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-3 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white"
                            />
                            <button className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
