"use client";
import React from "react";

const reviews = [
  {
    initial: "S",
    name: "Sarah L.",
    text: "ExpenseTracker AI has completely transformed my budgeting. The AI insights are incredibly helpful and I now have full control over my finances!",
    gradient: "from-emerald-500 via-green-500 to-teal-500",
    bgOverlay: "from-emerald-500/5 to-green-500/5",
  },
  {
    initial: "J",
    name: "John D.",
    text: "The AI-powered insights from ExpenseTracker have helped me identify and reduce unnecessary spending. The smart categorization is amazing!",
    gradient: "from-green-500 via-teal-500 to-emerald-500",
    bgOverlay: "from-green-500/5 to-teal-500/5",
  },
  {
    initial: "E",
    name: "Emily R.",
    text: "ExpenseTracker AI is so intelligent and easy to use. The AI recommendations are spot-on and have genuinely improved my financial habits!",
    gradient: "from-teal-500 via-emerald-500 to-green-500",
    bgOverlay: "from-teal-500/5 to-emerald-500/5",
  },
];

function Review() {
  return (
    <React.Fragment>
      {reviews.map((review, index) => (
        <div
          key={index}
          className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-200 hover:-translate-y-1 sm:col-span-2 lg:col-span-1"
        >
          {/* Hover overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${review.bgOverlay} rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
          ></div>

          <div className="relative z-10">
            {/* Avatar + Name */}
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br ${review.gradient} rounded-full flex items-center justify-center shadow-lg`}
              >
                <span className="text-white text-xs sm:text-sm font-bold">
                  {review.initial}
                </span>
              </div>
              <div>
                <div className="font-bold text-gray-900 dark:text-gray-100 text-sm sm:text-base">
                  {review.name}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  Verified User
                </div>
              </div>
            </div>

            {/* Review text */}
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              &ldquo;{review.text}&rdquo;
            </p>

            {/* Stars */}
            <div className="flex text-emerald-500 text-xs sm:text-sm">
              ⭐⭐⭐⭐⭐
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
}

export default Review;
