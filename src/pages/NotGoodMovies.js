import { useEffect } from "react";
import MovieCard from "../components/MovieCard";

function NotGoodMovies({ setCompon, apiMovies }) {
    useEffect(() => {
        setCompon("<NOT Good Movies/>")
    },[setCompon])

    return (
        <div className="movie-card-container">
            <MovieCard movies={apiMovies.filter(movie => movie.is_good === false)} />
        </div>
    )
}

export default NotGoodMovies;