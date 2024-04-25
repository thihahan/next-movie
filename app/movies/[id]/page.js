import ActorImg from "@/components/ActorImg";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
const fetchMovie = async (id) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
    headers: {
      authorization: `Bearer ${process.env.API_ACCESS_TOKEN}`,
    },
  });
  return res.json();
};

const fetchCasts = async (id) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits`, {
    headers: {
      authorization: `Bearer ${process.env.API_ACCESS_TOKEN}`,
    },
  });
  const data = res.json();
  return data;
};

export default async function Movie({ params }) {
  const movie = await fetchMovie(params.id);
  const casts = await fetchCasts(params.id);
  return (
    <div className="mx-3">
      <h2 className="mb-2 text-lg">
        {movie.original_title} {movie.release_date.split("-")[0]}
      </h2>
      <div className="m-2">
        {movie.genres.map((genre) => (
          <Badge className={"mx-2"}>{genre.name}</Badge>
        ))}
      </div>
      <img
        className="w-full"
        src={`${process.env.COVER_IMG}${movie.backdrop_path}`}
      />
      <p className="my-2">{movie.overview}</p>
      <div className="flex gap-2 flex-wrap my-2">
        {casts?.cast?.map((cast) => (
          <div className="flex p-2 rounded border flex-col justify-around items-center">
            {cast.profile_path ? (
              <Image
                width={120}
                height={120}
                src={`http://image.tmdb.org/t/p/w185${cast.profile_path}`}
              />
            ) : (
              <Image width={120} height={120} src={process.env.UNKNOWN_IMG} />
            )}
            <Link href={`/person/${cast.id}`}>
              <p className="text-center p-3 ">{cast.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
