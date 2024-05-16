import { ContextMovieCard } from '../components/ContextMovieCard';

export function LandingPage() {
  return (
    <div>
      <header>
        <h1 className='title'>Movies</h1>
      </header>
      <ContextMovieCard />
    </div>
  )
}