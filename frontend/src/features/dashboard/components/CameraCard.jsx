import { MdVideocam } from "react-icons/md";

function CameraCard({ name, status }) {
  const isOnline = status === "Online";

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900">
      {/* Camera Preview */}
      <div className="flex h-40 items-center justify-center bg-gray-100 dark:bg-gray-700">
        <MdVideocam
          size={60}
          className="text-gray-400 dark:text-gray-300"
        />
      </div>

      {/* Camera Information */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          {name}
        </h3>

        <div className="mt-3 flex items-center justify-between">
          <span
            className={`rounded-full px-3 py-1 text-sm font-medium text-white ${
              isOnline ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {status}
          </span>

          <div className="flex items-center gap-2">
            <span
              className={`h-3 w-3 rounded-full ${
                isOnline ? "bg-green-500" : "bg-red-500"
              }`}
            ></span>

            <span className="text-sm text-gray-500 dark:text-gray-400">
              {isOnline ? "Live" : "Offline"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CameraCard;