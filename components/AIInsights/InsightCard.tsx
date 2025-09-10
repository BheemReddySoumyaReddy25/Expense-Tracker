import { AIAnswer, InsightData } from "./ai-insights-types";
import InsightAnswer from "./InsightAnswer";

import { getButtonColors, getInsightColors, getInsightIcon } from "./utils";

interface Props {
  insight: InsightData;
  aiAnswers: AIAnswer[];
  onActionClick: (insight: InsightData) => void;
}

const InsightCard = ({ insight, aiAnswers, onActionClick }: Props) => {
  const currentAnswer = aiAnswers.find((a) => a.insightId === insight.id);

  return (
    <div
      className={`relative overflow-hidden rounded-xl p-3 sm:p-4 border-l-4 ${getInsightColors(
        insight.type
      )}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 sm:gap-3 mb-2">
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center bg-gray-100 dark:bg-gray-700">
              <span>{getInsightIcon(insight.type)}</span>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-gray-900 dark:text-gray-100 text-sm">
                {insight.title}
              </h4>
            </div>
          </div>

          <p className="text-gray-700 dark:text-gray-300 text-xs mb-3">
            {insight.message}
          </p>

          {insight.action && (
            <button
              onClick={() => onActionClick(insight)}
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${getButtonColors(
                insight.type
              )}`}
            >
              {insight.action}
              {currentAnswer?.isLoading ? (
                <div className="w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <span>{currentAnswer ? "↑" : "→"}</span>
              )}
            </button>
          )}

          {currentAnswer && <InsightAnswer answer={currentAnswer} />}
        </div>
      </div>
    </div>
  );
};

export default InsightCard;
