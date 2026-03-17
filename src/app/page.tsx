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
import { getFeaturedOffers, getRecentArticles, sportCategories, leagues, getFeaturedBonuses } from '@/data/mockData';

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

  // Mock odds data for display
  const mockOdds = [
    { id: 1, sport: 'NFL', game: 'Chiefs vs Bills', team1: 'Chiefs', team2: 'Bills', odds1: '-145', odds2: '+125', time: 'Today 8:00 PM' },
    { id: 2, sport: 'NBA', game: 'Lakers vs Celtics', team1: 'Lakers', team2: 'Celtics', odds1: '+180', odds2: '-200', time: 'Today 9:30 PM' },
    { id: 3, sport: 'NHL', game: 'Rangers vs Bruins', team1: 'Rangers', team2: 'Bruins', odds1: '+110', odds2: '-130', time: 'Tomorrow 7:00 PM' },
  ];

  return (
    <main className="pt-[72px]">
      {/* Hero Section - Large Sports Image Style */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=1920&q=80"
            alt="Football Player"
            fill
            className="object-cover"
            priority
          />
          {/* Purple/Magenta Gradient Overlay like client's image */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-purple-800/70 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight uppercase">
              GET INTO THE ACTION
              <span className="block text-orange-400">UP TO $1,500</span>
              <span className="block">WELCOME BONUS</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 font-medium">
              FAST PAYOUTS, <span className="text-orange-400">TOP ODDS</span>. REAL EXCITEMENT.
            </p>

            <Link
              href="/sportsbooks"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-full font-black text-xl transition-all shadow-lg hover:shadow-xl uppercase tracking-wide"
            >
              BET NOW
            </Link>
          </div>
        </div>
      </section>

      {/* Sportsbook Promotions - Card Style like client's image2 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-10">
            Sportsbook Promotions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredOffers.filter(o => o.type === 'sportsbook').slice(0, 4).map((offer) => (
              <div key={offer.id} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all text-center">
                {/* Logo Area */}
                <div className="h-16 flex items-center justify-center mb-4">
                  <span className="text-2xl font-black text-navy-800">{offer.name}</span>
                </div>

                {/* Bonus Info */}
                <p className="text-blue-600 font-bold text-lg mb-1">
                  {offer.bonusDescription?.split(' ').slice(0, 3).join(' ')}
                </p>
                <p className="text-blue-600 font-bold text-2xl mb-4">
                  {offer.bonusAmount}
                </p>

                {/* CTA Button */}
                <Link href={offer.affiliateUrl}>
                  <button className="w-full py-3 px-6 bg-navy-800 hover:bg-navy-900 text-white rounded-lg font-bold text-sm uppercase tracking-wide transition-colors">
                    Claim Now
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Second Hero Banner - Orange Style like client's image2 */}
      <section className="relative min-h-[400px] flex items-center overflow-hidden bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
          <Image
            src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&q=80"
            alt="Football Player"
            fill
            className="object-cover object-center opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-light text-white mb-2">
              THE THRILL OF <span className="font-bold">SPORTS,</span>
            </h2>
            <h2 className="text-3xl md:text-5xl font-light text-white mb-6">
              TAKEN TO THE <span className="font-bold">NEXT LEVEL</span>
            </h2>

            <p className="text-xl text-white/90 mb-8">
              BET ON THE BEST ODDS
            </p>

            <Link
              href="/sportsbooks"
              className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:bg-gray-100"
            >
              View All Sportsbooks
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Live Odds Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-navy-800 mb-2">Live Odds</h2>
              <p className="text-gray-600">Compare odds from top sportsbooks</p>
            </div>
            <Link href="/odds" className="hidden md:inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold">
              View All Odds
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>

          <div className="bg-navy-800 rounded-2xl overflow-hidden">
            {/* Odds Header */}
            <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-navy-900 text-gray-400 text-sm font-medium">
              <div className="col-span-2">SPORT</div>
              <div className="col-span-4">MATCHUP</div>
              <div className="col-span-2 text-center">TEAM 1</div>
              <div className="col-span-2 text-center">TEAM 2</div>
              <div className="col-span-2 text-right">TIME</div>
            </div>

            {/* Odds Rows */}
            {mockOdds.map((game) => (
              <div key={game.id} className="grid grid-cols-12 gap-4 px-6 py-5 border-t border-navy-700 items-center hover:bg-navy-700/50 transition-colors">
                <div className="col-span-2">
                  <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {game.sport}
                  </span>
                </div>
                <div className="col-span-4 text-white font-medium">
                  {game.game}
                </div>
                <div className="col-span-2 text-center">
                  <button className="bg-navy-600 hover:bg-orange-500 text-white px-4 py-2 rounded-lg font-bold transition-colors w-full">
                    {game.team1} <span className="text-orange-400">{game.odds1}</span>
                  </button>
                </div>
                <div className="col-span-2 text-center">
                  <button className="bg-navy-600 hover:bg-orange-500 text-white px-4 py-2 rounded-lg font-bold transition-colors w-full">
                    {game.team2} <span className="text-orange-400">{game.odds2}</span>
                  </button>
                </div>
                <div className="col-span-2 text-right text-gray-400 text-sm">
                  {game.time}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <p className="text-gray-500 text-sm">Odds updated in real-time. Click any line to bet.</p>
          </div>
        </div>
      </section>

      {/* Sports Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
              Bet On Your Favorite Sports
            </h2>
            <p className="text-gray-600 text-lg">
              Expert picks and analysis for all major leagues
            </p>
          </div>

          {/* League Logos Grid */}
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mb-12">
            {featuredLeagues.map((league) => (
              <Link
                key={league.id}
                href={`/sports/${league.id}`}
                className="group flex flex-col items-center p-4 bg-white hover:bg-orange-50 rounded-xl transition-all hover:shadow-md border border-gray-200"
              >
                <div className="w-12 h-12 mb-2 flex items-center justify-center bg-navy-800 group-hover:bg-orange-500 rounded-lg transition-colors">
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
                className="group relative overflow-hidden rounded-xl bg-white p-6 border border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-3">{sport.icon}</div>
                <h3 className="text-navy-800 font-bold mb-1">{sport.name}</h3>
                <p className="text-gray-600 text-xs">{sport.leagues.length} Leagues</p>
                <ArrowRightIcon className="absolute top-4 right-4 w-5 h-5 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top Sportsbooks - Full Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-navy-800 mb-2">Top Rated Sportsbooks</h2>
              <p className="text-gray-600">Hand-picked betting sites with the best bonuses</p>
            </div>
            <Link href="/sportsbooks" className="hidden md:inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold">
              View All
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredOffers.filter(o => o.type === 'sportsbook').slice(0, 3).map((offer, index) => (
              <div key={offer.id} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all relative">
                {index === 0 && (
                  <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-xl">
                    #1 RATED
                  </div>
                )}

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-navy-800 rounded-xl flex items-center justify-center">
                    <FootballIcon className="w-8 h-8 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-800 text-lg">{offer.name}</h3>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} filled={i < Math.floor(offer.rating)} className={`w-4 h-4 ${i < Math.floor(offer.rating) ? 'text-orange-500' : 'text-gray-300'}`} />
                      ))}
                      <span className="text-gray-600 text-sm ml-1">{offer.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 mb-4 border border-gray-200">
                  <p className="text-orange-600 font-bold text-2xl mb-1">{offer.bonusAmount}</p>
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
                    <button className="w-full py-2.5 px-4 border border-gray-300 text-navy-700 rounded-lg font-medium hover:bg-gray-100 transition-colors text-sm">
                      Read Review
                    </button>
                  </Link>
                  <Link href={offer.affiliateUrl} className="flex-1">
                    <button className="w-full py-2.5 px-4 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-bold transition-colors text-sm">
                      Claim Bonus
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Promotions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-navy-800 mb-2">Latest Promotions</h2>
            <p className="text-gray-600">Exclusive bonus codes and welcome offers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredBonuses.slice(0, 4).map((bonus) => (
              <div key={bonus.id} className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-24 h-20 bg-gradient-orange rounded-xl flex items-center justify-center flex-shrink-0">
                  <GiftIcon className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2 py-1 rounded">{bonus.type.replace('-', ' ').toUpperCase()}</span>
                    <span className="text-gray-500 text-sm">{bonus.offerName}</span>
                  </div>
                  <h3 className="font-bold text-navy-800 text-xl mb-2">{bonus.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{bonus.description}</p>
                  <div className="flex items-center justify-between">
                    {bonus.code && (
                      <div className="bg-gray-100 px-4 py-2 rounded-lg border border-dashed border-orange-400">
                        <span className="text-orange-600 font-mono font-bold">{bonus.code}</span>
                      </div>
                    )}
                    <Link href={bonus.affiliateUrl}>
                      <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-bold text-sm transition-colors">
                        Claim Now
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
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                <TrophyIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-navy-800">Sports News & Picks</h2>
                <p className="text-gray-600">Expert analysis and betting guides</p>
              </div>
            </div>
            <Link href="/articles" className="hidden md:inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold">
              All Articles
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentArticles.map((article, index) => (
              <Link key={article.id} href={`/articles/${article.slug}`}>
                <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all h-full">
                  <div className="relative h-48">
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                    {index === 0 && (
                      <div className="absolute top-3 left-3">
                        <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                          <FireIcon className="w-3 h-3" />
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-navy-800 text-white text-xs font-medium px-2 py-1 rounded">{article.league || article.sport}</span>
                      <span className="text-gray-500 text-xs flex items-center gap-1">
                        <ClockIcon className="w-3 h-3" />
                        {article.readTime} min read
                      </span>
                    </div>

                    <h3 className="font-bold text-navy-800 text-lg mb-2 line-clamp-2 hover:text-orange-600 transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-gray-600 text-sm line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MailIcon className="w-16 h-16 mx-auto mb-6 text-orange-400" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Exclusive Betting Tips
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Join 50,000+ bettors getting free picks, bonuses, and betting guides delivered to their inbox.
          </p>

          {subscribed ? (
            <div className="bg-white/10 rounded-2xl p-8">
              <CheckCircleIcon className="w-12 h-12 mx-auto mb-4 text-orange-400" />
              <p className="text-white text-xl font-semibold">You&apos;re in!</p>
              <p className="text-gray-300">Check your inbox for your first exclusive bonus.</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg bg-white text-navy-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  required
                />
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">4.8/5</div>
              <p className="text-gray-600 text-sm">Trustpilot Rating</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">50K+</div>
              <p className="text-gray-600 text-sm">Happy Readers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">Daily</div>
              <p className="text-gray-600 text-sm">Updated Content</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
              <p className="text-gray-600 text-sm">Free to Use</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
