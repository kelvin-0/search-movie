import { useState } from 'react'
import Link from 'next/link'
import ThemeSwitch from './ThemeSwitch'
import Search from './Search'

export default function MyNavbar() {
  const [quickSearchInput, setQuickSearchInput] = useState<string>('')
  return (
    <nav className="max-w-[1350px] sticky left-0 z-20 w-full top-0 bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-col sm:flex-row flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center dark:text-white gap-3">
          {/* <Image
            src={"/Logo.svg"}
            className="mr-3 h-6 sm:h-9 "
            alt="Movie Finder Logo"
            width="64"
            height="64"
          /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-10 dark:text-white"
          >
            <path
              strokeLinecap="round"
              d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
            />
          </svg>

          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Movie Finder
          </span>
        </Link>
        <div className="flex md:order-2 gap-4 mt-4 sm:mt-0">
          <ThemeSwitch />
          <Search />
        </div>
      </div>
    </nav>
  )
}
