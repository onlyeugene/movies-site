"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { PulseLoader } from "react-spinners";
import Container from "@/components/container";
import Image from "next/image";
import { toast } from "sonner";
import { useFavorites } from '@/hooks/useFavorites';
import { useMovie } from "@/hooks/useMovieId";

const MoviesPage = () => {
  const params = useParams();
  const { movie, loading, error } = useMovie(params.moviesId as string);
  const { isFavorite, toggleFavorite } = useFavorites(movie);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <PulseLoader color="#36d7b7" size={15} />
      </div>
    );
  }

  return (
    <div className="pt-28">
      <Container>
        <div>
          {movie ? (
            <div className="flex md:flex-row flex-col items-start gap-4">
              <Image
                src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                alt="movie poster"
                width={500}
                height={500}
                className="rounded-md shadow-lg"
              />
              <div className="flex flex-col gap-4">
                <h1 className="text-7xl font-semibold">{movie.title}</h1>
                <h2 className="text-base font-normal">{movie.overview}</h2>
                <p className="font-medium text-lg">
                  Genre:{" "}
                  <span className="text-base font-normal">
                    {movie.genres?.map((g: any) => g.name).join(", ")}
                  </span>
                </p>

                <div>
                  <button 
                    onClick={toggleFavorite}
                    className={`flex items-start rounded-full border p-3 ${
                      isFavorite ? 'bg-red-200' : 'bg-gray-200'
                    }`}
                  >
                    {isFavorite ? '- Remove from favorites' : '+ Add to favorites'}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div>{error || 'Movie not found'}</div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default MoviesPage;