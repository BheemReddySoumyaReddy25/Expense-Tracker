const InsightSkeleton = () => {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50">
      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-sky-500 via-indigo-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
          <span className="text-white text-sm sm:text-lg">🤖</span>
        </div>
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
            AI Insights
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            Analyzing your spending patterns
          </p>
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-sky-500/30 border-t-sky-500 rounded-full animate-spin"></div>
          <span className="text-xs sm:text-sm text-sky-600 dark:text-sky-400 font-medium hidden sm:block">
            Analyzing...
          </span>
        </div>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="animate-pulse bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-800 p-3 sm:p-4 rounded-xl border border-gray-100 dark:border-gray-600"
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 dark:bg-gray-600 rounded-lg"></div>
              <div className="flex-1 space-y-2">
                <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded-lg w-3/4"></div>
                <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded-lg w-full"></div>
                <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded-lg w-2/3"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsightSkeleton;
