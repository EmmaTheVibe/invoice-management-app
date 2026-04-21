import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/theme/useTheme";

export function Sidebar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className={`
        fixed top-0 left-0 z-40
        w-full h-[72px] flex flex-row items-center justify-between
        lg:w-[103px] lg:h-full lg:flex-col 
        bg-[#373B53] dark:bg-[#1E2139]
        transition-colors duration-200
      `}
      role="banner"
    >
      {/* Logo */}
      <div className="relative w-[72px] h-[72px] lg:w-[103px] lg:h-[103px] flex-shrink-0 flex items-center justify-center rounded-r-[20px] lg:rounded-br-[20px] lg:rounded-tr-none overflow-hidden bg-purple">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-purple-hover rounded-tl-[20px]" />
        <svg
          width="28"
          height="26"
          viewBox="0 0 28 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10"
          aria-hidden="true"
        >
          <path
            d="M20.513 0L28 13L14 26L0 13L7.487 0H20.513Z"
            fill="white"
            fillOpacity="0.3"
          />
          <path d="M13 0H20.513L28 13H13V0Z" fill="white" />
        </svg>
        <span className="sr-only">Invoicio</span>
      </div>

      {/* Right / bottom section */}
      <div className="flex flex-row lg:flex-col items-center gap-0 lg:gap-0 pr-4 lg:pr-0 lg:pb-4">
        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          className="p-4 lg:p-6 text-col-label hover:text-white dark:text-col-dark-label dark:hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple rounded-full"
        >
          {theme === "light" ? (
            <Moon size={20} aria-hidden="true" />
          ) : (
            <Sun size={20} aria-hidden="true" />
          )}
        </button>

        {/* Divider */}
        <div
          className="w-px h-8 lg:w-full lg:h-px bg-[#494E6E] mx-2 lg:mx-0 lg:my-0"
          aria-hidden="true"
        />

        {/* Avatar */}
        <div className="p-4 lg:p-6">
          <img
            src="https://i.pravatar.cc/40?img=15"
            alt="User avatar"
            className="w-8 h-8 rounded-full object-cover ring-2 ring-transparent hover:ring-purple transition-all duration-150"
            width={32}
            height={32}
          />
        </div>
      </div>
    </header>
  );
}
