interface Props {
  bestExpense?: number;
  worstExpense?: number;
}

const ExpenseRange = ({ bestExpense, worstExpense }: Props) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
    {/* Highest */}
    <div className="bg-red-50/80 dark:bg-red-900/20 backdrop-blur-sm p-3 sm:p-4 rounded-xl border-l-4 border-l-red-500 hover:bg-red-50 dark:hover:bg-red-900/30">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-red-100 dark:bg-red-800 rounded-xl flex items-center justify-center">
          <span className="text-sm font-bold text-red-600 dark:text-red-300">
            ↑
          </span>
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-gray-900 dark:text-gray-100 text-xs mb-0.5">
            Highest
          </h4>
          <p className="text-lg font-bold text-red-600 dark:text-red-300">
            {bestExpense !== undefined ? `$${bestExpense}` : "No data"}
          </p>
        </div>
      </div>
    </div>

    {/* Lowest */}
    <div className="bg-green-50/80 dark:bg-green-900/20 backdrop-blur-sm p-3 sm:p-4 rounded-xl border-l-4 border-l-green-500 hover:bg-green-50 dark:hover:bg-green-900/30">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-green-100 dark:bg-green-800 rounded-xl flex items-center justify-center">
          <span className="text-sm font-bold text-green-600 dark:text-green-300">
            ↓
          </span>
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-gray-900 dark:text-gray-100 text-xs mb-0.5">
            Lowest
          </h4>
          <p className="text-lg font-bold text-green-600 dark:text-green-300">
            {worstExpense !== undefined ? `$${worstExpense}` : "No data"}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default ExpenseRange;
