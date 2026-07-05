function StatCard({ title, value, color }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm border">
      <p className="text-sm font-medium text-gray-500">
        {title}
      </p>

      <h2 className={`mt-3 text-5xl font-bold ${color}`}>
        {value}
      </h2>
    </div>
  );
}

export default StatCard;