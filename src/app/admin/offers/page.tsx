'use client';

import { useState } from 'react';
import { Card, Button, Badge, Rating } from '@/components/ui';
import { EditIcon, FootballIcon, CasinoIcon, CheckCircleIcon } from '@/components/icons';
import { offers } from '@/data/mockData';

export default function AdminOffersPage() {
  const [filter, setFilter] = useState<'all' | 'sportsbook' | 'casino'>('all');

  const filteredOffers = filter === 'all' ? offers : offers.filter(o => o.type === filter);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Manage Offers</h1>
          <p className="text-dark-400">Add, edit, and manage sportsbook and casino offers.</p>
        </div>
        <Button variant="primary">Add New Offer</Button>
      </div>

      {/* Filters */}
      <div className="flex gap-3">
        {['all', 'sportsbook', 'casino'].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type as typeof filter)}
            className={`px-6 py-2 rounded-xl font-medium transition-all capitalize ${
              filter === type
                ? 'bg-primary-600 text-white'
                : 'bg-dark-800 text-dark-300 hover:bg-dark-700'
            }`}
          >
            {type === 'all' ? 'All Offers' : `${type}s`}
          </button>
        ))}
      </div>

      {/* Offers Table */}
      <Card dark noPadding>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-dark-700">
                <th className="text-left py-4 px-6 text-dark-400 font-medium">Offer</th>
                <th className="text-left py-4 px-6 text-dark-400 font-medium">Type</th>
                <th className="text-left py-4 px-6 text-dark-400 font-medium">Bonus</th>
                <th className="text-left py-4 px-6 text-dark-400 font-medium">Rating</th>
                <th className="text-left py-4 px-6 text-dark-400 font-medium">Status</th>
                <th className="text-right py-4 px-6 text-dark-400 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOffers.map((offer) => (
                <tr key={offer.id} className="border-b border-dark-800 hover:bg-dark-800/50">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-dark-700 rounded-lg flex items-center justify-center">
                        {offer.type === 'sportsbook' ? (
                          <FootballIcon className="w-5 h-5 text-primary-400" />
                        ) : (
                          <CasinoIcon className="w-5 h-5 text-secondary-400" />
                        )}
                      </div>
                      <div>
                        <p className="text-white font-medium">{offer.name}</p>
                        <p className="text-dark-400 text-sm">{offer.slug}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <Badge variant={offer.type === 'sportsbook' ? 'primary' : 'gold'}>
                      {offer.type}
                    </Badge>
                  </td>
                  <td className="py-4 px-6">
                    <p className="text-secondary-400 font-bold">{offer.bonusAmount}</p>
                  </td>
                  <td className="py-4 px-6">
                    <Rating value={offer.rating} size="sm" />
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      {offer.featured ? (
                        <>
                          <CheckCircleIcon className="w-4 h-4 text-green-500" />
                          <span className="text-green-400 text-sm">Featured</span>
                        </>
                      ) : (
                        <span className="text-dark-400 text-sm">Standard</span>
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <Button variant="ghost" size="sm" icon={<EditIcon className="w-4 h-4" />}>
                      Edit
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
