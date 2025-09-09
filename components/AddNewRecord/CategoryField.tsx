type Props = {
  category: string;
  setCategory: (val: string) => void;
};

const CategoryField = ({ category, setCategory }: Props) => (
  <div className="space-y-1.5">
    <label className="flex items-center gap-2 text-xs font-semibold text-gray-700 dark:text-gray-300">
      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
      Category
    </label>
    <select
      name="category"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="w-full px-3 py-2.5 rounded-xl border bg-white/70 dark:bg-gray-800/70"
      required
    >
      <option value="" disabled>
        Select category...
      </option>
      <option value="Food">🍔 Food & Dining</option>
      <option value="Transportation">🚗 Transportation</option>
      <option value="Shopping">🛒 Shopping</option>
      <option value="Entertainment">🎬 Entertainment</option>
      <option value="Bills">💡 Bills & Utilities</option>
      <option value="Healthcare">🏥 Healthcare</option>
      <option value="Other">📦 Other</option>
    </select>
  </div>
);

export default CategoryField;
