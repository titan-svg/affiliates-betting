'use client';

import { use } from 'react';
import Link from 'next/link';
import { Button, Card, Badge, Rating } from '@/components/ui';
import {
  ArrowRightIcon,
  CheckCircleIcon,
  XIcon,
  FootballIcon,
  CasinoIcon,
  ShieldIcon,
  GiftIcon,
  CopyIcon
} from '@/components/icons';
import { getOfferBySlug, offers } from '@/data/mockData';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ slug: string }>;
}

export default function ReviewPage({ params }: Props) {
  const { slug } = use(params);
  const offer = getOfferBySlug(slug);

  if (!offer) {
    notFound();
  }

  const Icon = offer.type === 'sportsbook' ? FootballIcon : CasinoIcon;
  const accentColor = offer.type === 'sportsbook' ? 'primary' : 'secondary';

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left */}
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-dark-700 rounded-2xl flex items-center justify-center">
                  <Icon className={`w-10 h-10 text-${accentColor}-400`} />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h1 className="text-3xl md:text-4xl font-bold text-white">{offer.name}</h1>
                    <Badge variant="gold">#{offer.rank} Rated</Badge>
                  </div>
                  <Rating value={offer.rating} size="lg" />
                </div>
              </div>

              <p className="text-dark-200 text-lg mb-6">{offer.description}</p>

              <div className="flex flex-wrap gap-3">
                {offer.features.map((feature, i) => (
                  <Badge key={i} variant="primary">{feature}</Badge>
                ))}
              </div>
            </div>

            {/* Right - CTA Card */}
            <Card dark className="lg:w-96">
              <div className="text-center mb-6">
                <p className={`text-${accentColor}-400 font-bold text-4xl mb-2`}>{offer.bonusAmount}</p>
                <p className="text-dark-300">{offer.bonusDescription}</p>
              </div>

              {offer.bonusCode && (
                <div className="bg-dark-700 p-4 rounded-xl mb-6 text-center">
                  <p className="text-dark-400 text-sm mb-2">Promo Code</p>
                  <div className="flex items-center justify-center gap-2">
                    <span className={`text-${accentColor}-400 font-mono font-bold text-xl`}>{offer.bonusCode}</span>
                    <button className="text-dark-400 hover:text-white">
                      <CopyIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}

              <Button variant="gold" fullWidth size="lg" iconRight={<ArrowRightIcon className="w-5 h-5" />}>
                Claim Bonus Now
              </Button>

              <div className="mt-6 pt-6 border-t border-dark-700">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-dark-400 text-sm">Min Deposit</p>
                    <p className="text-white font-semibold">{offer.minDeposit}</p>
                  </div>
                  <div>
                    <p className="text-dark-400 text-sm">Wagering</p>
                    <p className="text-white font-semibold">{offer.wagering}</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Review */}
              <Card dark>
                <h2 className="text-2xl font-bold text-white mb-4">{offer.name} Review</h2>
                <p className="text-dark-300 leading-relaxed">{offer.fullReview}</p>
              </Card>

              {/* Pros & Cons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card dark>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <CheckCircleIcon className="w-6 h-6 text-green-500" />
                    Pros
                  </h3>
                  <ul className="space-y-3">
                    {offer.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-2 text-dark-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card dark>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <XIcon className="w-6 h-6 text-red-500" />
                    Cons
                  </h3>
                  <ul className="space-y-3">
                    {offer.cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-2 text-dark-300">
                        <XIcon className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>

              {/* Payment Methods */}
              <Card dark>
                <h3 className="text-xl font-bold text-white mb-4">Payment Methods</h3>
                <div className="flex flex-wrap gap-3">
                  {offer.paymentMethods.map((method, i) => (
                    <div key={i} className="bg-dark-700 px-4 py-2 rounded-lg">
                      <span className="text-dark-300">{method}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card dark>
                <h3 className="text-lg font-bold text-white mb-4">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-dark-400">Type</span>
                    <span className="text-white capitalize">{offer.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-dark-400">Rating</span>
                    <span className="text-white">{offer.rating}/5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-dark-400">Min Deposit</span>
                    <span className="text-white">{offer.minDeposit}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-dark-400">Wagering</span>
                    <span className="text-white">{offer.wagering}</span>
                  </div>
                </div>
              </Card>

              <Card dark className="bg-gradient-to-br from-primary-900/50 to-dark-800">
                <div className="text-center">
                  <GiftIcon className="w-12 h-12 mx-auto mb-4 text-secondary-400" />
                  <p className="text-white font-bold text-xl mb-2">Ready to bet?</p>
                  <p className="text-dark-300 text-sm mb-4">Claim your bonus now and start winning!</p>
                  <Button variant="gold" fullWidth>
                    Get {offer.bonusAmount} Bonus
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
