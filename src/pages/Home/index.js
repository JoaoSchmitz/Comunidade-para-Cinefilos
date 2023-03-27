import React from 'react'
import Header from '../../components/Header'
import MovieList from '../../components/MovieList'

import { HomeContainer } from '../../styles/home'

const Home = () => {
    //Testando o Routes

  return (
    <div>
      <Header />
      <HomeContainer>
        <MovieList filter={'popular'} isLogged={true}/>
      </HomeContainer>
    </div>
  )
}

export default Home