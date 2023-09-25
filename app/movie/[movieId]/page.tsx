/* eslint-disable @next/next/no-img-element */
'use client'
import { useState, useEffect } from "react";
import { getMovieDetails } from "@/app/utilities/utils";
import { NEXT_PUBLIC_IMAGE_BASE_URL } from "@/app/config";

const MovieDetail = ({ params: { movieId } }: { params: { movieId: number } }) => {
  const [movieDetail, setMovieDetail] = useState<any>(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const movieDetailData = await getMovieDetails(movieId);
        setMovieDetail(movieDetailData);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetail();
  }, [movieId]);

  const renderMovieDetail = () => {
    if (!movieDetail) {
      return <p>Loading...</p>;
    }

    const { title, poster_path, overview, release_date, rating } = movieDetail;

    return (
      <div className="movie-detail-container bg-black text-white p-4">
        <div >
          <img
            src={`${NEXT_PUBLIC_IMAGE_BASE_URL}${poster_path}`}
            alt={title} 
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="movie-overview">{overview}</p>
          <div >
            <p>
              <span className="font-bold">Release Date:</span> {release_date}
            </p>
            <p>
              <span className="font-bold">Rating:</span> {rating}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return renderMovieDetail();
};

export default MovieDetail;