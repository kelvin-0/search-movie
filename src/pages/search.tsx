import Autocompletion from '@/components/Autocompletion'
import Layout from '@/components/Layout'
import MyImage from '@/components/MyImage'
import MyPagination from '@/components/MyPagination'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

export const getServerSideProps: GetServerSideProps = async ({
  req,
  res,
  query,
}) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=59',
  )
  const { text, page = '1', language = 'en-us' } = query
  if (!text) {
    return {
      props: {},
    }
  }
  const fetchSearchPs = await fetch(
    `${process.env.NEXT_PUBLIC_API_PATH}search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=${language}&page=${page}&query=${text}`,
  )
  const searchResults = await fetchSearchPs.json()
  return {
    props: {
      searchResults,
      text,
      page,
      language,
    },
  }
}

const Search: React.FC<any> = ({
  searchResults,
  text,
  page,
  language,
  error,
}) => {
  const resultsLength = searchResults?.results?.length

  return (
    <>
      <Head>
        <title>{text} - Movie Finder</title>
        <meta
          name="description"
          content={`Searching movies for {text} keyword`}
        />
      </Head>
      <Layout>
        <Autocompletion />
        {resultsLength ? (
          <>
            <h2 className="text-2xl font-semibold text-center p-3 dark:text-slate-100 text-slate-950">
              Search Results for &ldquo;{text}&ldquo;
            </h2>
            <div className="flex">
              {/* <div className="w-[300px] h-[500px] bg-slate-500">.</div> */}
              <div className="flex flex-wrap justify-center gap-2">
                {searchResults.results &&
                  searchResults.results.map((m: any) => {
                    return (
                      <Link key={m.id} href={`movies/${m.id}`}>
                        <div className="overflow-hidden flex flex-col sm:flex-row w-4/5 mx-auto items-center sm:w-96 sm:h-[200px] bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                          <MyImage
                            id={m.id}
                            title={m.title}
                            poster_path={m.poster_path}
                          />
                          <div className="p-5 ">
                            <h5 className="mb-2 text-center sm:text-left text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                              {m.title}
                            </h5>
                            <p className="mb-3 text-sm  block font-normal text-gray-700 dark:text-gray-400">
                              {m.overview.length > 100
                                ? m.overview.slice(0, 100) + '...'
                                : m.overview}
                            </p>
                          </div>
                        </div>
                      </Link>
                    )
                  })}
              </div>
            </div>
            <MyPagination
              text={text}
              language={language}
              currentPage={Number(page)}
              totalPage={searchResults.total_pages}
            />
          </>
        ) : (
          <h2 className="text-2xl font-semibold text-center p-3 text-lime-100 bg-gray-900">
            No Search Results
          </h2>
        )}
      </Layout>
    </>
  )
}
export default Search
