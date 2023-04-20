import Link from 'next/link'
import MyImage from './MyImage'

export default function MovieList({ movies, category }: any) {
  const movieList = movies.map((movie: any) => {
    return (
      <Link key={movie.id} href={`movies/${movie.id}`}>
        <MyImage
          key={movie.id}
          title={movie.title}
          id={movie.id}
          poster_path={movie.poster_path}
        />
      </Link>
    )
  })
  return (
    <div className="flex gap-2 p-4 flex-wrap">
      <h2 className="text-xl sm:text-3xl font-bold mx-auto dark:text-lime-200">
        {category} <span className="font-light dark:text-gray-400">Movies</span>
      </h2>
      <div className="overflow-x-scroll flex snap-x snap-mandatory gap-2">
        {movieList}
      </div>
    </div>
  )
}
