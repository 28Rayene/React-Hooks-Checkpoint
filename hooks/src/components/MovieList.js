import MoviesCard from"./MovieCard"
import '../App.css';
const MovieList=({moviesList})=>{
    return(
        <div className="parent">
            {moviesList.map((el)=>(
                <MoviesCard movie={el}/>
            ))

            }
        </div>

    )
}
export default MovieList