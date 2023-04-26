export type Movie = {
  backdrop_path: string
  id: string
  poster_path: string
  title: string
}

export type Movies = {
  page: number
  results: Movie[]
  total_results: number
  total_pages: number
}
