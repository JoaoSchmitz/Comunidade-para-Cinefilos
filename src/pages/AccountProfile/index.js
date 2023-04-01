import React from 'react'
import useAuth from '../../hooks/useAuth'
import * as C from './style'
import profile from '../../components/UserCard/avatar.svg'
import ListComponent from '../../components/PersMovieList'

const AccountProfile = () => {

  const { userInfo } = useAuth() 

  return (
    <C.Main>
      <C.UserInformation>
        <C.UserIcon src={profile}/>
        <C.Userdata>
          <C.Username>
            {userInfo.username}
          </C.Username>
          <C.Discrete>
            id: {userInfo.id}
          </C.Discrete>
        </C.Userdata>
        
      </C.UserInformation>

      <C.Section>
        <C.ListTitle>Filmes favoritos</C.ListTitle>
        <ListComponent type="favorite"/>
      </C.Section>
      <C.Section>
        <C.ListTitle>Filmes assistidos</C.ListTitle>
        <ListComponent type="watchlist"/>
      </C.Section>
    </C.Main>
  )
}

export default AccountProfile