import React from 'react'

function MovieItem({title, image,id}) {
  return (
    <div key={id}>
        
        <img src={image} alt='movie image' className='h-24 w-44'/>
        

        <h1 className='text-center text-lg '>{title}</h1>
    </div>
  )
}

export default MovieItem