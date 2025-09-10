"use client";

import { useEffect, useState } from "react";
import { getAIInsights } from "@/app/actions/getAIInsights";

import type { InsightData, AIAnswer } from "./ai-insights-types";
import { generateInsightAnswer } from "@/app/actions/generateInsightAnswer";
import InsightSkeleton from "./InsightSkeleton";
import InsightHeader from "./InsightHeader";
import InsightCard from "./InsightCard";
import InsightFooter from "./InsightFooter";

const AIInsights = () => {
  const [insights, setInsights] = useState<InsightData[]>([]);
  const [aiAnswers, setAiAnswers] = useState<AIAnswer[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const loadInsights = async () => {
    setIsLoading(true);
    try {
      const newInsights = await getAIInsights();
      setInsights(newInsights);
      setLastUpdated(new Date());
    } catch (error) {
      console.error("❌ Failed to load AI insights:", error);
      setInsights([
        {
          id: "fallback-1",
          type: "info",
          title: "AI Temporarily Unavailable",
          message:
            "We're working to restore AI insights. Please check back soon.",
          action: "Try again later",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleActionClick = async (insight: InsightData) => {
    const existingAnswer = aiAnswers.find((a) => a.insightId === insight.id);
    if (existingAnswer) {
      setAiAnswers((prev) => prev.filter((a) => a.insightId !== insight.id));
      return;
    }

    setAiAnswers((prev) => [
      ...prev,
      { insightId: insight.id, answer: "", isLoading: true },
    ]);

    try {
      const question = `${insight.title}: ${insight.action}`;
      const answer = await generateInsightAnswer(question);

      setAiAnswers((prev) =>
        prev.map((a) =>
          a.insightId === insight.id ? { ...a, answer, isLoading: false } : a
        )
      );
    } catch {
      setAiAnswers((prev) =>
        prev.map((a) =>
          a.insightId === insight.id
            ? {
                ...a,
                answer:
                  "Sorry, I was unable to generate a detailed answer. Please try again.",
                isLoading: false,
              }
            : a
        )
      );
    }
  };

  useEffect(() => {
    loadInsights();
  }, []);

  return (
    <div className="bg-white/80 dark:bg-gray-800/80 p-4 sm:p-6 rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50">
      {isLoading ? (
        <InsightSkeleton />
      ) : (
        <>
          <InsightHeader lastUpdated={lastUpdated} onRefresh={loadInsights} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
            {insights.map((insight) => (
              <InsightCard
                key={insight.id}
                insight={insight}
                aiAnswers={aiAnswers}
                onActionClick={handleActionClick}
              />
            ))}
          </div>
          <InsightFooter onRefresh={loadInsights} />
        </>
      )}
    </div>
  );
};

export default AIInsights;
