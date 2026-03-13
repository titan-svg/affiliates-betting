'use client';

import { Card } from '@/components/ui';
import { ClickIcon, TrendUpIcon, UsersIcon, DollarIcon, GiftIcon, ArrowRightIcon } from '@/components/icons';
import { dashboardStats, offers, newsletterSubscribers } from '@/data/mockData';
import Link from 'next/link';

export default function AdminDashboard() {
  const stats = [
    {
      name: 'Total Clicks',
      value: dashboardStats.totalClicks.toLocaleString(),
      icon: ClickIcon,
      change: '+12%',
      color: 'primary',
    },
    {
      name: 'Conversions',
      value: dashboardStats.totalConversions.toLocaleString(),
      icon: TrendUpIcon,
      change: '+8%',
      color: 'secondary',
    },
    {
      name: 'Subscribers',
      value: dashboardStats.totalSubscribers.toLocaleString(),
      icon: UsersIcon,
      change: '+23 today',
      color: 'primary',
    },
    {
      name: 'Revenue',
      value: `$${dashboardStats.revenue.toLocaleString()}`,
      icon: DollarIcon,
      change: '+15%',
      color: 'secondary',
    },
  ];

  const recentSubscribers = newsletterSubscribers.slice(0, 5);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-dark-400">Welcome back! Here&apos;s what&apos;s happening.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.name} dark>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-dark-400 text-sm">{stat.name}</p>
                <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                <p className={`text-sm mt-2 ${stat.color === 'primary' ? 'text-primary-400' : 'text-secondary-400'}`}>
                  {stat.change}
                </p>
              </div>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.color === 'primary' ? 'bg-primary-500/20 text-primary-400' : 'bg-secondary-500/20 text-secondary-400'}`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Offers */}
        <Card dark>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Top Offers</h2>
            <Link href="/admin/offers" className="text-primary-400 hover:text-primary-300 text-sm flex items-center gap-1">
              View all <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
          <div className="space-y-4">
            {offers.slice(0, 5).map((offer, index) => (
              <div key={offer.id} className="flex items-center gap-4 p-3 bg-dark-700/50 rounded-xl">
                <div className="w-10 h-10 bg-dark-600 rounded-lg flex items-center justify-center">
                  <span className="text-primary-400 font-bold">#{index + 1}</span>
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">{offer.name}</p>
                  <p className="text-dark-400 text-sm">{offer.type}</p>
                </div>
                <div className="text-right">
                  <p className="text-secondary-400 font-bold">{offer.bonusAmount}</p>
                  <p className="text-dark-400 text-sm">{offer.rating} rating</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Subscribers */}
        <Card dark>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Recent Subscribers</h2>
            <Link href="/admin/newsletter" className="text-primary-400 hover:text-primary-300 text-sm flex items-center gap-1">
              View all <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
          <div className="space-y-4">
            {recentSubscribers.map((sub) => (
              <div key={sub.id} className="flex items-center gap-4 p-3 bg-dark-700/50 rounded-xl">
                <div className="w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center">
                  <UsersIcon className="w-5 h-5 text-primary-400" />
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">{sub.email}</p>
                  <p className="text-dark-400 text-sm">via {sub.source}</p>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${sub.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-dark-600 text-dark-300'}`}>
                  {sub.status}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card dark>
        <h2 className="text-xl font-bold text-white mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/admin/offers" className="flex items-center gap-4 p-4 bg-dark-700/50 rounded-xl hover:bg-dark-700 transition-all">
            <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center">
              <GiftIcon className="w-6 h-6 text-primary-400" />
            </div>
            <div>
              <p className="text-white font-medium">Add New Offer</p>
              <p className="text-dark-400 text-sm">Create sportsbook or casino</p>
            </div>
          </Link>
          <Link href="/admin/newsletter" className="flex items-center gap-4 p-4 bg-dark-700/50 rounded-xl hover:bg-dark-700 transition-all">
            <div className="w-12 h-12 bg-secondary-500/20 rounded-xl flex items-center justify-center">
              <UsersIcon className="w-6 h-6 text-secondary-400" />
            </div>
            <div>
              <p className="text-white font-medium">Send Newsletter</p>
              <p className="text-dark-400 text-sm">Email subscribers</p>
            </div>
          </Link>
          <Link href="/admin/content" className="flex items-center gap-4 p-4 bg-dark-700/50 rounded-xl hover:bg-dark-700 transition-all">
            <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center">
              <TrendUpIcon className="w-6 h-6 text-primary-400" />
            </div>
            <div>
              <p className="text-white font-medium">Generate Content</p>
              <p className="text-dark-400 text-sm">AI image generation</p>
            </div>
          </Link>
        </div>
      </Card>
    </div>
  );
}
