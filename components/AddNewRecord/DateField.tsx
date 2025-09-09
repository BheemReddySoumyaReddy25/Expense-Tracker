const DateField = () => (
  <div className="space-y-1.5">
    <label className="flex items-center gap-2 text-xs font-semibold text-gray-700 dark:text-gray-300 tracking-wide">
      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
      Expense Date
    </label>
    <input
      type="date"
      name="date"
      className="w-full px-3 py-2.5 rounded-xl border bg-white/70 dark:bg-gray-800/70"
      required
    />
  </div>
);

export default DateField;
