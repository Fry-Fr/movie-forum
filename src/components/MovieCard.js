import { Link } from "react-router-dom";

function MovieCard({ movies }) {
    return (
       <>
       {!movies ? undefined : movies.map((movie, i) => {
           return(
            <Link to={`/movie/${movie.id}`} key={i} className="movie-card-link">
                <div className="movie-card">
                    <span>{movie.title}</span>
                    <span>{movie.good ? '👍' : '👎'}</span>
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
