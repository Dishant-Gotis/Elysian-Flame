import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Leaf, Heart, Recycle, Users } from 'lucide-react';

export default function About() {
    return (
        <main>
            <Navbar />

            {/* Hero */}
            <section className="relative py-20 bg-gradient-to-b from-cream-50 to-white">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle, #6CA651 1px, transparent 1px)',
                        backgroundSize: '30px 30px'
                    }}></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-5xl font-bold font-cormorant text-charcoal mb-6">
                            Our Story
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Born from a passion for natural living and artisan craftsmanship, Elysian Flame brings you hand-poured candles that transform your space into a sanctuary.
                        </p>
                    </div>
                </div>
            </section>

            {/* Origin Story */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold font-cormorant text-charcoal mb-6">
                                Hand-Crafted with Love
                            </h2>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Every Elysian Flame candle begins with a commitment to quality and sustainability. We carefully select 100% natural soy wax and blend it with premium essential oils to create fragrances that elevate your everyday moments.
                            </p>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Our small-batch approach ensures that each candle receives the attention it deserves. From pouring to packaging, we infuse every step with care and intention.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                We believe in creating products that are as good for the planet as they are for your home. That's why we use eco-friendly materials and sustainable practices throughout our process.
                            </p>
                        </div>
                        <div className="relative h-96 rounded-2xl overflow-hidden shadow-glass-lg">
                            <img
                                src="/images/Album/bowl.jpeg"
                                alt="Candle Making Process"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-cream-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold font-cormorant text-charcoal mb-4">
                            Our Values
                        </h2>
                        <p className="text-gray-600 text-lg">
                            What guides us in everything we create
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-6 rounded-2xl backdrop-blur-lg bg-white/60 border border-white/80 shadow-glass hover:shadow-glass-lg transition-all duration-300 hover:-translate-y-2 text-center">
                            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                                <Leaf className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold font-cormorant text-charcoal mb-3">Natural</h3>
                            <p className="text-gray-600 text-sm">
                                100% natural soy wax and pure essential oils, no synthetic fragrances
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl backdrop-blur-lg bg-white/60 border border-white/80 shadow-glass hover:shadow-glass-lg transition-all duration-300 hover:-translate-y-2 text-center">
                            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                                <Heart className="w-8 h-8 text-accent" />
                            </div>
                            <h3 className="text-xl font-bold font-cormorant text-charcoal mb-3">Handmade</h3>
                            <p className="text-gray-600 text-sm">
                                Every candle is hand-poured in small batches with love and attention
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl backdrop-blur-lg bg-white/60 border border-white/80 shadow-glass hover:shadow-glass-lg transition-all duration-300 hover:-translate-y-2 text-center">
                            <div className="w-16 h-16 rounded-full bg-olive/20 flex items-center justify-center mx-auto mb-6">
                                <Recycle className="w-8 h-8 text-olive" />
                            </div>
                            <h3 className="text-xl font-bold font-cormorant text-charcoal mb-3">Sustainable</h3>
                            <p className="text-gray-600 text-sm">
                                Eco-friendly practices from sourcing to packaging, recyclable materials
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl backdrop-blur-lg bg-white/60 border border-white/80 shadow-glass hover:shadow-glass-lg transition-all duration-300 hover:-translate-y-2 text-center">
                            <div className="w-16 h-16 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-6">
                                <Users className="w-8 h-8 text-sage" />
                            </div>
                            <h3 className="text-xl font-bold font-cormorant text-charcoal mb-3">Community</h3>
                            <p className="text-gray-600 text-sm">
                                Building connections and supporting local artisans and suppliers
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-4xl font-bold font-cormorant text-charcoal mb-6">
                            Experience the Difference
                        </h2>
                        <p className="text-gray-600 text-lg mb-8">
                            Discover our collection of hand-poured botanical candles
                        </p>
                        <a href="/gallery">
                            <button className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 shadow-glass-lg hover:scale-105 transition-all">
                                Browse Our Collection
                            </button>
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
