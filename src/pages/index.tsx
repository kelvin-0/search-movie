import Layout from '@/components/Layout'
import Jumbotron from '@/components/Jumbotron'
import MovieList from '@/components/MovieList'
import { GetServerSideProps } from 'next'
import Head from 'next/head'

export const getServerSideProps: GetServerSideProps = async () => {
  const categories = ['upcoming', 'top_rated', 'popular']
  const fetchCategories = categories.map((category) =>
    fetch(
      `${process.env.API_PATH}movie/${category}?api_key=${process.env.API_KEY}&language=en-US&page=1`,
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

const Home: React.FC<any> = ({ upcoming, topRated, popular }) => {
  return (
    <>
      <Head>
        <title>Movie Finder</title>
      </Head>
      <Layout>
        <Jumbotron />
        <div className="p-4">
          {upcoming?.results && (
            <MovieList movies={upcoming.results} category={'Upcoming'} />
          )}
          {topRated?.results && (
            <MovieList movies={topRated.results} category={'Top Rated'} />
          )}
          {popular?.results && (
            <MovieList movies={popular.results} category={'Popular'} />
          )}
        </div>
      </Layout>
    </>
  )
}

export default Home
