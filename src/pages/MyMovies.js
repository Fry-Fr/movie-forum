import { useEffect } from "react";
import MovieCard from "../components/MovieCard";

function MyMovies({ setCompon, apiMovies }) {
    useEffect(() => {
        setCompon("<My Movies/>")
    },[setCompon])

    return (
        <div className="movie-card-container">
            <MovieCard movies={apiMovies} />
        </div>
    )
}

export default MyMovies;
