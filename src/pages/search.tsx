import Layout from "@/components/Layout";
import MyImage from "@/components/MyImage";
import Link from "next/link";

export async function getServerSideProps(context: any) {
  const {
    query: { text },
  } = context;
  const fetchSearchPs = await fetch(
    `${process.env.API_PATH}search/movie?api_key=${process.env.API_KEY}&language=en-US&page=1&query=${text}`
  );
  const searchResults = await fetchSearchPs.json();
  return {
    props: {
      searchResults,
      text,
    },
  };
}

const Search: React.FC<any> = ({ searchResults, text }) => {
  console.log(searchResults.results.length);
  return (
    <Layout>
      <h2 className="text-2xl font-semibold text-center p-3 text-lime-100 bg-gray-900">Search Results for "{text}"</h2>
      <div className="flex">
        {/* <div className="w-[300px] h-[500px] bg-slate-500">.</div> */}
        <div className="flex flex-wrap justify-center gap-2">
          {searchResults.results &&
            searchResults.results.map((m: any) => {
              if (m.poster_path) {
                return (
                  <Link key={m.id} href={`movie/${m.id}`}>
                    <div className="overflow-hidden flex w-96 h-[200px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                      <MyImage
                        id={m.id}
                        title={m.title}
                        poster_path={m.poster_path}
                      />
                      <div className="p-5 ">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {m.title}
                        </h5>
                        <p className="mb-3 text-sm  block font-normal text-gray-700 dark:text-gray-400">
                          {m.overview.length > 100
                            ? m.overview.slice(0, 100) + "..."
                            : m.overview}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              }
            })}
        </div>
      </div>
    </Layout>
  );
};
export default Search;
