import React, { useState, useEffect } from 'react'
import { APIKey } from '../../config/key'
import useAuth from '../../hooks/useAuth'
import PersMovieCard from '../PersMovieCard'
import * as C from './style'

const ListComponent = ({ type }) => {
  const [movies, setMovies] = useState()
  const { userInfo } = useAuth()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/account/${userInfo.id}/${type}/movies?api_key=${APIKey}&session_id=${localStorage.getItem("api")}&language=pt-BR&sort_by=created_at.asc&page=1`)
    .then(request => request.json())
    .then(data => {setMovies(data.results); console.log(movies)})
    .catch(err => console.log(err))
  }, []);

  return (
    <C.MovieListContainer>
      {
      (movies ? movies.map(movie => <PersMovieCard key={movie.id} movie={movie}/>) : "Não tem nada aqui")
      }
    </C.MovieListContainer>
  )
}

export default ListComponent