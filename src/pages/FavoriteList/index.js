import React from 'react'
import ListComponent from '../../components/PersMovieList'
import useAuth from '../../hooks/useAuth'
import * as C from './style'
import Unlogged from '../../components/Unlogged'

const FavoriteList = () => {
  const { isLogged } = useAuth()
  return (
    <C.ListContainer>
        <C.ListTitle>
            Filmes favoritos
        </C.ListTitle>
        {
          (isLogged ? <ListComponent type="favorite"/> : <Unlogged />)
        }
    </C.ListContainer>
  )
}

export default FavoriteList