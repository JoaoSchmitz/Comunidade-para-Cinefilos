import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { APIKey } from "../../config/key"

import MovieCardLogged from "../../components/MovieCard/indexLogged"
import MovieCardUnlogged from "../../components/MovieCard/indexUnlogged"

import useAuth from '../../hooks/useAuth'

import { PageContainer, HorizontalLine } from "../../styles/pagesGlobal"
import { MovieListContainer, ListContainer, NextPageButton } from '../../components/MovieList/style'
import { QueryText, SearchH2 } from "./style"

const MovieSearch = () => {

  const { isLogged } = useAuth()
  const [searchParams] = useSearchParams()
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)

  const query = searchParams.get("q")

  // Raises the page number for the fetch
  const handlePage = () => {
    setPage(Number(page)+1)
    
    window.scrollTo({
      top: 0
    })
  }

  useEffect(() => {
    setMovies([])

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&language=en-US&page=${page}&query=${query}`)
      .then(response => response.json())
      .then(data => setMovies(data.results))

  }, [page, query])


  return (
    <>
      <PageContainer>
        <SearchH2>
          Resultados da pesquisa por:
          <QueryText>
            {query}
          </QueryText>
        </SearchH2>
        <HorizontalLine />
        <MovieListContainer>
          <ListContainer>
            {
              isLogged ?
                movies.map(movie => 
                  <MovieCardLogged key={movie.id} movie={movie}/>
                )
                :
                movies.map(movie => 
                  <MovieCardUnlogged key={movie.id} movie={movie}/>
                )
            }
          </ListContainer>
        </MovieListContainer>
        {
          movies.length === 20 ?
            <NextPageButton onClick={handlePage}>
              --- Mais filmes ---
            </NextPageButton>
            :
            <></>
        }
      </PageContainer>
    </>
  )
}

export default MovieSearch