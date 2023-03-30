import React from 'react'
import useAuth from '../../hooks/useAuth'
import * as C from './style'
import profile from '../../components/UserCard/avatar.svg'


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

      <C.ListTitle>Filmes favoritos</C.ListTitle>
      <C.ListTitle>Filmes assistidos</C.ListTitle>
    </C.Main>
  )
}

export default AccountProfile