import { useEffect } from "react";
import MovieCard from "../components/MovieCard";

function GoodMovies({ setCompon }) {
    useEffect(() => {
        setCompon("<Good Movies/>")
    },[setCompon])

    return (
        <div>
            <MovieCard/>
        </div>
    )
}

export default GoodMovies;
