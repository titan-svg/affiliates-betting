'use client';

import { useState } from 'react';
import { Button, Card, Input } from '@/components/ui';
import { MailIcon, CheckCircleIcon, TwitterIcon, FacebookIcon, InstagramIcon } from '@/components/icons';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-dark-950 via-dark-900 to-primary-900/20 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MailIcon className="w-16 h-16 mx-auto mb-6 text-primary-400" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-dark-200 text-xl">
            Have questions or feedback? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-dark-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <Card dark className="text-center py-12">
                  <CheckCircleIcon className="w-16 h-16 mx-auto mb-6 text-primary-400" />
                  <h2 className="text-2xl font-bold text-white mb-4">Message Sent!</h2>
                  <p className="text-dark-300 mb-6">
                    Thank you for reaching out. We&apos;ll get back to you within 24-48 hours.
                  </p>
                  <Button variant="outline" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </Button>
                </Card>
              ) : (
                <Card dark>
                  <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Your Name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                      <Input
                        label="Email Address"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <Input
                      label="Subject"
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                    />
                    <div>
                      <label className="block text-sm font-medium text-dark-200 mb-2">
                        Message
                      </label>
                      <textarea
                        rows={5}
                        placeholder="Your message..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-xl border bg-dark-800 border-dark-600 text-white placeholder-dark-400 focus:border-primary-500 focus:ring-primary-500 focus:outline-none focus:ring-2 transition-all"
                      />
                    </div>
                    <Button type="submit" variant="primary" size="lg">
                      Send Message
                    </Button>
                  </form>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card dark>
                <h3 className="text-lg font-bold text-white mb-4">About BetPicks USA</h3>
                <p className="text-dark-300 text-sm mb-4">
                  We are a team of betting enthusiasts dedicated to providing honest, comprehensive reviews of sportsbooks and casinos in the United States.
                </p>
                <p className="text-dark-300 text-sm">
                  Our mission is to help you find the best betting sites with the best bonuses and user experience.
                </p>
              </Card>

              <Card dark>
                <h3 className="text-lg font-bold text-white mb-4">Contact Info</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-dark-400 text-sm">Email</p>
                    <a href="mailto:contact@betpicksusa.com" className="text-primary-400 hover:underline">
                      contact@betpicksusa.com
                    </a>
                  </div>
                  <div>
                    <p className="text-dark-400 text-sm">Response Time</p>
                    <p className="text-white">24-48 hours</p>
                  </div>
                </div>
              </Card>

              <Card dark>
                <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-dark-700 rounded-lg flex items-center justify-center text-dark-300 hover:text-primary-400 hover:bg-dark-600 transition-all">
                    <TwitterIcon className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-dark-700 rounded-lg flex items-center justify-center text-dark-300 hover:text-primary-400 hover:bg-dark-600 transition-all">
                    <FacebookIcon className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-dark-700 rounded-lg flex items-center justify-center text-dark-300 hover:text-primary-400 hover:bg-dark-600 transition-all">
                    <InstagramIcon className="w-5 h-5" />
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
