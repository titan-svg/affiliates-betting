'use client';

import { useState } from 'react';
import { Button, Card, Badge, Input } from '@/components/ui';
import { GiftIcon, CopyIcon, CheckCircleIcon, ArrowRightIcon } from '@/components/icons';
import { bonuses } from '@/data/mockData';

export default function BonusesPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const filteredBonuses = filter === 'all'
    ? bonuses
    : bonuses.filter(b => b.type === filter);

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const bonusTypes = [
    { key: 'all', label: 'All Bonuses' },
    { key: 'welcome', label: 'Welcome' },
    { key: 'free-bet', label: 'Free Bets' },
    { key: 'free-spins', label: 'Free Spins' },
  ];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-dark-950 via-dark-900 to-secondary-900/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <GiftIcon className="w-8 h-8 text-secondary-400" />
            <Badge variant="gold">Updated Daily</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Betting Bonuses & Promo Codes
          </h1>
          <p className="text-dark-200 text-xl max-w-2xl">
            Find the latest bonuses, promo codes, and exclusive offers from top sportsbooks and casinos.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-dark-900 border-b border-dark-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {bonusTypes.map((type) => (
              <button
                key={type.key}
                onClick={() => setFilter(type.key)}
                className={`px-6 py-2 rounded-xl font-medium transition-all ${
                  filter === type.key
                    ? 'bg-gradient-to-r from-secondary-500 to-secondary-400 text-dark-900'
                    : 'bg-dark-800 text-dark-300 hover:bg-dark-700'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Bonuses List */}
      <section className="py-16 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredBonuses.map((bonus) => (
              <Card key={bonus.id} dark hover>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-dark-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <GiftIcon className="w-8 h-8 text-secondary-400" />
                  </div>
                  <div>
                    <Badge variant="gold" size="sm" className="mb-2">
                      {bonus.type.replace('-', ' ').toUpperCase()}
                    </Badge>
                    <h3 className="font-bold text-white text-xl">{bonus.title}</h3>
                    <p className="text-dark-400 text-sm">{bonus.offerName}</p>
                  </div>
                </div>

                <p className="text-dark-300 mb-4">{bonus.description}</p>

                <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-dark-700/50 rounded-xl">
                  <div className="text-center">
                    <p className="text-dark-400 text-xs">Value</p>
                    <p className="text-secondary-400 font-bold">{bonus.value}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-dark-400 text-xs">Min Deposit</p>
                    <p className="text-white font-semibold">{bonus.minDeposit}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-dark-400 text-xs">Wagering</p>
                    <p className="text-white font-semibold">{bonus.wagering}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {bonus.code ? (
                    <button
                      onClick={() => copyToClipboard(bonus.code!)}
                      className="flex-1 flex items-center justify-center gap-2 bg-dark-700 hover:bg-dark-600 px-4 py-3 rounded-xl transition-all"
                    >
                      {copiedCode === bonus.code ? (
                        <>
                          <CheckCircleIcon className="w-5 h-5 text-primary-400" />
                          <span className="text-primary-400 font-mono">Copied!</span>
                        </>
                      ) : (
                        <>
                          <CopyIcon className="w-5 h-5 text-secondary-400" />
                          <span className="text-secondary-400 font-mono font-bold">{bonus.code}</span>
                        </>
                      )}
                    </button>
                  ) : (
                    <div className="flex-1 bg-dark-700 px-4 py-3 rounded-xl text-center">
                      <span className="text-dark-400">No code required</span>
                    </div>
                  )}
                  <Button variant="gold" iconRight={<ArrowRightIcon className="w-5 h-5" />}>
                    Claim
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
