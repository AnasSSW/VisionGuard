import { Link } from "react-router-dom";
import {
  MdDashboard,
  MdVideocam,
  MdEvent,
  MdDescription,
  MdSettings,
} from "react-icons/md";

const menus = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <MdDashboard size={22} />,
  },
  {
    name: "Cameras",
    path: "/cameras",
    icon: <MdVideocam size={22} />,
  },
  {
    name: "Events",
    path: "/events",
    icon: <MdEvent size={22} />,
  },
  {
    name: "Reports",
    path: "/reports",
    icon: <MdDescription size={22} />,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <MdSettings size={22} />,
  },
];

function Sidebar() {
  return (
    <aside className="w-64 bg-neutral-800 text-white h-screen border-r border-slate-700">

      <div className="text-2xl font-bold p-6 border-b border-slate-700">
        Vision Guard
      </div>

      <nav className="mt-4">

        {menus.map((menu) => (
          <Link
            key={menu.path}
            to={menu.path}
            className="flex items-center gap-3 px-6 py-4 hover:bg-slate-800 transition"
          >
            {menu.icon}
            <span>{menu.name}</span>
          </Link>
        ))}

      </nav>

    </aside>
  );
}

export default Sidebar;