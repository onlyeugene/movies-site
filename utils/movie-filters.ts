import { Movie } from "@/types";

export const filterMoviesByTitle = (movies: Movie[] | undefined, searchTerm: string): Movie[] => {
  if (!movies) return [];
  
  return movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
}; 