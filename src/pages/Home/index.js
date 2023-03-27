import React from 'react'
import MovieList from '../../components/MovieList'

const Home = () => {
    //Testando o Routes

  return (
    <div>
      Home
      <MovieList filter={'popular'} isLogged={true}/>
    </div>
  )
}

export default Home