'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRightIcon,
  CheckCircleIcon,
  GiftIcon,
  TrendUpIcon,
  FootballIcon,
  MailIcon,
  FireIcon,
  TrophyIcon,
  ClockIcon,
  StarIcon
} from '@/components/icons';
import { getFeaturedOffers, getRecentArticles, sportCategories, mediaPartners, leagues, getFeaturedBonuses } from '@/data/mockData';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const featuredOffers = getFeaturedOffers();
  const recentArticles = getRecentArticles(3);
  const featuredBonuses = getFeaturedBonuses();
  const featuredLeagues = leagues.filter(l => l.featured).slice(0, 8);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <main className="pt-[104px]">
      {/* Hero Section - Light Theme */}
      <section className="relative min-h-[500px] flex items-center overflow-hidden bg-gradient-to-b from-navy-800 to-navy-900">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1461896836934-gy8yrhy?w=1920&q=80"
            alt="Sports"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                March 2026
              </span>
              <span className="text-gold-400 text-sm font-medium">Best Sportsbook Bonuses</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Find The Best Sports Betting
              <span className="text-gold-400"> Promotions</span>
            </h1>

            <p className="text-xl text-light-300 mb-8 max-w-2xl">
              Compare top-rated sportsbooks, exclusive bonus offers, and expert betting picks. Your trusted guide to sports betting in the USA.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/sportsbooks"
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all"
              >
                View Top Sportsbooks
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link
                href="/bonuses"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-lg font-bold text-lg transition-all"
              >
                See All Bonuses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* As Featured On - Media Partners Bar */}
      <section className="bg-white py-8 border-b border-light-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-light-600 text-sm uppercase tracking-wider font-medium">As Featured On</p>
            <div className="flex items-center gap-8 md:gap-12 flex-wrap justify-center">
              {mediaPartners.map((partner) => (
                <div key={partner.id} className="text-light-500 hover:text-navy-700 transition-colors">
                  <span className="text-lg font-bold tracking-wide">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sports Categories */}
      <section className="py-16 bg-light-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
              Betting Guides By Sport
            </h2>
            <p className="text-light-600 text-lg">
              Expert picks and analysis for all major leagues
            </p>
          </div>

          {/* League Logos Grid */}
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mb-12">
            {featuredLeagues.map((league) => (
              <Link
                key={league.id}
                href={`/sports/${league.id}`}
                className="group flex flex-col items-center p-4 bg-white hover:bg-red-50 rounded-xl transition-all hover:shadow-md border border-light-300"
              >
                <div className="w-12 h-12 mb-2 flex items-center justify-center bg-navy-800 group-hover:bg-red-600 rounded-lg transition-colors">
                  <span className="text-xl font-bold text-white">{league.shortName.charAt(0)}</span>
                </div>
                <span className="text-navy-700 text-xs font-medium text-center">{league.shortName}</span>
              </Link>
            ))}
          </div>

          {/* Sport Category Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {sportCategories.filter(s => s.featured).map((sport) => (
              <Link
                key={sport.id}
                href={`/sports/${sport.slug}`}
                className="group relative overflow-hidden rounded-xl bg-white p-6 border border-light-300 hover:border-red-500 hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-3">{sport.icon}</div>
                <h3 className="text-navy-800 font-bold mb-1">{sport.name}</h3>
                <p className="text-light-600 text-xs">{sport.leagues.length} Leagues</p>
                <ArrowRightIcon className="absolute top-4 right-4 w-5 h-5 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top Sportsbooks */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-navy-800 mb-2">Top Rated Sportsbooks</h2>
              <p className="text-light-600">Hand-picked betting sites with the best bonuses</p>
            </div>
            <Link href="/sportsbooks" className="hidden md:inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold">
              View All
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredOffers.filter(o => o.type === 'sportsbook').slice(0, 3).map((offer, index) => (
              <div key={offer.id} className="bg-light-100 rounded-2xl p-6 border border-light-300 hover:shadow-xl transition-all relative">
                {index === 0 && (
                  <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-xl">
                    #1 RATED
                  </div>
                )}

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-navy-800 rounded-xl flex items-center justify-center">
                    <FootballIcon className="w-8 h-8 text-gold-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-800 text-lg">{offer.name}</h3>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} filled={i < Math.floor(offer.rating)} className={`w-4 h-4 ${i < Math.floor(offer.rating) ? 'text-gold-500' : 'text-light-400'}`} />
                      ))}
                      <span className="text-light-600 text-sm ml-1">{offer.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 mb-4 border border-light-300">
                  <p className="text-red-600 font-bold text-2xl mb-1">{offer.bonusAmount}</p>
                  <p className="text-navy-700 text-sm">{offer.bonusDescription}</p>
                </div>

                <ul className="space-y-2 mb-6">
                  {offer.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-navy-700 text-sm">
                      <CheckCircleIcon className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3">
                  <Link href={`/reviews/${offer.slug}`} className="flex-1">
                    <button className="w-full py-2.5 px-4 border border-light-400 text-navy-700 rounded-lg font-medium hover:bg-light-200 transition-colors text-sm">
                      Read Review
                    </button>
                  </Link>
                  <Link href={offer.affiliateUrl} className="flex-1">
                    <button className="w-full py-2.5 px-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold transition-colors text-sm">
                      Get Bonus
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 md:hidden">
            <Link href="/sportsbooks" className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold">
              View All Sportsbooks
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Promotions */}
      <section className="py-16 bg-light-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-navy-800 mb-2">Latest Promotions</h2>
            <p className="text-light-600">Exclusive bonus codes and welcome offers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredBonuses.slice(0, 4).map((bonus) => (
              <div key={bonus.id} className="bg-white rounded-2xl p-6 border border-light-300 hover:shadow-lg transition-all flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-24 h-20 bg-gradient-red rounded-xl flex items-center justify-center flex-shrink-0">
                  <GiftIcon className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-gold-100 text-gold-700 text-xs font-bold px-2 py-1 rounded">{bonus.type.replace('-', ' ').toUpperCase()}</span>
                    <span className="text-light-500 text-sm">{bonus.offerName}</span>
                  </div>
                  <h3 className="font-bold text-navy-800 text-xl mb-2">{bonus.title}</h3>
                  <p className="text-light-600 text-sm mb-4">{bonus.description}</p>
                  <div className="flex items-center justify-between">
                    {bonus.code && (
                      <div className="bg-light-200 px-4 py-2 rounded-lg border border-dashed border-red-400">
                        <span className="text-red-600 font-mono font-bold">{bonus.code}</span>
                      </div>
                    )}
                    <Link href={bonus.affiliateUrl}>
                      <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-bold text-sm transition-colors">
                        Get Bonus
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News / Articles Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                <TrophyIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-navy-800">Sports News & Picks</h2>
                <p className="text-light-600">Expert analysis and betting guides</p>
              </div>
            </div>
            <Link href="/articles" className="hidden md:inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold">
              All Articles
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentArticles.map((article, index) => (
              <Link key={article.id} href={`/articles/${article.slug}`}>
                <div className="bg-light-100 rounded-2xl overflow-hidden border border-light-300 hover:shadow-lg transition-all h-full">
                  <div className="relative h-48">
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                    {index === 0 && (
                      <div className="absolute top-3 left-3">
                        <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                          <FireIcon className="w-3 h-3" />
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-navy-800 text-white text-xs font-medium px-2 py-1 rounded">{article.league || article.sport}</span>
                      <span className="text-light-500 text-xs flex items-center gap-1">
                        <ClockIcon className="w-3 h-3" />
                        {article.readTime} min read
                      </span>
                    </div>

                    <h3 className="font-bold text-navy-800 text-lg mb-2 line-clamp-2 hover:text-red-600 transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-light-600 text-sm line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10 md:hidden">
            <Link href="/articles" className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold">
              View All Articles
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MailIcon className="w-16 h-16 mx-auto mb-6 text-gold-400" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Exclusive Betting Tips
          </h2>
          <p className="text-light-300 text-lg mb-8">
            Join 50,000+ bettors getting free picks, bonuses, and betting guides delivered to their inbox.
          </p>

          {subscribed ? (
            <div className="bg-white/10 rounded-2xl p-8">
              <CheckCircleIcon className="w-12 h-12 mx-auto mb-4 text-gold-400" />
              <p className="text-white text-xl font-semibold">You&apos;re in!</p>
              <p className="text-light-300">Check your inbox for your first exclusive bonus.</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg bg-white text-navy-800 placeholder-light-500 focus:outline-none focus:ring-2 focus:ring-gold-400"
                  required
                />
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold transition-colors"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-light-400 text-sm mt-4">
                No spam, unsubscribe anytime. 21+ only. Please bet responsibly.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-light-100 border-t border-light-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">4.8/5</div>
              <p className="text-light-600 text-sm">Trustpilot Rating</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">50K+</div>
              <p className="text-light-600 text-sm">Happy Readers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">Daily</div>
              <p className="text-light-600 text-sm">Updated Content</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">100%</div>
              <p className="text-light-600 text-sm">Free to Use</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
