"use client";

import Movie from "@/app/movie";
import { useState } from "react";
import SearchBar from "./SearchBar";

export default function Movies(props) {
  const [searchTerms, setSearchTerms] = useState("");

  const handleChange = (e) => {
    setSearchTerms(e.target.value);
  };

  return (
    <div>
      <SearchBar onChange={handleChange} />
      <div className="grid gap-16 grid-cols-fluid p-10">
        {props.movies
          .filter((x) =>
            x.title.toLowerCase().includes(searchTerms.toLowerCase())
          )
          .map((movie) => (
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
