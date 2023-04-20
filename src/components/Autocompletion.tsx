import Turnstone from 'turnstone'
import recentSearchPlugin from 'turnstone-recent-searches'
import Router from 'next/router'
import { useRef } from 'react'

const listbox = {
  data: async (query: string) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_PATH}search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${query}`,
    )
    const data = await res.json()
    return data.results
  },
  displayField: 'title',
  searchType: 'startsWith',
  name: 'movies',
  id: 'movies',
}
const styles = {
  input:
    'block w-full p-4 pl-10 text-sm text-gray-900 border bg-gray-50 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-950 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
  listbox:
    'bg-slate-300 w-full text-slate-900 dark:text-slate-50 rounded-md dark:bg-slate-900',
  highlightedItem: 'bg-slate-50 dark:bg-slate-950',
  query: 'text-oldsilver-800 placeholder:text-slate-600',
  typeahead: 'text-slate-500',
  clearButton:
    'absolute inset-y-0 text-lg right-5 z-10 w-10 inline-flex items-center justify-center bg-netural-700 hover:text-red-500',
  noItems: 'cursor-default text-center my-20',
  match: 'font-semibold',
  groupHeading: 'px-5 py-3 text-pink-500',
}
const Item = ({ item }: any) => {
  return (
    <div className="flex items-center cursor-pointer px-3 py-2">
      <p>{item.title}</p>
    </div>
  )
}
export default function Autocompletion() {
  const searchRef = useRef<string | null>(null)
  return (
    <div className="relative w-full mx-auto">
      <div className="z-10 absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-gray-500 dark:text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <Turnstone
        onChange={(query: string) => {
          searchRef.current = query
        }}
        id="autocompletion"
        name="autocompletion"
        typeahead={true}
        clearButton={true}
        clearButtonAriaLabel="Clear contents"
        debounceWait={250}
        defaultListboxIsImmutable={true}
        maxItems={6}
        noItemsMessage="No search results found"
        placeholder={'Search any movies...'}
        errorMessage={'Something is wrong...'}
        listbox={listbox}
        styles={styles}
        Item={Item}
        plugins={[recentSearchPlugin]}
        onSelect={(selectedItem: any) => {
          if (selectedItem) {
            Router.push(`/movies/${selectedItem.id}`)
          }
        }}
      />
      {/* <button
        type="submit"
        onClick={() =>
          Router.push({
            pathname: '/search/',
            query: {
              text: searchRef?.current,
              page: '1',
              language: 'en-US',
            },
          })
        }
        className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Search
      </button> */}
    </div>
  )
}
