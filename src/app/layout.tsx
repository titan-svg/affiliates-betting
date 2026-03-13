import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'BetPicks USA - Best Sportsbooks & Casino Bonuses 2026',
  description: 'Find the best sportsbook and casino bonuses in the USA. Compare top-rated betting sites, exclusive promo codes, and expert reviews.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-dark-950 text-white font-poppins antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
