import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

type NavigationProps = {
  onScrollToSection: (section: "aboutMe" | "projects" | "connect") => void;
  activeSection: "aboutMe" | "projects" | "connect";
};

const Navigation: React.FC<NavigationProps> = ({ onScrollToSection, activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (!menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="sticky top-0 w-screen bg-black text-gray-200 z-50">
      <div className="flex p-2 md:hidden">
        <button
          data-testid="open-menu-btn"
          onClick={toggleMenu}
          className="text-2xl absolute top-5 right-5 "
        >
          <Bars3Icon className="h-6 w-6 text-gray-200" />
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-black text-white flex flex-col justify-center items-center gap-10 text-xl font-SansNarrow">
          <button
            data-testid="close-menu-btn"
            className={`absolute top-5 right-5 text-3xl transition-transform duration-500 ${menuOpen ? "animate-spin-right" : ""}`}
            onClick={toggleMenu}
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
          <ul data-testid="mobile-nav-list" className="space-y-5 w-full text-center">
            <li
              onClick={() => {
                onScrollToSection("projects");
                toggleMenu();
              }}
              className={`w-full animate-fade-in-up ${activeSection === "projects" ? "underline decoration-amber-500 underline-offset-8" : ""}`}
              data-testid="mobile-projects"
            >
              Projects
            </li>
            <li
              onClick={() => {
                onScrollToSection("aboutMe");
                toggleMenu();
              }}
              className={`w-full animate-fade-in-up ${activeSection === "aboutMe" ? "underline decoration-amber-500 underline-offset-8" : ""}`}
              data-testid="mobile-aboutMe"
            >
              About Me
            </li>
            <li
              onClick={() => {
                onScrollToSection("connect");
                toggleMenu();
              }}
              className={`w-full animate-fade-in-up ${activeSection === "connect" ? "underline decoration-amber-500 underline-offset-8" : ""}`}
              data-testid="mobile-connect"
            >
              Connect
            </li>
          </ul>
        </div>
      )}

      <ul data-testid="desktop-nav" className="hidden md:flex font-SansNarrow pr-10 justify-end gap-10 py-4 px-2 border-b border-b-gray-300">
        <li
          data-testid="desktop-projects"
          className={`cursor-pointer text-lg ${activeSection === "projects" ? "border-b-2 border-amber-500" : "hover:border-b-2 border-amber-500"}`}
          onClick={() => onScrollToSection("projects")}
        >
          Projects
        </li>
        <li
          data-testid="desktop-aboutMe"
          className={`cursor-pointer text-lg ${activeSection === "aboutMe" ? "border-b-2 border-amber-500" : "hover:border-b-2 border-amber-500"}`}
          onClick={() => onScrollToSection("aboutMe")}
        >
          About Me
        </li>
        <li
          data-testid="desktop-connect"
          className={`cursor-pointer text-lg ${activeSection === "connect" ? "border-b-2 border-amber-500" : "hover:border-b-2 border-amber-500"}`}
          onClick={() => onScrollToSection("connect")}
        >
          Connect
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
