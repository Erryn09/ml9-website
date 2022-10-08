import React from "react";

export default function Profile() {
  return (
    <div
      className="z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
      id="user-dropdown"
      style={{
        position: "absolute",
        inset: "45px auto auto auto",
        margin: "0px -30px 0px",
        transform: "translate(0px, 10px)",
      }}
    >
      <div className="py-3 px-4">
        <span className="block text-sm text-gray-900 dark:text-white">
          John Doe
        </span>
        <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
          123456789
        </span>
      </div>
      <ul className="py-1 cursor-pointer" aria-labelledby="user-menu-button">
        <li>
          <p className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
            Profile
          </p>
        </li>
        <li>
          <p className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
            My League
          </p>
        </li>
        <li>
          <p className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
            Settings
          </p>
        </li>
        <li>
          <p className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
            Sign out
          </p>
        </li>
      </ul>
    </div>
  );
}
