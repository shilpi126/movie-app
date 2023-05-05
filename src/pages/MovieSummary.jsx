import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link, useParams} from "react-router-dom"


function MovieSummary() {
  const [singleMovie, setSingleMovie] = useState([]);


  const {movieId} = useParams();
  console.log(movieId);
  
 

  useEffect(() => {
    async function getData (){
        const response = await axios.get(`https://api.tvmaze.com/shows/${movieId}`)

        setSingleMovie(response.data)
    }
    
    getData()

},[])

console.log('====================================');
console.log(singleMovie);
console.log('====================================');




  return (

        <div  className='flex justify-center items-center h-screen w-screen bg-slate-500' >
        <div className='h-5/6 w-8/12 bg-slate-500 flex justify-center items-center  rounded-2xl   cursor-pointer 
        sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md sm:border sm:border-slate-400 sm:m-2  
        p-1 hover:shadow-slate-400 shadow-md border border-slate-400 m-2
        transition-shadow duration-200 group'>
        {/* <img src={singleMovie.image.medium} alt='movie image' className='h-60 w-80 pr-4 pl-4'/> */}
        <div className='p-6'>
              <h1 className='text-2xl  text-gray-300 mb-2  '>{singleMovie.name}</h1>
              <p className='text-md  text-gray-300 '>{singleMovie.summary}</p>
              <h4 className='text-xl  text-gray-300 '>{singleMovie.genres}</h4>
              <h4 className='text-xl text-gray-300 mb-6 '>{singleMovie.language}</h4>
        <Link to={`/booking/${singleMovie.id}`}>
        <button  className='h-12 w-48 rounded-lg text-xl text-slate-300 bg-amber-600 hover:bg-slate-400 hover:text-amber-500'>Book Show</button>
        </Link>



    </div>
  </div>
</div>



  
  )
}

export default MovieSummary