import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900  border-b-4 border-indigo-500 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 duration-500">
          <a className="flex items-center">
            <img
              src="https://img.icons8.com/?size=512&id=bzZ1vLaK5u1A&format=png"
              className="h-8 mr-3"
              alt="Website Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              <Link to="/">`Hospital Name`</Link>
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center duration-500 p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="true"
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
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto duration-500" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border duration-500 border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  className="block py-2 pl-3 pr-4  dark:bg-gray-900 hover:bg-slate-700 hover:text-sky-400 duration-500 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 mb-2"

                  to="/">Home</Link>
              </li>
              <li>
                <Link
                  className="block py-2 pl-3 pr-4  dark:bg-gray-900 hover:bg-slate-700 hover:text-sky-400 duration-500 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 mb-2"

                  to="/about">About</Link>
              </li>
              <li>
                <Link
                  className="block py-2 pl-3 pr-4  dark:bg-gray-900 hover:bg-slate-700 hover:text-sky-400 duration-500 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 mb-2"
									

                  to="/goals">Goals</Link>
              </li>
              <li>
                <Link
                  className="block py-2 pl-3 pr-4  dark:bg-gray-900 hover:bg-slate-700 hover:text-sky-400 duration-500 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 mb-2"
									
                  to="/profile">Login</Link>
              </li>
							
							<li>
								
                <Link
                  className=" block py-2 pl-3 pr-4  dark:bg-gray-900 hover:bg-slate-700 hover:text-sky-400 duration-500 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 mb-2"
									
                  to="/staff">
									
									Staff of the month</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
