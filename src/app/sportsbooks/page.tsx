'use client';

import Link from 'next/link';
import { Button, Card, Badge, Rating } from '@/components/ui';
import { CheckCircleIcon, ArrowRightIcon, FootballIcon, ShieldIcon } from '@/components/icons';
import { getOffersByType } from '@/data/mockData';

export default function SportsbooksPage() {
  const sportsbooks = getOffersByType('sportsbook');

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-dark-950 via-dark-900 to-primary-900/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <FootballIcon className="w-8 h-8 text-primary-400" />
            <Badge variant="gold">Updated March 2026</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Best Online Sportsbooks
          </h1>
          <p className="text-dark-200 text-xl max-w-2xl">
            Compare the top-rated sportsbooks in the USA. Get exclusive welcome bonuses up to $1,500 and enjoy the best betting experience.
          </p>
        </div>
      </section>

      {/* Offers List */}
      <section className="py-16 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {sportsbooks.map((offer, index) => (
              <Card key={offer.id} dark className="relative overflow-hidden">
                {index === 0 && (
                  <div className="absolute top-0 left-0 bg-gradient-to-r from-secondary-500 to-secondary-400 text-dark-900 text-xs font-bold px-4 py-1">
                    EDITOR&apos;S CHOICE
                  </div>
                )}

                <div className="flex flex-col lg:flex-row gap-6 pt-4">
                  {/* Rank & Logo */}
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-dark-700 rounded-full flex items-center justify-center">
                      <span className="text-primary-400 font-bold text-xl">#{index + 1}</span>
                    </div>
                    <div className="w-24 h-24 bg-dark-700 rounded-xl flex items-center justify-center">
                      <FootballIcon className="w-12 h-12 text-primary-400" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-2xl font-bold text-white">{offer.name}</h2>
                      <Rating value={offer.rating} size="sm" />
                    </div>
                    <p className="text-dark-300 mb-4">{offer.description}</p>
                    <div className="flex flex-wrap gap-4">
                      {offer.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-dark-300 text-sm">
                          <CheckCircleIcon className="w-4 h-4 text-primary-400" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bonus & CTA */}
                  <div className="lg:w-64 flex flex-col justify-center">
                    <div className="bg-dark-700/50 rounded-xl p-4 mb-4 text-center">
                      <p className="text-secondary-400 font-bold text-3xl">{offer.bonusAmount}</p>
                      <p className="text-dark-300 text-sm">{offer.bonusDescription}</p>
                      {offer.bonusCode && (
                        <div className="mt-2 bg-dark-800 px-3 py-1 rounded-lg inline-block">
                          <span className="text-secondary-400 font-mono text-sm">Code: {offer.bonusCode}</span>
                        </div>
                      )}
                    </div>
                    <Link href={`/reviews/${offer.slug}`}>
                      <Button variant="gold" fullWidth iconRight={<ArrowRightIcon className="w-5 h-5" />}>
                        Get Bonus
                      </Button>
                    </Link>
                    <Link href={`/reviews/${offer.slug}`} className="text-center mt-2 text-dark-400 hover:text-primary-400 text-sm">
                      Read Full Review
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <ShieldIcon className="w-12 h-12 mx-auto mb-4 text-primary-400" />
              <h3 className="text-white font-semibold mb-2">Licensed & Regulated</h3>
              <p className="text-dark-400 text-sm">All sportsbooks are fully licensed in legal US states</p>
            </div>
            <div>
              <CheckCircleIcon className="w-12 h-12 mx-auto mb-4 text-primary-400" />
              <h3 className="text-white font-semibold mb-2">Expert Reviews</h3>
              <p className="text-dark-400 text-sm">Tested and reviewed by our team of betting experts</p>
            </div>
            <div>
              <FootballIcon className="w-12 h-12 mx-auto mb-4 text-primary-400" />
              <h3 className="text-white font-semibold mb-2">Best Odds</h3>
              <p className="text-dark-400 text-sm">Compare odds across multiple sportsbooks</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
