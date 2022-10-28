import { NavLink } from "react-router-dom";
import React from "react";

export default function Dropdown(props) {
  let classes =
    "relative justify-between w-full items-center md:flex md:w-auto md:order-1 ";

  props.isVisible && (classes += "hidden");

  return (
    <div className={classes} id="mobile-menu-2">
      <ul className="absolute flex flex-col p-4 mt-2.5 -mr-2 right-0 bg-gray-50 rounded-b-lg border border-gray-100 md:relative md:flex-row md:space-x-5 md:mt-0 md:ml-0 md:text-md md:font-medium md:rounded-lg md:border-0 md:bg-white dark:bg-zinc-900 md:dark:bg-zinc-900 dark:border-gray-700 ">
        <li>
          <NavLink
            to="/"
            className="cursor-pointer block mx-2 py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? {
                    color: "blue",
                  }
                : {};
            }}
            to="/tournaments"
            className="cursor-pointer block mx-2 py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Tournaments
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? {
                    color: "blue",
                  }
                : {};
            }}
            to="/events"
            className="cursor-pointer block mx-2 py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Events
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? {
                    color: "blue",
                  }
                : {};
            }}
            to="/patchNotes"
            className="cursor-pointer block mx-2 py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Patch Notes
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? {
                    color: "blue",
                  }
                : {};
            }}
            to="/guides"
            className="cursor-pointer block mx-2 py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Guides
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
