export default function MovieList({movies, category}: any){
    const movieList = movies.map((movie: any) => {
        return (
                <img key={movie.id} className="snap-center rounded-md object-cover cursor-pointer" width="150" height="200" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}/>
        )
    })
    return (
        <>
        <h2 className="text-2xl font-semibold">{category} Movies</h2>
        <div className="overflow-x-scroll flex snap-x snap-mandatory gap-2">
            {movieList}
        </div>
        </>
    )
}