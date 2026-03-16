import { Offer, Bonus, NewsletterSubscriber, DashboardStats, SiteSettings, AIContent, League, Article, MediaPartner, SportCategory } from '@/types';

export const offers: Offer[] = [
  {
    id: 'offer-1',
    name: 'BetMGM',
    slug: 'betmgm',
    type: 'sportsbook',
    logo: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=200&h=100&fit=crop',
    rating: 4.9,
    bonusAmount: '$1,500',
    bonusDescription: 'First Bet Offer Up To $1,500 in Bonus Bets',
    bonusCode: 'BETMAX',
    features: ['Live Betting', 'Cash Out', 'Same Game Parlays', 'Live Streaming'],
    pros: ['Excellent mobile app', 'Wide variety of sports', 'Competitive odds', '24/7 customer support'],
    cons: ['Limited in some states', 'High rollover requirements'],
    termsUrl: '/terms',
    affiliateUrl: '#',
    minDeposit: '$10',
    wagering: '1x',
    paymentMethods: ['Credit Card', 'PayPal', 'Bank Transfer', 'Venmo'],
    description: 'BetMGM is one of the largest and most trusted sportsbooks in the United States, offering competitive odds and a premium betting experience.',
    fullReview: 'BetMGM Sportsbook has established itself as a leader in the US sports betting market. Backed by MGM Resorts International, this platform offers an exceptional betting experience with a user-friendly interface, competitive odds, and a wide range of betting markets.',
    featured: true,
    rank: 1,
    createdAt: '2024-01-15',
  },
  {
    id: 'offer-2',
    name: 'DraftKings',
    slug: 'draftkings',
    type: 'sportsbook',
    logo: 'https://images.unsplash.com/photo-1461896836934- voices?w=200&h=100&fit=crop',
    rating: 4.8,
    bonusAmount: '$1,000',
    bonusDescription: 'Bet $5, Get $200 in Bonus Bets Instantly',
    bonusCode: 'DKBONUS',
    features: ['DFS Integration', 'Live Betting', 'Prop Builder', 'Early Cash Out'],
    pros: ['Industry-leading app', 'Innovative features', 'Daily fantasy integration', 'Frequent promotions'],
    cons: ['Can be overwhelming for beginners', 'Odds not always best'],
    termsUrl: '/terms',
    affiliateUrl: '#',
    minDeposit: '$5',
    wagering: 'None',
    paymentMethods: ['Credit Card', 'PayPal', 'Play+', 'Venmo', 'Apple Pay'],
    description: 'DraftKings is a pioneer in fantasy sports and has become one of the most popular sportsbooks in America.',
    fullReview: 'DraftKings has revolutionized the sports betting industry with its innovative approach and cutting-edge technology. Starting as a daily fantasy sports platform, DraftKings has evolved into a full-fledged sportsbook offering an unparalleled betting experience.',
    featured: true,
    rank: 2,
    createdAt: '2024-01-10',
  },
  {
    id: 'offer-3',
    name: 'FanDuel',
    slug: 'fanduel',
    type: 'sportsbook',
    logo: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=200&h=100&fit=crop',
    rating: 4.8,
    bonusAmount: '$1,000',
    bonusDescription: 'No Sweat First Bet Up To $1,000',
    features: ['Same Game Parlays', 'Live Betting', 'Bet Builder', 'Horse Racing'],
    pros: ['Best-in-class user experience', 'Fast payouts', 'Great promotions', 'Excellent customer service'],
    cons: ['Limited live streaming', 'Restricted in some states'],
    termsUrl: '/terms',
    affiliateUrl: '#',
    minDeposit: '$10',
    wagering: '1x',
    paymentMethods: ['Credit Card', 'PayPal', 'Bank Transfer', 'Venmo'],
    description: 'FanDuel offers one of the most user-friendly betting experiences in the US market.',
    fullReview: 'FanDuel Sportsbook combines ease of use with powerful features, making it perfect for both beginners and experienced bettors.',
    featured: true,
    rank: 3,
    createdAt: '2024-01-08',
  },
  {
    id: 'offer-4',
    name: 'Caesars',
    slug: 'caesars',
    type: 'sportsbook',
    logo: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=200&h=100&fit=crop',
    rating: 4.7,
    bonusAmount: '$1,000',
    bonusDescription: 'First Bet on Caesars Up To $1,000',
    bonusCode: 'CAESARSFULL',
    features: ['Caesars Rewards', 'Live Betting', 'Parlays', 'Props'],
    pros: ['Caesars Rewards integration', 'Wide state availability', 'Strong promotions'],
    cons: ['App can be slow', 'Limited live streaming'],
    termsUrl: '/terms',
    affiliateUrl: '#',
    minDeposit: '$10',
    wagering: '1x',
    paymentMethods: ['Credit Card', 'PayPal', 'Bank Transfer'],
    description: 'Caesars Sportsbook brings the prestige of the Caesars brand to online sports betting.',
    fullReview: 'Caesars Sportsbook leverages the legendary Caesars Entertainment brand to deliver a premium sports betting experience.',
    featured: false,
    rank: 4,
    createdAt: '2024-01-05',
  },
  {
    id: 'offer-5',
    name: 'BetRivers',
    slug: 'betrivers',
    type: 'sportsbook',
    logo: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=200&h=100&fit=crop',
    rating: 4.5,
    bonusAmount: '$500',
    bonusDescription: 'Second Chance Bet Up To $500',
    features: ['iRush Rewards', 'Live Betting', 'Early Cash Out'],
    pros: ['Fast withdrawals', 'Good loyalty program', 'Competitive odds'],
    cons: ['Limited promotions', 'Basic interface'],
    termsUrl: '/terms',
    affiliateUrl: '#',
    minDeposit: '$10',
    wagering: '1x',
    paymentMethods: ['Credit Card', 'PayPal', 'Bank Transfer'],
    description: 'BetRivers offers a solid betting experience with fast payouts.',
    fullReview: 'BetRivers, operated by Rush Street Interactive, provides a reliable and straightforward sports betting experience.',
    featured: false,
    rank: 5,
    createdAt: '2024-01-01',
  },
  // Casinos
  {
    id: 'offer-6',
    name: 'BetMGM Casino',
    slug: 'betmgm-casino',
    type: 'casino',
    logo: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=200&h=100&fit=crop',
    rating: 4.9,
    bonusAmount: '$1,025',
    bonusDescription: '100% Deposit Match Up To $1,000 + $25 Free Play',
    bonusCode: 'CASINO1000',
    features: ['1000+ Slots', 'Live Dealer', 'Exclusive Games', 'Progressive Jackpots'],
    pros: ['Massive game selection', 'Exclusive MGM titles', 'Great mobile experience', 'Trusted brand'],
    cons: ['High wagering requirements', 'Limited to certain states'],
    termsUrl: '/terms',
    affiliateUrl: '#',
    minDeposit: '$10',
    wagering: '15x',
    paymentMethods: ['Credit Card', 'PayPal', 'Bank Transfer', 'Play+'],
    description: 'BetMGM Casino offers a world-class online casino experience with hundreds of games.',
    fullReview: 'BetMGM Casino brings the Las Vegas experience online with an impressive selection of slots, table games, and live dealer options.',
    featured: true,
    rank: 1,
    createdAt: '2024-01-12',
  },
  {
    id: 'offer-7',
    name: 'DraftKings Casino',
    slug: 'draftkings-casino',
    type: 'casino',
    logo: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=200&h=100&fit=crop',
    rating: 4.8,
    bonusAmount: '$2,000',
    bonusDescription: '100% Deposit Match Up To $2,000',
    features: ['500+ Slots', 'Live Dealer', 'Table Games', 'Jackpots'],
    pros: ['Generous welcome bonus', 'Excellent app', 'Fast payouts', 'Innovative games'],
    cons: ['Higher wagering than some', 'Limited game providers'],
    termsUrl: '/terms',
    affiliateUrl: '#',
    minDeposit: '$5',
    wagering: '15x',
    paymentMethods: ['Credit Card', 'PayPal', 'Bank Transfer'],
    description: 'DraftKings Casino delivers an exciting online casino experience.',
    fullReview: 'DraftKings Casino combines cutting-edge technology with a vast game library for an exceptional gambling experience.',
    featured: true,
    rank: 2,
    createdAt: '2024-01-11',
  },
  {
    id: 'offer-8',
    name: 'FanDuel Casino',
    slug: 'fanduel-casino',
    type: 'casino',
    logo: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=200&h=100&fit=crop',
    rating: 4.7,
    bonusAmount: '$1,000',
    bonusDescription: 'Play It Again Up To $1,000',
    features: ['300+ Slots', 'Live Casino', 'Table Games', 'Exclusive Games'],
    pros: ['Low wagering requirements', 'Great user interface', 'Fast withdrawals'],
    cons: ['Smaller game selection', 'Limited availability'],
    termsUrl: '/terms',
    affiliateUrl: '#',
    minDeposit: '$10',
    wagering: '1x',
    paymentMethods: ['Credit Card', 'PayPal', 'Bank Transfer'],
    description: 'FanDuel Casino offers a premium online casino experience with fair bonus terms.',
    fullReview: 'FanDuel Casino stands out with its user-friendly platform and some of the fairest bonus terms in the industry.',
    featured: true,
    rank: 3,
    createdAt: '2024-01-09',
  },
  {
    id: 'offer-9',
    name: 'Borgata Casino',
    slug: 'borgata-casino',
    type: 'casino',
    logo: 'https://images.unsplash.com/photo-1517232115160-ff93364542dd?w=200&h=100&fit=crop',
    rating: 4.6,
    bonusAmount: '$1,020',
    bonusDescription: '100% Match Up To $1,000 + $20 Free',
    features: ['800+ Games', 'Live Dealer', 'Slots', 'Poker'],
    pros: ['Part of MGM family', 'Large game library', 'Good promotions'],
    cons: ['Limited state availability', 'App could be better'],
    termsUrl: '/terms',
    affiliateUrl: '#',
    minDeposit: '$10',
    wagering: '15x',
    paymentMethods: ['Credit Card', 'PayPal', 'Bank Transfer'],
    description: 'Borgata Casino brings Atlantic City excitement to your device.',
    fullReview: 'Borgata Online Casino, backed by MGM Resorts, offers a comprehensive gambling experience inspired by its famous Atlantic City resort.',
    featured: false,
    rank: 4,
    createdAt: '2024-01-06',
  },
];

export const bonuses: Bonus[] = [
  {
    id: 'bonus-1',
    offerId: 'offer-1',
    offerName: 'BetMGM',
    offerLogo: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=200&h=100&fit=crop',
    type: 'welcome',
    title: 'First Bet Offer Up To $1,500',
    description: 'Place your first bet and if it loses, get up to $1,500 in bonus bets.',
    code: 'BETMAX',
    value: '$1,500',
    minDeposit: '$10',
    wagering: '1x',
    expiresAt: '2026-12-31',
    affiliateUrl: '#',
    featured: true,
  },
  {
    id: 'bonus-2',
    offerId: 'offer-2',
    offerName: 'DraftKings',
    offerLogo: 'https://images.unsplash.com/photo-1461896836934-ences?w=200&h=100&fit=crop',
    type: 'welcome',
    title: 'Bet $5, Get $200 Instantly',
    description: 'New users bet $5 and receive $200 in bonus bets instantly.',
    code: 'DKBONUS',
    value: '$200',
    minDeposit: '$5',
    wagering: 'None',
    expiresAt: '2026-12-31',
    affiliateUrl: '#',
    featured: true,
  },
  {
    id: 'bonus-3',
    offerId: 'offer-6',
    offerName: 'BetMGM Casino',
    offerLogo: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=200&h=100&fit=crop',
    type: 'welcome',
    title: '$1,000 Match + $25 Free',
    description: '100% deposit match up to $1,000 plus $25 free play on signup.',
    code: 'CASINO1000',
    value: '$1,025',
    minDeposit: '$10',
    wagering: '15x',
    expiresAt: '2026-12-31',
    affiliateUrl: '#',
    featured: true,
  },
  {
    id: 'bonus-4',
    offerId: 'offer-7',
    offerName: 'DraftKings Casino',
    offerLogo: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=200&h=100&fit=crop',
    type: 'welcome',
    title: '100% Match Up To $2,000',
    description: 'Double your first deposit up to $2,000.',
    value: '$2,000',
    minDeposit: '$5',
    wagering: '15x',
    expiresAt: '2026-12-31',
    affiliateUrl: '#',
    featured: true,
  },
  {
    id: 'bonus-5',
    offerId: 'offer-3',
    offerName: 'FanDuel',
    offerLogo: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=200&h=100&fit=crop',
    type: 'free-bet',
    title: 'No Sweat First Bet $1,000',
    description: 'Place your first bet risk-free up to $1,000.',
    value: '$1,000',
    minDeposit: '$10',
    wagering: '1x',
    expiresAt: '2026-12-31',
    affiliateUrl: '#',
    featured: false,
  },
];

export const newsletterSubscribers: NewsletterSubscriber[] = [
  { id: 'sub-1', email: 'john@example.com', subscribedAt: '2024-03-01', status: 'active', source: 'homepage' },
  { id: 'sub-2', email: 'jane@example.com', subscribedAt: '2024-03-05', status: 'active', source: 'bonuses' },
  { id: 'sub-3', email: 'mike@example.com', subscribedAt: '2024-03-10', status: 'active', source: 'homepage' },
  { id: 'sub-4', email: 'sarah@example.com', subscribedAt: '2024-03-12', status: 'unsubscribed', source: 'footer' },
  { id: 'sub-5', email: 'alex@example.com', subscribedAt: '2024-03-13', status: 'active', source: 'homepage' },
];

export const aiContent: AIContent[] = [
  { id: 'ai-1', type: 'image', title: 'Super Bowl Betting Guide', url: '/images/superbowl.jpg', generatedAt: '2024-03-13', status: 'published' },
  { id: 'ai-2', type: 'image', title: 'March Madness Preview', url: '/images/marchmadness.jpg', generatedAt: '2024-03-12', status: 'published' },
  { id: 'ai-3', type: 'image', title: 'NBA Playoffs Picks', url: '/images/nba.jpg', generatedAt: '2024-03-11', status: 'pending' },
];

export const dashboardStats: DashboardStats = {
  totalClicks: 15420,
  totalConversions: 892,
  conversionRate: 5.78,
  totalSubscribers: 2341,
  newSubscribersToday: 23,
  topOffer: 'BetMGM',
  revenue: 45680,
};

export const siteSettings: SiteSettings = {
  siteName: 'BetPicks USA',
  siteDescription: 'Your trusted source for sportsbook and casino reviews, bonuses, and betting guides.',
  contactEmail: 'contact@betpicksusa.com',
  socialLinks: {
    twitter: 'https://twitter.com/betpicksusa',
    facebook: 'https://facebook.com/betpicksusa',
    instagram: 'https://instagram.com/betpicksusa',
  },
  emailProvider: 'Mailchimp',
  aiProvider: 'DALL-E',
};

export const getOfferBySlug = (slug: string): Offer | undefined => {
  return offers.find(o => o.slug === slug);
};

export const getOffersByType = (type: 'sportsbook' | 'casino'): Offer[] => {
  return offers.filter(o => o.type === type).sort((a, b) => a.rank - b.rank);
};

export const getFeaturedOffers = (): Offer[] => {
  return offers.filter(o => o.featured);
};

export const getFeaturedBonuses = (): Bonus[] => {
  return bonuses.filter(b => b.featured);
};

// Leagues
export const leagues: League[] = [
  { id: 'nfl', name: 'National Football League', shortName: 'NFL', sport: 'football', logo: '/leagues/nfl.svg', country: 'USA', featured: true },
  { id: 'ncaaf', name: 'NCAA Football', shortName: 'NCAAF', sport: 'football', logo: '/leagues/ncaaf.svg', country: 'USA', featured: true },
  { id: 'nba', name: 'National Basketball Association', shortName: 'NBA', sport: 'basketball', logo: '/leagues/nba.svg', country: 'USA', featured: true },
  { id: 'ncaab', name: 'NCAA Basketball', shortName: 'NCAAB', sport: 'basketball', logo: '/leagues/ncaab.svg', country: 'USA', featured: true },
  { id: 'mlb', name: 'Major League Baseball', shortName: 'MLB', sport: 'baseball', logo: '/leagues/mlb.svg', country: 'USA', featured: true },
  { id: 'nhl', name: 'National Hockey League', shortName: 'NHL', sport: 'hockey', logo: '/leagues/nhl.svg', country: 'USA', featured: true },
  { id: 'mls', name: 'Major League Soccer', shortName: 'MLS', sport: 'soccer', logo: '/leagues/mls.svg', country: 'USA', featured: true },
  { id: 'ufc', name: 'Ultimate Fighting Championship', shortName: 'UFC', sport: 'mma', logo: '/leagues/ufc.svg', country: 'USA', featured: true },
  { id: 'pga', name: 'PGA Tour', shortName: 'PGA', sport: 'golf', logo: '/leagues/pga.svg', country: 'USA', featured: false },
  { id: 'epl', name: 'English Premier League', shortName: 'EPL', sport: 'soccer', logo: '/leagues/epl.svg', country: 'England', featured: true },
];

// Media Partners / As Featured On
export const mediaPartners: MediaPartner[] = [
  { id: 'espn', name: 'ESPN', logo: '/media/espn.svg' },
  { id: 'fox-sports', name: 'FOX Sports', logo: '/media/fox-sports.svg' },
  { id: 'cbs-sports', name: 'CBS Sports', logo: '/media/cbs-sports.svg' },
  { id: 'bleacher-report', name: 'Bleacher Report', logo: '/media/bleacher-report.svg' },
  { id: 'yahoo-sports', name: 'Yahoo Sports', logo: '/media/yahoo-sports.svg' },
  { id: 'sports-illustrated', name: 'Sports Illustrated', logo: '/media/si.svg' },
];

// Sport Categories
export const sportCategories: SportCategory[] = [
  {
    id: 'football',
    name: 'Football',
    slug: 'football',
    icon: '🏈',
    description: 'NFL, NCAAF, and more football betting',
    leagues: ['nfl', 'ncaaf'],
    featured: true,
  },
  {
    id: 'basketball',
    name: 'Basketball',
    slug: 'basketball',
    icon: '🏀',
    description: 'NBA, NCAAB, and international basketball',
    leagues: ['nba', 'ncaab'],
    featured: true,
  },
  {
    id: 'baseball',
    name: 'Baseball',
    slug: 'baseball',
    icon: '⚾',
    description: 'MLB betting lines and props',
    leagues: ['mlb'],
    featured: true,
  },
  {
    id: 'hockey',
    name: 'Hockey',
    slug: 'hockey',
    icon: '🏒',
    description: 'NHL and international hockey',
    leagues: ['nhl'],
    featured: true,
  },
  {
    id: 'soccer',
    name: 'Soccer',
    slug: 'soccer',
    icon: '⚽',
    description: 'MLS, EPL, Champions League, and more',
    leagues: ['mls', 'epl'],
    featured: true,
  },
  {
    id: 'mma',
    name: 'MMA',
    slug: 'mma',
    icon: '🥊',
    description: 'UFC and MMA fight betting',
    leagues: ['ufc'],
    featured: true,
  },
];

// Articles - Locker Room Content
export const articles: Article[] = [
  {
    id: 'article-1',
    title: 'Super Bowl 2026 Odds: Chiefs Open as Favorites to Three-Peat',
    slug: 'super-bowl-2026-odds-chiefs-favorites',
    excerpt: 'The Kansas City Chiefs have opened as +600 favorites to win their third consecutive Super Bowl. Here\'s our early look at the odds landscape.',
    content: `The Kansas City Chiefs have done it again, and oddsmakers believe they can do it once more. Following their historic back-to-back Super Bowl victories, the Chiefs have opened as +600 favorites to become the first team in NFL history to win three consecutive championships.

Patrick Mahomes continues to cement his legacy as one of the greatest quarterbacks of all time, and the Chiefs organization shows no signs of slowing down.

**Key Contenders:**
- Kansas City Chiefs: +600
- San Francisco 49ers: +800
- Philadelphia Eagles: +900
- Buffalo Bills: +1000
- Baltimore Ravens: +1200

The 49ers, who fell short in both recent Super Bowl appearances against the Chiefs, are hungry for redemption at +800. The Eagles, led by Jalen Hurts, sit at +900 after their strong regular season performance.

**Best Value Bets:**
Our analysts believe the Detroit Lions at +1400 offer excellent value. Their explosive offense and improved defense make them a legitimate threat.

**Where to Bet:**
We recommend BetMGM for Super Bowl futures due to their competitive odds and frequent promotions on NFL markets.`,
    coverImage: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=800&h=400&fit=crop',
    category: 'picks',
    sport: 'football',
    league: 'NFL',
    author: 'Mike Johnson',
    publishedAt: '2026-03-14',
    readTime: 5,
    featured: true,
    tags: ['NFL', 'Super Bowl', 'Futures', 'Chiefs'],
  },
  {
    id: 'article-2',
    title: 'March Madness 2026: Complete Betting Guide and Bracket Predictions',
    slug: 'march-madness-2026-betting-guide',
    excerpt: 'Your ultimate guide to betting the 2026 NCAA Tournament. Expert picks, bracket strategies, and the best bonuses for March Madness.',
    content: `March Madness is here, and we've got everything you need to fill out your bracket and make smart bets throughout the tournament.

**Top Seeds to Watch:**
1. Duke Blue Devils - Coach K's successors have built a powerhouse
2. Kansas Jayhawks - Deep roster with tournament experience
3. UConn Huskies - Looking to continue their dynasty
4. Houston Cougars - Elite defense and coaching

**Best First Round Upset Picks:**
- 12 over 5: Western Kentucky over Memphis
- 11 over 6: VCU over Iowa State
- 13 over 4: Vermont over Creighton

**Betting Strategy Tips:**
- Focus on totals in first-round games
- Look for teams with tournament experience
- Monitor injury reports closely
- Consider pace of play matchups

**Best March Madness Bonuses:**
- DraftKings: Bet $5, Get $200 in bonus bets
- FanDuel: No Sweat First Bet up to $1,000
- BetMGM: First Bet Offer up to $1,500`,
    coverImage: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=400&fit=crop',
    category: 'guides',
    sport: 'basketball',
    league: 'NCAAB',
    author: 'Sarah Williams',
    publishedAt: '2026-03-13',
    readTime: 8,
    featured: true,
    tags: ['NCAAB', 'March Madness', 'Bracket', 'College Basketball'],
  },
  {
    id: 'article-3',
    title: 'NBA Playoff Picture: Western Conference Race Heats Up',
    slug: 'nba-playoff-race-western-conference',
    excerpt: 'With the NBA playoffs approaching, we break down the Western Conference standings and betting implications.',
    content: `The Western Conference playoff race is heating up with just weeks remaining in the regular season. Here's your complete breakdown of the standings and betting angles.

**Current Standings:**
1. Oklahoma City Thunder (56-18)
2. Denver Nuggets (52-22)
3. Minnesota Timberwolves (50-24)
4. Phoenix Suns (48-26)

**Championship Odds Update:**
- Thunder: +350
- Celtics: +400
- Nuggets: +500
- Bucks: +800

**Key Matchups to Watch:**
The Thunder face the Nuggets twice in the final two weeks, which could determine home-court advantage throughout the Western playoffs.

**Betting Angles:**
- Thunder UNDER on season win total was sharp money
- Look for value on Timberwolves to reach Finals (+1200)
- Nuggets playoff experience makes them dangerous`,
    coverImage: 'https://images.unsplash.com/photo-1504450758481-7338bbe75c8e?w=800&h=400&fit=crop',
    category: 'analysis',
    sport: 'basketball',
    league: 'NBA',
    author: 'James Thompson',
    publishedAt: '2026-03-12',
    readTime: 6,
    featured: false,
    tags: ['NBA', 'Playoffs', 'Thunder', 'Analysis'],
  },
  {
    id: 'article-4',
    title: 'UFC 310 Preview: Main Event Breakdown and Best Bets',
    slug: 'ufc-310-preview-best-bets',
    excerpt: 'Complete UFC 310 preview with fight-by-fight analysis, odds breakdown, and our top picks for Saturday\'s card.',
    content: `UFC 310 promises to be one of the best cards of the year. Here's your complete betting guide for Saturday night's fights.

**Main Event:**
Champion vs Challenger in what promises to be an explosive matchup. The champion opens as a -175 favorite, but there's value on the underdog at +150.

**Co-Main Event:**
Two ranked contenders clash in a pivotal bout that could determine the next title challenger.

**Best Bets:**
1. Main Event: Underdog +150 (Value play)
2. Co-Main Over 2.5 rounds: -120
3. Prelim Parlay: +450

**Where to Bet UFC:**
DraftKings offers the best UFC odds and frequently runs promotions for major events.`,
    coverImage: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&h=400&fit=crop',
    category: 'picks',
    sport: 'mma',
    league: 'UFC',
    author: 'Mike Johnson',
    publishedAt: '2026-03-11',
    readTime: 5,
    featured: false,
    tags: ['UFC', 'MMA', 'Fight Picks', 'UFC 310'],
  },
  {
    id: 'article-5',
    title: 'MLB Opening Day 2026: Season Win Totals and Division Odds',
    slug: 'mlb-opening-day-2026-predictions',
    excerpt: 'Baseball is back! Our complete preview of MLB Opening Day including season win totals, division odds, and World Series futures.',
    content: `The boys of summer are back. Here's everything you need to know about betting MLB in 2026.

**World Series Favorites:**
- Los Angeles Dodgers: +450
- Atlanta Braves: +600
- New York Yankees: +700
- Philadelphia Phillies: +800

**Best Season Win Total Bets:**
- Dodgers OVER 98.5 wins (-110)
- Tigers OVER 78.5 wins (+100)
- Marlins UNDER 72.5 wins (-115)

**Division Predictions:**
- AL East: Yankees
- AL Central: Guardians
- AL West: Rangers
- NL East: Braves
- NL Central: Cubs
- NL West: Dodgers

**Opening Day Best Bets:**
Look for value on road underdogs in the first week as teams work out early-season rust.`,
    coverImage: 'https://images.unsplash.com/photo-1566479179817-c0d5e2e98c86?w=800&h=400&fit=crop',
    category: 'analysis',
    sport: 'baseball',
    league: 'MLB',
    author: 'Sarah Williams',
    publishedAt: '2026-03-10',
    readTime: 7,
    featured: true,
    tags: ['MLB', 'Baseball', 'Opening Day', 'Futures'],
  },
  {
    id: 'article-6',
    title: 'NHL Stanley Cup Playoffs: Eastern Conference Betting Preview',
    slug: 'nhl-stanley-cup-eastern-conference-preview',
    excerpt: 'Breaking down the Eastern Conference playoff picture with odds, matchup analysis, and betting recommendations.',
    content: `The NHL playoffs are approaching, and the Eastern Conference is stacked with contenders. Here's your betting guide.

**Stanley Cup Odds (East):**
- Boston Bruins: +500
- Florida Panthers: +600
- Carolina Hurricanes: +800
- New York Rangers: +900

**First Round Matchup Analysis:**
The potential 1-8 matchup between Boston and a wild card team could provide value on the underdog. Boston's playoff struggles in recent years make them vulnerable.

**Series Betting Tips:**
- Look for value on series length bets
- Home ice advantage matters less in playoffs
- Goaltending is king - bet on hot goalies

**Best Bet:**
Panthers to win the Eastern Conference at +300. Their blend of skill and experience makes them the team to beat.`,
    coverImage: 'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800&h=400&fit=crop',
    category: 'picks',
    sport: 'hockey',
    league: 'NHL',
    author: 'James Thompson',
    publishedAt: '2026-03-09',
    readTime: 5,
    featured: false,
    tags: ['NHL', 'Stanley Cup', 'Playoffs', 'Hockey'],
  },
];

// Helper functions for new data
export const getFeaturedLeagues = (): League[] => {
  return leagues.filter(l => l.featured);
};

export const getLeaguesBySport = (sport: string): League[] => {
  return leagues.filter(l => l.sport === sport);
};

export const getFeaturedArticles = (): Article[] => {
  return articles.filter(a => a.featured).slice(0, 3);
};

export const getRecentArticles = (limit: number = 6): Article[] => {
  return [...articles]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
};

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(a => a.slug === slug);
};

export const getArticlesByCategory = (category: string): Article[] => {
  return articles.filter(a => a.category === category);
};

export const getArticlesBySport = (sport: string): Article[] => {
  return articles.filter(a => a.sport === sport);
};

export const getFeaturedSportCategories = (): SportCategory[] => {
  return sportCategories.filter(s => s.featured);
};
