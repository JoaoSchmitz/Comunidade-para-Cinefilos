import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { HeaderContainer, ProjectTitle, SearchButton, SearchForm, SearchIcon, SearchInput, SidebarIcon, SidebarIconBox } from '../../styles/header'

const Header = () => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()

    if (!search) return

    navigate(`/search?q=${search}`)
    setSearch('')
  }
  
  return (
    <HeaderContainer>
      <SidebarIconBox>
        <SidebarIcon size='1.8rem'/>
      </SidebarIconBox>

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