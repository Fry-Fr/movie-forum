import { useEffect } from "react";
import MovieCard from "../components/MovieCard";

function WatchList({ setCompon, apiMovies, setApiMovies, auth }) {
    useEffect(() => {
        setCompon("<Watch List/>")
    },[setCompon])

    return (
        <div className="movie-card-container">
            <MovieCard movies={apiMovies.filter(movie => movie.title.substring(0,13) === "(watch-later)")} setApiMovies={setApiMovies} auth={auth} />
        </div>
    )
}

export default WatchList;