'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Card, Badge, Input } from '@/components/ui';
import {
  ArrowRightIcon,
  CheckCircleIcon,
  GiftIcon,
  ShieldIcon,
  TrendUpIcon,
  FootballIcon,
  CasinoIcon,
  MailIcon,
  FireIcon,
  TrophyIcon,
  ClockIcon,
  PlayIcon
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
      {/* Hero Section - Sportsbook Style */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden bg-gradient-navy">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=1920&q=80"
            alt="Sports betting"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-800 via-navy-800/95 to-navy-800/50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="gold" className="animate-pulse">
                  <FireIcon className="w-4 h-4 mr-1" />
                  HOT BONUS
                </Badge>
                <span className="text-gold-400 text-sm font-medium">Limited Time Offer</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                UP TO{' '}
                <span className="text-gold-400">$2,500</span>
                <br />
                IN WELCOME BONUSES
              </h1>

              <p className="text-xl text-dark-300 mb-8 max-w-lg">
                Join thousands of winners. Get the best odds on NFL, NBA, MLB, NHL and more. Fast payouts guaranteed.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/signup">
                  <Button variant="gold" size="lg" iconRight={<ArrowRightIcon className="w-5 h-5" />}>
                    Claim Your Bonus
                  </Button>
                </Link>
                <Link href="/sportsbooks">
                  <Button variant="outline" size="lg">
                    View All Sportsbooks
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-6 pt-6 border-t border-navy-600">
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-gold-400" />
                  <span className="text-dark-300 text-sm">Fast Payouts</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldIcon className="w-5 h-5 text-gold-400" />
                  <span className="text-dark-300 text-sm">Licensed & Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendUpIcon className="w-5 h-5 text-gold-400" />
                  <span className="text-dark-300 text-sm">Best Odds</span>
                </div>
              </div>
            </div>

            {/* Hero Promo Card */}
            <div className="hidden lg:block">
              <div className="bg-gradient-to-br from-navy-700 to-navy-800 rounded-2xl p-8 border border-navy-600 shadow-2xl">
                <div className="text-center mb-6">
                  <TrophyIcon className="w-16 h-16 mx-auto text-gold-400 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">New Player Special</h3>
                  <p className="text-dark-400">Sign up today and get instant access</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 p-4 bg-navy-600/50 rounded-xl">
                    <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center text-navy-900 font-bold">1</div>
                    <div>
                      <p className="text-white font-medium">100% First Deposit Match</p>
                      <p className="text-dark-400 text-sm">Up to $1,000</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-navy-600/50 rounded-xl">
                    <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center text-navy-900 font-bold">2</div>
                    <div>
                      <p className="text-white font-medium">$500 Risk-Free Bet</p>
                      <p className="text-dark-400 text-sm">On your second bet</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-navy-600/50 rounded-xl">
                    <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center text-navy-900 font-bold">3</div>
                    <div>
                      <p className="text-white font-medium">$1,000 Casino Credits</p>
                      <p className="text-dark-400 text-sm">Free play bonus</p>
                    </div>
                  </div>
                </div>

                <Link href="/signup">
                  <Button variant="gold" fullWidth size="lg">
                    Get Started Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* As Featured On - Media Partners Bar */}
      <section className="bg-navy-900 py-8 border-y border-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-dark-400 text-sm uppercase tracking-wider font-medium">As Featured On</p>
            <div className="flex items-center gap-8 md:gap-12 flex-wrap justify-center">
              {mediaPartners.map((partner) => (
                <div key={partner.id} className="text-dark-500 hover:text-dark-300 transition-colors">
                  <span className="text-lg font-bold tracking-wide">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sports Categories with League Logos */}
      <section className="py-16 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Bet On Your Favorite Sports
            </h2>
            <p className="text-dark-400 text-lg">
              The best odds on all major leagues and sports
            </p>
          </div>

          {/* League Logos Grid */}
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mb-12">
            {featuredLeagues.map((league) => (
              <Link
                key={league.id}
                href={`/sports/${league.id}`}
                className="group flex flex-col items-center p-4 bg-navy-700 hover:bg-navy-600 rounded-xl transition-all hover:scale-105"
              >
                <div className="w-12 h-12 mb-2 flex items-center justify-center bg-navy-600 group-hover:bg-navy-500 rounded-lg">
                  <span className="text-2xl font-bold text-gold-400">{league.shortName.charAt(0)}</span>
                </div>
                <span className="text-dark-300 text-xs font-medium text-center">{league.shortName}</span>
              </Link>
            ))}
          </div>

          {/* Sport Category Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {sportCategories.filter(s => s.featured).map((sport) => (
              <Link
                key={sport.id}
                href={`/sports/${sport.slug}`}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-navy-700 to-navy-800 p-6 border border-navy-600 hover:border-gold-500 transition-all"
              >
                <div className="text-4xl mb-3">{sport.icon}</div>
                <h3 className="text-white font-bold mb-1">{sport.name}</h3>
                <p className="text-dark-400 text-xs">{sport.leagues.length} Leagues</p>
                <ArrowRightIcon className="absolute top-4 right-4 w-5 h-5 text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Live Betting Promo */}
      <section className="py-16 bg-gradient-to-r from-gold-600 to-gold-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-navy-900 rounded-2xl flex items-center justify-center">
                <PlayIcon className="w-10 h-10 text-gold-400" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-navy-900">Live In-Game Betting</h3>
                <p className="text-navy-800">Bet on the action as it happens with real-time odds</p>
              </div>
            </div>
            <Link href="/live">
              <Button variant="secondary" size="lg" iconRight={<ArrowRightIcon className="w-5 h-5" />}>
                Bet Live Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Top Sportsbooks */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Top Rated Sportsbooks</h2>
              <p className="text-dark-400">Hand-picked betting sites with the best bonuses</p>
            </div>
            <Link href="/sportsbooks" className="hidden md:block">
              <Button variant="outline" iconRight={<ArrowRightIcon className="w-5 h-5" />}>
                View All
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredOffers.filter(o => o.type === 'sportsbook').slice(0, 3).map((offer, index) => (
              <Card key={offer.id} dark hover className="relative overflow-hidden">
                {index === 0 && (
                  <div className="absolute top-0 right-0 bg-gradient-gold text-navy-900 text-xs font-bold px-4 py-1.5 rounded-bl-xl">
                    #1 RATED
                  </div>
                )}

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-navy-700 rounded-xl flex items-center justify-center">
                    <FootballIcon className="w-8 h-8 text-gold-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">{offer.name}</h3>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-sm ${i < Math.floor(offer.rating) ? 'text-gold-400' : 'text-navy-600'}`}>
                          ★
                        </span>
                      ))}
                      <span className="text-dark-400 text-sm ml-1">{offer.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-navy-700/50 rounded-xl p-4 mb-4 border border-navy-600">
                  <p className="text-gold-400 font-bold text-2xl mb-1">{offer.bonusAmount}</p>
                  <p className="text-dark-300 text-sm">{offer.bonusDescription}</p>
                </div>

                <ul className="space-y-2 mb-6">
                  {offer.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-dark-300 text-sm">
                      <CheckCircleIcon className="w-4 h-4 text-gold-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3">
                  <Link href={`/reviews/${offer.slug}`} className="flex-1">
                    <Button variant="ghost" fullWidth size="sm">
                      Review
                    </Button>
                  </Link>
                  <Link href={offer.affiliateUrl} className="flex-1">
                    <Button variant="gold" fullWidth size="sm">
                      Claim Bonus
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10 md:hidden">
            <Link href="/sportsbooks">
              <Button variant="outline" iconRight={<ArrowRightIcon className="w-5 h-5" />}>
                View All Sportsbooks
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Locker Room - Articles Section */}
      <section className="py-16 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gold-500 rounded-xl flex items-center justify-center">
                <TrophyIcon className="w-6 h-6 text-navy-900" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">The Locker Room</h2>
                <p className="text-dark-400">Expert picks, analysis & betting guides</p>
              </div>
            </div>
            <Link href="/articles" className="hidden md:block">
              <Button variant="outline" iconRight={<ArrowRightIcon className="w-5 h-5" />}>
                All Articles
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentArticles.map((article, index) => (
              <Link key={article.id} href={`/articles/${article.slug}`}>
                <Card dark hover className="h-full">
                  <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                    {index === 0 && (
                      <div className="absolute top-3 left-3">
                        <Badge variant="gold">
                          <FireIcon className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="primary" size="sm">{article.league || article.sport}</Badge>
                    <span className="text-dark-500 text-xs flex items-center gap-1">
                      <ClockIcon className="w-3 h-3" />
                      {article.readTime} min read
                    </span>
                  </div>

                  <h3 className="font-bold text-white text-lg mb-2 line-clamp-2 hover:text-gold-400 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-dark-400 text-sm line-clamp-2">
                    {article.excerpt}
                  </p>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10 md:hidden">
            <Link href="/articles">
              <Button variant="outline" iconRight={<ArrowRightIcon className="w-5 h-5" />}>
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Promotions */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-2">Latest Promotions</h2>
            <p className="text-dark-400">Exclusive bonus codes and welcome offers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredBonuses.slice(0, 4).map((bonus) => (
              <Card key={bonus.id} dark hover className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-32 h-24 bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <GiftIcon className="w-10 h-10 text-navy-900" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="gold" size="sm">{bonus.type.replace('-', ' ').toUpperCase()}</Badge>
                    <span className="text-dark-500 text-sm">{bonus.offerName}</span>
                  </div>
                  <h3 className="font-bold text-white text-xl mb-2">{bonus.title}</h3>
                  <p className="text-dark-400 text-sm mb-4">{bonus.description}</p>
                  <div className="flex items-center justify-between">
                    {bonus.code && (
                      <div className="bg-navy-700 px-4 py-2 rounded-lg border border-dashed border-gold-500">
                        <span className="text-gold-400 font-mono font-bold">{bonus.code}</span>
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

      {/* Casino Section */}
      <section className="py-16 bg-gradient-to-br from-navy-800 to-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="gold" className="mb-4">
                <CasinoIcon className="w-4 h-4 mr-1" />
                ONLINE CASINO
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Play 1000+ Casino Games
              </h2>
              <p className="text-dark-300 text-lg mb-6">
                Slots, blackjack, roulette, live dealer and more. Get up to $2,000 in casino bonuses at our top-rated online casinos.
              </p>

              <ul className="space-y-3 mb-8">
                {['1000+ Slot Games', 'Live Dealer Tables', 'Progressive Jackpots', 'Instant Withdrawals'].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-dark-300">
                    <CheckCircleIcon className="w-5 h-5 text-gold-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href="/casinos">
                <Button variant="gold" size="lg" iconRight={<ArrowRightIcon className="w-5 h-5" />}>
                  Explore Casinos
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {featuredOffers.filter(o => o.type === 'casino').slice(0, 4).map((casino) => (
                <Link key={casino.id} href={`/reviews/${casino.slug}`}>
                  <Card dark hover className="text-center p-4">
                    <div className="w-12 h-12 bg-gold-500/10 rounded-xl mx-auto mb-3 flex items-center justify-center">
                      <CasinoIcon className="w-6 h-6 text-gold-400" />
                    </div>
                    <h4 className="font-bold text-white text-sm mb-1">{casino.name}</h4>
                    <p className="text-gold-400 text-sm font-bold">{casino.bonusAmount}</p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-gold-600 to-gold-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MailIcon className="w-16 h-16 mx-auto mb-6 text-navy-900" />
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Get Exclusive Betting Tips
          </h2>
          <p className="text-navy-800 text-lg mb-8">
            Join 50,000+ bettors getting free picks, bonuses, and betting guides delivered to their inbox.
          </p>

          {subscribed ? (
            <div className="bg-navy-900/20 rounded-2xl p-8">
              <CheckCircleIcon className="w-12 h-12 mx-auto mb-4 text-navy-900" />
              <p className="text-navy-900 text-xl font-semibold">You&apos;re in!</p>
              <p className="text-navy-800">Check your inbox for your first exclusive bonus.</p>
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
                  className="flex-1 bg-white text-navy-900"
                  required
                />
                <Button type="submit" variant="secondary">
                  Subscribe
                </Button>
              </div>
              <p className="text-navy-800 text-sm mt-4">
                No spam, unsubscribe anytime. 21+ only. Please bet responsibly.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-navy-900 border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gold-400 mb-2">4.8/5</div>
              <p className="text-dark-400 text-sm">Trustpilot Rating</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold-400 mb-2">50K+</div>
              <p className="text-dark-400 text-sm">Happy Bettors</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold-400 mb-2">24/7</div>
              <p className="text-dark-400 text-sm">Customer Support</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold-400 mb-2">$10M+</div>
              <p className="text-dark-400 text-sm">Bonuses Claimed</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
