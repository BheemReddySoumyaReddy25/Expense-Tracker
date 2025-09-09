import type { AIAnswer } from "./ai-insights-types";

const InsightAnswer = ({ answer }: { answer: AIAnswer }) => (
  <div className="mt-3 p-3 bg-white/70 dark:bg-gray-700/70 rounded-lg border">
    {answer.isLoading ? (
      <div className="space-y-1 animate-pulse">
        <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded w-3/4"></div>
        <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded w-2/3"></div>
      </div>
    ) : (
      <p className="text-gray-700 dark:text-gray-300 text-xs">
        {answer.answer}
      </p>
    )}
  </div>
);

export default InsightAnswer;
