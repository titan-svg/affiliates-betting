'use client';

import { useState } from 'react';
import { Card, Button, Badge, Input } from '@/components/ui';
import { MailIcon, UsersIcon, TrendUpIcon, ArrowRightIcon } from '@/components/icons';
import { newsletterSubscribers, dashboardStats } from '@/data/mockData';

export default function AdminNewsletterPage() {
  const [filter, setFilter] = useState<'all' | 'active' | 'unsubscribed'>('all');

  const filteredSubscribers = filter === 'all'
    ? newsletterSubscribers
    : newsletterSubscribers.filter(s => s.status === filter);

  const stats = [
    { name: 'Total Subscribers', value: dashboardStats.totalSubscribers, icon: UsersIcon },
    { name: 'New Today', value: dashboardStats.newSubscribersToday, icon: TrendUpIcon },
    { name: 'Active', value: newsletterSubscribers.filter(s => s.status === 'active').length, icon: MailIcon },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Newsletter</h1>
          <p className="text-dark-400">Manage subscribers and send email campaigns.</p>
        </div>
        <Button variant="primary" icon={<MailIcon className="w-5 h-5" />}>
          Send Campaign
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <Card key={stat.name} dark>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-primary-400" />
              </div>
              <div>
                <p className="text-dark-400 text-sm">{stat.name}</p>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Email Provider Card */}
      <Card dark className="bg-gradient-to-br from-primary-900/30 to-dark-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-primary-500/20 rounded-xl flex items-center justify-center">
              <MailIcon className="w-7 h-7 text-primary-400" />
            </div>
            <div>
              <p className="text-white font-bold text-lg">Email Provider: Mailchimp</p>
              <p className="text-dark-300">Connected and syncing subscribers</p>
            </div>
          </div>
          <Button variant="outline" size="sm">
            Configure
          </Button>
        </div>
      </Card>

      {/* Filters & Search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex gap-3">
          {['all', 'active', 'unsubscribed'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status as typeof filter)}
              className={`px-6 py-2 rounded-xl font-medium transition-all capitalize ${
                filter === status
                  ? 'bg-primary-600 text-white'
                  : 'bg-dark-800 text-dark-300 hover:bg-dark-700'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
        <div className="flex-1">
          <Input placeholder="Search subscribers..." />
        </div>
      </div>

      {/* Subscribers List */}
      <Card dark noPadding>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-dark-700">
                <th className="text-left py-4 px-6 text-dark-400 font-medium">Email</th>
                <th className="text-left py-4 px-6 text-dark-400 font-medium">Source</th>
                <th className="text-left py-4 px-6 text-dark-400 font-medium">Subscribed</th>
                <th className="text-left py-4 px-6 text-dark-400 font-medium">Status</th>
                <th className="text-right py-4 px-6 text-dark-400 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredSubscribers.map((sub) => (
                <tr key={sub.id} className="border-b border-dark-800 hover:bg-dark-800/50">
                  <td className="py-4 px-6">
                    <p className="text-white font-medium">{sub.email}</p>
                  </td>
                  <td className="py-4 px-6">
                    <Badge variant="primary" size="sm">{sub.source}</Badge>
                  </td>
                  <td className="py-4 px-6">
                    <p className="text-dark-300">{new Date(sub.subscribedAt).toLocaleDateString()}</p>
                  </td>
                  <td className="py-4 px-6">
                    <Badge variant={sub.status === 'active' ? 'success' : 'danger'}>
                      {sub.status}
                    </Badge>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <Button variant="ghost" size="sm">
                      View
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
