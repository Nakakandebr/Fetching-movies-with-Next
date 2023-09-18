"use client"

import { useEffect, useState } from "react";
import { getCategories, getMovies } from "../utilities/utils";
import { NEXT_PUBLIC_IMAGE_BASE_URL } from "../config";
import Link from "next/link";

interface Genre {
  id: number;
  name: string;
}

interface Movie {
  id: number;
  title: string;
  genre_ids: number[];
  poster_path: string;
}

export default function CategoroesList() {
  const [categories, setCategories] = useState<Genre[] | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<number | null>(null);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const genreData = await getCategories();
        setCategories(genreData.genres);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    const fetchMovies = async () => {
      try {
        const movieData = await getMovies();
        setMovies(movieData.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchGenres();
    fetchMovies();
  }, []);

  const handleGenreClick = (genreId: number) => {
    setSelectedCategories(genreId);
  };

  const filteredMovies = selectedCategories
    ? movies.filter((movie) => movie.genre_ids.includes(selectedCategories))
    : movies;

  return (
    <div className="p-4">
      <h2 className="text-3xl text-center font-semibold mb-4 text-white">Movie Categories</h2>
      <div className="flex flex-wrap gap-2">
        {categories &&
          categories.map((genre) => (
            <div
              key={genre.id}
              className={`bg-gray-400 px-4 py-2 rounded-full cursor-pointer ${
                selectedCategories === genre.id ? "bg-yellow-500" : ""
              }`}
              onClick={() => handleGenreClick(genre.id)}
            >
              {genre.name}
            </div>
          ))}
      </div>

      <div className="grid grid-cols-5 gap-4 mt-10">
        {filteredMovies.map((movie) => (
          <Link href={`/movie/${movie.id}`} key={movie.title}>
            <div key={movie.id} className="">
              <img
                src={`${NEXT_PUBLIC_IMAGE_BASE_URL}${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-auto"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
