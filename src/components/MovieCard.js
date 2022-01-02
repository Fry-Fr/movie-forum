function MovieCard({ movies }) {
    return (
       <>
       {!movies ? undefined : movies.map((movie, i) => {
           return(
            <div key={i} className="movie-card">
                <span>{movie.title}</span>
                <span>{movie.good ? '👍' : '👎'}</span>
                <span>{movie.rating}</span>
                <span>{movie.description}</span>
            </div>
           )
       })}
       </> 
    )
}

export default MovieCard;
