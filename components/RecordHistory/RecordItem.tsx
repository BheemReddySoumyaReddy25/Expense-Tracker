"use client";

import { useState, useCallback } from "react";
import deleteRecord from "@/app/actions/deleteRecord";
import { Record } from "@/types/Records";

// 🔹 Helpers moved outside component
const getCategoryEmoji = (category: string): string => {
  const map: globalThis.Record<string, string> = {
    Food: "🍔",
    Transportation: "🚗",
    Shopping: "🛒",
    Entertainment: "🎬",
    Bills: "💡",
    Healthcare: "🏥",
  };
  return map[category] ?? "📦";
};

const getBorderColor = (amount: number): string => {
  if (amount > 100) return "border-red-500"; // High expense
  if (amount > 50) return "border-yellow-500"; // Medium expense
  return "border-indigo-500"; // Low expense
};

const RecordItem = ({ record }: { record: Record }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteRecord = useCallback(async () => {
    try {
      setIsLoading(true);
      await deleteRecord(record.id);
    } finally {
      setIsLoading(false);
    }
  }, [record.id]);

  return (
    <li
      className={`relative bg-white/60 dark:bg-gray-700/60 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100/50 dark:border-gray-600/50 border-l-4 ${getBorderColor(
        record.amount
      )} hover:bg-white/80 dark:hover:bg-gray-700/80 flex flex-col justify-between min-h-[120px] sm:min-h-[140px] group`}
    >
      {/* ❌ Delete Button */}
      <button
        onClick={handleDeleteRecord}
        disabled={isLoading}
        aria-disabled={isLoading}
        aria-label="Delete record"
        title="Delete expense record"
        className={`absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-full w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center shadow-lg hover:shadow-xl border-2 border-white dark:border-gray-700 backdrop-blur-sm transition-all duration-200 transform ${
          isLoading
            ? "cursor-not-allowed opacity-70 scale-95"
            : "hover:scale-110 opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
        }`}
      >
        {isLoading ? (
          <div className="w-3 h-3 border-2 border-white/40 border-t-white rounded-full animate-spin" />
        ) : (
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </button>

      {/* 📅 Header Row */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
          {new Date(record.date).toLocaleDateString()}
        </span>
        <span className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
          ${record.amount.toFixed(2)}
        </span>
      </div>

      {/* 🏷️ Category */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-base sm:text-lg">
          {getCategoryEmoji(record.category)}
        </span>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {record.category}
        </span>
      </div>

      {/* 📝 Description */}
      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
        {record.text}
      </p>
    </li>
  );
};

export default RecordItem;
