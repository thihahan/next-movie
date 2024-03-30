import Link from "next/link"

export default function Movies({movies}){
    const POSTER_IMG="http://image.tmdb.org/t/p/w342"
    return (
        <div className="flex flex-wrap flex-row justify-around gap-2">
          {
            movies?.map(movie => 
            <div key={movie.id} className="w-[180px] text-center rounded">
              <Link href={`/movies/${movie.id}`}>
                <img className="hover:scale-105 transition-all duration-100" src={`${POSTER_IMG}${movie.poster_path}`}/>
              </Link>
              <h4>{movie.title}</h4>
              <span>{movie?.release_date?.split("-")[0]}</span>
            </div>)
          }
      </div>
    )
}