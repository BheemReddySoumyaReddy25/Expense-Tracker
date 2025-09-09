type BadgeProps = {
  icon: string;
  label: string;
  value: string;
  gradient: string;
  border: string;
};

export default function UserBadge({
  icon,
  label,
  value,
  gradient,
  border,
}: BadgeProps) {
  return (
    <div
      className={`bg-gradient-to-r ${gradient} border ${border} px-3 py-2 rounded-xl flex items-center gap-2 justify-center sm:justify-start`}
    >
      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
        <span className="text-white text-xs">{icon}</span>
      </div>
      <div className="text-center sm:text-left">
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 block">
          {label}
        </span>
        <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
          {value}
        </span>
      </div>
    </div>
  );
}
