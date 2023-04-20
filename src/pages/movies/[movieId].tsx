import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Layout from '@/components/Layout'
import MyImage from '@/components/MyImage'
import BackgroundImage from '@/components/BackgroundImage'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context
  const fetchMovie = await fetch(
    `${process.env.NEXT_PUBLIC_API_PATH}/movie/${params?.movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`,
  )
  const searchResults = await fetchMovie.json()
  return {
    props: {
      searchResults,
    },
  }
}

const Movie: React.FC<any> = ({ searchResults }) => {
  const releasedDate = new Date(searchResults.release_date)
  const genres = searchResults.genres.map(
    (genre: { id: number; name: string }) => genre.name,
  )
  const languages = searchResults.spoken_languages.map(
    (language: { name: string; english_name: string }) => language.english_name,
  )
  function toHoursAndMinutes(totalMinutes: number): string {
    const hours = Math.floor(totalMinutes / 60)
    const minutes = totalMinutes & 60
    return `${hours}h ${minutes}m`
  }
  return (
    <>
      <Head>
        <title>{searchResults.title} - Movie Finder</title>
        <meta
          name="description"
          content={`${searchResults.title} movie detail`}
        />
      </Head>
      <Layout>
        <BackgroundImage
          id={searchResults.id}
          isRemote
          path={searchResults.backdrop_path}
        >
          <div className="flex px-10 py-8 flex-col md:flex-row items-center m-auto gap-5">
            <MyImage
              isLarge
              id={searchResults.id}
              title={searchResults.title}
              poster_path={searchResults.poster_path}
            />
            <div className="text-slate-700 dark:text-gray-300 max-w-2xl">
              <h1 className="text-slate-900 dark:text-yellow-200 text-center md:text-left text-2xl sm:text-3xl font-bold mb-3">
                {searchResults.original_title}{' '}
                <span>({releasedDate.getFullYear()})</span>
              </h1>
              <div className="flex items-center gap-5 mb-6 justify-center text-base sm:text-lg md:justify-start flex-wrap">
                <span className="border p-1 rounded-sm border-slate-900 dark:border-slate-300">
                  {searchResults.adults ? '18+' : '13+'}
                </span>
                <span className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                    />
                  </svg>
                  {releasedDate.getMonth()}/{releasedDate.getDate()}/
                  {releasedDate.getFullYear()}
                </span>
                <span className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"
                    />
                  </svg>
                  {toHoursAndMinutes(searchResults.runtime)}
                </span>
                <span>{searchResults.status}</span>
                <span></span>
              </div>
              <p className="text-xl sm:text-2xl font-bold dark:text-gray-500 text-slate-500 italic mb-6 text-center md:text-left">
                &quot;{searchResults.tagline}&quot;
              </p>
              <h2 className="text-lg sm:text-xl font-semibold">Overview</h2>
              <p className="text-sm sm:text-base mb-3 text-justify">
                {searchResults.overview}
              </p>
              <div className="flex justify-between gap-2 flex-wrap text-sm sm:text-base">
                <span className="font-bold">
                  Genres:
                  <p className="font-thin">{genres.join(' ,')}</p>
                </span>
                <span className="font-bold">
                  Languages:
                  <p className="font-thin">{languages.join(' ,')}</p>
                </span>
              </div>
            </div>
          </div>
        </BackgroundImage>
      </Layout>
    </>
  )
}

export default Movie
