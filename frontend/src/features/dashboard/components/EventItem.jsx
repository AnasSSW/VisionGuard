function EventItem({ type, camera, time }) {
  const colors = {
    Person: "bg-blue-100 text-blue-700",
    Fire: "bg-red-100 text-red-700",
    Helmet: "bg-yellow-100 text-yellow-700",
  };

  return (
    <div className="flex items-center justify-between rounded-lg border p-3">
      <div>
        <p className="font-medium">{type}</p>
        <p className="text-sm text-gray-500">{camera}</p>
      </div>

      <div className="text-right">
        <span
          className={`rounded-full px-2 py-1 text-xs ${
            colors[type] || "bg-gray-100 text-gray-700"
          }`}
        >
          {type}
        </span>

        <p className="mt-1 text-xs text-gray-400">{time}</p>
      </div>
    </div>
  );
}

export default EventItem;