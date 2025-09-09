type Props = {
  amount: number;
  setAmount: (val: number) => void;
};

const AmountField = ({ amount, setAmount }: Props) => (
  <div className="space-y-1.5">
    <label className="flex items-center gap-2 text-xs font-semibold text-gray-700 dark:text-gray-300">
      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
      Amount
    </label>
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
      <input
        type="number"
        name="amount"
        min="0"
        max="1000"
        step="0.01"
        value={amount}
        onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
        className="w-full pl-6 pr-3 py-2.5 rounded-xl border bg-white/70 dark:bg-gray-800/70"
        placeholder="0.00"
        required
      />
    </div>
  </div>
);

export default AmountField;
