import Link from "next/link";

export default function Movie({ movie }) {
  const POSTER_IMG = "http://image.tmdb.org/t/p/w342";
  return (
    <div key={movie.id} className="w-[180px] text-center rounded">
      <Link href={`/movies/${movie.id}`}>
        <img
          className="hover:scale-105 transition-all duration-200 rounded shadow-lg"
          src={`${POSTER_IMG}${movie.poster_path}`}
        />
      </Link>
      <h4 className="mt-2">{movie.title}</h4>
      <span>{movie?.release_date?.split("-")[0]}</span>
    </div>
  );
}
