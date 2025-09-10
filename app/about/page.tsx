import Features from "@/components/FeatureSection";
import OurMission from "@/components/OurMission";
import OurStory from "@/components/OurStory";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="font-sans bg-gradient-to-br from-gray-50 via-white to-sky-50 dark:from-gray-900 dark:via-gray-800 dark:to-sky-900/20 text-gray-800 dark:text-gray-200 transition-all duration-300 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden flex flex-col items-center justify-center text-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-sky-500/10 via-indigo-500/5 to-cyan-500/10 dark:from-sky-900/30 dark:via-indigo-900/20 dark:to-cyan-900/30">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <div className="inline-flex items-center gap-2 bg-sky-50 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-lg">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-sky-500 dark:bg-sky-400 rounded-full animate-pulse"></span>
            <span className="hidden sm:inline">Powered by AI Technology</span>
            <span className="sm:hidden">AI Technology</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-gray-100 leading-tight">
            About{" "}
            <span className="bg-gradient-to-r from-sky-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
              ExpenseTracker AI
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Your intelligent companion for tracking expenses and managing your
            finances with cutting-edge AI-powered insights.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 sm:px-0">
            <Link
              href="/sign-up"
              className="group relative overflow-hidden bg-gradient-to-r from-sky-600 via-indigo-500 to-cyan-500 hover:from-sky-700 hover:via-indigo-600 hover:to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span className="relative z-10">Start Your Journey</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </Link>
            <Link
              href="/contact"
              className="group border-2 border-sky-500/20 dark:border-sky-400/20 text-sky-600 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-900/20 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-200 backdrop-blur-sm"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <OurMission />

      {/* Features Section */}
      <Features />

      {/* Story Section */}
      <OurStory />

      {/* Call to Action Section */}
      <section className="py-20 px-8 bg-gradient-to-br from-gray-50 via-white to-sky-50 dark:from-gray-900 dark:via-gray-800 dark:to-sky-900/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-cyan-500"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-sky-50 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
            <span className="w-2 h-2 bg-sky-500 dark:bg-sky-400 rounded-full animate-pulse"></span>
            Ready to Transform Your Finances?
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-gray-100">
            Take Control of Your{" "}
            <span className="bg-gradient-to-r from-sky-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
              Financial Future
            </span>
          </h2>

          <p className="text-xl md:text-2xl mb-10 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Join thousands of users who have already transformed their financial
            habits with ExpenseTracker AI. Start your journey towards smarter
            budgeting today.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/sign-up"
              className="group relative overflow-hidden bg-gradient-to-r from-sky-600 via-indigo-500 to-cyan-500 hover:from-sky-700 hover:via-indigo-600 hover:to-cyan-600 text-white px-8 py-4 rounded-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started Free
                <span className="text-lg">→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </Link>

            <Link
              href="/contact"
              className="group border-2 border-sky-500/20 dark:border-sky-400/20 text-sky-600 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-900/20 px-8 py-4 rounded-2xl font-semibold transition-all duration-200 backdrop-blur-sm flex items-center gap-2"
            >
              Contact Us
              <span className="text-lg group-hover:translate-x-0.5 transition-transform duration-200">
                💬
              </span>
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-600 dark:text-sky-400 mb-2">
                Free
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                No credit card required
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                24/7
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                AI-powered support
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
                Instant
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Setup in minutes
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
