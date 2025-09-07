"use client";
import React from "react";

const highlights = [
  { color: "bg-emerald-500 dark:bg-emerald-400", text: "Founded in 2024" },
  { color: "bg-green-500 dark:bg-green-400", text: "AI-First Approach" },
  { color: "bg-teal-500 dark:bg-teal-400", text: "Global Impact" },
  { color: "bg-emerald-500 dark:bg-emerald-400", text: "User-Centric Design" },
];

const profileGradients = [
  "from-emerald-500 to-green-500",
  "from-green-500 to-teal-500",
  "from-teal-500 to-emerald-500",
];

function OurStory() {
  return (
    <section className="py-20 px-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-500/5 to-green-500/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-teal-500/5 to-emerald-500/5 rounded-full blur-2xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full"></span>
            Our Story
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-gray-100">
            Built for the{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              Future
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              ExpenseTracker AI was born from the vision of creating truly
              intelligent financial management tools. Our team of financial
              experts, data scientists, and technologists came together to solve
              a critical problem: making personal finance management smarter,
              more intuitive, and more effective.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Since our launch, we&#39;ve helped thousands of users achieve
              better budgeting and improve their overall financial health
              through the power of artificial intelligence. Every feature is
              designed with user experience and financial wellness in mind.
            </p>

            {/* Profiles & trust */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {profileGradients.map((gradient, index) => (
                  <div
                    key={index}
                    className={`w-10 h-10 bg-gradient-to-br ${gradient} rounded-full border-2 border-white dark:border-gray-800`}
                  ></div>
                ))}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <div className="font-semibold">Trusted by 10,000+ users</div>
                <div>Join our growing community</div>
              </div>
            </div>
          </div>

          {/* Right Feature Card */}
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 p-8 rounded-2xl border border-emerald-100 dark:border-emerald-800/50">
            <div className="space-y-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                  <div className="text-gray-900 dark:text-gray-100 font-medium">
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
