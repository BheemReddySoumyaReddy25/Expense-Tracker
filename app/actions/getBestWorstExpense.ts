"use server";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

interface BestWorstResult {
  bestExpense?: number;
  worstExpense?: number;
  error?: string;
}

async function getBestWorstExpense(): Promise<BestWorstResult> {
  try {
    const { userId } = await auth();

    if (!userId) {
      return { error: "User not authenticated" };
    }

    // Let the database calculate min and max
    const aggregate = await db.record.aggregate({
      where: { userId },
      _max: { amount: true },
      _min: { amount: true },
    });

    return {
      bestExpense: aggregate._max.amount ?? 0,
      worstExpense: aggregate._min.amount ?? 0,
    };
  } catch (err) {
    console.error("❌ Error fetching best/worst expense:", err);
    return { error: "Failed to fetch expense data" };
  }
}

export default getBestWorstExpense;
