import { Card, Button } from '@/components/ui';
import { ShieldIcon, AlertIcon, HeartIcon, CheckCircleIcon } from '@/components/icons';

export default function ResponsibleGamblingPage() {
  const warningSignsSteps = [
    'Spending more money on gambling than you can afford',
    'Gambling interfering with work, school, or relationships',
    'Chasing losses by betting more to try to win back money',
    'Lying to friends or family about gambling habits',
    'Borrowing money or selling possessions to gamble',
    'Feeling anxious, irritable, or depressed when not gambling',
    'Neglecting responsibilities to gamble',
    'Unable to stop gambling even when you want to',
  ];

  const resources = [
    {
      name: 'National Council on Problem Gambling',
      phone: '1-800-522-4700',
      description: '24/7 confidential helpline',
    },
    {
      name: 'Gamblers Anonymous',
      phone: 'www.gamblersanonymous.org',
      description: 'Support groups and resources',
    },
    {
      name: 'National Problem Gambling Helpline',
      phone: '1-800-522-4700',
      description: 'Call, text, or chat',
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-dark-950 via-dark-900 to-primary-900/20 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShieldIcon className="w-16 h-16 mx-auto mb-6 text-primary-400" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Responsible Gambling
          </h1>
          <p className="text-dark-200 text-xl">
            We are committed to promoting responsible gambling. Your well-being is our priority.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-dark-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Important Notice */}
          <Card dark className="border-2 border-secondary-500/50 bg-secondary-500/10">
            <div className="flex items-start gap-4">
              <AlertIcon className="w-8 h-8 text-secondary-400 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-bold text-white mb-2">21+ Only</h2>
                <p className="text-dark-300">
                  Online gambling is only legal for adults 21 years or older in certain US states. Always verify that online gambling is legal in your jurisdiction before participating.
                </p>
              </div>
            </div>
          </Card>

          {/* What is Responsible Gambling */}
          <Card dark>
            <h2 className="text-2xl font-bold text-white mb-4">What is Responsible Gambling?</h2>
            <p className="text-dark-300 mb-4">
              Responsible gambling means enjoying gambling as entertainment while maintaining control over time and money spent. It involves setting limits, recognizing warning signs, and knowing when to seek help.
            </p>
            <p className="text-dark-300">
              Gambling should never be seen as a way to make money or solve financial problems. The house always has an edge, and most people lose money over time. Only gamble with money you can afford to lose.
            </p>
          </Card>

          {/* Tips */}
          <Card dark>
            <h2 className="text-2xl font-bold text-white mb-6">Tips for Responsible Gambling</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Set a budget before you start and stick to it',
                'Set time limits for gambling sessions',
                'Never chase your losses',
                'Don\'t gamble when upset, stressed, or intoxicated',
                'Take regular breaks',
                'Balance gambling with other activities',
                'Use responsible gambling tools offered by operators',
                'Never borrow money to gamble',
              ].map((tip, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                  <span className="text-dark-300">{tip}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Warning Signs */}
          <Card dark>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <AlertIcon className="w-7 h-7 text-red-500" />
              Warning Signs of Problem Gambling
            </h2>
            <div className="space-y-3">
              {warningSignsSteps.map((sign, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-dark-700/50 rounded-lg">
                  <span className="text-red-400 font-bold">{i + 1}.</span>
                  <span className="text-dark-300">{sign}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Help Resources */}
          <Card dark className="bg-gradient-to-br from-primary-900/30 to-dark-800">
            <div className="text-center mb-8">
              <HeartIcon className="w-12 h-12 mx-auto mb-4 text-primary-400" />
              <h2 className="text-2xl font-bold text-white mb-2">Need Help?</h2>
              <p className="text-dark-300">
                If you or someone you know has a gambling problem, help is available.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {resources.map((resource, i) => (
                <div key={i} className="text-center p-4 bg-dark-700/50 rounded-xl">
                  <h3 className="text-white font-semibold mb-2">{resource.name}</h3>
                  <p className="text-primary-400 font-bold text-lg mb-1">{resource.phone}</p>
                  <p className="text-dark-400 text-sm">{resource.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <a href="tel:1-800-522-4700">
                <Button variant="primary" size="lg">
                  Call 1-800-522-4700 Now
                </Button>
              </a>
              <p className="text-dark-400 text-sm mt-3">
                Free, confidential, 24/7 support
              </p>
            </div>
          </Card>

          {/* Self-Exclusion */}
          <Card dark>
            <h2 className="text-2xl font-bold text-white mb-4">Self-Exclusion Programs</h2>
            <p className="text-dark-300 mb-4">
              Most licensed gambling operators offer self-exclusion programs that allow you to ban yourself from their services for a period of time. Contact the operator directly or check your state&apos;s gaming commission for statewide self-exclusion options.
            </p>
            <p className="text-dark-300">
              Many sportsbooks and casinos also offer tools to set deposit limits, loss limits, and session time limits. We encourage all users to take advantage of these responsible gambling features.
            </p>
          </Card>
        </div>
      </section>
    </main>
  );
}
