'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Card, Badge, Input, Rating } from '@/components/ui';
import {
  ArrowRightIcon,
  CheckCircleIcon,
  GiftIcon,
  ShieldIcon,
  TrendUpIcon,
  FootballIcon,
  CasinoIcon,
  MailIcon
} from '@/components/icons';
import { getFeaturedOffers, getFeaturedBonuses } from '@/data/mockData';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const featuredOffers = getFeaturedOffers();
  const featuredBonuses = getFeaturedBonuses();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=1920&q=80"
            alt="Sports betting"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <Badge variant="gold" className="mb-6">
              <GiftIcon className="w-4 h-4 mr-1" />
              March 2026 Exclusive Bonuses
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Find the Best{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-500">
                Sportsbook
              </span>{' '}
              &{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary-400 to-secondary-500">
                Casino
              </span>{' '}
              Bonuses
            </h1>

            <p className="text-xl text-dark-200 mb-8">
              Compare top-rated betting sites, get exclusive promo codes, and claim up to $5,000 in welcome bonuses. Trusted reviews from industry experts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/sportsbooks">
                <Button variant="gold" size="lg" iconRight={<ArrowRightIcon className="w-5 h-5" />}>
                  Best Sportsbooks
                </Button>
              </Link>
              <Link href="/casinos">
                <Button variant="outline" size="lg" iconRight={<ArrowRightIcon className="w-5 h-5" />}>
                  Best Casinos
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-6 mt-8 pt-8 border-t border-dark-700">
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-primary-400" />
                <span className="text-dark-300 text-sm">Licensed & Regulated</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldIcon className="w-5 h-5 text-primary-400" />
                <span className="text-dark-300 text-sm">Safe & Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendUpIcon className="w-5 h-5 text-primary-400" />
                <span className="text-dark-300 text-sm">Best Odds</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Offers */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Top Rated Betting Sites
            </h2>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto">
              Hand-picked sportsbooks and casinos with the best bonuses and user experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredOffers.slice(0, 6).map((offer, index) => (
              <Card key={offer.id} dark hover className="relative">
                {index === 0 && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-secondary-500 to-secondary-400 text-dark-900 text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">
                    #1 RATED
                  </div>
                )}

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-dark-700 rounded-xl flex items-center justify-center overflow-hidden">
                    {offer.type === 'sportsbook' ? (
                      <FootballIcon className="w-8 h-8 text-primary-400" />
                    ) : (
                      <CasinoIcon className="w-8 h-8 text-secondary-400" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">{offer.name}</h3>
                    <Rating value={offer.rating} size="sm" />
                  </div>
                </div>

                <div className="bg-dark-700/50 rounded-xl p-4 mb-4">
                  <p className="text-secondary-400 font-bold text-2xl mb-1">{offer.bonusAmount}</p>
                  <p className="text-dark-300 text-sm">{offer.bonusDescription}</p>
                </div>

                <ul className="space-y-2 mb-6">
                  {offer.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-dark-300 text-sm">
                      <CheckCircleIcon className="w-4 h-4 text-primary-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href={`/reviews/${offer.slug}`}>
                  <Button variant="primary" fullWidth>
                    Claim Bonus
                  </Button>
                </Link>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/sportsbooks">
              <Button variant="outline" iconRight={<ArrowRightIcon className="w-5 h-5" />}>
                View All Sportsbooks
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Bonuses */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Latest Bonuses</h2>
              <p className="text-dark-300">Exclusive promo codes and welcome offers</p>
            </div>
            <Link href="/bonuses" className="hidden md:block">
              <Button variant="ghost" iconRight={<ArrowRightIcon className="w-5 h-5" />}>
                View All
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredBonuses.map((bonus) => (
              <Card key={bonus.id} dark hover className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-48 h-32 bg-dark-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <GiftIcon className="w-12 h-12 text-secondary-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="gold" size="sm">{bonus.type.replace('-', ' ').toUpperCase()}</Badge>
                    <span className="text-dark-400 text-sm">{bonus.offerName}</span>
                  </div>
                  <h3 className="font-bold text-white text-xl mb-2">{bonus.title}</h3>
                  <p className="text-dark-300 text-sm mb-4">{bonus.description}</p>
                  <div className="flex items-center justify-between">
                    {bonus.code && (
                      <div className="bg-dark-700 px-4 py-2 rounded-lg">
                        <span className="text-secondary-400 font-mono font-bold">{bonus.code}</span>
                      </div>
                    )}
                    <Button variant="gold" size="sm">
                      Get Bonus
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-dark-300 text-lg">Get started in three simple steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Choose Your Site',
                description: 'Browse our expert reviews and compare the best sportsbooks and casinos.',
              },
              {
                step: '02',
                title: 'Claim Your Bonus',
                description: 'Use our exclusive promo codes to get the best welcome bonus available.',
              },
              {
                step: '03',
                title: 'Start Winning',
                description: 'Place your bets and enjoy a safe, secure betting experience.',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-500 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-dark-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-br from-primary-900 to-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MailIcon className="w-16 h-16 mx-auto mb-6 text-primary-300" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Exclusive Bonuses
          </h2>
          <p className="text-primary-100 text-lg mb-8">
            Subscribe to our newsletter and receive exclusive bonus codes, betting tips, and the latest promotions directly to your inbox.
          </p>

          {subscribed ? (
            <div className="bg-primary-700/50 rounded-2xl p-8">
              <CheckCircleIcon className="w-12 h-12 mx-auto mb-4 text-primary-300" />
              <p className="text-white text-xl font-semibold">Thanks for subscribing!</p>
              <p className="text-primary-200">Check your inbox for exclusive offers.</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  dark={false}
                  className="flex-1"
                  required
                />
                <Button type="submit" variant="gold">
                  Subscribe
                </Button>
              </div>
              <p className="text-primary-200 text-sm mt-4">
                No spam, unsubscribe anytime. By subscribing you agree to our privacy policy.
              </p>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
