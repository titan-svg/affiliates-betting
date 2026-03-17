'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MenuIcon, XIcon, FootballIcon, GiftIcon, NewspaperIcon, StarIcon, TrendUpIcon } from '@/components/icons';

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
    { name: 'Sportsbooks', href: '/sportsbooks', icon: <FootballIcon className="w-5 h-5" /> },
    { name: 'Promotions', href: '/bonuses', icon: <GiftIcon className="w-5 h-5" /> },
    { name: 'Odds', href: '/odds', icon: <TrendUpIcon className="w-5 h-5" /> },
    { name: 'Reviews', href: '/reviews', icon: <StarIcon className="w-5 h-5" /> },
    { name: 'News', href: '/articles', icon: <NewspaperIcon className="w-5 h-5" /> },
  ];

  return (
    <header className="fixed w-full z-50">
      {/* Top Bar - Sports Quick Links */}
      <div className="bg-navy-800 border-b border-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10">
            <div className="hidden md:flex items-center gap-6">
              {topBarLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-orange-400 text-xs font-medium uppercase tracking-wider transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4 ml-auto">
              <span className="text-gray-400 text-xs">Best Betting Picks & Promotions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-xl">B</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-navy-800 leading-tight">
                  BET<span className="text-orange-600">PICKS</span>
                </span>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest">Sports Betting Guide</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {mainNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 px-4 py-2 text-navy-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all font-medium text-sm"
                >
                  <span className="text-orange-500">{item.icon}</span>
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/sportsbooks"
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:shadow-lg transition-all uppercase tracking-wide"
              >
                Bet Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-navy-700 hover:text-orange-600"
            >
              {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200">
              {/* Mobile Sports Links */}
              <div className="flex flex-wrap gap-2 mb-4 pb-4 border-b border-gray-200">
                {topBarLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="px-3 py-1 text-xs font-medium text-navy-600 hover:text-orange-600 bg-gray-100 rounded-full"
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
                    className="flex items-center gap-3 px-4 py-3 text-navy-700 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-orange-500">{item.icon}</span>
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 px-4">
                  <Link
                    href="/sportsbooks"
                    className="block w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center px-6 py-3 rounded-full font-bold uppercase"
                    onClick={() => setIsOpen(false)}
                  >
                    Bet Now
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
