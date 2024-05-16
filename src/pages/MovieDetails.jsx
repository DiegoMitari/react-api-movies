import './MovieDetails.css';
import { get } from '../data/httpClient';
import getMovieImg from '../utils/getMovieImg';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function MovieDetails() {

  //Get params from URL
  const { movieId } = useParams();

  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    get(`/movie/${movieId}`)
      .then((data) => {
        setMovie(data);
        setGenres(data.genres);
        console.log('movie: ', data);
        console.log('genres: ', data.genres);
      })
  }, [movieId]);

  const imgURL = getMovieImg(movie.poster_path, 400);

  return (
    <div>
      <header className='HeaderDetails'>
        <a>{movie.title} | </a>
        <a href='/' className='HomeBack'>Home</a>
      </header>
      <div className='mainContainer' style={{ background: `url(${imgURL}) center center / cover` }}>
        <div className='detailsContainer'>
          <img src={imgURL} alt={movie.title} className='movieImage' />
          <div className='movieDetails'>
            <p className='title'>{movie.title}</p>
            <p>Genres:
              {genres.map(genreItem => (
                <strong key={genreItem.id} className='genreLabels'>{genreItem.name}</strong>
              ))}
            </p>
            <p className='descriptionMovie'>Description: {movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}