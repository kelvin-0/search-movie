import { GetServerSideProps } from "next";
import Layout from "@/components/Layout";
import MyImage from "@/components/MyImage";
import BackgroundImage from "@/components/BackgroundImage";
import Label from "@/components/Label";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const fetchMovie = await fetch(
    `${process.env.API_PATH}/movie/${params?.movieId}?api_key=${process.env.API_KEY}&language=en-US`
  );
  const searchResults = await fetchMovie.json();
  return {
    props: {
      searchResults,
    },
  };
};

const Movie: React.FC<any> = ({ searchResults }) => {
  const genres = searchResults.genres.map(
    (genre: { id: Number; name: String }) => (
      <Label key={String(genre.id)} name={genre.name} />
    )
  )
  const languages = searchResults.spoken_languages.map(
    (language: {name: String, english_name: String }) => (
      <Label key={String(language.name)} name={language.english_name} />
    )
  );
  return (
    <Layout>
        <BackgroundImage
          id={searchResults.id}
          title={searchResults.title}
          backdrop_path={searchResults.backdrop_path}
        >
          <div className="flex">
            <MyImage
              isLarge
              id={searchResults.id}
              title={searchResults.title}
              poster_path={searchResults.poster_path}
            />
            <div className="text-lime-100">
              <h1>Title: {searchResults.original_title}</h1>
              <p>Tagline: {searchResults.tagline}</p>
              <p>Overview: {searchResults.overview}</p>
              <p>Popularity: {searchResults.popularity}</p>
              <p>Runtime: {searchResults.runtime}</p>
              <p>Revenue: {searchResults.revenue}</p>
              <p>Status: {searchResults.status}</p>
              <p>Release date: {searchResults.release_date}</p>
              <p>
                Genres:
                {genres}
              </p>
              <p>
                Languages:
                {languages}
              </p>
            </div>
          </div>
        </BackgroundImage>
    </Layout>
  );
};

export default Movie;
