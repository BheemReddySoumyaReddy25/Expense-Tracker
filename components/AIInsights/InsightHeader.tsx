import { formatLastUpdated } from "./utils";

interface Props {
  lastUpdated: Date | null;
  onRefresh: () => void;
}

const InsightHeader = ({ lastUpdated, onRefresh }: Props) => {
  return (
    <div className="flex items-center justify-between mb-4 sm:mb-6">
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
          <span className="text-white text-sm sm:text-lg">🤖</span>
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
            AI Insights
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            AI financial analysis
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-2 py-1 rounded-full text-xs font-medium">
          <span className="w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full"></span>
          <span className="hidden sm:inline">
            {formatLastUpdated(lastUpdated)}
          </span>
          <span className="sm:hidden">
            {formatLastUpdated(lastUpdated).includes("ago")
              ? formatLastUpdated(lastUpdated).replace(" ago", "")
              : formatLastUpdated(lastUpdated)}
          </span>
        </div>

        <button
          onClick={onRefresh}
          className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 hover:from-emerald-700 hover:via-green-600 hover:to-teal-600 text-white rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200"
        >
          <span className="text-sm">🔄</span>
        </button>
      </div>
    </div>
  );
};

export default InsightHeader;
