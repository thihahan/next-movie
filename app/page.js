import MoviePagination from "@/components/MoviePagination";
import Movies from "@/components/Movies";
const fetchTrending = async (page = 1) => {
  const res = await fetch(
    `${process.env.API_URL}/3/trending/movie/day?page=${page}`,
    {
      headers: {
        authorization: `Bearer ${process.env.API_ACCESS_TOKEN}`,
        "content-type": "application/json",
      },
    }
  );
  if (res.ok) {
    const data = await res.json();
    return data;
  }
  const error = await res.json();
  console.log("error : ", error);
  return error;
};

export default async function Home({ searchParams }) {
  let page = 1;
  if (Number(searchParams.page)) {
    page = Number(searchParams.page);
  }
  const res = await fetchTrending(page);
  const movies = res.results;
  const total_pages = res.total_pages;
  const current_page = res.page;
  return (
    <div className="mb-10">
      <h3 className="text-lg m-3">Trending</h3>
      <Movies movies={movies} />
      <div className="flex justify-end">
        <MoviePagination
          total_pages={total_pages}
          current_page={current_page}
        />
      </div>
      <h3 className="text-end">Total Pages - {total_pages}</h3>
    </div>
  );
}
