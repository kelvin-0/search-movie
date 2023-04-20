import { ReactNode } from 'react'
import MyNavbar from './MyNavbar'
import MyFooter from './MyFooter'

type LayoutProps = {
  children: ReactNode
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 flex flex-col min-h-screen max-w-[1350px] mx-auto px-2 py-2.5 sm:px-4 ">
      <MyNavbar />
      <main className="pt-4 pb-8 flex flex-col">{children}</main>
      <MyFooter />
    </div>
  )
}

export default Layout
