"use server";

import { checkUser } from "@/lib/checkUser";
import { db } from "@/lib/db";
import { generateAIAnswer, ExpenseRecord } from "@/lib/ai";

export async function generateInsightAnswer(question: string): Promise<string> {
  try {
    // ✅ Authenticate user
    const user = await checkUser();
    if (!user) return "User not authenticated. Please log in.";

    // ✅ Get recent 30 days of expenses (limit 50 for efficiency)
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

    const expenses = await db.record.findMany({
      where: {
        userId: user.clerkUserId,
        createdAt: { gte: thirtyDaysAgo },
      },
      orderBy: { createdAt: "desc" },
      take: 50,
      select: {
        id: true,
        amount: true,
        category: true,
        text: true,
        createdAt: true,
      }, // ⚡ select only fields needed
    });

    if (expenses.length === 0) {
      return "No expenses found in the last 30 days. Add expenses to get AI-powered insights.";
    }

    // ✅ Map directly into the expected format
    const expenseData: ExpenseRecord[] = expenses.map(
      ({ id, amount, category, text, createdAt }) => ({
        id,
        amount,
        category: category || "Other",
        description: text,
        date: createdAt.toISOString(),
      })
    );

    // ✅ Generate AI answer
    return await generateAIAnswer(question, expenseData);
  } catch (error) {
    console.error("❌ Error generating insight answer:", error);
    return "I'm unable to provide a detailed answer right now. Please try again later.";
  }
}
