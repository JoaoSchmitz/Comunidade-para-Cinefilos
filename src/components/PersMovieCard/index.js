import React from 'react'
import * as C from './style'
import { Link } from 'react-router-dom'

const PersMovieCard = props => {

  const imagePath = 'https://image.tmdb.org/t/p/w500/'

  return (
    <C.MovieContainer>
      <Link to={`/movie/${props.movie.id}`}>
        <C.MoviePoster src={ imagePath + props.movie.poster_path } alt={props.movie.title}/>
      </Link>
      <h2> {props.movie.title} </h2>
    </C.MovieContainer>
  )
}

export default PersMovieCard