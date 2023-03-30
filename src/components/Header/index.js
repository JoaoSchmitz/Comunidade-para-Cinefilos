import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HeaderContainer, ProjectTitle, SearchButton, SearchForm, SearchIcon, SearchInput, SidebarIcon, SidebarIconBox } from './style.js'
import Sidebar from '../Sidebar'

//import { FaBars } from 'react-icons/fa'

const Header = () => {
  const [search, setSearch] = useState('')
  const [sidebar, setSidebar] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()

    if (!search) return

    navigate(`/search?q=${search}`)
    setSearch('')
  }
  
  const handleSidebar = () => {
    setSidebar(!sidebar)
  }

  return (
    <HeaderContainer>
      <SidebarIconBox onClick={handleSidebar}>
        <SidebarIcon size='1.8rem'/>
      </SidebarIconBox>
      {sidebar && <Sidebar active={setSidebar} />}

      <ProjectTitle>
        <Link to='/'> Project Title </Link> 
      </ProjectTitle>

      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type='text'
          placeholder='Procure por um filme:'
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <SearchButton type='submit'>
          <SearchIcon size='1.8rem'/>
        </SearchButton>
      </SearchForm>
    </HeaderContainer>
  )
}

export default Header