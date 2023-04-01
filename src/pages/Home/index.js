import MovieList from '../../components/MovieList'
import useAuth from '../../hooks/useAuth'

import { HorizontalLine, PageContainer } from '../../styles/pagesGlobal'
import { SectionButton, SectionTitle, TextContainer } from './style'
import { Link } from 'react-router-dom'

const Home = () => {
  const { isLogged } = useAuth()
  const { requestSession } = useAuth()

  return (
    <div>
      <PageContainer>
        <SectionTitle>
          Filmes mais populares
        </SectionTitle>

        <HorizontalLine />

        <MovieList filter={'popular'}/>

        <HorizontalLine />

        <SectionTitle>
          Discover
        </SectionTitle>
        <TextContainer>
          -- Quer descobrir quais filmes estão no cinema? -- <br/><br/>
          -- Aqueles que ainda estão para estrear? -- <br/><br/>
          -- Ou talvez os mais bem avaliados? --
        </TextContainer>
        <Link to="discover">
          <SectionButton>
            Entre no <span>Discover</span> e aproveite!
          </SectionButton>
        </Link>

        <HorizontalLine />

        {
          !isLogged &&
          <>
            <SectionTitle>
              Login/Cadastro
            </SectionTitle>
            <TextContainer>
              <span>Tendo sua conta você pode:</span> <br/><br/><br/> 
              -- Dar notas aos filmes -- <br/><br/>
              -- Marcar aqueles que você já assistiu -- <br/><br/>
              -- Apontar seus favoritos --
            </TextContainer>
            <SectionButton onClick={requestSession}>
              Faça seu <span>cadastro/login</span>!
            </SectionButton>
    
            <HorizontalLine />
          </>
        }


      </PageContainer>
    </div>
  )
}

export default Home