import Link from "next/link";
import { Button } from "@/components/ui/button";
import Movies from "@/components/Movies";

const fetchMovies = async (id) => {
  const res = await fetch(
    `${process.env.API_URL}/3/discover/movie?with_genres=${id}`,
    {
      headers: {
        authorization: `Bearer ${process.env.API_ACCESS_TOKEN}`,
      },
    }
  );
  const data = await res.json();
  return data;
};

export default async function Generes({ params }) {
  const movies = (await fetchMovies(params.id)).results;
  return (
    <>
      <h3 className="text-lg mx-3 mb-3">{params.name}</h3>
      <Movies movies={movies} />
    </>
  );
}
