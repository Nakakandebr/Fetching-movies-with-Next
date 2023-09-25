/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { NEXT_PUBLIC_IMAGE_BASE_URL } from '@/app/config';

import { Link } from 'react-router-dom';

const MovieSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const apiKey = process.env.API_KEY;
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=275df3a012fb3f40f9b17e61610c614a&query=${query}`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setResults(data.results);
      setLoading(false);
    } catch (error) {
      console.error('Error searching movies:', error);
      setLoading(false);
    }
  };

  const handleClear = () => {
    setQuery('');
    setResults([]);
  };

  useEffect(() => {
    if (query.trim() !== '') {
      handleSearch();
    }
  }, [query]);

  return (
    <div className="bg-gray-100">
      <nav className="bg-black p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-white font-bold text-2xl">
            M<span className="text-yellow-500">oo</span>vie
          </div>
          <div className="sm:hidden">
           
          </div>
          <div className="flex">
            <input
              type="text"
              placeholder="Search for movies..."
              className="search-input px-4 py-2 rounded-full bg-gray-700 border-none text-white placeholder-gray-400"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <ul className="hidden sm:flex space-x-4">
              <li>
                <a href="#" className="text-lg font-semibold ml-90 hover:text-yellow-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-lg font-semibold ml-90 hover:text-yellow-500">
                  Movies
                </a>
              </li>
            </ul>
            <button
              onClick={handleSearch}
              className="text-lg font-semibold ml-90 bg-yellow-500 px-9 py-2 rounded-lg text-white"
            >
              Search
            </button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto p-4 ">
        {loading ? (
          <p className="mt-4 text-center">Loading...</p>
        ) : results.length > 0 && (
          <div className="grid grid-cols-3 '">
            {results.map((movie: any) => (

              <div key={movie.id} className="bg-black rounded-lg shadow-md p-1 text-white gap-1">

                
                {movie.poster_path && (
                  <img
                    src={`${NEXT_PUBLIC_IMAGE_BASE_URL}${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-500 object-cover rounded-md mb-2 gap-4"
                  />
                )}
                <h2 className="text-xl font-semibold">{movie.title}</h2>
                <p className="text-gray-400 text-sm mt-2">Release Date: {movie.release_date}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {results.length > 0 && (
        <div className="container mx-auto p-4 text-center">
          <button
            onClick={handleClear}
            className="text-lg font-semibold bg-red-500 px-9 py-2 rounded-lg text-white"
          >
            Clear Results
          </button>
        </div>
      )}
    </div>
  );
};

export default MovieSearch;
