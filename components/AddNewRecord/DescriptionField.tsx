type Props = {
  description: string;
  setDescription: (val: string) => void;
  onAISuggest: () => void;
  isCategorizing: boolean;
};

const DescriptionField = ({
  description,
  setDescription,
  onAISuggest,
  isCategorizing,
}: Props) => (
  <div className="space-y-1.5">
    <label className="flex items-center gap-2 text-xs font-semibold text-gray-700 dark:text-gray-300 tracking-wide">
      <span className="w-1.5 h-1.5 bg-sky-500 rounded-full"></span>
      Expense Description
    </label>
    <div className="relative">
      <input
        type="text"
        name="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full pl-3 pr-12 py-2.5 rounded-xl border bg-white/70 dark:bg-gray-800/70"
        placeholder="Coffee, groceries, gas..."
        required
      />
      <button
        type="button"
        onClick={onAISuggest}
        disabled={isCategorizing || !description.trim()}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-sky-500 text-white rounded-lg flex items-center justify-center"
      >
        {isCategorizing ? (
          <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
        ) : (
          <span className="text-xs">✨</span>
        )}
      </button>
    </div>
  </div>
);

export default DescriptionField;
