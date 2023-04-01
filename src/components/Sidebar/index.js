import React from 'react'
import * as C from './style'
import useAuth from '../../hooks/useAuth'
import UserCard from '../UserCard'
import Button from '../Button'
import { FaTimes, FaHome } from 'react-icons/fa'
import { RiCompassDiscoverFill } from 'react-icons/ri'
import { MdOutlineFavorite } from 'react-icons/md'
import { AiFillEye } from 'react-icons/ai'
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
          <SidebarItems Text='Discover' Icon={RiCompassDiscoverFill} Page="discover" closeSidebar={closeSidebar}/>
          <SidebarItems Text='Favoritos' Icon={MdOutlineFavorite} Page="favorites" closeSidebar={closeSidebar}/>
          <SidebarItems Text="Assistidos" Icon={AiFillEye} Page="watchlist" closeSidebar={closeSidebar}/>
        </div>
        { isLogged && <Button onClick={logOut} text={'Sair'}/> }
      </C.Container>
    </C.SideContainer>
  )
}

export default Sidebar