import React from "react";
import Profile from "./Profile";
import { useState } from "react";
import Dropdown from "./Dropdown";

export default function Navbar() {
  const [showProfile, setShowProfile] = useState(false);
  const [showDropdown, setShowDropdown] = useState(true);

  function toggleProfile() {
    setShowProfile((prevVal) => !prevVal);
  }

  function closeProfile() {
    setShowProfile(false);
  }

  function toggleDropdown() {
    setShowDropdown((prevVal) => !prevVal);
  }

  return (
    <nav className=" bg-zinc-900 border-gray-200 px-2 sticky w-full top-0 sm:px-4 py-2.5 rounded">
      <div className=" flex flex-wrap justify-between items-center mx-auto">
        <p className=" flex items-center">
          <img
            src="./img/logo2.jpg"
            className="rounded-full m-2 h-8 cursor-pointer"
            alt="ML9 Logo"
          />
          <span className="cursor-pointer mb-1 self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            ML9
          </span>
        </p>
        <div className="flex items-center md:order-2 md:mr-6">
          <button
            onBlur={closeProfile}
            type="button"
            className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-5 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
          >
            <span className="sr-only">Open user menu</span>
            <img
              onClick={toggleProfile}
              className="w-8 h-8 rounded-full"
              src="./img/masha.jpg"
              alt="user profile"
            />
            {/* Profile menu */}
            {showProfile ? <Profile /> : ""}
          </button>

          <button
            onClick={toggleDropdown}
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        {/*Dropdown*/}
        <Dropdown isVisible={showDropdown} />
      </div>
    </nav>
  );
}
