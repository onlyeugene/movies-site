import { useState, useEffect } from "react";
import { toast } from "sonner";

interface MovieProps {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

export const useFavorites = (movie: MovieProps | null) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Check if movie is in favorites when component mounts or movie changes
    const favorites = JSON.parse(
      localStorage.getItem("favoriteMovies") || "[]"
    );
    if (movie) {
      setIsFavorite(favorites.some((fav: MovieProps) => fav.id === movie.id));
    }
  }, [movie]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(
      localStorage.getItem("favoriteMovies") || "[]"
    );

    if (isFavorite && movie) {
      // Remove from favorites
      const updatedFavorites = favorites.filter(
        (fav: MovieProps) => fav.id !== movie.id
      );
      localStorage.setItem("favoriteMovies", JSON.stringify(updatedFavorites));
      setIsFavorite(false);
      toast.success("Movie removed from favorites");
    } else if (movie) {
      // Add to favorites
      const movieToAdd = {
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        overview: movie.overview,
      };
      toast.success("Movie added to favorites");
      localStorage.setItem(
        "favoriteMovies",
        JSON.stringify([...favorites, movieToAdd])
      );
      setIsFavorite(true);
    }
  };

  const getFavorites = (): MovieProps[] => {
    return JSON.parse(localStorage.getItem("favoriteMovies") || "[]");
  };

  return {
    isFavorite,
    toggleFavorite,
    getFavorites,
  };
};
