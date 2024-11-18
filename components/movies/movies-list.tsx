"use client";

import { useMovies } from "@/hooks/useMovies";
import Image from "next/image";
import Container from "../container";
import { PulseLoader } from "react-spinners";
import { SlStar } from "react-icons/sl";
import { LiaStarSolid } from "react-icons/lia";
import HeartButton from "../heart-button";
import { useRouter } from "next/navigation";
import Search from "../search";
import { useState } from "react";
import { filterMoviesByTitle } from "@/utils/movie-filters";

const MoviesList = () => {
  const { movies, isLoading, error } = useMovies();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMovies = filterMoviesByTitle(movies, searchTerm);

  return (
    <Container>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold mb-4">Popular Movies</h1>
        <Search 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search movies..."
        />
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <PulseLoader color="#36d7b7" size={15} />
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full mt-5">
          {filteredMovies.map((movie) => (
            <div key={movie.id} className="border rounded-lg shadow-sm relative">
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width={500}
                height={500}
                className="rounded-t-md object-cover"
                onClick={() => router.push(`/movies/${movie.id}`)}
              />
              <div className="absolute top-2 right-2">
                <HeartButton movie={movie} />
              </div>
              <h1 className="p-3 text-lg font-medium truncate">{movie.title}</h1>
              <div className="flex justify-between p-3">
                <h2>{movie.release_date}</h2>
                <h3 className="flex items-center gap-1">
                  {movie.vote_average}{" "}
                  <LiaStarSolid size={20} style={{ color: "gold" }} />
                </h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};

export default MoviesList;
