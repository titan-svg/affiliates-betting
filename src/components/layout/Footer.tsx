import Link from 'next/link';
import { TwitterIcon, FacebookIcon, InstagramIcon, AlertIcon } from '@/components/icons';

export default function Footer() {
  const footerLinks = {
    betting: [
      { name: 'Best Sportsbooks', href: '/sportsbooks' },
      { name: 'Online Casinos', href: '/casinos' },
      { name: 'Latest Bonuses', href: '/bonuses' },
    ],
    legal: [
      { name: 'Terms & Conditions', href: '/terms' },
      { name: 'Privacy Policy', href: '/terms' },
      { name: 'Responsible Gambling', href: '/responsible-gambling' },
    ],
    company: [
      { name: 'About Us', href: '/contact' },
      { name: 'Contact', href: '/contact' },
    ],
  };

  return (
    <footer className="bg-dark-950 border-t border-dark-800">
      {/* Responsible Gambling Banner */}
      <div className="bg-dark-900 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 text-dark-300">
            <AlertIcon className="w-5 h-5 text-secondary-500" />
            <p className="text-sm">
              21+ | Gambling Problem? Call 1-800-GAMBLER | Please gamble responsibly
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="text-xl font-bold text-white">
                Bet<span className="text-primary-400">Picks</span>
              </span>
            </Link>
            <p className="text-dark-400 text-sm mb-4">
              Your trusted source for sportsbook and casino reviews, bonuses, and betting guides in the USA.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-dark-400 hover:text-primary-400 transition-colors">
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-dark-400 hover:text-primary-400 transition-colors">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-dark-400 hover:text-primary-400 transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Betting */}
          <div>
            <h4 className="text-white font-semibold mb-4">Betting</h4>
            <ul className="space-y-3">
              {footerLinks.betting.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-dark-400 hover:text-primary-400 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-dark-400 hover:text-primary-400 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-dark-400 hover:text-primary-400 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-dark-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-dark-500 text-sm">
              &copy; 2026 BetPicks USA. All rights reserved.
            </p>
            <p className="text-dark-500 text-xs text-center md:text-right max-w-xl">
              Disclaimer: Online gambling involves risk. This site contains affiliate links. We may receive compensation when you sign up through our links. Always gamble responsibly and only bet what you can afford to lose.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
