const ChartEmpty = () => (
  <div className="text-center py-6 sm:py-8">
    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
      <span className="text-2xl sm:text-3xl">📈</span>
    </div>
    <h4 className="text-base sm:text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
      No Data to Display
    </h4>
    <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto leading-relaxed text-sm">
      Start tracking your expenses to see your spending patterns visualized in
      this chart.
    </p>
  </div>
);

export default ChartEmpty;
