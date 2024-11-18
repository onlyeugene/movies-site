import MoviesList from "@/components/movies/movies-list";

export default function Home() {
  return (
    <>
    <div className="sm:pt-40 pt-24">
      <MoviesList />

      <h1 className="text-center text-sm sm:text-base md:text-lg font-medium mt-4 sm:mt-6 md:mt-8 mb-3">
        &copy; {new Date().getFullYear()} All rights reserved.
      </h1>
    </div>
    </>
  );
}
