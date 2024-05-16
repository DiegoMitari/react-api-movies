import imgNotFound from '../assets/movie_not_found.png';
export default function getMovieImg(path, width) {
  return path ? 
    `https://image.tmdb.org/t/p/w${width}${path}` : imgNotFound;
}