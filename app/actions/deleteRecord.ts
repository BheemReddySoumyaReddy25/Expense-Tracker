"use server";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

async function deleteRecord(recordId: string): Promise<{
  message?: string;
  error?: string;
}> {
  try {
    //  Ensure user is authenticated
    const { userId } = await auth();
    if (!userId) {
      return { error: "User not authenticated" };
    }

    //  Use deleteMany (safer) instead of delete
    const result = await db.record.deleteMany({
      where: {
        id: recordId,
        userId,
      },
    });

    if (result.count === 0) {
      return { error: "Record not found or not authorized" };
    }

    //  Revalidate cache for home/dashboard
    revalidatePath("/");

    return { message: "Record deleted successfully" };
  } catch (err) {
    console.error("❌ Error deleting record:", err);
    return { error: "Database error while deleting record" };
  }
}

export default deleteRecord;
