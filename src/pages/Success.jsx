import React from 'react'
import { Link } from 'react-router-dom';

function Success() {
    let res = JSON.parse(localStorage.getItem("data"));
    // console.log(res);

  return (
    <div className='h-full mt-10'>
        <div className='text-center text-4xl m-6 text-slate-600'>Booking Successul</div>
       <div className='flex justify-center items-center '>
        
       <div className='sm:h-5/6 sm:w-6/12  rounded-xl 
        cursor-pointer sm:p-2 sm:hover:shadow-slate-600 sm:shadow-md sm:border sm:border-slate-400 
        hover:shadow-slate-600 shadow-xl border border-slate-400 h-5/6 w-9/12
        transition-transform duration-200 hover:scale-105 p-2 '>

            <div className='text-center text-2xl m-4 text-slate-800 border-b-2 border-slate-400'>User Details</div>
            <div className='text-center text-xl mt-4 text-slate-600'>{`Name : ${res.userName}`}</div>
            <div className='text-center text-xl mt-4 text-slate-600'>{`Email : ${res.email}`}</div>
            <div className='text-center text-xl mt-4 text-slate-600'>{`Mobile No : ${res.contect}`}</div>
            <div className='text-center text-xl mt-4 text-slate-600'>{`Movie Name : ${res.bookingData.name}`}</div>
            <div className='text-center text-xl mt-4 text-slate-600'>{`Language: ${res.bookingData.language}`}</div>
        </div>
       </div>
        <Link to="/" className='flex justify-center mt-2'>
        <button             className='bg-slate-600 h-10 w-52  rounded-xl mt-4 text-xl text-slate-300 hover:bg-slate-400 hover:text-slate-600 '>Go to Home</button>
        </Link>
    </div>
  )
}

export default Success