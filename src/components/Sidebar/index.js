import React from 'react'
import * as C from './style'
import useAuth from '../../hooks/useAuth'
import UserCard from '../UserCard'
import Button from '../Button'

const Sidebar = () => {
  const { isLogged } = useAuth()
  const { requestSession } = useAuth()

  return (
    <C.Sidebar>
      <C.Item> 
        {
          (isLogged?<UserCard />:<Button onClick={requestSession} text={'Entrar'}/>)
        }
      </C.Item>
    </C.Sidebar>
  )
}

export default Sidebar