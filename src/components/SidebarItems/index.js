import React from 'react'
import * as C from './style'

const SidebarItems = ({ Text, Icon }) => {
  return (
    <C.Item>
        <Icon />
        <C.Text>
            {Text}
        </C.Text>
    </C.Item>
  )
}

export default SidebarItems