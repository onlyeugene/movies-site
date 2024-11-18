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
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 12;

  const filteredMovies = filterMoviesByTitle(movies, searchTerm);
  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);
  
  const paginatedMovies = filteredMovies.slice(
    (currentPage - 1) * moviesPerPage,
    currentPage * moviesPerPage
  );

  return (
    <Container>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
        <h1 className="text-xl md:text-2xl font-bold">Popular Movies</h1>
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
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
            {paginatedMovies.map((movie) => (
              <div
                key={movie.id}
                className="border rounded-lg shadow-sm relative flex flex-col"
              >
                <div className="relative aspect-[2/3] w-full">
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    fill
                    className="rounded-t-lg object-cover cursor-pointer"
                    onClick={() => router.push(`/movies/${movie.id}`)}
                  />
                  <div className="absolute top-2 right-2">
                    <HeartButton movie={movie} />
                  </div>
                </div>
                <div className="flex flex-col flex-grow p-3">
                  <h2 className="text-lg font-medium truncate">
                    {movie.title}
                  </h2>
                  <div className="flex justify-between mt-2">
                    <p className="text-sm text-gray-600">{movie.release_date}</p>
                    <p className="flex items-center gap-1 text-sm">
                      {movie.vote_average}{" "}
                      <LiaStarSolid size={18} style={{ color: "gold" }} />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination Controls */}
          <div className="flex justify-center items-center gap-2 mt-8">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border rounded-md disabled:opacity-50"
            >
              Previous
            </button>
            <span className="mx-4">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border rounded-md disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </Container>
  );
};

export default MoviesList;
