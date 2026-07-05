import ThemeToggle from "./ThemeToggle";
import UserMenu from "./UserMenu";

function Navbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-8 dark:border-gray-700 dark:bg-gray-900">
      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
        Dashboard
      </h2>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        <ThemeToggle />

        <UserMenu />
      </div>
    </header>
  );
}

export default Navbar;