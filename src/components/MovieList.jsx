import React, { useEffect, useState } from 'react'
import MovieItem from './MovieItem'
import axios from "axios"
import { Link, Navigate } from 'react-router-dom';
import MovieSummary from '../pages/MovieSummary';

function MovieList() {
    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        async function getData (){
            const response = await axios.get("https://api.tvmaze.com/shows")
            
            setMovieData(response.data)
        }

        getData()

    },[])

    //console.log(movieData);
    
   


    


  return (

 
     <div className='flex flex-wrap justify-center   '>
    {movieData?.map((movie) => (
            <div className=" h-80 w-64 m-4 cursor-pointer sm:p-3 :hover:shadow-slate-600 sm:shadow-xl rounded-lg sm:border sm:border-slate-400 sm:m-4 hover:scale-105 
            p-1 hover:shadow-slate-600 shadow-md border border-slate-400 
            transition-transform duration-200 group">
            <MovieItem
            id={movie.id}
            title={movie.name}
            rating={movie.rating.average}
            genre={movie.genres[0]}
            image={movie.image.original}
            />
            
            <Link to={`/moviesummary/${movie.id}`} className='flex justify-center'>   
            <button className='bg-slate-600 h-8 w-40  rounded-md  mt-2  text-gray-200 text-lg text-center hover:bg-slate-400 hover:text-gray-800'>Summary</button>
            </Link>
            

        </div>
    ))}
   
     
    </div>
    
    
    


 
 
   
  )
}

export default MovieList






