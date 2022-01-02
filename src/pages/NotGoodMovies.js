import { useEffect } from "react";
import MovieCard from "../components/MovieCard";

function NotGoodMovies({ setCompon, apiMovies }) {
    useEffect(() => {
        setCompon("<NOT Good Movies/>")
    },[setCompon])

    return (
        <div>
            <MovieCard movies={apiMovies.filter(movie => movie.good === false)} />
        </div>
    )
}

export default NotGoodMovies;