"use client";
import React from "react";

const faqs = [
  {
    icon: "❓",
    gradient: "from-sky-500 via-indigo-500 to-cyan-500",
    question: "What is ExpenseTracker AI?",
    answer:
      "ExpenseTracker AI is an intelligent financial management tool that uses artificial intelligence to help you monitor your spending patterns, get smart category suggestions, and receive personalized insights to improve your financial health.",
  },
  {
    icon: "🤖",
    gradient: "from-indigo-500 via-cyan-500 to-sky-500",
    question: "How does the AI work?",
    answer:
      "Our AI analyzes your spending data to automatically categorize expenses, detect patterns, and provide personalized recommendations. You can also ask the AI questions about your spending habits and get instant, intelligent responses.",
  },
  {
    icon: "💎",
    gradient: "from-cyan-500 via-sky-500 to-indigo-500",
    question: "Is ExpenseTracker AI free?",
    answer:
      "Yes, ExpenseTracker AI offers a free plan with basic AI features including smart categorization and insights. Premium plans are available for advanced AI analytics and unlimited AI interactions.",
  },
];

function FAQ() {
  return (
    <div className="space-y-4 sm:space-y-6">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-200"
        >
          <div className="flex items-start gap-3 sm:gap-4">
            {/* Icon */}
            <div
              className={`w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br ${faq.gradient} rounded-md sm:rounded-lg flex items-center justify-center shadow-lg flex-shrink-0`}
            >
              <span className="text-white text-xs sm:text-sm">{faq.icon}</span>
            </div>

            {/* Text */}
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 sm:mb-3">
                {faq.question}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FAQ;
