'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MenuIcon, XIcon, FootballIcon, GiftIcon, NewspaperIcon, StarIcon } from '@/components/icons';

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
                  className="text-light-400 hover:text-gold-400 text-xs font-medium uppercase tracking-wider transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4 ml-auto">
              <span className="text-light-400 text-xs">Best Betting Picks & Promotions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-light-300 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-red rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-xl">B</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-navy-800 leading-tight">
                  BET<span className="text-red-600">PICKS</span>
                </span>
                <span className="text-[10px] text-light-600 uppercase tracking-widest">Sports Betting Guide</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {mainNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 px-4 py-2 text-navy-700 hover:text-red-600 hover:bg-light-200 rounded-lg transition-all font-medium text-sm"
                >
                  <span className="text-red-500">{item.icon}</span>
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/bonuses"
                className="bg-gradient-red text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:shadow-lg transition-all"
              >
                View Best Bonuses
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-navy-700 hover:text-red-600"
            >
              {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden py-4 border-t border-light-300">
              {/* Mobile Sports Links */}
              <div className="flex flex-wrap gap-2 mb-4 pb-4 border-b border-light-300">
                {topBarLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="px-3 py-1 text-xs font-medium text-navy-600 hover:text-red-600 bg-light-200 rounded-full"
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
                    className="flex items-center gap-3 px-4 py-3 text-navy-700 hover:text-red-600 hover:bg-light-200 rounded-xl transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-red-500">{item.icon}</span>
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 px-4">
                  <Link
                    href="/bonuses"
                    className="block w-full bg-gradient-red text-white text-center px-6 py-3 rounded-lg font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    View Best Bonuses
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
