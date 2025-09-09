const Alert = ({
  type,
  message,
}: {
  type: "success" | "error";
  message: string;
}) => (
  <div
    className={`mt-4 p-3 rounded-xl border-l-4 ${
      type === "success"
        ? "bg-indigo-50/80 border-l-indigo-500 text-indigo-800"
        : "bg-red-50/80 border-l-red-500 text-red-800"
    }`}
  >
    <div className="flex items-center gap-2">
      <span>{type === "success" ? "✅" : "⚠️"}</span>
      <p className="font-medium text-sm">{message}</p>
    </div>
  </div>
);

export default Alert;
