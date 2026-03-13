import { Card } from '@/components/ui';

export default function TermsPage() {
  return (
    <main className="pt-20">
      <section className="bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">Terms & Conditions</h1>
          <p className="text-dark-300">Last updated: March 2026</p>
        </div>
      </section>

      <section className="py-16 bg-dark-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card dark className="prose prose-invert max-w-none">
            <div className="space-y-8 text-dark-300">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                <p>
                  Welcome to BetPicks USA. These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to be bound by these terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Eligibility</h2>
                <p>
                  You must be at least 21 years old and located in a jurisdiction where online gambling is legal to use our services. We do not provide gambling services directly; we provide information and affiliate links to licensed gambling operators.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Affiliate Disclosure</h2>
                <p>
                  BetPicks USA contains affiliate links. When you click on these links and sign up or make a deposit, we may receive a commission. This does not affect the odds, bonuses, or any other aspect of the gambling services you receive.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Accuracy of Information</h2>
                <p>
                  While we strive to provide accurate and up-to-date information about bonuses, odds, and gambling operators, we cannot guarantee the accuracy of all information. Bonus terms and conditions are subject to change by the operators. Always verify the current terms on the operator&apos;s website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Responsible Gambling</h2>
                <p>
                  We promote responsible gambling. If you believe you have a gambling problem, please seek help immediately. Resources are available at the National Council on Problem Gambling (1-800-522-4700) and other organizations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Privacy Policy</h2>
                <p>
                  Your privacy is important to us. We collect limited information including email addresses for newsletter subscriptions. We do not sell or share your personal information with third parties except as necessary to provide our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Intellectual Property</h2>
                <p>
                  All content on this website, including text, graphics, logos, and images, is the property of BetPicks USA or its content suppliers and is protected by copyright laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
                <p>
                  BetPicks USA is not responsible for any losses incurred through gambling. We provide information for entertainment purposes only. All gambling activities are at your own risk.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. Continued use of the website after changes constitutes acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">10. Contact</h2>
                <p>
                  If you have any questions about these Terms and Conditions, please contact us at legal@betpicksusa.com.
                </p>
              </section>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
