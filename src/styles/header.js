import styled from "styled-components"
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import { BiSearchAlt2 } from 'react-icons/bi'

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.5rem 3rem;
  text-align: center;
  font-size: 1.5rem;

  background: var(--linearColor);
  color: var(--textColor);

`

export const SidebarIconBox = styled.button`
  color: var(--textColor);
  background: transparent;
  border: none;

`

export const SidebarIcon = styled(AiOutlineMenuUnfold)`
  transition: .3s;

  &:hover {
    color: var(--textColor2);
    cursor: pointer;
  }

`

export const ProjectTitle = styled.div`
  font-size: 2rem;
  transition: .3s;

  &:hover {
    transform: translateX(-8px);
  }

  a {
    color: var(--textColor2);
    text-decoration: ;
  }

`

export const SearchForm = styled.form`
  display: flex;

`

export const SearchInput = styled.input`
  background: var(--secondColor);
  border: none;
  padding: .8rem 1.2rem;
  border-radius: 10px 0 0 10px;
  font-size: 1rem;
  color: var(--textColor);

  ::placeholder {
    color: rgba(63, 182, 202, 0.5);
  }

`

export const SearchButton = styled.button`
  background: var(--secondColor);
  border: 2px solid var(--textColor);
  border-radius: 0 10px 10px 0;
  width: 2.5rem;
  transition: .3s;
  color: var(--textColor);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    border: 2px solid var(--textColor2);
    color: var(--textColor2);
  }

`

export const SearchIcon = styled(BiSearchAlt2)`
  color: inherit;

`