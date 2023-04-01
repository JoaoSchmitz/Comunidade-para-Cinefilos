import React from 'react'
import * as C from './style'
import useAuth from '../../hooks/useAuth'
import UserCard from '../UserCard'
import Button from '../Button'
import { FaTimes, FaHome } from 'react-icons/fa'
import SidebarItems from '../SidebarItems'

const Sidebar = ({ active }) => {
  const { isLogged } = useAuth()
  const { requestSession } = useAuth()
  const { logOut } = useAuth()

  const closeSidebar = () => {
    active(false)
  }
  return (
    <C.SideContainer style={(active? {left: '0'}:{left: '-100%'})}>
      <FaTimes onClick={closeSidebar} /> 
      <C.Container>
        <div>
          <C.Item> 
            {
              (isLogged?<UserCard />:<Button onClick={requestSession} text={'Entrar'}/>)
            }
          </C.Item>
          <SidebarItems Text='Home' Icon={FaHome} Page="" closeSidebar={closeSidebar}/>
          <SidebarItems Text='Discover' Icon={FaHome} Page="discover" closeSidebar={closeSidebar}/>
          <SidebarItems Text='Favoritos' Icon={FaHome} Page="favorites" closeSidebar={closeSidebar}/>
          <SidebarItems Text="Assistidos" Icon={FaHome} Page="watchlist" closeSidebar={closeSidebar}/>
        </div>
        { isLogged && <Button onClick={logOut} text={'Sair'}/> }
      </C.Container>
    </C.SideContainer>
  )
}

export default Sidebar