import React, { useEffect } from 'react'
import MovieList from '../../components/MovieList'
import useAuth from '../../hooks/useAuth'

import { PageContainer } from '../../styles/pagesGlobal'

const Home = () => {
  const { createToken } = useAuth()

  useEffect(() => {
    createToken()
  })
  return (
    <div>
      <PageContainer>
        <MovieList filter={'popular'}/>
      </PageContainer>
    </div>
  )
}

export default Home