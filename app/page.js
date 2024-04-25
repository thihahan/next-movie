import Trending from "@/components/Trending";
import { fetchTrending } from "@/lib/fetchData";

export default async function Home({}) {
  const res = await fetchTrending(1);
  const movies = res.results;
  return (
    <>
      <h3 className="text-lg m-3">Trending</h3>
      <Trending initialMovies={movies} />
    </>
  );
}
