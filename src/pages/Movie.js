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
            <div className="movie-page-body">
                <div>IDMB Rating: {movie.rating}</div>
                <div>Description:<br/>{movie.description}</div>
            </div>
                {!movie.image_url ? <div className="empty-image">Image not found</div> : <img src={movie.image_url} alt="movie poster" className="movie-poster"/>}
            </>
            }
        </div>
    )
}

export default Movie;
