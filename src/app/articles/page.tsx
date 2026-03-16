'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Card, Badge } from '@/components/ui';
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
    <main className="pt-[104px] bg-navy-900 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-gold-500 rounded-xl flex items-center justify-center">
              <TrophyIcon className="w-8 h-8 text-navy-900" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-white">The Locker Room</h1>
              <p className="text-dark-400">Expert picks, analysis & betting guides</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-navy-800 border-y border-navy-700 sticky top-[104px] z-40">
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
                      ? 'bg-gold-500 text-navy-900'
                      : 'bg-navy-700 text-dark-300 hover:bg-navy-600'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div className="h-6 w-px bg-navy-600" />

            {/* Sport Filters */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveSport('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  activeSport === 'all'
                    ? 'bg-accent-500 text-white'
                    : 'bg-navy-700 text-dark-300 hover:bg-navy-600'
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
                      ? 'bg-accent-500 text-white'
                      : 'bg-navy-700 text-dark-300 hover:bg-navy-600'
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
        <section className="py-12 bg-navy-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href={`/articles/${featuredArticle.slug}`}>
              <Card dark hover className="grid md:grid-cols-2 gap-8 p-0 overflow-hidden">
                <div className="relative h-64 md:h-full min-h-[300px]">
                  <Image
                    src={featuredArticle.coverImage}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="gold">
                      <FireIcon className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="primary">{featuredArticle.league || featuredArticle.sport}</Badge>
                    <Badge variant="primary" size="sm">{featuredArticle.category}</Badge>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 hover:text-gold-400 transition-colors">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-dark-400 mb-6">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-dark-500 text-sm">
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
              </Card>
            </Link>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-12 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">
              {activeCategory === 'all' ? 'Latest Articles' : categories.find(c => c.id === activeCategory)?.name}
              {activeSport !== 'all' && ` - ${sportCategories.find(s => s.id === activeSport)?.name}`}
            </h2>
            <span className="text-dark-500">{filteredArticles.length} articles</span>
          </div>

          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <Link key={article.id} href={`/articles/${article.slug}`}>
                  <Card dark hover className="h-full">
                    <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                      <Image
                        src={article.coverImage}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform hover:scale-105"
                      />
                      {article.featured && (
                        <div className="absolute top-3 left-3">
                          <Badge variant="gold" size="sm">
                            <FireIcon className="w-3 h-3 mr-1" />
                            Hot
                          </Badge>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="primary" size="sm">{article.league || article.sport}</Badge>
                      <Badge variant="gold" size="sm">{article.category}</Badge>
                    </div>

                    <h3 className="font-bold text-white text-lg mb-2 line-clamp-2 hover:text-gold-400 transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-dark-400 text-sm line-clamp-2 mb-4">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-dark-500 text-xs mt-auto pt-4 border-t border-navy-700">
                      <span className="flex items-center gap-1">
                        <UserIcon className="w-3 h-3" />
                        {article.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <ClockIcon className="w-3 h-3" />
                        {article.readTime} min
                      </span>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-dark-400 text-lg mb-4">No articles found for this filter.</p>
              <Button variant="outline" onClick={() => { setActiveCategory('all'); setActiveSport('all'); }}>
                Clear Filters
              </Button>
            </div>
          )}

          {/* Load More */}
          {filteredArticles.length > 6 && (
            <div className="text-center mt-12">
              <Button variant="outline" iconRight={<ArrowRightIcon className="w-5 h-5" />}>
                Load More Articles
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-gold-600 to-gold-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">
            Get Daily Picks Delivered
          </h2>
          <p className="text-navy-800 text-lg mb-8">
            Subscribe to receive expert picks, betting tips, and exclusive promotions.
          </p>
          <Link href="/#newsletter">
            <Button variant="secondary" size="lg">
              Subscribe Now
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
