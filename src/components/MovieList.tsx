import Link from "next/link";
import MyImage from "./MyImage";

export default function MovieList({ movies, category }: any) {
  const movieList = movies.map((movie: any) => {
    return (
      <Link key={movie.id} href={`movies/${movie.id}`}>
          <MyImage key={movie.id} title={movie.title} id={movie.id} poster_path={movie.poster_path} />
      </Link>

    );
  });
  return (
    <>
      <h2 className="text-2xl font-semibold">{category} Movies</h2>
      <div className="overflow-x-scroll flex snap-x snap-mandatory gap-2">
        {movieList}
      </div>
    </>
  );
}
