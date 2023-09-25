/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { fetchCategories, fetchMovies as fetchMoviesData } from "../utilities/utils";
import { NEXT_PUBLIC_IMAGE_BASE_URL } from "../config";
import Link from "next/link";

interface Category {
  id: number;
  name: string;
}

interface Movie {
  id: number;
  title: string;
  genre_ids: number[];
  poster_path: string;
}

function GenreFilter({ genres, selectedGenre, onGenreClick }: { genres: Category[] | null; selectedGenre: number | null; onGenreClick: (genreId: number) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {genres &&
        genres.map((genre) => (
          <div
            key={genre.id}
            className={`bg-blue-400 px-4 py-2 rounded-full cursor-pointer ${
              selectedGenre === genre.id ? "bg-yellow-500" : ""
            }`}
            onClick={() => onGenreClick(genre.id)}
          >
            {genre.name}
          </div>
        ))}
    </div>
  );
}

function MovieList({ movies }: { movies: Movie[] }) {
  return (
    <div className="grid grid-cols-5 gap-4 mt-10">
      {movies.map((movie) => (
        <Link href={`/movie/${movie.id}`} key={movie.title}>
          <div key={movie.id} className="">
            <img
              src={`${NEXT_PUBLIC_IMAGE_BASE_URL}${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-500 object-cover rounded-md mb-2 gap-4"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function CategoriesList() {
  const [genres, setGenres] = useState<Category[] | null>(null);
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const genreData = await fetchCategories();
        setGenres(genreData.genres);
        const movieData = await fetchMoviesData();
        setMovies(movieData.results);
      } catch (error) {
        console.error("Error while getting  data:", error);
      }
    };

    fetchData();
  }, []);

  const handleGenreClick = (genreId: number) => {
    setSelectedGenre(genreId);
  };

  const filteredMovies = selectedGenre
    ? movies.filter((movie) => movie.genre_ids.includes(selectedGenre))
    : movies;

  return (
    <div className="p-4">
    
      <GenreFilter genres={genres} selectedGenre={selectedGenre} onGenreClick={handleGenreClick} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}
