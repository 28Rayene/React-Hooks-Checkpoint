import { useParams } from "react-router";
import movieData from "./MoviesData";
import '../App.css';
const trailer=()=>{
    const { iduser } = useParams();
    return(
        <div className="card">
            <iframe width="560" height="250"src={movieData.find((el) => el.id === Number(iduser)).trailerUrl }></iframe> 
            <h4 className="content">{movieData.find((el) => el.id === Number(iduser)).description}</h4>


        </div>
    )
}
export default trailer