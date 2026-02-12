'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ShoppingCart, Search, User } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/80 border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 shadow-md">
              <img 
                src="/images/logo.jpeg" 
                alt="Elysian Flame Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-2xl font-bold font-cormorant text-primary hidden sm:block">
              Elysian Flame
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </Link>
            <Link href="/gallery" className="text-foreground hover:text-primary transition-colors font-medium">
              Gallery
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button className="p-2 sm:p-2.5 hover:bg-primary/10 rounded-full transition-colors touch-manipulation">
              <Search className="w-5 h-5 sm:w-5 sm:h-5 text-foreground" />
            </button>
            <button className="p-2 sm:p-2.5 hover:bg-primary/10 rounded-full transition-colors hidden md:block touch-manipulation">
              <User className="w-5 h-5 text-foreground" />
            </button>
            <button className="p-2 sm:p-2.5 hover:bg-primary/10 rounded-full transition-colors relative hidden md:block touch-manipulation">
              <ShoppingCart className="w-5 h-5 text-foreground" />
              <span className="absolute top-0 right-0 w-4 h-4 bg-accent text-xs flex items-center justify-center rounded-full text-charcoal font-bold">
                0
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2.5 hover:bg-primary/10 rounded-full transition-colors touch-manipulation"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link href="/gallery" className="text-foreground hover:text-primary transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                Gallery
              </Link>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
