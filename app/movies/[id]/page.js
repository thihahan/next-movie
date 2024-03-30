import { Badge } from "@/components/ui/badge";

const fetchMovie = async (id) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
        headers : {
            authorization : `Bearer ${process.env.API_ACCESS_TOKEN}`
        }
    })
    return res.json()
}

const fetchCasts = async (id) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits`,{
        headers : {
            authorization : `Bearer ${process.env.API_ACCESS_TOKEN}`
        }
    })
    const data = res.json()
    return data
}


export default async function Movie({params}){
    const movie = await fetchMovie(params.id)
    const casts = await fetchCasts(params.id)
    return <div className="mx-3">
        <h2 className="mb-2 text-lg">{movie.original_title} {movie.release_date.split("-")[0]}</h2>
        <div className="m-2">
            {movie.genres.map(genre => <Badge className={'mx-2'}>{genre.name}</Badge>)}
        </div>
        <img className="w-full" src={`${process.env.COVER_IMG}${movie.backdrop_path}`}/>
        <p className="my-2">{movie.overview}</p>
        <hr />
        <div className="flex gap-2 flex-wrap">
            {
                casts?.cast?.map(cast => <div className="bg-gray-500 flex flex-col justify-center">
                    <img className="w-[120px]" src={`${process.env.PROFILE_IMG}${cast.profile_path}`}/>
                    <p className="text-center p-3 text-white">{cast.name}</p>
                </div>)
            }
        </div>
    </div>
}