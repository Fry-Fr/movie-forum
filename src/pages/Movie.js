import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

function Movie({ setCompon, apiMovies }) {
    const [movie, setMovie] = useState();
    const { id } = useParams();
    useEffect(() => {
        setCompon(`<Movie ${id} />`);
        const _movie = apiMovies.filter(movie => movie.id === Number(id))
        setMovie(_movie[0])
    },[setCompon, apiMovies, id])

    return (
        <div className="movie-container">
            {!movie ? undefined : 
            <>
            <div>{movie.title}</div>
            <div>{movie.rating}</div>
            <div>{movie.description}</div>
            </>
            }
        </div>
    )
}

export default Movie;
