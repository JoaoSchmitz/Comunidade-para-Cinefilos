import React from 'react'
import ListComponent from '../../components/PersMovieList'
import useAuth from '../../hooks/useAuth'
import * as C from './style'
import Unlogged from '../../components/Unlogged'

const ViewedList = () => {
  const { isLogged } = useAuth()
  return (
    <C.ListContainer>
        <C.ListTitle>
            Filmes assistidos
        </C.ListTitle>
        {
          (isLogged ? <ListComponent type="watchlist"/> : <Unlogged />)
        }
    </C.ListContainer>
  )
}

export default ViewedList