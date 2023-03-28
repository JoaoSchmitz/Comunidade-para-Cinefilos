import React, { useState, useEffect } from 'react'
import MovieList from '../../components/MovieList'
import { APIKey } from '../../config/key'
import useAuth from '../../hooks/useAuth'

import { HomeContainer } from '../../styles/home'

const Home = () => {
  const { createToken } = useAuth()

  useEffect(() => {
    createToken()
  }, [])
  return (
    <div>
      <HomeContainer>
        <MovieList filter={'popular'} isLogged={true}/>
      </HomeContainer>
    </div>
  )
}

export default Home