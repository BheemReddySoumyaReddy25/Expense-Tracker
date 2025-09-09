import AddRecord from "@/components/AddNewRecord";
import AIInsights from "@/components/AIInsights";
import ExpenseStats from "@/components/ExpenseStats";
import Guest from "@/components/Guest";
import RecordChart from "@/components/RecordChart";
import RecordHistory from "@/components/RecordHistory";
import WelcomeCard from "@/components/WelcomeCard";

import { currentUser } from "@clerk/nextjs/server";
export interface UserType {
  id: string;
  firstName: string | null;
  imageUrl: string;
  createdAt: number;
  lastActiveAt: number | null;
}
export default async function HomePage() {
  const user = await currentUser();
  if (!user) return <Guest />;
  const safeUser: UserType = {
    id: user.id,
    firstName: user.firstName,
    imageUrl: user.imageUrl,
    createdAt: user.createdAt,
    lastActiveAt: user.lastActiveAt,
  };

  return (
    <main className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Left Column */}
          <div className="space-y-4 sm:space-y-6">
            <WelcomeCard user={safeUser} />
            <AddRecord />
          </div>

          {/* Right Column */}
          <div className="space-y-4 sm:space-y-6">
            <RecordChart />
            <ExpenseStats />
          </div>
        </div>

        {/* Full-width sections */}
        <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
          <AIInsights />
          <RecordHistory />
        </div>
      </div>
    </main>
  );
}
