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
        gradient="from-emerald-50 to-green-50 dark:from-emerald-900/30 dark:to-green-900/30"
        border="border-emerald-100 dark:border-emerald-800"
      />
      <UserBadge
        icon="⚡"
        label="Last Active"
        value={lastActive}
        gradient="from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30"
        border="border-green-100 dark:border-green-800"
      />
    </div>
  );
}
