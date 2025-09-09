"use client";
import React from "react";

const stats = [
  {
    value: "10K+",
    label: "Active Users",
    gradient:
      "from-sky-50 to-indigo-50 dark:from-sky-900/20 dark:to-indigo-900/20",
    border: "border-sky-100 dark:border-sky-800/50",
    text: "text-sky-600 dark:text-sky-400",
  },
  {
    value: "$2M+",
    label: "Money Tracked",
    gradient:
      "from-indigo-50 to-cyan-50 dark:from-indigo-900/20 dark:to-cyan-900/20",
    border: "border-indigo-100 dark:border-indigo-800/50",
    text: "text-indigo-600 dark:text-indigo-400",
  },
  {
    value: "99%",
    label: "Satisfaction Rate",
    gradient: "from-cyan-50 to-sky-50 dark:from-cyan-900/20 dark:to-sky-900/20",
    border: "border-cyan-100 dark:border-cyan-800/50",
    text: "text-cyan-600 dark:text-cyan-400",
  },
];

function OurMission() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm relative overflow-hidden">
      {/* Top Gradient Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-cyan-500"></div>

      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-sky-50 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
          <span className="w-1.5 h-1.5 bg-sky-500 dark:bg-sky-400 rounded-full"></span>
          Our Mission
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-gray-900 dark:text-gray-100 px-2 sm:px-0">
          Transforming Financial Management with{" "}
          <span className="text-sky-600 dark:text-sky-400">AI</span>
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
