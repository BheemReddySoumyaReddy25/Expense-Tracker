import UserBadge from "./UserBadge";

export default function UserBadges({
  joinedDate,
  lastActive,
}: {
  joinedDate: string;
  lastActive: string;
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
      <UserBadge
        icon="📅"
        label="Joined"
        value={joinedDate}
        gradient="from-sky-50 to-indigo-50 dark:from-sky-900/30 dark:to-indigo-900/30"
        border="border-sky-100 dark:border-sky-800"
      />
      <UserBadge
        icon="⚡"
        label="Last Active"
        value={lastActive}
        gradient="from-indigo-50 to-sky-50 dark:from-indigo-900/30 dark:to-sky-900/30"
        border="border-indigo-100 dark:border-indigo-800"
      />
    </div>
  );
}
