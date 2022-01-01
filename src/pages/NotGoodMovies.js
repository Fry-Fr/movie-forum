import { useEffect } from "react";
import MovieCard from "../components/MovieCard";

function NotGoodMovies(props) {
    useEffect(() => {
        props.compon("<NOT Good Movies/>")
    },[])

    return (
        <div>
            <MovieCard/>
        </div>
    )
}

export default NotGoodMovies;