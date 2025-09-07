"use client";
import React from "react";

const features = [
  {
    icon: "🤖",
    gradient: "from-emerald-500 via-green-500 to-teal-500",
    title: "AI Insights",
    description: "Smart analysis of your spending patterns",
  },
  {
    icon: "✨",
    gradient: "from-green-500 via-teal-500 to-emerald-500",
    title: "Auto Categories",
    description: "Intelligent expense categorization",
  },
  {
    icon: "📊",
    gradient: "from-teal-500 via-emerald-500 to-green-500",
    title: "Smart Dashboard",
    description: "Beautiful, intuitive financial overview",
    extraClasses: "sm:col-span-2 md:col-span-1", // special layout
  },
];

function FeatureHighlight() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto px-2 sm:px-0">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100/50 dark:border-gray-700/50 ${
            feature.extraClasses || ""
          }`}
        >
          <div
            className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br ${feature.gradient} rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg mb-3 sm:mb-4 mx-auto`}
          >
            <span className="text-white text-base sm:text-lg">
              {feature.icon}
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 text-center">
            {feature.title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default FeatureHighlight;
