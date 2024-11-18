"use client";

import React, { useEffect, useState } from "react";
import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import { useFavorites } from "@/hooks/useFavorites";
import HeartButton from "@/components/heart-button";

const FavoritesPage = () => {
  const { getFavorites } = useFavorites(null);
  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  return (
    <div className="pt-20 sm:pt-24 md:pt-28 w-full">
      <Container>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8">
          My Favorite Movies
        </h1>
        {favorites.length === 0 ? (
          <p className="text-base sm:text-lg">No favorite movies yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
            {favorites.map((movie) => (
              <Link href={`/movies/${movie.id}`} key={movie.id}>
                <div className="group cursor-pointer hover:opacity-80 transition relative border rounded-md shadow-lg">
                  <Image
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt={movie.title}
                    width={500}
                    height={500}
                    className="rounded-t-md shadow-lg w-full h-auto"
                  />
                  <div className="absolute top-1 right-1 sm:top-2 sm:right-2">
                    <HeartButton movie={movie} />
                  </div>
                  <h2 className="text-sm sm:text-base md:text-xl font-semibold mt-1 sm:mt-2 p-2">
                    {movie.title}
                  </h2>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 bg-black/75 rounded-md p-4 text-white overflow-y-auto">
                    <h1 className="text-lg font-bold">
                      Rating: {movie.vote_average}{" "}
                    </h1>
                    <p className="text-sm">{movie.overview}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default FavoritesPage;
