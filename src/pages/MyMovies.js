import { useEffect } from "react";
import MovieCard from "../components/MovieCard";

function MyMovies({ setCompon, apiMovies }) {
    useEffect(() => {
        setCompon("<My Movies/>")
    },[setCompon])

    return (
        <div>
            <MovieCard movies={apiMovies} />
        </div>
    )
}

export default MyMovies;
