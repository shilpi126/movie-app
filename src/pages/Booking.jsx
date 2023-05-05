import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import axios from 'axios';

function Booking({props}) {
    const [movieName, setMovieName] = useState("")
    const [language, setLanguage] = useState("")
    const [bookingData, setBookingData] = useState([]);
    const {bookingId} = useParams();
    //console.log(bookingId);

    const navigate = useNavigate();

    useEffect(() => {
        async function getData (){
            const response = await axios.get(`https://api.tvmaze.com/shows/${bookingId}`)
    
            setBookingData(response.data)
        }
        
        getData()
    
    },[])


    const handleSubmit = (e) => {
        e.preventDefault();
        
        // console.log(e.target.value);


        // navigate("/")

    }




  return (
    <div className='h-screen w-screen  flex  justify-center items-center bg-slate-500 '>
          
          
        <form onSubmit={handleSubmit} className='h-3/6 w-5/12  rounded-xl p-2 flex flex-wrap justify-center items-center 
        cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group
        '>
            <div>
            <label className='text-2xl text-slate-300  m-2 '>Movie Name : </label>
            <input type='text' 
            className="h-12 w-60 text-xl text-center text-slate-500  m-2 border-2 border-slate-300"
            defaultValue={bookingData.name}

            />
            </div>
            <div>
            <label className='text-2xl text-slate-300  m-2'>Language :</label>
            <input type='text' 
            className="h-12 w-60 text-xl text-center text-slate-500 m-2 border-2 border-slate-300"
            defaultValue={bookingData.language}

            />
            </div>
            <button 
            className='bg-amber-600 h-12 w-60 rounded-2xl mt-4 text-2xl text-slate-300 hover:bg-slate-300 hover:text-amber-600 '
            type='submit'
            >submit</button>
        </form>
        </div>
   
  )
}

export default Booking