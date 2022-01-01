import { useEffect } from "react";
import MovieCard from "../components/MovieCard";

function MyMovies(props) {
    useEffect(() => {
        props.compon("<My Movies/>")
    },[])

    return (
        <div>
            <MovieCard/>
        </div>
    )
}

export default MyMovies;
