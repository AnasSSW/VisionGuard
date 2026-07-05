import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

function ThemeToggle() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-xl
        border
        border-gray-300
        bg-white
        text-gray-700
        shadow-sm
        transition-all
        duration-200
        hover:bg-gray-100
        hover:shadow-md
        dark:border-gray-600
        dark:bg-gray-800
        dark:text-yellow-400
        dark:hover:bg-gray-700
      "
    >
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}

export default ThemeToggle;