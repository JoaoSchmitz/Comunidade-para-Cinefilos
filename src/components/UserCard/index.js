import React from 'react'
import useAuth from '../../hooks/useAuth'
import * as C from './style'
import profile from './avatar.svg'

const UserCard = () => {

  const { userInfo } = useAuth()

  return (
    <C.User>
        <C.Imagem src={profile} />
        <C.Span>{userInfo.username}</C.Span>
    </C.User>
  )
}

export default UserCard