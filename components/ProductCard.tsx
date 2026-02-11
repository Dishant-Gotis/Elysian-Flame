import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  tagline: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

export default function ProductCard({ product, featured = false }: ProductCardProps) {
  return (
    <div className="card overflow-hidden group">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className={`font-serif font-bold text-charcoal mb-2 ${featured ? 'text-2xl' : 'text-xl'}`}>
          {product.name}
        </h3>
        <p className="text-accent-olive italic text-sm mb-4">{product.tagline}</p>
        <Link href="/contact" className="btn-primary inline-block">
          Contact to Order
        </Link>
      </div>
    </div>
  );
}
