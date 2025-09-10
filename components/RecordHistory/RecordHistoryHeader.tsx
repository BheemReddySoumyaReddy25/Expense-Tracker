const RecordHistoryHeader = () => (
  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-sky-500 via-indigo-300 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
      <span className="text-white text-sm sm:text-lg">📝</span>
    </div>
    <div>
      <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
        Expense History
      </h3>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
        Your spending timeline
      </p>
    </div>
  </div>
);

export default RecordHistoryHeader;
