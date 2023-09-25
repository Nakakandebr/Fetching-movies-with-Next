import {MOVIE_BASE_URL , MOVIE_ACCESS_TOKEN } from "@/app/config";
export const searchMovies = async (query: string) => {
    try {
      const response = await fetch(

        `${MOVIE_BASE_URL}/3/search/movie? ${MOVIE_ACCESS_TOKEN}=${query}`
      );
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Error searching movies:', error);
      throw error;
    }
  };

