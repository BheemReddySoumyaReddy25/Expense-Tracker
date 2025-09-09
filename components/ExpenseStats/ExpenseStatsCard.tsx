interface Props {
  averageExpense: number;
  totalDays: number;
}

const ExpenseStatsCard = ({ averageExpense, totalDays }: Props) => (
  <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-xl p-3 sm:p-4 border border-gray-200/50 dark:border-gray-600/50 mb-4">
    <div className="text-center">
      <p className="text-xs font-medium text-gray-600 dark:text-gray-300 mb-2 tracking-wide uppercase">
        Average Daily Spending
      </p>
      <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
        ${averageExpense.toFixed(2)}
      </div>
      <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-2 py-1 rounded-full text-xs font-medium">
        <span className="w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full"></span>
        Based on {totalDays} days with expenses
      </div>
    </div>
  </div>
);

export default ExpenseStatsCard;
