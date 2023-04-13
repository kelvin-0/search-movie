import Jumbotron from "@/components/Jumbotron"
import MyFooter from "@/components/MyFooter"
import MyNavbar from "@/components/MyNavbar"

export default function Home({data}) {
  console.log(data)
 return (
  <div className="min-h-screen flex flex-col max-w-[1350px] mx-auto">
    <MyNavbar />
    <Jumbotron />
    <div className="flex gap-2 p-4 flex-wrap">
    {data?.results && (
      data.results.map(x => {
        return <img key={x.id} width="200"  src={`https://image.tmdb.org/t/p/original/${x.poster_path}`}/>
      })
    )}
    </div>
    <MyFooter />
  </div>
 )
}

export async function getStaticProps(){
  const res = await fetch(`${process.env.API_PATH}movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=1`)
  const data = await res.json()

  return {
    props: {
      data
    }
  }
}