function MovieCard(movie){
    return(
        <>
        <div className="card" style={{width: "18rem;"}}>
            <img src={movie.img} className="card-img-top" alt="an movie poster"> </img>
            <div className="card-body">
                <h3 className="card-title">{movie.title}</h3>
                <h5 className="card-title">{movie.genre}</h5>
                <p className="card-text">{movie.description}</p>
            </div>
        </div>
        </>
    )
}

export default MovieCard;
