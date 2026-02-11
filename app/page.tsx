import Image from 'next/image';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';

const featuredProducts = [
    { id: '1', name: 'Lavender', tagline: 'Calming & Floral', image: '/products/lavander.jpeg' },
    { id: '2', name: 'Rose', tagline: 'Romantic & Floral', image: '/products/rose.jpeg' },
    { id: '3', name: 'Eucalyptus', tagline: 'Refreshing & Herbal', image: '/products/eucalyptus.jpeg' },
    { id: '4', name: 'Ocean', tagline: 'Clean & Fresh', image: '/products/ocean.jpeg' },
];

export default function HomePage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[700px] md:h-[600px] flex items-center justify-center">
                <Image
                    src="/products/banner-1.png"
                    alt="Elysian Flame Candles"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Darker overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
                
                <div className="relative z-10 text-center text-white px-6 max-w-4xl">
                    {/* Compact tagline */}
                    <p className="text-sm md:text-base uppercase tracking-widest mb-4 text-accent-lime font-semibold">
                        100% Natural • Handcrafted • Botanical
                    </p>
                    
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
                        Hand-Poured
                        <br />
                        <span className="text-accent-lime">Botanical Luxury</span>
                    </h1>
                    
                    <p className="text-lg md:text-xl mb-10 text-gray-200 max-w-2xl mx-auto">
                        Premium soy candles infused with essential oils
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/gallery" className="btn-primary text-lg px-10 py-4">
                            View Collection
                        </Link>
                        <Link href="/contact" className="btn-secondary bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-10 py-4">
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </section>

            {/* Value Propositions */}
            <section className="section-padding bg-cream">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-serif font-bold mb-2">100% Natural Soy</h3>
                            <p className="text-gray-600">Eco-friendly, clean-burning candles made from sustainable soy wax</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-accent-lime rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-serif font-bold mb-2">Artisan Crafted</h3>
                            <p className="text-gray-600">Each candle is hand-poured with care in small batches for quality</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-accent-olive rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-serif font-bold mb-2">Premium Fragrances</h3>
                            <p className="text-gray-600">Unique blends using pure essential oils and natural botanicals</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Candles */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-serif font-bold text-primary mb-4">
                            Featured Collection
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Discover our most beloved scents
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {featuredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/gallery" className="btn-primary">
                            View All Candles
                        </Link>
                    </div>
                </div>
            </section>

            {/* About Snippet */}
            <section className="section-padding bg-accent-sage/10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="relative h-96 rounded-card overflow-hidden">
                            <Image
                                src="/products/new-products.jpeg"
                                alt="Handmade Candles"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-4xl font-serif font-bold text-primary mb-6">
                                Our Story
                            </h2>
                            <p className="text-gray-600 text-lg mb-4">
                                At Elysian Flame, we believe in the power of natural, handcrafted products to transform your space into a sanctuary.
                            </p>
                            <p className="text-gray-600 text-lg mb-6">
                                Each candle is carefully hand-poured using 100% soy wax and infused with premium essential oils, creating a clean-burning, aromatic experience that brings warmth and tranquility to your home.
                            </p>
                            <Link href="/about" className="btn-secondary">
                                Learn More About Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="section-padding bg-primary text-white">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-serif font-bold mb-6">
                        Ready to Order?
                    </h2>
                    <p className="text-xl mb-8 text-cream">
                        Get in touch to place your order or inquire about custom scents
                    </p>
                    <Link href="/contact" className="btn-primary bg-white text-primary hover:bg-cream">
                        Contact Us Today
                    </Link>
                </div>
            </section>
        </>
    );
}
