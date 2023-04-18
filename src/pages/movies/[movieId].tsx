import { GetServerSideProps } from "next";
import Layout from "@/components/Layout";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const fetchMovie = await fetch(`${process.env.API_PATH}/movie/${params?.movieId}?api_key=${process.env.API_KEY}&language=en-US`)
  const searchResults = await fetchMovie.json()
  return {
    props: {
      searchResults
    },
  };
};

const Movie: React.FC<any> = ({ searchResults }) => {
  return (
    <Layout>
      <h1>{JSON.stringify(searchResults)}</h1>
    </Layout>
  );
};

export default Movie;
