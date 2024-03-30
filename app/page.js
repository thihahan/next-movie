import Link from "next/link"
import { Button } from "@/components/ui/button"
import Movies from "@/components/Movies"

const fetchTrending = async () => {
  const res = await fetch(`${process.env.API_URL}/3/trending/movie/day`, {
    headers : {
      authorization : `Bearer ${process.env.API_ACCESS_TOKEN}`
    }
  })
  const data = await res.json()
  return data 
}

export default async function Home(){
  const trending = await fetchTrending()
  const movies = trending?.results
  return <>
      <h3 className="text-lg m-3">Trending</h3>
      <Movies movies={movies}/>
    </>
}