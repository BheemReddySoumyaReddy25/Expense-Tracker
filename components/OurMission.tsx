"use client";
import React from "react";

const stats = [
  {
    value: "10K+",
    label: "Active Users",
    gradient:
      "from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20",
    border: "border-emerald-100 dark:border-emerald-800/50",
    text: "text-emerald-600 dark:text-emerald-400",
  },
  {
    value: "$2M+",
    label: "Money Tracked",
    gradient:
      "from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20",
    border: "border-green-100 dark:border-green-800/50",
    text: "text-green-600 dark:text-green-400",
  },
  {
    value: "99%",
    label: "Satisfaction Rate",
    gradient:
      "from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20",
    border: "border-teal-100 dark:border-teal-800/50",
    text: "text-teal-600 dark:text-teal-400",
  },
];

function OurMission() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm relative overflow-hidden">
      {/* Top Gradient Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500"></div>

      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
          <span className="w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full"></span>
          Our Mission
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-gray-900 dark:text-gray-100 px-2 sm:px-0">
          Transforming Financial Management with{" "}
          <span className="text-emerald-600 dark:text-emerald-400">AI</span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
          At ExpenseTracker AI, we leverage cutting-edge artificial intelligence
          to revolutionize how individuals achieve financial wellness. Our AI
          analyzes your spending patterns to deliver personalized
          recommendations and actionable insights that lead to better budgeting
          and financial freedom.
        </p>

        {/* Stats Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${stat.gradient} p-6 rounded-2xl border ${stat.border}`}
            >
              <div className={`text-3xl font-bold mb-2 ${stat.text}`}>
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurMission;
