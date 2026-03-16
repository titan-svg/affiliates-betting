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
    betting: [
      { name: 'Best Sportsbooks', href: '/sportsbooks' },
      { name: 'Online Casinos', href: '/casinos' },
      { name: 'Latest Bonuses', href: '/bonuses' },
      { name: 'Live Betting', href: '/live' },
      { name: 'The Locker Room', href: '/articles' },
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
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
    ],
  };

  return (
    <footer className="bg-navy-950 border-t border-navy-800">
      {/* Responsible Gambling Banner */}
      <div className="bg-navy-900 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-2 text-dark-300">
              <AlertIcon className="w-5 h-5 text-gold-500" />
              <span className="text-sm font-medium">21+ Only</span>
            </div>
            <div className="flex items-center gap-2 text-dark-300">
              <ShieldIcon className="w-5 h-5 text-gold-500" />
              <span className="text-sm">Gambling Problem? Call <span className="text-gold-400 font-bold">1-800-GAMBLER</span></span>
            </div>
            <p className="text-dark-400 text-sm">Please gamble responsibly</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
                <span className="text-navy-900 font-black text-xl">B</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-tight">
                  BET<span className="text-gold-400">PICKS</span>
                </span>
                <span className="text-[10px] text-dark-500 uppercase tracking-widest">Sportsbook</span>
              </div>
            </Link>
            <p className="text-dark-400 text-sm mb-4 max-w-xs">
              Your trusted source for sportsbook reviews, betting guides, expert picks, and exclusive bonuses.
            </p>
            <div className="flex gap-4 mb-6">
              <a href="#" className="w-10 h-10 bg-navy-800 hover:bg-navy-700 rounded-lg flex items-center justify-center text-dark-400 hover:text-gold-400 transition-colors">
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-navy-800 hover:bg-navy-700 rounded-lg flex items-center justify-center text-dark-400 hover:text-gold-400 transition-colors">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-navy-800 hover:bg-navy-700 rounded-lg flex items-center justify-center text-dark-400 hover:text-gold-400 transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
            {/* Trust Badges */}
            <div className="flex items-center gap-3">
              <div className="bg-navy-800 px-3 py-2 rounded-lg">
                <span className="text-dark-400 text-xs">SSL Secured</span>
              </div>
              <div className="bg-navy-800 px-3 py-2 rounded-lg">
                <span className="text-dark-400 text-xs">18+</span>
              </div>
            </div>
          </div>

          {/* Sports */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Sports</h4>
            <ul className="space-y-3">
              {footerLinks.sports.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-dark-400 hover:text-gold-400 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Betting */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Betting</h4>
            <ul className="space-y-3">
              {footerLinks.betting.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-dark-400 hover:text-gold-400 transition-colors text-sm">
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
                  <Link href={link.href} className="text-dark-400 hover:text-gold-400 transition-colors text-sm">
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
                  <Link href={link.href} className="text-dark-400 hover:text-gold-400 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-12 pt-8 border-t border-navy-800">
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <span className="text-dark-500 text-xs uppercase tracking-wider">Accepted Payment Methods:</span>
            {['Visa', 'Mastercard', 'PayPal', 'Bitcoin', 'Bank Transfer', 'Venmo'].map((method) => (
              <span key={method} className="text-dark-400 text-sm font-medium">{method}</span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-navy-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-dark-500 text-sm">
              &copy; 2026 BetPicks Sportsbook. All rights reserved.
            </p>
            <p className="text-dark-600 text-xs text-center md:text-right max-w-2xl">
              Disclaimer: This site contains affiliate links. We may receive compensation when you sign up through our links. Online gambling involves risk. Always gamble responsibly and only bet what you can afford to lose. Gambling is not available in all jurisdictions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
