import '../components/MovieCard.css';
import { Link } from "react-router-dom";

export function MovieCard({ movie }) {
  const imageURL = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
  //console.log('id_movie', movie.id)
  //console.log('url: ', imageURL)
  return (
    <li className='movieCard'>
      <Link to={'/movies/' + movie.id} style={{ textDecoration: 'none' }}>
        <img
          width={230}
          height={345}
          src={imageURL}
          alt={movie.title}
          className='movieImage'
        />
        <div>
          <h2 className='movieTitle'>{movie.title}</h2>
        </div>
      </Link>
    </li>
  )
}