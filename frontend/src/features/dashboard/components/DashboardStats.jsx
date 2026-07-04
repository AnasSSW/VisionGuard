import StatCard from "./StatCard";

function DashboardStats() {
  return (
    <div className="grid grid-cols-4 gap-6">

      <StatCard
        title="Total Cameras"
        value="12"
        color="text-blue-600"
      />

      <StatCard
        title="Online"
        value="10"
        color="text-green-600"
      />

      <StatCard
        title="Offline"
        value="2"
        color="text-red-600"
      />

      <StatCard
        title="Events Today"
        value="34"
        color="text-orange-500"
      />

    </div>
  );
}

export default DashboardStats;