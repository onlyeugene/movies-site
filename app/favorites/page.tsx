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
    <div className="pt-28 w-full">
      <Container>
        <h1 className="text-4xl font-bold mb-8">My Favorite Movies</h1>
        {favorites.length === 0 ? (
          <p>No favorite movies yet.</p>
        ) : (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {favorites.map((movie) => (
              <Link href={`/movies/${movie.id}`} key={movie.id}>
                <div className="cursor-pointer hover:opacity-80 transition relative">
                  <Image
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt={movie.title}
                    width={500}
                    height={500}
                    className="rounded-md shadow-lg"
                  />
                  <div className="absolute md:top-2 top-1 right-1 md:right-2">
                    <HeartButton movie={movie} />
                  </div>
                  <h2 className="text-xl font-semibold mt-2">{movie.title}</h2>
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
