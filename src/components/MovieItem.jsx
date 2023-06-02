import React from 'react'

function MovieItem({title, image,id, rating,genre}) {
  return (
    <div key={id}  >

        
        <img src={image} alt='movie image' className='h-40 w-full  rounded-lg'/>
        <h1 className='text-center text-xl   text-gray-600'>{title}</h1>
        <h4 className='text-center text-lg  text-slate-600'>{genre}</h4>
        <h3 className='text-center text-lg  text-amber-600'>{rating}</h3>
    </div>
  )
}

export default MovieItem