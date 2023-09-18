import React from "react";

const Navbar = () => {
  return (
    <div className="navbar-lg py-4 bg-black">
      <nav className="navbar">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-4xl text-white ml-4 font-semibold">
                M<span className="text-yellow-500">oo</span>vie
              </h1>
            </div>
            <div className="flex items-center">
              <input
                className="search px-4 py-2 rounded-full border border-white text-white bg-black text-lg focus:outline-none focus:ring focus:border-white"
                type="text"
                placeholder="Search"
              />
            </div>
            <div className="flex items-center">
              <ul className="navbar-nav flex items-center gap-4 ml-4">
                <li className="nav-item">
                  <a className="nav-link text-white text-xl" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white text-xl" href="#">
                    My List
                  </a>
                </li>
                <li className="nav-item">
                  <button className="bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-500 focus:outline-none focus:ring focus:bg-yellow-500 text-lg">
                    <a className="nav-link active text-black text-lg" href="/sign Up">
                      Sign Up
                    </a>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
