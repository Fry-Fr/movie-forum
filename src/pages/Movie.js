import axios from "axios";
import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

function Movie({ setCompon, apiMovies }) {
    const [movie, setMovie] = useState();
    const { id } = useParams();
    useEffect(() => {
        if (!movie) {
            const _movie = apiMovies.filter(movie => movie.movie_id === Number(id))
            setMovie(_movie[0])
        }
        if (movie) {
            setCompon(`<${movie.title}/>`)
            if (movie.image_url === "") {
                return
            }
            axios.get(movie.image_url).then(res => {
                console.log("image response: ", res.status)
            }).catch(error => {
                console.log("Image Error")
                setMovie({...movie, 'image_url': ""})
            })
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
                {!movie.image_url ? <div className="empty-image">Image not found</div> : <img crossOrigin="*" src={movie.image_url} alt="movie poster" className="movie-poster" />}
            </>
            }
        </div>
    )
}

export default Movie;
