import { BsEyeSlash, BsEyeFill } from 'react-icons/bs'
import { RiHeartAddLine, RiHeartFill } from 'react-icons/ri'
import { MdPublish } from 'react-icons/md'

import styled from "styled-components";

export const MovieDetailsContainer = styled.div`
  position: relative;
  height: auto-fit;
  width: 80%;
  text-align: center;
  background: var(--secondColor);
  padding: 5%;
  border-radius: 10px;
  border: 2px solid var(--textColor2);
  margin-left: 10%;

`

export const MovieDetailPoster = styled.img`
  margin-bottom: .5rem;
  border-radius: 10px;
  border: 2px solid var(--secondColor);
  transition: border 0.3s ease-in-out;

  &.active {
    border: 2px solid var(--textColor2);
  } 

`

export const MovieDetailFavoriteIconBox = styled.div`
  position: absolute;
  top: 6.5rem;
  left: 24rem;
  color: gray;

`

export const MovieDetailFavoriteIcon = styled(RiHeartAddLine)`
  transition: .3s;

  &:hover {
    color: var(--textColor2);
    cursor: pointer;
  }

`
export const MovieDetailFavoriteIconMarked = styled(RiHeartFill)`
  transition: .3s;
  color: darkred;

  &:hover {
    color: var(--textColor2);
    cursor: pointer;
  }

`

export const MovieDetailWatchedIconBox = styled.div`
  position: absolute;
  top: 6.5rem;
  right: 24rem;
  color: gray;

`

export const MovieDetailWatchedIcon = styled(BsEyeSlash)`
  transition: .3s;

  &:hover {
    color: var(--textColor2);
    cursor: pointer;
  }

`
export const MovieDetailWatchedIconMarked = styled(BsEyeFill)`
  transition: .3s;
  color: darkred;

  &:hover {
    color: var(--textColor2);
    cursor: pointer;
  }

`

export const MovieDetailTitle = styled.h2`
  margin-left: 10%;
  width: 80%;
  padding-bottom: 1rem;
  font-size: 3rem;
  color: var(--textColor2);
  text-decoration: underline;

`

export const MovieTagline = styled.h3`
  margin-left: 5%;
  width: 90%;
  padding-bottom: 2.5rem;
  font-size: 1.8rem;
  font-style: italic;

`

export const MovieDetailVoteAverage = styled.p`
  margin-left: 40%;
  padding-bottom: 1.5rem;
  width: 20%;

  color: var(--textColor2);
  font-size: 1.8rem;

`

export const MoviePropertyBox = styled.div`
  color: var(--textColor2);
  font-size: 1.5rem;
  align-text: center;
  padding-bottom: 1.5rem;

`

export const MovieProperty = styled.div`
  color: var(--textColor);

`

export const SectionTitle = styled.h2`
  margin-left: 10%;
  width: 80%;
  padding-bottom: 3rem;
  font-size: 2.5rem;
  color: var(--textColor2);

`

export const ListContainer = styled.div`
  list-style: none;
  heigth: auto-fit;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 2rem;
  row-gap: 2rem;
  padding-bottom: 3rem;

`

export const ReviewsContainer = styled.div`
  height: auto-fit;
  width: 80%;
  margin-left: 10%;

`

export const ReviewForm = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: 2rem;

`

export const ReviewRatingInput = styled.input`
  background: var(--thirdColor);
  width: 15%;
  border: none;
  padding: .8rem 1.2rem;
  border-radius: 10px 0 0 10px;
  font-size: 1rem;
  color: var(--textColor);

  ::placeholder {
    color: rgba(63, 182, 202, 0.5);
  }

`

export const ReviewDescriptionInput = styled.input`
  background: var(--thirdColor);
  width: 61%;
  border-left: 2px solid var(--textColor);
  padding: .8rem 1.2rem;
  font-size: 1rem;
  color: var(--textColor);

  ::placeholder {
    color: rgba(63, 182, 202, 0.5);
  }

`

export const ReviewButton = styled.button`
  background: var(--thirdColor);
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

export const ReviewIcon = styled(MdPublish)`
`