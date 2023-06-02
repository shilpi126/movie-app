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

        <div  className='flex justify-center items-center h-screen w-full  m-4 p-2' >
        <div className=' xl:w-7/12 h-auto w-full  rounded-2xl   cursor-pointer 
        sm:p-3 sm:hover:shadow-slate-600 sm:shadow-xl sm:border sm:border-slate-400 sm:m-1  
        p-1 hover:shadow-slate-600 shadow-xl border border-slate-400 
        transition-transform duration-200 '>
        <img src={singleMovie.image?.original} className='h-72 w-full rounded-2xl p-2'/>
        <div className='p-2'>
              <h1 className='text-2xl  text-gray-800   '>{singleMovie.name}</h1>
              <div className='text-md  text-gray-600  '>{singleMovie.summary}</div>

              <h4 className='text-lg text-gray-800 '>{singleMovie.language}</h4>
      </div>
       <div className='flex justify-center'>
       <Link to="/" className='flex  justify-center'>
        <button  className='h-10 w-40 mb-2 mr-4 rounded-lg text-xl text-slate-300 bg-gray-600 hover:bg-slate-400 hover:text-gray-800'>Go To Home</button>
        </Link>
        <Link to={`/booking/${singleMovie.id}`} className='flex  justify-center'>
        <button  className='h-10 w-40 mb-2 rounded-lg text-xl text-slate-300 bg-gray-600 hover:bg-slate-400 hover:text-gray-800'>Book Show</button>
        </Link>
       </div>
  </div>
</div>



  
  )
}

export default MovieSummary