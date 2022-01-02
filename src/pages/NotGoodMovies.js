import { useEffect } from "react";
import MovieCard from "../components/MovieCard";

function NotGoodMovies({ setCompon }) {
    useEffect(() => {
        setCompon("<NOT Good Movies/>")
    },[setCompon])

    return (
        <div>
            <MovieCard/>
        </div>
    )
}

export default NotGoodMovies;