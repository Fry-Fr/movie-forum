import { useEffect } from "react";
import MovieCard from "../components/MovieCard";

function GoodMovies({ setCompon, apiMovies }) {
    useEffect(() => {
        setCompon("<Good Movies/>")
    },[setCompon])

    return (
        <div>
            <MovieCard movies={apiMovies.filter(movie => movie.is_good === true)} />
        </div>
    )
}

export default GoodMovies;
