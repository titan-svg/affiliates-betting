'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button, Card, Badge } from '@/components/ui';
import {
  ArrowRightIcon,
  ClockIcon,
  UserIcon,
  CalendarIcon,
  TwitterIcon,
  FacebookIcon,
  ChevronRightIcon,
  GiftIcon,
  FireIcon
} from '@/components/icons';
import { getArticleBySlug, getRecentArticles, getFeaturedOffers } from '@/data/mockData';

export default function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const article = getArticleBySlug(resolvedParams.slug);
  const relatedArticles = getRecentArticles(3).filter(a => a.slug !== resolvedParams.slug);
  const featuredOffer = getFeaturedOffers().find(o => o.type === 'sportsbook');

  if (!article) {
    notFound();
  }

  return (
    <main className="pt-[104px] bg-navy-900 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-navy-800 border-b border-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-dark-400 hover:text-gold-400">Home</Link>
            <ChevronRightIcon className="w-4 h-4 text-dark-600" />
            <Link href="/articles" className="text-dark-400 hover:text-gold-400">Locker Room</Link>
            <ChevronRightIcon className="w-4 h-4 text-dark-600" />
            <span className="text-gold-400">{article.category}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <article className="lg:col-span-2">
            {/* Article Header */}
            <header className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="gold">{article.league || article.sport}</Badge>
                <Badge variant="primary">{article.category}</Badge>
                {article.featured && (
                  <Badge variant="gold">
                    <FireIcon className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-dark-400 text-sm mb-6">
                <span className="flex items-center gap-2">
                  <UserIcon className="w-4 h-4" />
                  {article.author}
                </span>
                <span className="flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4" />
                  {article.publishedAt}
                </span>
                <span className="flex items-center gap-2">
                  <ClockIcon className="w-4 h-4" />
                  {article.readTime} min read
                </span>
              </div>

              {/* Share Buttons */}
              <div className="flex items-center gap-4">
                <span className="text-dark-500 text-sm">Share:</span>
                <button className="w-10 h-10 bg-navy-700 hover:bg-navy-600 rounded-lg flex items-center justify-center text-dark-400 hover:text-gold-400 transition-colors">
                  <TwitterIcon className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-navy-700 hover:bg-navy-600 rounded-lg flex items-center justify-center text-dark-400 hover:text-gold-400 transition-colors">
                  <FacebookIcon className="w-5 h-5" />
                </button>
              </div>
            </header>

            {/* Cover Image */}
            <div className="relative h-64 md:h-96 mb-8 rounded-2xl overflow-hidden">
              <Image
                src={article.coverImage}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl text-dark-300 mb-8 leading-relaxed">
                {article.excerpt}
              </p>

              <div className="text-dark-300 leading-relaxed whitespace-pre-line">
                {article.content}
              </div>
            </div>

            {/* In-Article CTA Banner */}
            <div className="my-12 bg-gradient-to-r from-gold-600 to-gold-500 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-navy-900 rounded-xl flex items-center justify-center">
                    <GiftIcon className="w-8 h-8 text-gold-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-900">Get $1,500 in Bonus Bets</h3>
                    <p className="text-navy-800">Sign up with BetMGM and claim your bonus today!</p>
                  </div>
                </div>
                <Link href="/sportsbooks">
                  <Button variant="secondary" iconRight={<ArrowRightIcon className="w-5 h-5" />}>
                    Claim Bonus
                  </Button>
                </Link>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-navy-700">
              {article.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-navy-700 text-dark-300 text-sm rounded-full">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Author Box */}
            <div className="mt-8 p-6 bg-navy-800 rounded-2xl border border-navy-700">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center">
                  <span className="text-navy-900 font-bold text-xl">{article.author.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="text-white font-bold">{article.author}</h4>
                  <p className="text-dark-400 text-sm">Senior Sports Analyst</p>
                </div>
              </div>
              <p className="text-dark-400 mt-4">
                Expert sports analyst with over 10 years of experience covering NFL, NBA, and MLB betting markets.
              </p>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            {/* Featured Sportsbook */}
            {featuredOffer && (
              <Card dark className="sticky top-[140px]">
                <div className="text-center mb-4">
                  <Badge variant="gold" className="mb-3">TOP RATED</Badge>
                  <h3 className="text-xl font-bold text-white">{featuredOffer.name}</h3>
                </div>

                <div className="bg-navy-700/50 rounded-xl p-4 mb-4 border border-gold-500/20">
                  <p className="text-gold-400 font-bold text-2xl text-center mb-1">{featuredOffer.bonusAmount}</p>
                  <p className="text-dark-400 text-sm text-center">{featuredOffer.bonusDescription}</p>
                </div>

                {featuredOffer.bonusCode && (
                  <div className="bg-navy-700 p-3 rounded-lg mb-4 text-center border border-dashed border-gold-500">
                    <span className="text-dark-500 text-xs">USE CODE:</span>
                    <span className="text-gold-400 font-mono font-bold ml-2">{featuredOffer.bonusCode}</span>
                  </div>
                )}

                <Link href={featuredOffer.affiliateUrl}>
                  <Button variant="gold" fullWidth>
                    Claim Bonus
                  </Button>
                </Link>
              </Card>
            )}

            {/* Related Articles */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Related Articles</h3>
              <div className="space-y-4">
                {relatedArticles.slice(0, 3).map((related) => (
                  <Link key={related.id} href={`/articles/${related.slug}`}>
                    <Card dark hover className="p-4">
                      <div className="flex gap-4">
                        <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={related.coverImage}
                            alt={related.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <Badge variant="primary" size="sm" className="mb-2">{related.league || related.sport}</Badge>
                          <h4 className="text-white font-medium text-sm line-clamp-2 hover:text-gold-400 transition-colors">
                            {related.title}
                          </h4>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <Card dark className="bg-gradient-to-br from-navy-700 to-navy-800">
              <h3 className="text-lg font-bold text-white mb-2">Daily Picks Newsletter</h3>
              <p className="text-dark-400 text-sm mb-4">
                Get expert picks delivered to your inbox every morning.
              </p>
              <Link href="/#newsletter">
                <Button variant="gold" fullWidth size="sm">
                  Subscribe Free
                </Button>
              </Link>
            </Card>
          </aside>
        </div>
      </div>

      {/* More Articles */}
      <section className="py-12 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">More From The Locker Room</h2>
            <Link href="/articles">
              <Button variant="outline" size="sm" iconRight={<ArrowRightIcon className="w-4 h-4" />}>
                View All
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getRecentArticles(3).map((recent) => (
              <Link key={recent.id} href={`/articles/${recent.slug}`}>
                <Card dark hover>
                  <div className="relative h-40 mb-4 rounded-xl overflow-hidden">
                    <Image
                      src={recent.coverImage}
                      alt={recent.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <Badge variant="primary" size="sm" className="mb-2">{recent.league || recent.sport}</Badge>
                  <h3 className="font-bold text-white line-clamp-2 hover:text-gold-400 transition-colors">
                    {recent.title}
                  </h3>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
