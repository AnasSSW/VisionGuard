function StatCard({ title, value, color }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <p className="text-sm font-medium text-gray-500 dark:text-gray-300">
        {title}
      </p>

      <h2 className={`mt-3 text-5xl font-bold ${color}`}>
        {value}
      </h2>
    </div>
  );
}

export default StatCard;