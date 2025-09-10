export default function GreetingHeader({ firstName }: { firstName: string }) {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-3 mb-4">
      <div className="w-10 h-10 bg-gradient-to-br from-sky-500 via-indigo-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
        <span className="text-white text-lg">👋</span>
      </div>
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100">
        Welcome Back, {firstName ?? "User"}!
      </h2>
    </div>
  );
}
