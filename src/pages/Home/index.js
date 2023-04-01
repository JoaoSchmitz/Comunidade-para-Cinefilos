import MovieList from '../../components/MovieList'
import { PageContainer } from '../../styles/pagesGlobal'

const Home = () => {
  return (
    <div>
      <PageContainer>
        <MovieList filter={'popular'}/>
      </PageContainer>
    </div>
  )
}

export default Home