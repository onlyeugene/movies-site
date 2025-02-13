import { useState, useEffect } from 'react';
import axios from 'axios';

export const useMovie = (moviesId: string) => {
  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${moviesId}`,
          {
            params: {
              api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
            },
          }
        );
        setMovie(data);
      } catch (error) {
        setError("Error fetching movie");
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [moviesId]);

  return { movie, loading, error };
}; 