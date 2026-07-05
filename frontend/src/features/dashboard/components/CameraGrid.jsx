import CameraCard from "./CameraCard";

const cameras = [
  { id: 1, name: "Camera 1", status: "Online" },
  { id: 2, name: "Camera 2", status: "Online" },
  { id: 3, name: "Camera 3", status: "Offline" },
  { id: 4, name: "Camera 4", status: "Online" },
];

function CameraGrid() {
  return (
    <div className="rounded-xl bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-bold">Live Cameras</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cameras.map((camera) => (
          <CameraCard
            key={camera.id}
            name={camera.name}
            status={camera.status}
          />
        ))}
      </div>
    </div>
  );
}

export default CameraGrid;