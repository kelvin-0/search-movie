import Link from 'next/link'
import MyImage from './MyImage'
import { Movie } from '@/types/apiTypes'

type MovieList = {
  movies: Movie[]
  category: string
}
const MovieList: React.FC<MovieList> = ({ movies, category }) => {
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
    <section className="flex gap-2 p-4 pt-40 sm:pt-28 flex-wrap" id={category}>
      <h2 className="text-3xl md:text-6xl mx-auto dark:text-lime-200 uppercase font-extrabold -tracking-[0.075em] italic mb-10 opacity-75">
        <a href={`#${category}`}>{category}</a>
      </h2>
      <div className="overflow-x-scroll flex snap-x snap-mandatory gap-2">
        {movieList}
      </div>
    </section>
  )
}
export default MovieList
