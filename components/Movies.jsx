import Link from "next/link";
import Movie from "./Movie";

export default function Movies({ movies }) {
  return (
    <div className="flex flex-wrap flex-row justify-around gap-2">
      {movies?.map((movie) => (
        <Movie movie={movie} />
      ))}
    </div>
  );
}
