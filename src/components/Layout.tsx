import { ReactNode } from "react"
import MyNavbar from "./MyNavbar"
import MyFooter from "./MyFooter"

type LayoutProps = {
    children: ReactNode
}
const Layout: React.FC<LayoutProps> = ({children})=>{
    return (
        <div className="min-h-screen flex flex-col max-w-[1350px] mx-auto px-2 py-2.5 sm:px-4">
            <MyNavbar/>
            {children}
            <MyFooter />
        </div>
    )
}

export default Layout