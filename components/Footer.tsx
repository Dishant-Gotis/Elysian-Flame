'use client';

import Link from 'next/link';
import { Instagram, Facebook, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setEmail('');
  };

  const footerGroups = [
    {
      title: 'Shop Collections',
      links: [
        { label: 'Botanical Classics', href: '/gallery' },
        { label: 'Seasonal Editions', href: '/gallery' },
        { label: 'Gift-Ready Sets', href: '/gallery' },
        { label: 'Best Sellers', href: '/gallery' },
      ],
    },
    {
      title: 'Candle Care & Support',
      links: [
        { label: 'Burning & Care Guide', href: '/about' },
        { label: 'Shipping Information', href: '/contact' },
        { label: 'Returns & Exchanges', href: '/contact' },
        { label: 'Frequently Asked Questions', href: '/contact' },
      ],
    },
    {
      title: 'About Elysian Flame',
      links: [
        { label: 'Our Story', href: '/about' },
        { label: 'Ingredients & Sustainability', href: '/about' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'Wholesale & Collaborations', href: '/contact' },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#faf9f1] text-[#1f1b16]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(108,166,81,0.08),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(164,127,66,0.08),transparent_40%)]" />

      <div className="relative container mx-auto px-6 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="grid gap-10 border-b border-[#ded8ca] pb-12 md:grid-cols-[1.3fr_1fr]"
        >
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-[#7c715f]">Elysian Flame</p>
            <h3 className="font-cormorant text-4xl leading-tight text-[#2f281f] md:text-5xl">
              For every ritual of rest, reflection, and warmth.
            </h3>
            <p className="max-w-2xl text-sm leading-relaxed text-[#5e5548] md:text-base">
              Hand-poured botanical candles made with natural soy wax and essential oils, crafted to elevate everyday spaces with gentle fragrance and intentional calm.
            </p>
          </div>

          <div className="rounded-2xl border border-[#d8d1c4] bg-white/70 p-5 backdrop-blur-sm md:p-6">
            <p className="font-cormorant text-2xl text-[#2f281f]">Light your next moment.</p>
            <p className="mt-2 text-sm text-[#5e5548]">Get new scent drops, care guides, and seasonal offers first.</p>
            <form onSubmit={handleNewsletterSubmit} className="mt-4 space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="w-full rounded-xl border border-[#cfc6b5] bg-white px-4 py-2.5 text-sm text-[#2f281f] outline-none transition focus:border-[#6ca651]"
              />
              <Button type="submit" className="w-full rounded-xl bg-[#6ca651] text-white hover:bg-[#5d9346]">
                Join The Newsletter
              </Button>
              {isSubmitted && (
                <p className="text-xs text-[#4f8740]">Thanks for subscribing. Your candle ritual updates are on the way.</p>
              )}
            </form>
          </div>
        </motion.div>

        <div className="grid gap-10 py-12 md:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="space-y-5"
          >
            <h4 className="font-cormorant text-3xl text-[#2f281f]">Elysian Flame</h4>
            <p className="text-sm leading-relaxed text-[#5e5548]">
              Luxury candles for mindful homes: clean-burning, nature-inspired, and made in small batches.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/_elysian_flame_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full border border-[#d3ccbf] p-2.5 text-[#4f473b] transition hover:border-[#6ca651] hover:text-[#6ca651]"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="rounded-full border border-[#d3ccbf] p-2.5 text-[#4f473b] transition hover:border-[#6ca651] hover:text-[#6ca651]"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="mailto:elysianflame03@gmail.com"
                aria-label="Email"
                className="rounded-full border border-[#d3ccbf] p-2.5 text-[#4f473b] transition hover:border-[#6ca651] hover:text-[#6ca651]"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {footerGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
            >
              <h5 className="mb-4 text-sm uppercase tracking-[0.14em] text-[#7c715f]">{group.title}</h5>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-[#4f473b] transition hover:text-[#6ca651]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="flex flex-col gap-3 border-t border-[#ded8ca] pt-6 text-xs text-[#746a5a] md:flex-row md:items-center md:justify-between"
        >
          <p>&copy; {new Date().getFullYear()} Elysian Flame. All rights reserved.</p>
          <p>Crafted for ambiance. Never leave a burning candle unattended.</p>
        </motion.div>
      </div>
    </footer>
  );
}
