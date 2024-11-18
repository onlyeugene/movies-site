import { useState, useEffect } from 'react';
import axios from 'axios';

export const useMovie = (movieId: string) => {
  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}`,
          {
            params: {
              api_key: "cbf7d6c36085bc7248cd3335ac20c4c3",
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
  }, [movieId]);

  return { movie, loading, error };
}; 