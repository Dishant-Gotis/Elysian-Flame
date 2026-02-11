'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show success message
    // In production, you'd send this to an API endpoint
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Header */}
      <section className="section-padding bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-serif font-bold text-primary mb-6">
            Get in Touch
          </h1>
          <p className="text-gray-600 text-xl">
            We'd love to hear from you. Contact us to place an order or ask about custom scents!
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <a
                    href="mailto:hello@elysianflame.com"
                    className="text-accent-olive hover:text-primary transition-colors"
                  >
                    hello@elysianflame.com
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Phone</h3>
                  <a
                    href="tel:+15551234567"
                    className="text-accent-olive hover:text-primary transition-colors"
                  >
                    (555) 123-4567
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Hours</h3>
                  <p className="text-gray-600">Monday - Friday</p>
                  <p className="text-gray-600">9:00 AM - 5:00 PM EST</p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-olive hover:text-primary transition-colors"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-olive hover:text-primary transition-colors"
                    >
                      Facebook
                    </a>
                  </div>
                </div>
              </div>

              {/* How to Order */}
              <div className="mt-8 p-6 bg-cream rounded-card">
                <h3 className="font-serif font-bold text-xl mb-3">How to Order</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>Fill out the contact form or call/email us directly</li>
                  <li>Let us know which scents you're interested in</li>
                  <li>We'll confirm availability and provide pricing</li>
                  <li>Arrange payment and delivery details</li>
                  <li>Enjoy your handmade candles!</li>
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="card p-8">
                <h2 className="text-2xl font-serif font-bold text-primary mb-6">
                  Send Us a Message
                </h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-btn text-green-700">
                    Thank you! We've received your message and will get back to you soon.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-btn focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-btn focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-btn focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="product" className="block text-sm font-semibold mb-2">
                      Interested In
                    </label>
                    <select
                      id="product"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-btn focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a scent (optional)</option>
                      <option value="orange">Orange</option>
                      <option value="rose">Rose</option>
                      <option value="lavender">Lavender</option>
                      <option value="cinnamon">Cinnamon</option>
                      <option value="ylang-ylang">Ylang Ylang</option>
                      <option value="blueberry">Blueberry</option>
                      <option value="strawberry">Strawberry</option>
                      <option value="eucalyptus">Eucalyptus</option>
                      <option value="ocean">Ocean</option>
                      <option value="geranium">Geranium</option>
                      <option value="custom">Custom Blend</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-btn focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Tell us about your order or inquiry..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
