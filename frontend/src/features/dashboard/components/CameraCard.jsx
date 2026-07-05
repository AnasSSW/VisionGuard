import { MdVideocam } from "react-icons/md";

function CameraCard({ name, status }) {
  const isOnline = status === "Online";

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900">
      {/* Camera Preview */}
      <div className="relative flex h-44 items-center justify-center bg-gray-100 dark:bg-gray-800">
        <MdVideocam
          size={64}
          className="text-gray-400 dark:text-gray-500"
        />

        {/* Status Badge */}
        <div
          className={`absolute top-3 right-3 flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium text-white ${
            isOnline ? "bg-green-500" : "bg-red-500"
          }`}
        >
          <span
            className={`h-2 w-2 rounded-full bg-white ${
              isOnline ? "animate-pulse" : ""
            }`}
          />
          {status}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between p-4">
        <div>
          <h3 className="text-base font-semibold text-gray-800 dark:text-white">
            {name}
          </h3>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            {isOnline ? "Live Stream Ready" : "No Signal"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CameraCard;