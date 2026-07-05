import { NavLink } from "react-router-dom";
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
    <aside className="flex h-screen w-64 flex-col border-r border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
      {/* Logo */}
      <div className="border-b border-gray-200 p-6 dark:border-gray-700">
        <h1 className="text-2xl font-bold text-blue-600">
          Vision Guard
        </h1>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-3">
        <div className="space-y-2">
          {menus.map((menu) => (
            <NavLink
              key={menu.path}
              to={menu.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-4 py-3 font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-gray-900 text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-900 hover:text-white dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-white"
                }`
              }
            >
              {menu.icon}
              <span>{menu.name}</span>
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Footer */}
      <div className="border-t border-gray-200 p-4 dark:border-gray-700">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <span className="text-sm text-gray-600 dark:text-gray-300">
            System Online
          </span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;