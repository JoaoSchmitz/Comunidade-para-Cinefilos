import { APIKey } from "../../config/key"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { IconContext } from "react-icons"
import { FaStar } from "react-icons/fa"

import useAuth from "../../hooks/useAuth"

import Header from "../../components/Header"
import MovieReviewCard from "../../components/ReviewCard/movieReviewCard"
import MovieCardLogged from "../../components/MovieCard/indexLogged"
import MovieCardUnlogged from "../../components/MovieCard/indexUnlogged"

import { HorizontalLine, PageContainer } from "../../styles/pagesGlobal"
import { MovieDetailFavoriteIcon, MovieDetailFavoriteIconBox, MovieDetailFavoriteIconMarked, 
  ListContainer, MovieDetailsContainer, MovieDetailPoster, MovieProperty, MoviePropertyBox, 
  MovieTagline, MovieDetailTitle, MovieDetailVoteAverage, ReviewButton, ReviewDescriptionInput, 
  ReviewForm, ReviewIcon, ReviewRatingInput, ReviewsContainer, SectionTitle, MovieDetailWatchedIcon, 
  MovieDetailWatchedIconBox, MovieDetailWatchedIconMarked
} from "./style"


const MovieDetails = () => {
  const { id } = useParams()
  const { isLogged } = useAuth()
  const [movie, setMovie] = useState(null)
  const [recommendedMovies, setRecommendedMovies] = useState([])
  const [reviews, setReviews] = useState([])
  const [newReview, setNewReview] = useState('')
  const [newReviewRating, setNewReviewRating] = useState(null)
  const imagePath = 'https://image.tmdb.org/t/p/w500/'
  let reviewId = 0

  const formatCurrency = number => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    })
  }

  const createReview = () => {
    const bodyConfig = {
      value: newReviewRating
    }

    const init = {
      method: "POST",
      headers: {
          "Content-type": "application/json"
      },
      body: JSON.stringify(bodyConfig)
    }

    fetch(`https://api.themoviedb.org/3/movie/${id}/rating?api_key=${APIKey}&session_id=${localStorage.getItem("api_id")}`, init)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    setMovie(null)
    setRecommendedMovies([])
    setNewReview('')

  // Fetch for movie details
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-US`)
      .then(response => response.json())
      .then(data => setMovie(data))

  // Fetch for movie recommendations
    fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${APIKey}&language=en-US`)
      .then(response => response.json())
      .then(data => setRecommendedMovies(data.results.slice(0,4)))

  // Fetch for movie reviews
    fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${APIKey}&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => setReviews(data.results))

  }, [id])

  // Trocar com o correto da lista de favoritos e assistidos
  const [fav, setFav] = useState(false)
  const [watched, setWatched] = useState(false)

  const handleFavorite = () => {
    setFav(!fav)
    
  }

  const handleWatched = () => {
    setWatched(!watched)
  }


  return (
    <>
      <Header />
      {
        movie && 
          <PageContainer>

          {/* {Section: Movie Details} */}
            <MovieDetailsContainer>

              <MovieDetailPoster
                className={fav ? 'active' : ''}
                src={imagePath + movie.poster_path}
                alt={movie.title}
              />
              {
                isLogged &&
                  <MovieDetailFavoriteIconBox onClick={handleFavorite}> {/* Change this */}
                    {
                      fav ?
                      <MovieDetailFavoriteIconMarked size="3rem"/>
                      :
                      <MovieDetailFavoriteIcon size="3rem"/>
                    }
                  </MovieDetailFavoriteIconBox>
              }
              {
                isLogged &&
                  <MovieDetailWatchedIconBox onClick={handleWatched}> {/* Change this */}
                  {
                    watched ?
                    <MovieDetailWatchedIconMarked size="3rem"/>
                    :
                    <MovieDetailWatchedIcon size="3rem"/>
                  }
                  </MovieDetailWatchedIconBox>
              }

              <MovieDetailTitle>{movie.title}</MovieDetailTitle>
              <MovieTagline>{movie.tagline}</MovieTagline>

            {/* Customizes the icon */}
              <IconContext.Provider value={{ color: "var(--textColor2)", size: "1.1rem" }}>
                <MovieDetailVoteAverage>
                  <FaStar/> {movie.vote_average.toFixed(1)}
                </MovieDetailVoteAverage>
              </IconContext.Provider>

              <MoviePropertyBox>
                Sinopse: <MovieProperty>{movie.overview}</MovieProperty>
              </MoviePropertyBox>

              <MoviePropertyBox>
                Duração: <MovieProperty>{movie.runtime} minutos</MovieProperty>
              </MoviePropertyBox>
              
              <MoviePropertyBox>
              Data de lançamento: <MovieProperty>{movie.release_date}</MovieProperty>
              </MoviePropertyBox>

              <MoviePropertyBox>
                Receita: <MovieProperty>{formatCurrency(movie.revenue)}</MovieProperty>
              </MoviePropertyBox>

              <MoviePropertyBox>
                Orçamento: <MovieProperty>{formatCurrency(movie.budget)}</MovieProperty>
              </MoviePropertyBox>

              <HorizontalLine/>

            {/* {Section: Recommendations} */}
              <SectionTitle> Filmes recomendados </SectionTitle>
              
              <ListContainer>
                {
                  isLogged && 
                    recommendedMovies.map(movie => 
                      <MovieCardLogged key={movie.id} movie={movie} isRecommended={true}/>
                    )
                }
                {
                  !isLogged && 
                    recommendedMovies.map(movie => 
                      <MovieCardUnlogged key={movie.id} movie={movie} isRecommended={true}/>
                    )
                }
              </ListContainer>

              <HorizontalLine />

            {/* {Section: Reviews} */}
              <SectionTitle> Reviews </SectionTitle>

              {
                isLogged &&
                <ReviewForm onSubmit={createReview}>
                  <ReviewRatingInput
                    type='number'
                    placeholder='Dê uma nota:'
                    onChange={(e) => setNewReviewRating(e.target.value)}
                    value={newReviewRating}
                    min="1"
                    max="10"
                  />
                  {/* <ReviewDescriptionInput
                    type='text'
                    placeholder='Escreva sua review:'
                    onChange={(e) => setNewReview(e.target.value)}
                    value={newReview}
                  /> */}
                  <ReviewButton type='submit'>
                    <ReviewIcon size='1.8rem'/>
                  </ReviewButton>
                </ReviewForm>
              }

              <ReviewsContainer>
                {
                  reviews &&
                    reviews.map(review => 
                      <MovieReviewCard key={reviewId++} review={review}/>
                    )
                }
              </ReviewsContainer>

            </MovieDetailsContainer>


          </PageContainer>
      }
    </>
  )
}

export default MovieDetails