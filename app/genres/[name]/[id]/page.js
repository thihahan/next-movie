import Link from "next/link";
import { Button } from "@/components/ui/button";
import Movies from "@/components/Movies";
import MoviePagination from "@/components/MoviePagination";

const fetchMovies = async (id, page = 1) => {
  const res = await fetch(
    `${process.env.API_URL}/3/discover/movie?with_genres=${id}&page=${page}`,
    {
      headers: {
        authorization: `Bearer ${process.env.API_ACCESS_TOKEN}`,
      },
    }
  );
  const data = await res.json();
  return data;
};

export default async function Generes({ params, searchParams }) {
  let page = 1;
  if (Number(searchParams.page)) {
    page = Number(searchParams.page);
  }
  const res = await fetchMovies(params.id, page);
  const movies = res.results;
  const total_pages = res.total_pages;
  const current_page = res.page;
  return (
    <>
      <h3 className="text-lg mx-3 mb-3">{params.name}</h3>
      <Movies movies={movies} />
      <MoviePagination total_pages={total_pages} current_page={current_page} />
    </>
  );
}
