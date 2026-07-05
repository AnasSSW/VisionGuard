import CameraCard from "./CameraCard";

const cameras = [
  {
    id: 1,
    name: "Camera 1",
    status: "Online",
  },
  {
    id: 2,
    name: "Camera 2",
    status: "Online",
  },
  {
    id: 3,
    name: "Camera 3",
    status: "Offline",
  },
  {
    id: 4,
    name: "Camera 4",
    status: "Online",
  },
];

function CameraGrid() {
  return (
    <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
          Live Cameras
        </h2>

        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-300">
          {cameras.length} Cameras
        </span>
      </div>

      {/* Camera Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {cameras.map((camera) => (
          <CameraCard
            key={camera.id}
            name={camera.name}
            status={camera.status}
          />
        ))}
      </div>
    </section>
  );
}

export default CameraGrid;