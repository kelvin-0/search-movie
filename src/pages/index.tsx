import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Layout from '@/components/Layout'
import Jumbotron from '@/components/Jumbotron'
import MovieList from '@/components/MovieList'
import { Movies } from '@/types/apiTypes'

type ListOfMovies = {
  upcoming: Movies
  topRated: Movies
  popular: Movies
}
const categories = ['upcoming', 'top_rated', 'popular']
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=59',
  )
  const fetchCategories = categories.map((category) =>
    fetch(
      `${process.env.NEXT_PUBLIC_API_PATH}movie/${category}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`,
    ),
  )
  const [upcomingRes, topRatedRes, popularRes] = await Promise.all(
    fetchCategories,
  )
  const [upcoming, topRated, popular] = await Promise.all([
    upcomingRes.json(),
    topRatedRes.json(),
    popularRes.json(),
  ])

  return {
    props: {
      upcoming,
      topRated,
      popular,
    },
  }
}

const Home: React.FC<ListOfMovies> = ({ upcoming, topRated, popular }) => {
  return (
    <>
      <Head>
        <title>Movie Finder</title>
        <meta
          name="description"
          content="Search Upcoming, Popular, and Top Rated movies"
        />
      </Head>
      <Layout>
        <Jumbotron />
        <div className="p-4">
          {upcoming && (
            <MovieList movies={upcoming.results} category={'Upcoming'} />
          )}
          {topRated && (
            <MovieList movies={topRated.results} category={'Top Rated'} />
          )}
          {popular && (
            <MovieList movies={popular.results} category={'Popular'} />
          )}
        </div>
      </Layout>
    </>
  )
}

export default Home
