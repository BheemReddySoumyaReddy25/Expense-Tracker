interface Props {
  onRefresh: () => void;
}

const InsightFooter = ({ onRefresh }: Props) => {
  return (
    <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-100 dark:border-gray-700">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-sky-50 dark:bg-sky-900/30 rounded-lg flex items-center justify-center">
            <span className="text-sm">🧠</span>
          </div>
          <span className="font-medium text-xs">Powered by AI analysis</span>
        </div>

        <button
          onClick={onRefresh}
          className="px-3 py-1.5 bg-gradient-to-r from-sky-600 via-indigo-500 to-cyan-500 hover:from-sky-700 hover:via-indigo-600 hover:to-cyan-600 text-white rounded-lg font-medium text-xs shadow-lg hover:shadow-xl transition-all duration-200"
        >
          <span className="sm:hidden">Refresh</span>
          <span className="hidden sm:inline">Refresh Insights →</span>
        </button>
      </div>
    </div>
  );
};

export default InsightFooter;
