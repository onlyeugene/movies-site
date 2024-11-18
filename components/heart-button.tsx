"use client";

import { useFavorites } from "@/hooks/useFavorites";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const HeartButton = ({ movie }: { movie: any }) => {
    const { isFavorite, toggleFavorite } = useFavorites(movie);

  return (
    <div onClick={toggleFavorite} className="relative">
        <AiOutlineHeart size={38} className="text-gray-100 absolute -top-[2px] -right-[2px]" />
        <AiFillHeart size={34} className={`${isFavorite ? "fill-red-500" : "fill-transparent"} z-10`} />
    </div>
  )
}

export default HeartButton
