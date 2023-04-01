import styled from "styled-components";

export const SectionTitle = styled.h2`
  margin-left: 10%;
  width: 80%;
  padding-top: 3.5rem;
  font-size: 1.8rem;
  color: var(--textColor2);

`

export const TextContainer = styled.div`
  padding-top: 3.5rem;
  color: var(--textColor);
  text-align: center;
  font-size: 1.5rem;

  span {
    text-decoration: underline;
  }

`

export const SectionButton = styled.button`
  margin-top: 4rem;
  margin-bottom: 2.5rem;
  width: 30%;
  padding-top: .8rem;
  padding-bottom: .8rem;

  font-size: 1.3rem;
  border-radius: 20px;
  border: 2px solid var(--textColor);
  background: var(--secondColor);
  color: var(--textColor);
  transition: .3s;

  &:hover {
    cursor: pointer;
    background: var(--thirdColor);
    border: 2px solid var(--textColor2);
  }

  span {
    color: var(--textColor2);
  }

`