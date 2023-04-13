import Jumbotron from "@/components/Jumbotron"
import MyFooter from "@/components/MyFooter"
import MyNavbar from "@/components/MyNavbar"

export default function Home({data}) {
  console.log(data)
 return (
  <div className="min-h-screen flex flex-col">
    <MyNavbar />
    <Jumbotron />
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