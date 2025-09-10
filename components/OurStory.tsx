"use client";
import React from "react";

const highlights = [
  { color: "bg-sky-500 dark:bg-sky-400", text: "Founded in 2024" },
  { color: "bg-indigo-500 dark:bg-indigo-400", text: "AI-First Approach" },
  { color: "bg-cyan-500 dark:bg-cyan-400", text: "Global Impact" },
  { color: "bg-sky-500 dark:bg-sky-400", text: "User-Centric Design" },
];

const profileGradients = [
  "from-sky-500 to-indigo-500",
  "from-indigo-500 to-cyan-500",
  "from-cyan-500 to-sky-500",
];

function OurStory() {
  return (
    <section className="py-20 px-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-sky-500/5 to-indigo-500/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-cyan-500/5 to-sky-500/5 rounded-full blur-2xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-sky-50 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 px-3 py-1 rounded-full text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 bg-sky-500 dark:bg-sky-400 rounded-full"></span>
            Our Story
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-gray-100">
            Built for the{" "}
            <span className="text-sky-600 dark:text-sky-400">Future</span>
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
          <div className="bg-gradient-to-br from-sky-50 to-indigo-50 dark:from-sky-900/20 dark:to-indigo-900/20 p-8 rounded-2xl border border-sky-100 dark:border-sky-800/50">
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
