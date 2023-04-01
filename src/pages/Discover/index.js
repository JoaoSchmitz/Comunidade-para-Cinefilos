import { useState } from "react"
import { HorizontalLine, PageContainer } from "../../styles/pagesGlobal"
import { DiscoverText, FilterButton, FilterContainer } from "./style"
import MovieList from "../../components/MovieList"


const Discover = () => {

  const [filter, setFilter] = useState('')
  const [upcomingIsSelected, setUpcomingIsSelected] = useState(false)
  const [topRatedIsSelected, setTopRatedIsSelected] = useState(false)
  const [nowPlayingIsSelected, setNowPlayingIsSelected] = useState(false)

  const handleUpcoming = () => {
    setFilter('upcoming')
    setUpcomingIsSelected(true)
    setTopRatedIsSelected(false)
    setNowPlayingIsSelected(false)

  }

  const handleTopRated = () => {
    setFilter('top_rated')
    setUpcomingIsSelected(false)
    setTopRatedIsSelected(true)
    setNowPlayingIsSelected(false)

  }

  const handleNowPlaying = () => {
    setFilter('now_playing')
    setUpcomingIsSelected(false)
    setTopRatedIsSelected(false)
    setNowPlayingIsSelected(true)

  }
  
  return (
    <div>
      <PageContainer>
        <FilterContainer>
          <FilterButton className={ upcomingIsSelected ? 'selected' : '' } onClick={handleUpcoming}>
            Em cartaz
          </FilterButton>

          <FilterButton className={ topRatedIsSelected ? 'selected' : '' } onClick={handleTopRated}>
            Melhor nota
          </FilterButton>

          <FilterButton className={ nowPlayingIsSelected ? 'selected' : '' } onClick={handleNowPlaying}>
            Em breve
          </FilterButton>
        </FilterContainer>

        <HorizontalLine />

        {
          filter ?
            <MovieList filter={filter} />
            :
            <DiscoverText>
              Selecione um dos filtros acima para começar!
            </DiscoverText>
        }
      </PageContainer>
    </div>
  )
}

export default Discover