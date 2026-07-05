import { MdVideocam } from "react-icons/md";

function CameraCard({ name, status }) {
  const isOnline = status === "Online";

  return (
    <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
      <div className="h-40 bg-slate-200 flex items-center justify-center">
        <div className="flex h-full w-full items-center justify-center bg-slate-100">
            <MdVideocam
                size={60}
                className="text-slate-400"
            />
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold">{name}</h3>

        <span
          className={`inline-block mt-2 rounded-full px-3 py-1 text-sm text-white ${
            isOnline ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {status}
        </span>
      </div>
    </div>
  );
}

export default CameraCard;