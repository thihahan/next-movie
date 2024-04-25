import Link from "next/link"
import { Button } from "@/components/ui/button"
import Movies from "@/components/Movies"

const fetchMovies = async (q) => {
  const res = await fetch(`${process.env.API_URL}/3/search/movie?query=${q}`, {
    headers : {
      authorization : `Bearer ${process.env.API_ACCESS_TOKEN}`
    }
  })
  const data = await res.json()
  return data 
}

export default async function Home({searchParams}){
  const trending = await fetchMovies(searchParams.q)
  const movies = trending?.results
  return <>
      <h3 className="text-lg m-3">Results for {searchParams.q}</h3>
      <Movies movies={movies}/>
    </>
}