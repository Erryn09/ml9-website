import React from "react";

export default function Feed() {
  return (
    <div>
      <div>
        <span className="flex flex-col items-center mt-6 bg-white rounded-lg border shadow-md md:flex-row md:max-w-fill hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            className="object-cover w-full h-50 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="./img/logo.jpg"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Gauntlet 8 Is Here!
            </h5>
            <p className="mb-6 font-normal text-gray-700 dark:text-gray-400">
              Ml9ja's 8th gauntlet starts in 2 days!, Here are the registered
              teams and playoff dates.
            </p>
          </div>
        </span>
      </div>
    </div>
  );
}
