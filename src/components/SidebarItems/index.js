import React from 'react'
import * as C from './style'

const SidebarItems = ({ Text, Icon, Page }) => {
  return (
    <C.Item>
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