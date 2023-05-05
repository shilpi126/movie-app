import React, { useEffect, useState } from 'react'
import MovieItem from './MovieItem'
import axios from "axios"
import { Link, Navigate } from 'react-router-dom';
import MovieSummary from '../pages/MovieSummary';

function MovieList() {
    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        async function getData (){
            const response = await axios.get("https://api.tvmaze.com/search/shows?q=all")
            //console.log(response.data);
            setMovieData(response.data)
        }

        getData()

    },[])

    //console.log(movieData);
    
   


    


  return (

 
     <div className='flex flex-wrap justify-center m-12 '>
    {movieData?.map((movie) => (
            <div className=" h-40 w-64 cursor-pointer sm:p-3 :hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 
            p-1 hover:shadow-slate-400 shadow-md border border-slate-400 m-2
            transition-shadow duration-200 group">
            <MovieItem
            id={movie.show.id}
            title={movie.show.name}
            rating={movie.show.rating}
            genre={movie.show.genres[0]}
            />
          
            <Link to={`/moviesummary/${movie.show.id}`}>   
            <button className='bg-amber-600 h-8 w-44 ml-6 rounded-md  mt-6 text-gray-200 text-lg text-center hover:bg-slate-300 hover:text-amber-600'>Summary</button>
            </Link>
            

        </div>
    ))}
   
     
    </div>
    
    
    


 
 
   
  )
}

export default MovieList






