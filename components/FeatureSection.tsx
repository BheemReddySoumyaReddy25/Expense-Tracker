"use client";
"use client";
import React from "react";

const features = [
  {
    icon: "🤖",
    gradient: "from-sky-500 via-indigo-500 to-cyan-500",
    hoverGradient: "from-sky-500/5 to-indigo-500/5",
    title: "AI-Powered Insights",
    description:
      "Get intelligent analysis of your spending patterns with personalized AI recommendations and automated category suggestions that learn from your behavior.",
  },
  {
    icon: "✨",
    gradient: "from-indigo-500 via-cyan-500 to-sky-500",
    hoverGradient: "from-indigo-500/5 to-cyan-500/5",
    title: "Smart Categorization",
    description:
      "Let our AI automatically categorize your expenses with 99% accuracy and provide tailored recommendations to enhance your budget management effortlessly.",
  },
  {
    icon: "📊",
    gradient: "from-cyan-500 via-sky-500 to-indigo-500",
    hoverGradient: "from-cyan-500/5 to-sky-500/5",
    title: "Intelligent Dashboard",
    description:
      "Experience a modern, AI-enhanced interface with real-time insights, interactive financial analytics, and beautiful visualizations that make sense of your data.",
  },
];

function Features() {
  return (
    <section className="py-20 px-8 bg-gradient-to-br from-gray-50 via-white to-sky-50 dark:from-gray-900 dark:via-gray-800 dark:to-sky-900/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-sky-50 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 px-3 py-1 rounded-full text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 bg-sky-500 dark:bg-sky-400 rounded-full"></span>
            Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Why Choose{" "}
            <span className="text-sky-600 dark:text-sky-400">
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
