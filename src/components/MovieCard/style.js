import { BsEyeSlash, BsEyeFill } from 'react-icons/bs'
import { RiHeartAddLine, RiHeartFill } from 'react-icons/ri'

import styled from "styled-components"

export const MovieContainer = styled.div`
  position: relative;
  height: auto-fit;
  width: auto;
  text-align: center;
  background: var(--secondColor);
  padding: 5%;
  border-radius: 10px;
  border: 2px solid var(--secondColor);
  transition: border 0.3s ease-in-out;

  &.active {
    border: 2px solid var(--textColor2);
  } 
  
  h2 {
    margin-left: 5%;
    width: 90%;
    padding-bottom: 55%;
  }

  &.Recommended {
    background: var(--thirdColor);
  }

`

export const MoviePoster = styled.img`
height: auto;
width: 95%;
margin-bottom: .5rem;
border-radius: 10px;
border: 2px solid var(--secondColor);
transition: border 0.3s ease-in-out;

&.active {
  border: 2px solid var(--textColor2);
} 

`

export const MovieVoteAverage = styled.p`
  position: absolute;
  top: 81%;
  left: 37%;

  width: 26%;
  color: var(--textColor2);
  font-size: 1.2rem;

`

export const FavoriteIconBox = styled.div`
  position: absolute;
  top: 3.5%;
  left: 10%;
  color: gray;

`

export const FavoriteIcon = styled(RiHeartAddLine)`
  transition: .3s;

  &:hover {
    color: var(--textColor2);
    cursor: pointer;
  }

`
export const FavoriteIconMarked = styled(RiHeartFill)`
  transition: .3s;
  color: darkred;

  &:hover {
    color: var(--textColor2);
    cursor: pointer;
  }

`

export const WatchedIconBox = styled.div`
  position: absolute;
  top: 3.5%;
  right: 10%;
  color: gray;

`

export const WatchedIcon = styled(BsEyeSlash)`
  transition: .3s;

  &:hover {
    color: var(--textColor2);
    cursor: pointer;
  }

`
export const WatchedIconMarked = styled(BsEyeFill)`
  transition: .3s;
  color: darkred;

  &:hover {
    color: var(--textColor2);
    cursor: pointer;
  }

`

export const MovieDetailsButton = styled.div`
  position: absolute;
  top: 90%;
  left: 25%;

  background: var(--linearColor);
  padding-top: 5%;
  padding-bottom: 5%;
  width: 50%;
  border-radius: 20px;

  a {
    color: inherit;
    transition: .3s;
  }

  a:hover {
    color: var(--textColor2);
  }

`