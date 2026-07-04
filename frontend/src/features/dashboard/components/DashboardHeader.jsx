function DashboardHeader() {
  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-500">
          Vision Guard AI CCTV Monitoring
        </p>
      </div>

      <div className="text-right">
        <p className="font-semibold">
          Welcome
        </p>

        <p className="text-gray-500">
          Administrator
        </p>
      </div>
    </div>
  );
}

export default DashboardHeader;