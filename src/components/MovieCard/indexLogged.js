import { Link } from 'react-router-dom'

import { IconContext } from "react-icons"
import { FaStar } from 'react-icons/fa'
import { BsEyeSlash, BsEyeFill } from 'react-icons/bs'
import { RiHeartAddLine, RiHeartFill } from 'react-icons/ri'

import { MovieContainer, MoviePoster, FavoriteIcon, WatchedIcon, MovieDetailsButton } from '../../styles/movieCard'



const MovieCardLogged = props => {

  const imagePath = 'https://image.tmdb.org/t/p/w500/'

  return (
    <MovieContainer>

      <MoviePoster src={ imagePath + props.movie.poster_path } alt={props.movie.title}/>

    {/* Customizes the icon */}
      <IconContext.Provider value={{ color: "gray", size: "" }}>
        <FavoriteIcon onClick={""}> {/* Change this */}

        { props.isFavorite ? <RiHeartFill/> : <RiHeartAddLine/>}

        </FavoriteIcon>
      </IconContext.Provider>

    {/* Customizes the icon */}
      <IconContext.Provider value={{ color: "gray", size: "" }}>
        <WatchedIcon onClick={""}> {/* Change this */}

        { props.isWatched ? <BsEyeSlash/> : <BsEyeFill/> }

        </WatchedIcon>
      </IconContext.Provider>

      <h2> {props.movie.title} </h2>

    {/* Customizes the icon */}
      <IconContext.Provider value={{ color: "rgba(203, 162, 56, 1)", size: "" }}>
        <p>
          <FaStar/> {props.movie.vote_average}
        </p>
      </IconContext.Provider>

      <MovieDetailsButton>
        <Link to={`/props.movie/${props.movie.id}`}>
          Detalhes
        </Link>
      </MovieDetailsButton>

    </MovieContainer>
  )
}

export default MovieCardLogged