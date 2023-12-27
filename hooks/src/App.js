import movieData from"./components/MoviesData"
import './App.css';
import {useState} from"react"
import MovieList from"./components/MovieList"
import Filter from "./components/Filter"
import AddMovies from"./AddMovies"
import 'bootstrap/dist/css/bootstrap.min.css';
import MoviesCard from "./components/MovieCard";
import { Route, Routes,Router } from "react-router-dom";


function App() {
  const [moviesList,setMoviesList]=useState(movieData)
  const addNewMovie=(newMovie)=>{
    setMoviesList([...moviesList,newMovie])
  }
  const handleFilter = ({ title, rating }) => {
    
    const filteredMovies = moviesList.filter(movie => 
      movie.title.toLowerCase().includes(title.toLowerCase()) &&
      String(movie.rating).includes(String(rating))
    );
    setMoviesList(filteredMovies)
 
  
  };
  return (
    <div className="App">
      
      
      <Filter onFilter={handleFilter} />
      
      <MovieList moviesList={moviesList} />
      <AddMovies addNewMovie={addNewMovie}/>
      
      <Routes>
        <Route path="/trailer/:iduser" element={<trailer/>}/>
      </Routes>
      
    
      

    </div>
  );
}

export default App;
