import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import axios from 'axios';

function Booking({props}) {
    const [name,setName]= useState(" ")
    const [userName,setUserName]= useState(" ")
     const [email,setEmail]= useState(" ")
     const [contect,setContect]= useState(" ")
    const [language,setLanguage]= useState(" ")
    const [bookingData, setBookingData] = useState([]);
    const {bookingId} = useParams();
    //console.log(bookingId);

    const navigate = useNavigate();

    useEffect(() => {
        async function getData (){
            const response = await axios.get(`https://api.tvmaze.com/shows/${bookingId}`)
            setBookingData(response.data)
            setName(bookingData.name)
            setLanguage(bookingData.language)
        }
        getData()
        
    },[])



    const handleSubmit = (e) => {
        e.preventDefault()
        
        localStorage.setItem("data",JSON.stringify({bookingData,userName,contect,email}))

        navigate("/success")
        
    }




return (
    <div className='h-screen w-screen  flex flex-wrap  justify-center mt-10  '>
        
        
        <form onSubmit={handleSubmit} className='sm:h-5/6 sm:w-6/12  rounded-xl flex flex-wrap justify-center 
        cursor-pointer sm:p-2 sm:hover:shadow-slate-600 sm:shadow-md sm:border sm:border-slate-400 
        hover:shadow-slate-600 shadow-xl border border-slate-400 h-5/6 w-9/12
        transition-transform duration-200 hover:scale-105 p-2 
        '>
            
            <div className='h-10 w-full flex flex-wrap justify-center items-center'>
            <label className='h-8 w-8/12 text-lg text-slate-600   '>Name :</label>
            <input type='text' 
            className="h-10 w-8/12 text-lg text-center text-slate-500   border-2 border-slate-300 rounded-lg"
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}

            />
            </div>

            <div className='h-10 w-full flex flex-wrap justify-center items-center'>
            <label className='h-8 w-8/12 text-lg text-slate-600   '>Email:</label>
            <input type='text' 
            className="h-10 w-8/12 text-lg text-center text-slate-500   border-2 border-slate-300 rounded-lg"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}

            />
            </div>

            <div className='h-10 w-full flex flex-wrap justify-center items-center'>
            <label className='h-8 w-8/12 text-lg text-slate-600   '>Mobile No :</label>
            <input type='text' 
            className="h-10 w-8/12 text-lg text-center text-slate-500   border-2 border-slate-300 rounded-lg"
            value={contect}
            onChange={(e)=>setContect(e.target.value)}

            />
            </div>

            <div className='h-10 w-full flex flex-wrap justify-center items-center'>
            <label className='h-8 w-8/12 text-lg text-slate-600   '>Movie Name :</label>
            <input type='text' 
            className="h-10 w-8/12 text-lg text-center text-slate-500   border-2 border-slate-300 rounded-lg"
            defaultValue={bookingData.name}

            />
            </div>

            <div className='h-10 w-full flex flex-wrap justify-center items-center'>
            <label className='h-8 w-8/12 text-lg  text-slate-600  '>Language :</label>
            <input type='text' 
            className="h-10 w-8/12 text-lg text-center text-slate-500  border-2 border-slate-300 rounded-lg"
            
            defaultValue={bookingData.language}

            
            />
            </div>
         <div>
        
            <button 
            className='bg-slate-600 h-8 w-44 mb-2  rounded-lg mt-4 text-xl text-slate-300 hover:bg-slate-400 hover:text-slate-600 '
            type='submit'
            >submit
            </button>
             <Link to="/" className='flex  justify-center'>
        <button  className='h-8 w-44  rounded-lg text-xl text-slate-300 bg-slate-600 hover:bg-slate-400 hover:text-gray-800'>Go To Home</button>
        </Link>
         </div>
        </form>
        </div>
    
  )
}

export default Booking