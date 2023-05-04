import React, { useEffect, useState } from 'react'
import MovieItem from './MovieItem'
import axios from "axios"

function MovieList() {
    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        async function getData (){
            const response = await axios.get("https://api.tvmaze.com/search/shows?q=all")
            console.log(response.data);
            setMovieData(response.data)
        }

        getData()

    },[])

    console.log(movieData);


  return (

    <div className='flex flex-wrap justify-center m-12 '>
    {movieData?.map((movie) => (
            <div className=" h-44 w-64 cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
            <MovieItem
            id={movie.show.id}
            title={movie.show.name}
            image={movie.show.image}
            />

        </div>
    ))}
     
    </div>
   
  )
}

export default MovieList






