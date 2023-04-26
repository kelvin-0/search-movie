import BackgroundImage from './BackgroundImage'
import Search from './Search'

export default function Jumbotron() {
  return (
    <BackgroundImage isRemote={false} id="decoration" path="/decoration.jpg">
      <div className="px-12 mx-auto max-w-screen-xl text-center py-14 md:py-24">
        <h1 className="mb-4 text-2xl sm:text-4xl font-extrabold tracking-tight leading-none text-slate-950 md:text-5xl lg:text-6xl dark:text-slate-50">
          Find Your Next Favorite Movie with Just a Few Clicks!
        </h1>
        <p className="mb-8 text-sm sm:text-lg font-normal text-gray-900 dark:text-gray-400 lg:text-xl sm:px-16 lg:px-48">
          Looking for a new movie to watch? Our website{`'`}s search tool allows
          you to quickly and easily search for movies based on your preferences.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Search id={`search bar`} />
        </div>
      </div>
    </BackgroundImage>
  )
}
