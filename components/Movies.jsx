"use client";
import { useSearchParams } from "next/navigation";
import Movie from "@/app/movie";

export default function Movies(props) {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  const filteredMovies = props.movies
    .filter((x) => x.title.toLowerCase().includes(search.toLowerCase()))
    .map((movie) => (
      <Movie
        key={movie.id}
        id={movie.id}
        title={movie.title}
        poster_path={movie.poster_path}
        release_date={movie.release_date}
      />
    ));

  return (
    <div>
      <div className="grid gap-16 grid-cols-fluid p-10">
        {search
          ? filteredMovies
          : props.movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
                release_date={movie.release_date}
              />
            ))}
      </div>
    </div>
  );
}
