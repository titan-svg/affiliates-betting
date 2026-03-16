'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui';
import { MenuIcon, XIcon, FootballIcon, CasinoIcon, GiftIcon, TrendUpIcon, NewspaperIcon } from '@/components/icons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const topBarLinks = [
    { name: 'NFL', href: '/sports/nfl' },
    { name: 'NBA', href: '/sports/nba' },
    { name: 'MLB', href: '/sports/mlb' },
    { name: 'NHL', href: '/sports/nhl' },
    { name: 'NCAAF', href: '/sports/ncaaf' },
    { name: 'NCAAB', href: '/sports/ncaab' },
    { name: 'UFC', href: '/sports/ufc' },
    { name: 'Soccer', href: '/sports/soccer' },
  ];

  const mainNavigation = [
    { name: 'Sports', href: '/sportsbooks', icon: <FootballIcon className="w-5 h-5" /> },
    { name: 'Live Betting', href: '/live', icon: <TrendUpIcon className="w-5 h-5" /> },
    { name: 'Casino', href: '/casinos', icon: <CasinoIcon className="w-5 h-5" /> },
    { name: 'Promotions', href: '/bonuses', icon: <GiftIcon className="w-5 h-5" /> },
    { name: 'Locker Room', href: '/articles', icon: <NewspaperIcon className="w-5 h-5" /> },
  ];

  return (
    <header className="fixed w-full z-50">
      {/* Top Bar - Sports Quick Links */}
      <div className="bg-navy-900 border-b border-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10">
            <div className="hidden md:flex items-center gap-6">
              {topBarLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-dark-400 hover:text-gold-400 text-xs font-medium uppercase tracking-wider transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <span className="text-dark-400 text-xs">24/7 Support</span>
              <span className="text-gold-400 text-xs font-bold">1-800-BETS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-navy-800/95 backdrop-blur-md border-b border-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
                <span className="text-navy-900 font-black text-xl">B</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-tight">
                  BET<span className="text-gold-400">PICKS</span>
                </span>
                <span className="text-[10px] text-dark-400 uppercase tracking-widest">Sportsbook</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {mainNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 px-4 py-2 text-dark-300 hover:text-white hover:bg-navy-700 rounded-lg transition-all font-medium text-sm"
                >
                  <span className="text-gold-500">{item.icon}</span>
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Log In
                </Button>
              </Link>
              <Link href="/signup">
                <Button variant="gold" size="sm">
                  Join Now
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-dark-300 hover:text-white"
            >
              {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden py-4 border-t border-navy-700">
              {/* Mobile Sports Links */}
              <div className="flex flex-wrap gap-2 mb-4 pb-4 border-b border-navy-700">
                {topBarLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="px-3 py-1 text-xs font-medium text-dark-400 hover:text-gold-400 bg-navy-700 rounded-full"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col gap-2">
                {mainNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-3 text-dark-300 hover:text-white hover:bg-navy-700 rounded-xl transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-gold-500">{item.icon}</span>
                    {item.name}
                  </Link>
                ))}
                <div className="flex gap-3 pt-4 px-4">
                  <Link href="/login" className="flex-1" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" fullWidth size="sm">
                      Log In
                    </Button>
                  </Link>
                  <Link href="/signup" className="flex-1" onClick={() => setIsOpen(false)}>
                    <Button variant="gold" fullWidth size="sm">
                      Join Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
