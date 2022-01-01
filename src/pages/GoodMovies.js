import { useEffect } from "react";
import MovieCard from "../components/MovieCard";

function GoodMovies(props) {
    useEffect(() => {
        props.compon("<Good Movies/>")
    },[])

    return (
        <div>
            <MovieCard/>
        </div>
    )
}

export default GoodMovies;
