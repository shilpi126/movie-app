import React from 'react'
import Navbar from '../components/Navbar'
import MovieList from '../components/MovieList'

function HomePage() {
  return (
    <div className='bg-slate-500 h-screen '>
    <Navbar/>
    <MovieList/>
    </div>
  )
}

export default HomePage