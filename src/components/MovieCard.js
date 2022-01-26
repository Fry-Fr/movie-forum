import { Link } from "react-router-dom";

function MovieCard({ movies }) {
    const handleIsGoodRatings = (bool) => {
        if (bool === null) {
            return undefined
        }else if (bool === true) {
            return '👍'
        }else {
            return '👎'
        }
    }

    return (
       <>
       {!movies ? undefined : movies.map((movie, i) => {
           return(
            <Link to={`/movie/${movie.movie_id}`} key={i} className="movie-card-link">
                <div className="movie-card">
                    <span>{movie.title.substring(0,13) === "(watch-later)" ? movie.title.substring(13) : movie.title}</span>
                    <span>{handleIsGoodRatings(movie.is_good)}</span>
                    <span>{movie.rating}</span>
                    <span>{movie.description}</span>
                </div>
            </Link>
           )
       })}
       </> 
    )
}

export default MovieCard;
