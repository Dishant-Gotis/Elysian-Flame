'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Mail, Phone, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We\'ll respond within 24 hours.');
    setFormData({ name: '', email: '', phone: '', subject: 'general', message: '' });
  };

  const faqs = [
    {
      question: 'What is your return policy?',
      answer: 'We accept returns within 30 days of purchase. Products must be unused and in original packaging.'
    },
    {
      question: 'How long does shipping take?',
      answer: 'Standard shipping takes 5-7 business days. Express shipping is 2-3 business days.'
    },
    {
      question: 'Do you offer wholesale pricing?',
      answer: 'Yes! Please contact us using the form above with your business details for wholesale inquiries.'
    },
    {
      question: 'Can I customize a gift set?',
      answer: 'Absolutely! We offer custom gift sets for special occasions. Contact us to discuss your needs.'
    },
  ];

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-cream-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-cormorant text-charcoal mb-4 sm:mb-6">
              We're Here to Help
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 px-4 sm:px-0">
              Have questions? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-8 sm:py-10 md:py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="p-8 rounded-2xl backdrop-blur-lg bg-white/60 border border-white/80 shadow-glass">
                <h2 className="text-2xl font-bold font-cormorant text-charcoal mb-6">
                  Send us a message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all backdrop-blur-sm bg-white/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all backdrop-blur-sm bg-white/50"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all backdrop-blur-sm bg-white/50"
                        placeholder="+91 77689 81403"
                        pattern="[+]?[0-9\s-]+"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        Subject *
                      </label>
                      <select
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all backdrop-blur-sm bg-white/50"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="order">Order Issue</option>
                        <option value="wholesale">Wholesale</option>
                        <option value="custom">Custom Order</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all backdrop-blur-sm bg-white/50 resize-none"
                      minLength={20}
                      maxLength={1000}
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      {formData.message.length}/1000 characters
                    </p>
                  </div>

                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="p-6 rounded-2xl backdrop-blur-lg bg-white/60 border border-white/80 shadow-glass">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Email</h3>
                    <a href="mailto:elysianflame03@gmail.com" className="text-gray-600 hover:text-primary transition-colors">
                      elysianflame03@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl backdrop-blur-lg bg-white/60 border border-white/80 shadow-glass">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-accent/10">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Phone</h3>
                    <a href="tel:+917768981403" className="text-gray-600 hover:text-primary transition-colors">
                      +91 77689 81403
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
                <p className="text-sm text-gray-600 mb-4">
                  <span className="font-semibold text-primary">Response Time:</span> We typically respond within 24 hours during business days.
                </p>
              </div>

              <a href="/gallery" className="block">
                <Button size="lg" className="w-full shadow-glass-lg hover:scale-105 transition-transform">
                  Order Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 sm:py-10 md:py-12 bg-cream-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold font-cormorant text-charcoal mb-6 sm:mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl backdrop-blur-lg bg-white/60 border border-white/80 shadow-glass overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <h3 className="font-semibold text-charcoal">{faq.question}</h3>
                    <ChevronDown
                      className={`w-5 h-5 text-primary transition-transform duration-200 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === index ? 'max-h-40 mt-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
