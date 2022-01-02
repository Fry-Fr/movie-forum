import { useEffect } from "react";
import MovieCard from "../components/MovieCard";

function MyMovies({ setCompon }) {
    useEffect(() => {
        setCompon("<My Movies/>")
    },[setCompon])

    return (
        <div>
            <MovieCard/>
        </div>
    )
}

export default MyMovies;
