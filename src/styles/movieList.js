import styled from "styled-components"

export const MovieListContainer = styled.div`
  text-align: center;
  margin: 0 15%;
  
`

export const ListContainer = styled.div`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 2rem;
  row-gap: 2rem;

`

export const NextPageButton = styled.button`
  margin-top: 4rem;
  width: 20%;
  padding-top: .8rem;
  padding-bottom: .8rem;

  font-size: 1.3rem;
  border-radius: 20px;
  background: var(--secondColor);
  color: inherit;
  transition: .3s;

  &:hover {
    cursor: pointer;
    color: var(--textColor2);
  }

`