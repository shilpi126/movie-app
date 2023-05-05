import React from 'react'

function MovieItem({title, image,id, rating,genre}) {
  return (
    <div key={id}>
        
        {/* <img src={image} alt='movie image' className='h-24 w-44'/> */}
        

        <h1 className='text-center text-2xl mb-2  text-slate-200'>{title}</h1>
        <h4 className='text-center text-lg mb-1 text-slate-200'>{genre}</h4>

    </div>
  )
}

export default MovieItem