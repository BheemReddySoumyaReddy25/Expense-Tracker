"use server";

import { checkUser } from "@/lib/checkUser";
import { db } from "@/lib/db";
import { generateExpenseInsights, AIInsight, ExpenseRecord } from "@/lib/ai";

// ✅ Default insights for brand new users
const DEFAULT_INSIGHTS: AIInsight[] = [
  {
    id: "welcome-1",
    type: "info",
    title: "Welcome to ExpenseTracker AI!",
    message:
      "Start adding your expenses to get personalized AI insights about your spending patterns.",
    action: "Add your first expense",
    confidence: 1.0,
  },
  {
    id: "welcome-2",
    type: "tip",
    title: "Track Regularly",
    message:
      "For best results, try to log expenses daily. This helps our AI provide more accurate insights.",
    action: "Set daily reminders",
    confidence: 1.0,
  },
];

// ✅ Fallback if AI/DB fails
const ERROR_INSIGHTS: AIInsight[] = [
  {
    id: "error-1",
    type: "warning",
    title: "Insights Temporarily Unavailable",
    message:
      "We're having trouble analyzing your expenses right now. Please try again in a few minutes.",
    action: "Retry analysis",
    confidence: 0.5,
  },
];

export async function getAIInsights(): Promise<AIInsight[]> {
  try {
    const user = await checkUser();
    if (!user) {
      return ERROR_INSIGHTS;
    }

    // Compute "last 30 days" once
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

    // ✅ Query only necessary fields
    const expenses = await db.record.findMany({
      where: {
        userId: user.clerkUserId,
        createdAt: { gte: thirtyDaysAgo },
      },
      select: {
        id: true,
        amount: true,
        category: true,
        text: true,
        createdAt: true,
      },
      orderBy: { createdAt: "desc" },
      take: 50,
    });

    if (expenses.length === 0) {
      return DEFAULT_INSIGHTS;
    }

    // ✅ Transform for AI
    const expenseData: ExpenseRecord[] = expenses.map((expense) => ({
      id: expense.id,
      amount: expense.amount,
      category: expense.category ?? "Other",
      description: expense.text,
      date: expense.createdAt.toISOString(),
    }));

    return await generateExpenseInsights(expenseData);
  } catch (error) {
    console.error("Error getting AI insights:", error);
    return ERROR_INSIGHTS;
  }
}
