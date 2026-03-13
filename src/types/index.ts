export type OfferType = 'sportsbook' | 'casino';

export interface Offer {
  id: string;
  name: string;
  slug: string;
  type: OfferType;
  logo: string;
  rating: number;
  bonusAmount: string;
  bonusDescription: string;
  bonusCode?: string;
  features: string[];
  pros: string[];
  cons: string[];
  termsUrl: string;
  affiliateUrl: string;
  minDeposit: string;
  wagering: string;
  paymentMethods: string[];
  description: string;
  fullReview: string;
  featured: boolean;
  rank: number;
  createdAt: string;
}

export interface Bonus {
  id: string;
  offerId: string;
  offerName: string;
  offerLogo: string;
  type: 'welcome' | 'reload' | 'free-bet' | 'free-spins' | 'cashback';
  title: string;
  description: string;
  code?: string;
  value: string;
  minDeposit: string;
  wagering: string;
  expiresAt: string;
  affiliateUrl: string;
  featured: boolean;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  subscribedAt: string;
  status: 'active' | 'unsubscribed';
  source: string;
}

export interface AIContent {
  id: string;
  type: 'image' | 'article';
  title: string;
  url: string;
  generatedAt: string;
  status: 'pending' | 'published' | 'rejected';
}

export interface DashboardStats {
  totalClicks: number;
  totalConversions: number;
  conversionRate: number;
  totalSubscribers: number;
  newSubscribersToday: number;
  topOffer: string;
  revenue: number;
}

export interface SiteSettings {
  siteName: string;
  siteDescription: string;
  contactEmail: string;
  socialLinks: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
  emailProvider: string;
  aiProvider: string;
}
