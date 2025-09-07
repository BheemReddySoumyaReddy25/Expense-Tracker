"use client";
"use client";
import React from "react";

const features = [
  {
    icon: "🤖",
    gradient: "from-emerald-500 via-green-500 to-teal-500",
    hoverGradient: "from-emerald-500/5 to-green-500/5",
    title: "AI-Powered Insights",
    description:
      "Get intelligent analysis of your spending patterns with personalized AI recommendations and automated category suggestions that learn from your behavior.",
  },
  {
    icon: "✨",
    gradient: "from-green-500 via-teal-500 to-emerald-500",
    hoverGradient: "from-green-500/5 to-teal-500/5",
    title: "Smart Categorization",
    description:
      "Let our AI automatically categorize your expenses with 99% accuracy and provide tailored recommendations to enhance your budget management effortlessly.",
  },
  {
    icon: "📊",
    gradient: "from-teal-500 via-emerald-500 to-green-500",
    hoverGradient: "from-teal-500/5 to-emerald-500/5",
    title: "Intelligent Dashboard",
    description:
      "Experience a modern, AI-enhanced interface with real-time insights, interactive financial analytics, and beautiful visualizations that make sense of your data.",
  },
];

function Features() {
  return (
    <section className="py-20 px-8 bg-gradient-to-br from-gray-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full"></span>
            Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Why Choose{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              ExpenseTracker AI?
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover the powerful features that make our AI-driven platform the
            smart choice for modern financial management.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-200 hover:-translate-y-1"
            >
              {/* Hover overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.hoverGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center shadow-lg mb-6`}
                >
                  <span className="text-white text-xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
