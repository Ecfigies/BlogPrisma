import { useState } from "react";

const Navbar = ({ user }) => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <h1 className="flex items-center py-4 px-2">
                <span className="font-semibold text-purple-500 text-lg">
                  Blog API
                </span>
              </h1>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-3 ">
            <a className="py-2 px-2 font-medium text-gray-500 rounded transition duration-300">
              Welcome {user}
            </a>
          </div>
        </div>
      </div>

      <div className="hidden mobile-menu">
        <ul className="">
          <a
            href=""
            className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold "
          >
            Home
          </a>
          <a
            href=""
            className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
          >
            About it
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
