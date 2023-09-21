import React, { useState } from "react";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    
  };

  return (
    <div className="navbar py-4 bg-black">
      <nav>
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-4xl text-white font-semibold">
                Movie
              </h1>
            </div>
            <div>
              <input
                className="search px-4 py-2 rounded-full border border-white text-white bg-black text-lg focus:outline-none"
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                className="bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-500 focus:outline-none text-lg"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
            <div >
              <ul className="navbar-nav flex items-center gap-4 ml-4">
                <li >
                  <a className="nav-link text-white text-xl" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="nav-link text-white text-xl" href="#">
                    My List
                  </a>
                </li>
                <li>
                  <button className="bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-500 focus:outline-none text-lg">
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
