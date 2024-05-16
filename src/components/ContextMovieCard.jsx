import { useState, useEffect } from "react";
import { MovieCard } from "./MovieCard";
import { get } from '../data/httpClient';
import '../components/ContextMovieCard.css'
export function ContextMovieCard() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    get("/discover/movie?include_adult=true&include_video=true")
      .then(
        (data) => {
          setMovies(data.results);
          //console.log('AllData', data.results);
        }
      )
  }, []);

  return (
    <ul className="container">
      {
        movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))
      }
    </ul>
  )

}