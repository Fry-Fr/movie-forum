import { useEffect, useState } from "react";
import axios from "axios";

export const movies = [
    {
        title: "Matrix",
        rating: "8.7",
        description: "Thomas A. Anderson is a man living two lives. By day he is an average computer programmer and by night a hacker known as Neo. Neo has always questioned his reality, but the truth is far beyond his imagination."
    },
    {
        title: "The Matrix Reloaded",
        rating: "7.2",
        description: "Movie DIn this second adventure, Neo and the rebel leaders estimate that they have 72 hours until Zion falls under siege to the Machine Army."
    },
    {
        title: "Matrix Ressurection",
        rating: 0,
        description: "The plot is currently unknown."
    }
]

export const theseIds = ["tt10838180","tt0234215","tt0133093","tt0242653","tt9847360"]

export const options = {
    method: 'GET',
    url: 'https://data-imdb1.p.rapidapi.com/movie/id/tt10838180/',
    headers: {
      'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
      'x-rapidapi-key': '5a7004bf33mshe25977a0a22602cp172ef1jsn8587be47b445'
    }
  };

function MovieCard() {
    const [apiMovies, setApiMovies] = useState(movies);

    return (
       <>
       {apiMovies.map((movie, i) => {
           return(
            <div key={i} className="movie-card">
                <span>{movie.title}</span>
                <span>{movie.rating}</span>
                <span>{movie.description}</span>
            </div>
           )
       })}
       </> 
    )
}

export default MovieCard;
