import Layout from "@/components/Layout"
import { useRouter } from "next/router"

const Search: React.FC = ()=>{
    const router = useRouter()
    console.log(router)
    return (
        <Layout>
            <h1>Search {router.query.text}</h1>
        </Layout>
    )
}
export default Search