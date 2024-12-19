import Image from "next/image";
import { Suspense } from "react";

export default async function MoviePage({ params }) {
  const movieId = await params.id;
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}`, {
    method: "GET",
    headers: {
      Authorization: process.env.API_TOKEN,
    },
  });
  const movie = await res.json();
  console.log(movie);
  return (
    <div className="w-full">
      <div className="p-4 md:p-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
        <Suspense
          fallback={
            <div className="flex justify-center mt-16">
              <Image
                className="h-52"
                src="spinner.svg"
                alt="loading"
                width={200}
                height={200}
              />
            </div>
          }
        >
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              movie.backdrop_path || movie.poster_path
            }`}
            alt="movie"
            width={500}
            height={300}
            className="rounded-lg"
            style={{ maxWidth: "100%", height: "100%" }}
          ></Image>
          <div className="p-2">
            <h2 className="text-lg mb-3 font-bold">
              {movie.title || movie.name}
            </h2>
            <p className="text-lg mb-3">{movie.overview}</p>
            <p className="mb-3">
              <span className="font-semibold mr-1">Date Released:</span>
              {movie.release_date || movie.first_air_date}
            </p>
            <p className="mb-3">
              <span className="font-semibold mr-1">Rating:</span>
              {movie.vote_count}
            </p>
          </div>
        </Suspense>
      </div>
    </div>
  );
}
