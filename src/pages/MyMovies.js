import { useEffect } from "react";
import MovieCard from "../components/MovieCard";

function MyMovies({ setCompon, apiMovies, auth }) {
    useEffect(() => {
        setCompon("<My Movies/>")
    },[setCompon])

    return (
        <div className="movie-card-container">
            <MovieCard movies={apiMovies.filter(movie => movie.title.substring(0,13) !== "(watch-later)")} auth={auth} />
        </div>
    )
}

export default MyMovies;
