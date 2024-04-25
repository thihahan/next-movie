"use client";

import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Movies from "./Movies";

export default function Trending({ initialMovies }) {
  const [movies, setMovies] = useState(initialMovies);
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const fetchMovies = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?page=${page}`,
      {
        headers: {
          authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
          "content-type": "application/json",
        },
      }
    );
    if (res.ok) {
      const data = await res.json();
      setMovies([...movies, ...data.results]);
      setPage((pre) => pre + 1);
    }
  };
  return (
    <>
      <InfiniteScroll
        dataLength={movies.length}
        next={fetchMovies}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<p>No more movies</p>}
      >
        <Movies movies={movies} />
      </InfiniteScroll>
    </>
  );
}
