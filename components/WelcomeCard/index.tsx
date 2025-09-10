"use client";

import { UserType } from "@/app/page";
import AvatarWithStatus from "./AvatarWithStatus";
import GreetingHeader from "./GreetingHeader";
import UserBadges from "./UserBadges";

export default function WelcomeCard({ user }: { user: UserType }) {
  const joinedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(user.createdAt));

  const lastActive = user.lastActiveAt
    ? new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }).format(new Date(user.lastActiveAt))
    : "Today";

  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 lg:p-8 rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl flex flex-col sm:flex-row items-center sm:items-start gap-6">
      <AvatarWithStatus
        imageUrl={user.imageUrl ?? ""}
        alt={`${user.firstName ?? "User"}'s profile`}
      />
      <div className="flex-1 text-center sm:text-left">
        <GreetingHeader firstName={user.firstName ?? "User"} />
        <p className="text-base text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto sm:mx-0">
          Here&apos;s a quick overview of your recent expense activity. Track
          your spending, analyze patterns, and manage your budget efficiently!
        </p>
        <UserBadges joinedDate={joinedDate} lastActive={lastActive} />
      </div>
    </div>
  );
}
