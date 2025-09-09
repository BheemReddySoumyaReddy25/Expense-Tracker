import getBestWorstExpense from "@/app/actions/getBestWorstExpense";
import getUserRecord from "@/app/actions/getUserRecords";
import React from "react";
import ExpenseStatsCard from "./ExpenseStatsCard";
import ExpenseRange from "./ExpenseRange";
import ExpenseError from "./ExpenseError";


const ExpenseStats = async () => {
  try {
    // Run DB calls in parallel
    const [userRecordResult, rangeResult] = await Promise.all([
      getUserRecord(),
      getBestWorstExpense(),
    ]);

    const { record, daysWithRecords } = userRecordResult;
    const { bestExpense, worstExpense } = rangeResult;

    // Fallbacks
    const totalExpense = record ?? 0;
    const totalDays =
      daysWithRecords && daysWithRecords > 0 ? daysWithRecords : 1;
    const averageExpense = totalExpense / totalDays;

    return (
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl">
        {/* Header */}
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white text-sm sm:text-lg">📊</span>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
              Expense Statistics
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              Your spending insights and ranges
            </p>
          </div>
        </div>

        {/* Average Spending */}
        <ExpenseStatsCard
          averageExpense={averageExpense}
          totalDays={totalDays}
        />

        {/* Range Section */}
        <ExpenseRange bestExpense={bestExpense} worstExpense={worstExpense} />
      </div>
    );
  } catch (error) {
    console.error("❌ Error in ExpenseStats:", error);
    return <ExpenseError />;
  }
};

export default ExpenseStats;
