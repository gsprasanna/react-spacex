import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <nav className="w-full bg-black shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl aboveDesktop:items-center aboveDesktop:flex aboveDesktop:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link to="/" className="text-2xl font-bold text-white">SPACEX</Link>
              <div className="aboveDesktop:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 aboveDesktop:block aboveDesktop:pb-0 aboveDesktop:mt-0 ${navbar ? "block" : "hidden"
                }`}
            >
              <ul className="items-center justify-center space-y-8 aboveDesktop:flex aboveDesktop:space-x-6 aboveDesktop:space-y-0">
                <li className="text-white hover:text-indigo-200">
                  <Link to="/history">History</Link>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <Link to="/launches">Launches</Link>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <Link to="/rockets">Rockets</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Layout;