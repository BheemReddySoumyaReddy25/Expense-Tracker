"use server";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

interface UserRecordResult {
  record?: number;
  daysWithRecords?: number;
  error?: string;
}

async function getUserRecord(): Promise<UserRecordResult> {
  try {
    const { userId } = await auth();

    if (!userId) {
      return { error: "User not authenticated" };
    }

    // Fetch only what you need → avoid pulling unnecessary columns
    const records = await db.record.findMany({
      where: { userId },
      select: { amount: true }, // only get "amount"
    });

    if (records.length === 0) {
      return { record: 0, daysWithRecords: 0 };
    }

    // Use reduce for sum
    const record = records.reduce((sum, r) => sum + r.amount, 0);

    // Count only valid days
    const daysWithRecords = records.filter((r) => r.amount > 0).length;

    return { record, daysWithRecords };
  } catch (err) {
    console.error("❌ Error fetching user record:", err);
    return { error: "Failed to fetch user records" };
  }
}

export default getUserRecord;
