import { NextResponse } from "next/server";

const token = process.env.API_ACCESS_TOKEN
export async function GET(request, {params}){
    const res = await fetch(`https://api.themoviedb.org/3/person/${params.id}`, {
        headers : {
            authorization : `Bearer ${token}`
        }
    })
    const data = await res.json()
    return NextResponse.json(data)
}