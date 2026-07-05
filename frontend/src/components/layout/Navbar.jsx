import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-8 dark:border-gray-700 dark:bg-gray-900">
      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
        Dashboard
      </h2>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Dark Mode Toggle */}
        <ThemeToggle />

        {/* Avatar */}
        <div className="h-10 w-10 rounded-full bg-slate-300"></div>

        {/* User Info */}
        <div className="text-right">
          <p className="font-medium text-gray-800 dark:text-white">
            Admin
          </p>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Administrator
          </p>
        </div>
      </div>
    </header>
  );
}

export default Navbar;