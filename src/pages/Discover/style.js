import styled from "styled-components";

export const FilterContainer = styled.div`
  width: 45rem;
  padding-top: 2rem;
  margin-left: 25.5rem;
  display: flex;
  justify-content: space-between;

`

export const FilterButton = styled.button`
  color: rgba(63, 182, 202, 0.5);
  font-size: 1.3rem;
  background: var(--secondColor);
  border: 2px solid rgba(63, 182, 202, 0.5);
  border-radius: 10px;
  width: 25%;
  padding: 10px;
  transition: .4s;

  &:hover {
    border: 2px solid var(--textColor2);
    cursor: pointer;
  }

  &.selected {
    border: 2px solid var(--textColor2);
    color: var(--textColor2);
    background: var(--thirdColor);
  }
  

`

export const DiscoverText = styled.div`
  margin-left: 15%;
  width: 70%;
  font-size: 1.4rem;
  color: var(--textColor);

`