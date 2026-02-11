import ProductCard from '@/components/ProductCard';

const allProducts = [
    { id: '1', name: 'Orange', tagline: 'Energizing & Citrus', image: '/products/orange.jpeg' },
    { id: '2', name: 'Rose', tagline: 'Romantic & Floral', image: '/products/rose.jpeg' },
    { id: '3', name: 'Lavender', tagline: 'Calming & Floral', image: '/products/lavander.jpeg' },
    { id: '4', name: 'Cinnamon', tagline: 'Warm & Spicy', image: '/products/cinnamon.jpeg' },
    { id: '5', name: 'Ylang Ylang', tagline: 'Exotic & Floral', image: '/products/ylang-ylang-candle.jpeg' },
    { id: '6', name: 'Blueberry', tagline: 'Sweet & Fruity', image: '/products/blueberry.jpeg' },
    { id: '7', name: 'Strawberry', tagline: 'Fresh & Fruity', image: '/products/strawberry.jpeg' },
    { id: '8', name: 'Eucalyptus', tagline: 'Refreshing & Herbal', image: '/products/eucalyptus.jpeg' },
    { id: '9', name: 'Ocean', tagline: 'Clean & Fresh', image: '/products/ocean.jpeg' },
    { id: '10', name: 'Geranium', tagline: 'Delicate & Floral', image: '/products/Geranium.jpeg' },
];

export const metadata = {
    title: 'Candle Gallery | Elysian Flame',
    description: 'Browse our full collection of hand-poured soy candles with natural essential oils.',
};

export default function GalleryPage() {
    return (
        <>
            {/* Header Section */}
            <section className="section-padding bg-cream">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl font-serif font-bold text-primary mb-6">
                        Our Candle Collection
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Explore our complete range of handcrafted soy candles, each infused with premium essential oils and natural botanicals.
                    </p>
                </div>
            </section>

            {/* Products Grid */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {allProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-primary text-white">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-serif font-bold mb-4">
                        Found Your Perfect Scent?
                    </h2>
                    <p className="text-lg mb-8 text-cream">
                        Contact us to place your order or inquire about custom blends
                    </p>
                    <a href="/contact" className="btn-primary bg-white text-primary hover:bg-cream">
                        Get in Touch
                    </a>
                </div>
            </section>
        </>
    );
}
