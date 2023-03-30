import { Link } from 'react-router-dom'
import { IconContext } from "react-icons"
import { FaStar } from 'react-icons/fa'
import { MovieContainer, MoviePoster, FavoriteIcon, WatchedIcon, MovieDetailsButton, MovieVoteAverage, WatchedIconBox, FavoriteIconBox, FavoriteIconMarked, WatchedIconMarked } from './style.js'
import { useState } from 'react'
import useAuth from '../../hooks/useAuth.js'
import { APIKey } from '../../config/key.js'


const MovieCardLogged = props => {

  const { userInfo } = useAuth()
  const { isLogged } = useAuth()
  const imagePath = 'https://image.tmdb.org/t/p/w500/'
  const [fav, setFav] = useState(false)
  const [watched, setWatched] = useState(false)

  const handleFavorite = () => {
    if (isLogged) {
      setFav(!fav)
      const bodyConfig = {
        media_type: "movie",
        media_id: props.movie.id,
        favorte: !fav
      }
      console.log(bodyConfig)
      const init = {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(bodyConfig)
      }
      console.log(init)
      fetch(`https://api.themoviedb.org/3/account/${userInfo.id}/favorite?api_key=${APIKey}&session_id=${localStorage.getItem("api_id")}`, init)
      .then(request => request.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
    } else {
      alert("Você precisa estar logado para adicionar um filme aos favoritos!")
    }
    
  }

  const handleWatched = () => {
    setWatched(!watched)
  }

  return (
    <MovieContainer className={watched? 'active' : ''}>

      <MoviePoster className={fav ? 'active' : ''} src={ imagePath + props.movie.poster_path } alt={props.movie.title}/>

        <FavoriteIconBox onClick={handleFavorite}> {/* Change this */}
          {
            fav ?
            <FavoriteIconMarked size="1.8rem"/> :
            <FavoriteIcon size="1.8rem"/>
          }
        </FavoriteIconBox>

        <WatchedIconBox onClick={handleWatched}> {/* Change this */}
        {
          watched ?
          <WatchedIconMarked size="1.8rem"/> :
          <WatchedIcon size="1.8rem"/>
        }
        </WatchedIconBox>

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

export default MovieCardLogged