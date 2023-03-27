import { Link } from 'react-router-dom'

import { IconContext } from "react-icons"
import { FaStar } from 'react-icons/fa'

import { MovieContainer, MoviePoster, MovieDetailsButton } from '../../styles/movieCard'



const MovieCardUnlogged = props => {

  const imagePath = 'https://image.tmdb.org/t/p/w500/'

  return (
    <MovieContainer>

      <MoviePoster src={ imagePath + props.movie.poster_path } alt={props.movie.title}/>

      <h2> {props.movie.title} </h2>

    {/* Customizes the icon */}
      <IconContext.Provider value={{ color: "rgba(203, 162, 56, 1)", size: "" }}>
        <p>
          <FaStar/> {props.movie.vote_average}
        </p>
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