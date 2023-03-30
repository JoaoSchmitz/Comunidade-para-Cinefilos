import React from 'react'
import useAuth from '../../hooks/useAuth'
import * as C from './style'
import profile from './avatar.svg'
import { Link } from 'react-router-dom'

const UserCard = () => {

  const { userInfo } = useAuth()

  return (
    <Link to="/profile">
      <C.User>
        <C.Imagem src={profile} />
        <C.Span>{userInfo.username}</C.Span>
      </C.User>
    </Link>

  )
}

export default UserCard