'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
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
    <main className="pt-[104px] bg-light-100 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-light-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-light-600 hover:text-red-600">Home</Link>
            <ChevronRightIcon className="w-4 h-4 text-light-400" />
            <Link href="/articles" className="text-light-600 hover:text-red-600">News</Link>
            <ChevronRightIcon className="w-4 h-4 text-light-400" />
            <span className="text-red-600">{article.category}</span>
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
                <span className="bg-navy-800 text-white text-xs font-medium px-3 py-1 rounded">{article.league || article.sport}</span>
                <span className="bg-red-100 text-red-600 text-xs font-medium px-3 py-1 rounded">{article.category}</span>
                {article.featured && (
                  <span className="bg-gold-100 text-gold-700 text-xs font-bold px-3 py-1 rounded flex items-center gap-1">
                    <FireIcon className="w-3 h-3" />
                    Featured
                  </span>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-navy-800 mb-6">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-light-600 text-sm mb-6">
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
                <span className="text-light-500 text-sm">Share:</span>
                <button className="w-10 h-10 bg-light-200 hover:bg-light-300 rounded-lg flex items-center justify-center text-navy-700 hover:text-red-600 transition-colors">
                  <TwitterIcon className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-light-200 hover:bg-light-300 rounded-lg flex items-center justify-center text-navy-700 hover:text-red-600 transition-colors">
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
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-navy-700 mb-8 leading-relaxed">
                {article.excerpt}
              </p>

              <div className="text-navy-700 leading-relaxed whitespace-pre-line">
                {article.content}
              </div>
            </div>

            {/* In-Article CTA Banner */}
            <div className="my-12 bg-red-600 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                    <GiftIcon className="w-8 h-8 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Get $1,500 in Bonus Bets</h3>
                    <p className="text-red-100">Sign up with BetMGM and claim your bonus today!</p>
                  </div>
                </div>
                <Link href="/sportsbooks">
                  <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-light-100 transition-colors flex items-center gap-2">
                    Claim Bonus
                    <ArrowRightIcon className="w-5 h-5" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-light-300">
              {article.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-light-200 text-navy-700 text-sm rounded-full">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Author Box */}
            <div className="mt-8 p-6 bg-white rounded-2xl border border-light-300">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{article.author.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="text-navy-800 font-bold">{article.author}</h4>
                  <p className="text-light-600 text-sm">Senior Sports Analyst</p>
                </div>
              </div>
              <p className="text-light-600 mt-4">
                Expert sports analyst with over 10 years of experience covering NFL, NBA, and MLB betting markets.
              </p>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            {/* Featured Sportsbook */}
            {featuredOffer && (
              <div className="bg-white rounded-2xl p-6 border border-light-300 sticky top-[140px]">
                <div className="text-center mb-4">
                  <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded">TOP RATED</span>
                  <h3 className="text-xl font-bold text-navy-800 mt-3">{featuredOffer.name}</h3>
                </div>

                <div className="bg-light-100 rounded-xl p-4 mb-4 border border-red-200">
                  <p className="text-red-600 font-bold text-2xl text-center mb-1">{featuredOffer.bonusAmount}</p>
                  <p className="text-light-600 text-sm text-center">{featuredOffer.bonusDescription}</p>
                </div>

                {featuredOffer.bonusCode && (
                  <div className="bg-light-200 p-3 rounded-lg mb-4 text-center border border-dashed border-red-400">
                    <span className="text-light-500 text-xs">USE CODE:</span>
                    <span className="text-red-600 font-mono font-bold ml-2">{featuredOffer.bonusCode}</span>
                  </div>
                )}

                <Link href={featuredOffer.affiliateUrl}>
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold transition-colors">
                    Claim Bonus
                  </button>
                </Link>
              </div>
            )}

            {/* Related Articles */}
            <div>
              <h3 className="text-xl font-bold text-navy-800 mb-4">Related Articles</h3>
              <div className="space-y-4">
                {relatedArticles.slice(0, 3).map((related) => (
                  <Link key={related.id} href={`/articles/${related.slug}`}>
                    <div className="bg-white rounded-xl p-4 border border-light-300 hover:shadow-md transition-all">
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
                          <span className="bg-navy-800 text-white text-xs font-medium px-2 py-0.5 rounded">{related.league || related.sport}</span>
                          <h4 className="text-navy-800 font-medium text-sm line-clamp-2 mt-2 hover:text-red-600 transition-colors">
                            {related.title}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-navy-800 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">Daily Picks Newsletter</h3>
              <p className="text-light-400 text-sm mb-4">
                Get expert picks delivered to your inbox every morning.
              </p>
              <Link href="/#newsletter">
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2.5 rounded-lg font-bold text-sm transition-colors">
                  Subscribe Free
                </button>
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {/* More Articles */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-navy-800">More Articles</h2>
            <Link href="/articles" className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold text-sm">
              View All
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getRecentArticles(3).map((recent) => (
              <Link key={recent.id} href={`/articles/${recent.slug}`}>
                <div className="bg-light-100 rounded-2xl overflow-hidden border border-light-300 hover:shadow-lg transition-all">
                  <div className="relative h-40">
                    <Image
                      src={recent.coverImage}
                      alt={recent.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <span className="bg-navy-800 text-white text-xs font-medium px-2 py-1 rounded">{recent.league || recent.sport}</span>
                    <h3 className="font-bold text-navy-800 mt-3 line-clamp-2 hover:text-red-600 transition-colors">
                      {recent.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
