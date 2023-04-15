import Jumbotron from "@/components/Jumbotron"
import MovieList from "@/components/MovieList"
import MyFooter from "@/components/MyFooter"
import MyNavbar from "@/components/MyNavbar"

const categories = ["upcoming", "top_rated", "popular"]
const fetchCategories = categories.map(category => fetch(`${process.env.API_PATH}movie/${category}?api_key=${process.env.API_KEY}&language=en-US&page=1`))

export default function Home({upcoming, topRated, popular}: any) {
 return (
  <div className="min-h-screen flex flex-col max-w-[1350px] mx-auto">
    <MyNavbar />
    <Jumbotron />
    <div className="flex gap-2 p-4 flex-wrap">
    {upcoming?.results && (
      <MovieList movies={upcoming.results} category={"Upcoming"}/>
      )
    }
    {topRated?.results && (
      <MovieList movies={topRated.results} category={"Top Rated"}/>
      )
    }
   {popular?.results && (
      <MovieList movies={popular.results} category={"Popular"}/>
      )
    }
    </div>
    <MyFooter />
  </div>
 )
}

export async function getStaticProps(){
  const [upcomingRes, topRatedRes, popularRes] = await Promise.all(fetchCategories)
  const [upcoming, topRated, popular] = await Promise.all([
    upcomingRes.json(),
    topRatedRes.json(),
    popularRes.json()
  ])

  return {
    props: {
      upcoming,
      topRated,
      popular
    }
  }
}