'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui';
import { MenuIcon, XIcon, FootballIcon, CasinoIcon, GiftIcon, ShieldIcon } from '@/components/icons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Sportsbooks', href: '/sportsbooks', icon: <FootballIcon className="w-5 h-5" /> },
    { name: 'Casinos', href: '/casinos', icon: <CasinoIcon className="w-5 h-5" /> },
    { name: 'Bonuses', href: '/bonuses', icon: <GiftIcon className="w-5 h-5" /> },
    { name: 'Responsible Gambling', href: '/responsible-gambling', icon: <ShieldIcon className="w-5 h-5" /> },
  ];

  return (
    <nav className="fixed w-full z-50 bg-dark-950/95 backdrop-blur-md border-b border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <span className="text-xl font-bold text-white">
              Bet<span className="text-primary-400">Picks</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 text-dark-300 hover:text-primary-400 transition-colors font-medium"
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/sportsbooks">
              <Button variant="gold" size="sm">
                Get Best Bonus
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
          <div className="lg:hidden py-4 border-t border-dark-800">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 text-dark-300 hover:text-primary-400 hover:bg-dark-800 rounded-xl transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 px-4">
                <Link href="/sportsbooks" onClick={() => setIsOpen(false)}>
                  <Button variant="gold" fullWidth>
                    Get Best Bonus
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
