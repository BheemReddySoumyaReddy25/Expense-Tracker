const RecordHistoryEmpty = () => (
  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50">
    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-sky-500 via-indigo-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
        <span className="text-white text-sm sm:text-lg">📝</span>
      </div>
      <div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
          Expense History
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
          Your spending timeline
        </p>
      </div>
    </div>
    <div className="text-center py-6 sm:py-8">
      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-sky-100 to-indigo-100 dark:from-sky-900/50 dark:to-indigo-900/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
        <span className="text-2xl sm:text-3xl">📊</span>
      </div>
      <h4 className="text-base sm:text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
        No Expense Records Found
      </h4>
      <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto text-sm">
        Start tracking your expenses to see your spending history and patterns
        here.
      </p>
    </div>
  </div>
);

export default RecordHistoryEmpty;
