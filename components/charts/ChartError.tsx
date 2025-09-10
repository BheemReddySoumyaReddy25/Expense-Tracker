const ChartError = ({ message }: { message: string }) => (
  <div className="bg-red-50/80 dark:bg-red-900/20 backdrop-blur-sm p-3 sm:p-4 rounded-xl border-l-4 border-l-red-500">
    <div className="flex items-center gap-2 mb-2">
      <div className="w-6 h-6 bg-red-100 dark:bg-red-800 rounded-full flex items-center justify-center">
        <span className="text-sm">⚠️</span>
      </div>
      <p className="text-red-800 dark:text-red-300 font-semibold text-sm">
        Error loading chart data
      </p>
    </div>
    <p className="text-red-700 dark:text-red-400 text-xs ml-8">{message}</p>
  </div>
);

export default ChartError;
