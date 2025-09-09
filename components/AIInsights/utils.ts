export const getInsightIcon = (type: string) => {
  switch (type) {
    case "warning":
      return "⚠️";
    case "success":
      return "✅";
    case "tip":
      return "💡";
    case "info":
      return "ℹ️";
    default:
      return "🤖";
  }
};

export const getInsightColors = (type: string) => {
  switch (type) {
    case "warning":
      return "border-l-yellow-500 bg-yellow-50 dark:bg-yellow-900/20";
    case "success":
      return "border-l-green-500 bg-green-50 dark:bg-green-900/20";
    case "tip":
    case "info":
      return "border-l-emerald-500 bg-emerald-50 dark:bg-emerald-900/20";
    default:
      return "border-l-gray-500 bg-gray-50 dark:bg-gray-800/50";
  }
};

export const getButtonColors = (type: string) => {
  switch (type) {
    case "warning":
      return "text-yellow-700 dark:text-yellow-300";
    case "success":
      return "text-green-700 dark:text-green-300";
    case "tip":
    case "info":
      return "text-emerald-700 dark:text-emerald-300";
    default:
      return "text-gray-700 dark:text-gray-300";
  }
};

export const formatLastUpdated = (lastUpdated: Date | null) => {
  if (!lastUpdated) return "Loading...";

  const now = new Date();
  const diffMs = now.getTime() - lastUpdated.getTime();
  const diffMins = Math.floor(diffMs / 60000);

  if (diffMins < 1) return "Just now";
  if (diffMins < 60) return `${diffMins}m ago`;

  const diffHours = Math.floor(diffMins / 60);
  if (diffHours < 24) return `${diffHours}h ago`;

  return lastUpdated.toLocaleDateString();
};
