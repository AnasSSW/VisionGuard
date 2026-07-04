function StatCard({ title, value, color }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-md">
      <h3 className="text-gray-500 text-sm">{title}</h3>

      <p className={`mt-3 text-4xl font-bold ${color}`}>
        {value}
      </p>
    </div>
  );
}

export default StatCard;