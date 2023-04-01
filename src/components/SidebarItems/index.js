import React from 'react'
import * as C from './style'

const SidebarItems = ({ Text, Icon, Page, closeSidebar }) => {
  return (
    <C.Item onClick={closeSidebar}>
      <C.StyledLink to={`/${Page}`}>
        <Icon />
        <C.Text>
            {Text}
        </C.Text>
      </C.StyledLink>
    </C.Item>
  )
}

export default SidebarItems