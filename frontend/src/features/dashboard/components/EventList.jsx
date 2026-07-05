import EventItem from "./EventItem";

const events = [
  {
    id: 1,
    type: "Person",
    camera: "Camera 1",
    time: "10:30",
  },
  {
    id: 2,
    type: "Fire",
    camera: "Camera 3",
    time: "10:42",
  },
  {
    id: 3,
    type: "Helmet",
    camera: "Camera 2",
    time: "11:05",
  },
];

function EventList() {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
      <h2 className="mb-4 text-xl font-bold text-gray-800 dark:text-white">
        Recent Events
      </h2>

      <div className="space-y-3">
        {events.map((event) => (
          <EventItem key={event.id} {...event} />
        ))}
      </div>
    </div>
  );
}

export default EventList;