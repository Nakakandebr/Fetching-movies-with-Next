/* eslint-disable @next/next/no-img-element */
// /* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { fetchCategories, fetchMovies } from "../utilities/utils";
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

export default function GenreList() {
  const [genres, setGenres] = useState<Genre[] | null>(null);
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const genreData = await fetchCategories();
        setGenres(genreData.genres);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    const fetchMoviesData = async () => {
      try {
        const movieData = await fetchMovies();
        setMovies(movieData.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchGenres();
    fetchMoviesData();
  }, []);

  const handleGenreClick = (genreId: number) => {
    setSelectedGenre(genreId);
  };

  const filteredMovies = selectedGenre
    ? movies.filter((movie) => movie.genre_ids.includes(selectedGenre))
    : movies;

  return (
    <div className="p-4">
      <h2 className="text-3xl text-center font-semibold mb-4 text-white">Genres</h2>
      <div className="flex flex-wrap gap-2">
        {genres &&
          genres.map((genre) => (
            <div
              key={genre.id}
              className={`bg-gray-400 px-4 py-2 rounded-full cursor-pointer ${
                selectedGenre === genre.id ? "bg-yellow-500" : ""
              }`}
              onClick={() => handleGenreClick(genre.id)}
            >
              {genre.name}
            </div>
          ))}
      </div>

      <div className="grid grid-cols-5 gap-4 mt-10">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <Link href={`/movie/${movie.id}`} key={movie.title}>
              <div key={movie.id} className="">
                <img
                  src={`${NEXT_PUBLIC_IMAGE_BASE_URL}${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-auto"
                />
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center text-black mt-10">No movies available for the selected genre.</p>
        )}
      </div>
    </div>
  );
}