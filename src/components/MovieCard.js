
export const movies = [
    {
        title: "Matrix",
        rating: "8.7",
        description: "Thomas A. Anderson is a man living two lives. By day he is an average computer programmer and by night a hacker known as Neo. Neo has always questioned his reality, but the truth is far beyond his imagination."
    },
    {
        title: "The Matrix Reloaded",
        rating: "7.2",
        description: "Movie DIn this second adventure, Neo and the rebel leaders estimate that they have 72 hours until Zion falls under siege to the Machine Army."
    },
    {
        title: "Matrix Ressurection",
        rating: 0,
        description: "The plot is currently unknown."
    }
];

function MovieCard() {
    const apiMovies = movies;

    return (
       <>
       {apiMovies.map((movie, i) => {
           return(
            <div key={i} className="movie-card">
                <span>{movie.title}</span>
                <span>{movie.rating}</span>
                <span>{movie.description}</span>
            </div>
           )
       })}
       </> 
    )
}

export default MovieCard;
