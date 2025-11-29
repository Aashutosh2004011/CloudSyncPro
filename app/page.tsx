import CTAButton from './components/CTAButton';
import PricingCard from './components/PricingCard';

// Server Component - All sections are server-rendered except interactive buttons and pricing cards
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold animate-fade-in-down">
            🚀 Now with AI-Powered Search
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 mb-6 animate-fade-in-up leading-tight">
            Your Files,
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Everywhere
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto animate-fade-in-up animation-delay-200 leading-relaxed">
            Experience lightning-fast cloud storage with enterprise-grade security.
            Sync seamlessly across all your devices and collaborate with your team in real-time.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animation-delay-400">
            <CTAButton text="Start Free Trial" variant="primary" />
            <CTAButton text="Watch Demo" variant="secondary" />
          </div>

          <p className="text-sm text-gray-500 mt-8 animate-fade-in-up animation-delay-600">
            ✓ No credit card required  ✓ 14-day free trial  ✓ Cancel anytime
          </p>
        </div>
      </section>

      {/* Features Section - Server Component */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Why Choose CloudSync Pro?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to store, sync, and share your files securely
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-blue-200">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Lightning Fast Sync</h3>
              <p className="text-gray-700 leading-relaxed">
                Experience instant synchronization across all your devices with our cutting-edge delta sync technology.
                Upload and download speeds up to 10x faster than competitors.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-purple-200">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Military-Grade Security</h3>
              <p className="text-gray-700 leading-relaxed">
                Your data is protected with AES-256 encryption, two-factor authentication, and zero-knowledge architecture.
                We never have access to your unencrypted files.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-green-200">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Team Collaboration</h3>
              <p className="text-gray-700 leading-relaxed">
                Share files and folders with fine-grained permissions. Real-time collaboration with comments,
                version history, and activity tracking for your entire team.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-orange-200">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Smart Organization</h3>
              <p className="text-gray-700 leading-relaxed">
                AI-powered file organization automatically tags and categorizes your files.
                Find anything instantly with intelligent search and advanced filters.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-pink-200">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-pink-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Version Control</h3>
              <p className="text-gray-700 leading-relaxed">
                Never lose work again. Automatic version history keeps track of every change.
                Restore previous versions with one click, up to 90 days of history.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-indigo-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-indigo-200">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Cross-Platform</h3>
              <p className="text-gray-700 leading-relaxed">
                Native apps for Windows, Mac, Linux, iOS, and Android. Access your files from anywhere
                with our responsive web interface. Seamless experience across all devices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Server Component */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Trusted by Teams Worldwide</h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Join over 100,000+ satisfied customers who trust CloudSync Pro
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg text-blue-50 mb-6 leading-relaxed">
                "CloudSync Pro has transformed how our team collaborates. The speed and reliability are unmatched.
                We've completely eliminated our file sharing headaches!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  SJ
                </div>
                <div>
                  <p className="font-bold text-white">Sarah Johnson</p>
                  <p className="text-sm text-blue-200">CTO at TechCorp</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg text-blue-50 mb-6 leading-relaxed">
                "The security features give us peace of mind. Knowing our client data is protected with
                enterprise-grade encryption is invaluable. Best investment we've made!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  MC
                </div>
                <div>
                  <p className="font-bold text-white">Michael Chen</p>
                  <p className="text-sm text-blue-200">Founder at DesignHub</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg text-blue-50 mb-6 leading-relaxed">
                "Migrating from our old solution was seamless. The customer support team was incredibly helpful.
                CloudSync Pro scales perfectly with our growing team!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  EP
                </div>
                <div>
                  <p className="font-bold text-white">Emily Parker</p>
                  <p className="text-sm text-blue-200">Operations Manager at StartupXYZ</p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 pt-12 border-t border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-70">
              <div className="text-center">
                <p className="text-3xl font-bold text-white">100K+</p>
                <p className="text-blue-200">Active Users</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-white">99.9%</p>
                <p className="text-blue-200">Uptime SLA</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-white">5PB+</p>
                <p className="text-blue-200">Data Stored</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-white">150+</p>
                <p className="text-blue-200">Countries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Uses Client Components for cards */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your needs. All plans include 14-day free trial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard
              name="Starter"
              price="$9"
              period="/month"
              features={[
                "100 GB Storage",
                "5 Team Members",
                "Basic File Sharing",
                "30-Day Version History",
                "Email Support",
                "Mobile & Desktop Apps"
              ]}
              cta="Start Free Trial"
            />

            <PricingCard
              name="Professional"
              price="$29"
              period="/month"
              popular={true}
              features={[
                "1 TB Storage",
                "Unlimited Team Members",
                "Advanced Collaboration",
                "90-Day Version History",
                "Priority Support",
                "Advanced Security Features",
                "Custom Branding",
                "API Access"
              ]}
              cta="Start Free Trial"
            />

            <PricingCard
              name="Enterprise"
              price="Custom"
              period="pricing"
              features={[
                "Unlimited Storage",
                "Unlimited Team Members",
                "Advanced Admin Controls",
                "Unlimited Version History",
                "24/7 Phone Support",
                "Dedicated Account Manager",
                "Custom Integrations",
                "SLA Guarantee"
              ]}
              cta="Contact Sales"
            />
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">All plans include:</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-700">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                SSL Encryption
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                2-Factor Authentication
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                99.9% Uptime
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                GDPR Compliant
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Server Component */}
      <footer className="bg-gray-900 text-gray-300 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                CloudSync Pro
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Secure cloud storage and collaboration platform trusted by teams worldwide.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Features</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Pricing</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Security</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Integrations</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">API</a></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Careers</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Blog</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Press Kit</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Contact</a></li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">GDPR</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Compliance</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                © 2025 CloudSync Pro. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors duration-300">Status</a>
                <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors duration-300">Help Center</a>
                <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors duration-300">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}