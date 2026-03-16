import Link from 'next/link';
import { TwitterIcon, FacebookIcon, InstagramIcon, AlertIcon, ShieldIcon } from '@/components/icons';

export default function Footer() {
  const footerLinks = {
    sports: [
      { name: 'NFL Betting', href: '/sports/nfl' },
      { name: 'NBA Betting', href: '/sports/nba' },
      { name: 'MLB Betting', href: '/sports/mlb' },
      { name: 'NHL Betting', href: '/sports/nhl' },
      { name: 'UFC Betting', href: '/sports/ufc' },
      { name: 'Soccer Betting', href: '/sports/soccer' },
    ],
    resources: [
      { name: 'Best Sportsbooks', href: '/sportsbooks' },
      { name: 'Latest Bonuses', href: '/bonuses' },
      { name: 'Sports News', href: '/articles' },
      { name: 'Betting Guides', href: '/guides' },
    ],
    legal: [
      { name: 'Terms & Conditions', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Responsible Gambling', href: '/responsible-gambling' },
      { name: 'Affiliate Disclosure', href: '/disclosure' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ],
  };

  return (
    <footer className="bg-navy-800 border-t border-navy-700">
      {/* Responsible Gambling Banner */}
      <div className="bg-navy-900 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-2 text-light-300">
              <AlertIcon className="w-5 h-5 text-gold-500" />
              <span className="text-sm font-medium">21+ Only</span>
            </div>
            <div className="flex items-center gap-2 text-light-300">
              <ShieldIcon className="w-5 h-5 text-gold-500" />
              <span className="text-sm">Gambling Problem? Call <span className="text-gold-400 font-bold">1-800-GAMBLER</span></span>
            </div>
            <p className="text-light-400 text-sm">Please gamble responsibly</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-red rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-xl">B</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-tight">
                  BET<span className="text-red-500">PICKS</span>
                </span>
              </div>
            </Link>
            <p className="text-light-400 text-sm mb-4 max-w-xs">
              Your trusted source for sportsbook reviews, betting guides, and exclusive promotions.
            </p>
            <div className="flex gap-4 mb-6">
              <a href="#" className="w-10 h-10 bg-navy-700 hover:bg-navy-600 rounded-lg flex items-center justify-center text-light-400 hover:text-white transition-colors">
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-navy-700 hover:bg-navy-600 rounded-lg flex items-center justify-center text-light-400 hover:text-white transition-colors">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-navy-700 hover:bg-navy-600 rounded-lg flex items-center justify-center text-light-400 hover:text-white transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Sports */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Sports</h4>
            <ul className="space-y-3">
              {footerLinks.sports.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-light-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-light-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-light-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-light-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-navy-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-light-500 text-sm">
              &copy; 2026 BetPicks. All rights reserved.
            </p>
            <p className="text-light-600 text-xs text-center md:text-right max-w-2xl">
              Disclaimer: This site contains affiliate links. We may receive compensation when you sign up through our links. Online gambling involves risk. Always gamble responsibly and only bet what you can afford to lose.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
