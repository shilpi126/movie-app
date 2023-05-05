import React from 'react'
import Navbar from '../components/Navbar'
import MovieList from '../components/MovieList'

function HomePage() {
  return (
    <div className='bg-slate-500 h-100% '>
    <Navbar/>
    <MovieList/>
    </div>
  )
}

export default HomePage