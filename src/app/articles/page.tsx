'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  TrophyIcon,
  ClockIcon,
  FireIcon,
  ArrowRightIcon,
  UserIcon
} from '@/components/icons';
import { articles, sportCategories } from '@/data/mockData';

type CategoryFilter = 'all' | 'picks' | 'news' | 'analysis' | 'guides' | 'promotions';

export default function ArticlesPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [activeSport, setActiveSport] = useState<string>('all');

  const categories: { id: CategoryFilter; name: string }[] = [
    { id: 'all', name: 'All' },
    { id: 'picks', name: 'Expert Picks' },
    { id: 'news', name: 'News' },
    { id: 'analysis', name: 'Analysis' },
    { id: 'guides', name: 'Guides' },
    { id: 'promotions', name: 'Promotions' },
  ];

  const filteredArticles = articles.filter(article => {
    const categoryMatch = activeCategory === 'all' || article.category === activeCategory;
    const sportMatch = activeSport === 'all' || article.sport === activeSport;
    return categoryMatch && sportMatch;
  });

  const featuredArticle = articles.find(a => a.featured);

  return (
    <main className="pt-[104px] bg-light-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-navy-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center">
              <TrophyIcon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-white">Sports News & Picks</h1>
              <p className="text-light-400">Expert analysis and betting guides</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-light-300 sticky top-[104px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 py-4 overflow-x-auto">
            {/* Category Filters */}
            <div className="flex items-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    activeCategory === category.id
                      ? 'bg-red-600 text-white'
                      : 'bg-light-200 text-navy-700 hover:bg-light-300'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div className="h-6 w-px bg-light-300" />

            {/* Sport Filters */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveSport('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  activeSport === 'all'
                    ? 'bg-navy-800 text-white'
                    : 'bg-light-200 text-navy-700 hover:bg-light-300'
                }`}
              >
                All Sports
              </button>
              {sportCategories.filter(s => s.featured).slice(0, 5).map((sport) => (
                <button
                  key={sport.id}
                  onClick={() => setActiveSport(sport.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all flex items-center gap-2 ${
                    activeSport === sport.id
                      ? 'bg-navy-800 text-white'
                      : 'bg-light-200 text-navy-700 hover:bg-light-300'
                  }`}
                >
                  <span>{sport.icon}</span>
                  {sport.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && activeCategory === 'all' && activeSport === 'all' && (
        <section className="py-12 bg-light-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href={`/articles/${featuredArticle.slug}`}>
              <div className="bg-white rounded-2xl overflow-hidden border border-light-300 hover:shadow-xl transition-all grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-full min-h-[300px]">
                  <Image
                    src={featuredArticle.coverImage}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded flex items-center gap-1">
                      <FireIcon className="w-3 h-3" />
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-navy-800 text-white text-xs font-medium px-2 py-1 rounded">{featuredArticle.league || featuredArticle.sport}</span>
                    <span className="bg-red-100 text-red-600 text-xs font-medium px-2 py-1 rounded">{featuredArticle.category}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-navy-800 mb-4 hover:text-red-600 transition-colors">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-light-600 mb-6">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-light-500 text-sm">
                    <span className="flex items-center gap-1">
                      <UserIcon className="w-4 h-4" />
                      {featuredArticle.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <ClockIcon className="w-4 h-4" />
                      {featuredArticle.readTime} min read
                    </span>
                    <span>{featuredArticle.publishedAt}</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-navy-800">
              {activeCategory === 'all' ? 'Latest Articles' : categories.find(c => c.id === activeCategory)?.name}
              {activeSport !== 'all' && ` - ${sportCategories.find(s => s.id === activeSport)?.name}`}
            </h2>
            <span className="text-light-500">{filteredArticles.length} articles</span>
          </div>

          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <Link key={article.id} href={`/articles/${article.slug}`}>
                  <div className="bg-light-100 rounded-2xl overflow-hidden border border-light-300 hover:shadow-lg transition-all h-full">
                    <div className="relative h-48">
                      <Image
                        src={article.coverImage}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                      {article.featured && (
                        <div className="absolute top-3 left-3">
                          <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                            <FireIcon className="w-3 h-3" />
                            Hot
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-navy-800 text-white text-xs font-medium px-2 py-1 rounded">{article.league || article.sport}</span>
                        <span className="bg-gold-100 text-gold-700 text-xs font-medium px-2 py-1 rounded">{article.category}</span>
                      </div>

                      <h3 className="font-bold text-navy-800 text-lg mb-2 line-clamp-2 hover:text-red-600 transition-colors">
                        {article.title}
                      </h3>

                      <p className="text-light-600 text-sm line-clamp-2 mb-4">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-light-500 text-xs pt-4 border-t border-light-300">
                        <span className="flex items-center gap-1">
                          <UserIcon className="w-3 h-3" />
                          {article.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <ClockIcon className="w-3 h-3" />
                          {article.readTime} min
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-light-600 text-lg mb-4">No articles found for this filter.</p>
              <button
                onClick={() => { setActiveCategory('all'); setActiveSport('all'); }}
                className="px-6 py-2 border border-light-400 text-navy-700 rounded-lg font-medium hover:bg-light-200 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Load More */}
          {filteredArticles.length > 6 && (
            <div className="text-center mt-12">
              <button className="inline-flex items-center gap-2 px-6 py-3 border border-light-400 text-navy-700 rounded-lg font-medium hover:bg-light-200 transition-colors">
                Load More Articles
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get Daily Picks Delivered
          </h2>
          <p className="text-red-100 text-lg mb-8">
            Subscribe to receive expert picks, betting tips, and exclusive promotions.
          </p>
          <Link href="/#newsletter">
            <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-light-100 transition-colors">
              Subscribe Now
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
