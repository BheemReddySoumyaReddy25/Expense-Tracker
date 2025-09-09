const SubmitButton = ({ isLoading }: { isLoading: boolean }) => (
  <button
    type="submit"
    disabled={isLoading}
    className="w-full bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 text-white px-4 py-3 rounded-xl font-semibold shadow-xl hover:shadow-2xl"
  >
    <div className="flex items-center justify-center gap-2">
      {isLoading ? (
        <>
          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          <span>Processing...</span>
        </>
      ) : (
        <>
          <span className="text-lg">💫</span>
          <span>Add Expense</span>
        </>
      )}
    </div>
  </button>
);

export default SubmitButton;
