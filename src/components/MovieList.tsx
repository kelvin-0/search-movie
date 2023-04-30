import Link from 'next/link'
import { motion } from 'framer-motion'
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
          unoptimized={true}
          key={movie.id}
          title={movie.title}
          id={movie.id}
          poster_path={movie.poster_path}
        />
      </Link>
    )
  })
  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        staggerChildren: 0.5,
      }}
      className="flex gap-2 p-4 pt-40 sm:pt-28 flex-wrap"
      id={category}
    >
      <h2 className="text-3xl md:text-6xl mx-auto dark:text-lime-200 uppercase font-extrabold -tracking-[0.075em] italic mb-10 opacity-75">
        <a href={`#${category}`}>{category}</a>
      </h2>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          scale: [0, 1],
          y: [-100, 0],
          borderRadius: ['100%', '0'],
        }}
        className="overflow-x-scroll flex snap-x snap-mandatory gap-2"
      >
        {movieList}
      </motion.div>
    </motion.section>
  )
}
export default MovieList
