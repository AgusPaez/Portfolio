import { useDarkMode } from "../hooks/useDarkMode";

export default function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="w-14 text-4xl md:w-10 md:text-3xl my-auto align-text-bottom mt-2 rounded-md cursor-pointer hover:scale-125  bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-all duration-1000 ease-in-out"
    >
      {darkMode ? "☾ " : "☼"}
    </button>
  );
}
