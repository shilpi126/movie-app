
import './App.css';

import Booking from './pages/Booking';
import HomePage from './pages/HomePage';
import MovieSummary from './pages/MovieSummary';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Success from './pages/Success';

function App() {
  return (
  <>
  <BrowserRouter>

  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/moviesummary/:movieId' element={<MovieSummary/>}/>
    <Route path='/booking/:bookingId' element={<Booking/>}/>
    <Route path='/success' element={<Success/>}/>
   
   </Routes>
   </BrowserRouter>
   
  </>
  );
}

export default App;
