import MovieCard from "./MovieCard";

function MovieList(movies){
    return(
        <>
        <h2>Recommended Movies:</h2>
        <div className="movie-list">
            {movies.map((movie) =>(
                <MovieCard movie={movie} />
            ))}
        </div>
        </>
    )
}

export default MovieList;