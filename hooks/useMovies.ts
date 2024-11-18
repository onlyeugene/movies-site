'use client'

import axios from "axios";
import { useEffect, useState } from "react";

interface UseMoviesProps {
  movies: any[];
  isLoading: boolean;
  error: string | null;
}

export const useMovies = (): UseMoviesProps => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
          params: {
            api_key: process.env.API_KEY,
          },
        });
        setMovies(response.data.results);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return {
    movies,
    isLoading,
    error,
  };
};
