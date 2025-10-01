export type MovieType = {
  name: string,
  description: string,
  year: string,
  picture: Blob["type"],
  id: number | string,
  genre: string,
  movieUrl: string,
  rating: string,
  runtime: string,
  overview: string
}