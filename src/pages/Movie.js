import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

function Movie({ setCompon, apiMovies }) {
    const [movie, setMovie] = useState();
    const { id } = useParams();
    useEffect(() => {
        const _movie = apiMovies.filter(movie => movie.id === Number(id))
        setMovie(_movie[0])
        if (movie) {
            setCompon(`<${movie.title}/>`)
        }
    },[setCompon, apiMovies, id, movie])

    return (
        <div className="movie-container">
            {!movie ? undefined : 
            <>
            <div>{movie.rating}</div>
            <div>{movie.description}</div>
            </>
            }
        </div>
    )
}

export default Movie;
