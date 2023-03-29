import { Link } from 'react-router-dom'

import { IconContext } from "react-icons"
import { FaStar } from 'react-icons/fa'

import { MovieContainer, MoviePoster, MovieDetailsButton, MovieVoteAverage } from './style.js'



const MovieCardUnlogged = props => {

  const imagePath = 'https://image.tmdb.org/t/p/w500/'

  return (
    <MovieContainer>

      <MoviePoster src={ imagePath + props.movie.poster_path } alt={props.movie.title}/>

      <h2> {props.movie.title} </h2>

    {/* Customizes the icon */}
      <IconContext.Provider value={{ color: "var(--textColor2)", size: "1.1rem" }}>
        <MovieVoteAverage>
          <FaStar/> {props.movie.vote_average.toFixed(1)}
        </MovieVoteAverage>
      </IconContext.Provider>

      <MovieDetailsButton>
        <Link to={`/movie/${props.movie.id}`}>
          Detalhes
        </Link>
      </MovieDetailsButton>

    </MovieContainer>
  )
}

export default MovieCardUnlogged