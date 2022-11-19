import { Link } from "react-router-dom";
import axios from "axios";

function MovieCard({ movies, setApiMovies, auth }) {

    const token = auth;

    const handleIsGoodRatings = (bool) => {
        if (bool === null) {
            return undefined
        }else if (bool === true) {
            return '👍'
        }else {
            return '👎'
        }
    }

    const handleRemove = (e) => {
        e.preventDefault();
        const movieId = parseInt(e.target.id);
        axios.delete(`${process.env.REACT_APP_API_URL}movies/${movieId}`, {
            headers: {
                Authorization: token
            }
        }).then(response => {
            console.log(response.data.message)
            axios.get(`${process.env.REACT_APP_API_URL}movies/`,{
                headers: {
                    Authorization: token
                }
            }).then(response => {
                setApiMovies(response.data)
            }).catch(err => console.log(err))
        }).catch(err => console.log(err))
    }

    return (
       <>
       {!movies ? undefined : movies.map((movie, i) => {
           return(
            <Link to={`/movie/${movie.movie_id}`} key={i} className="movie-card-link">
                <div className="movie-card">
                    <span className="movie-card-title">{movie.title.substring(0,13) === "(watch-later)" ? movie.title.substring(13) : movie.title}</span>
                    <span>{handleIsGoodRatings(movie.is_good)}</span>
                    <span>{movie.rating}</span>
                    <span>{movie.description}</span>
                    <button id={movie.movie_id} className="movie-card-remove-btn" onClick={handleRemove} title="Delete">x</button>
                </div>
            </Link>
           )
       })}
       </> 
    )
}

export default MovieCard;
