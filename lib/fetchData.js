export async function fetchTrending(page) {
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
    console.log("data :", data);
    return data;
  }
  const error = await res.json();
  return error;
}
