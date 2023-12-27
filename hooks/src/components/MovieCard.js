import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";


const MoviesCard = ({ movie }) => {
  return (
    <div class="hero-container">
		<div class="main-container">
			<div class="poster-container">
				<a href="#"><img src={movie.posterURL} class="poster" /></a>
			</div>
			<div class="ticket-container">
				<div class="ticket__content">
					<h4 class="ticket__movie-title">{movie.title}</h4>
					<p class="ticket__movie-slogan">
						{movie.description}
					</p>
					<p class="ticket__current-price">{movie.rating}</p>
					<button class="ticket__buy-btn"> <Link to={`/trailer/${movie.id}`}> check it out </Link></button>

				</div>
			</div>
		</div>

		
		</div>
		
	


  );
};

export default MoviesCard;