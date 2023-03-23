import './App.css';
import { APIKey } from './config/APIKey';
import { useState, useEffect } from 'react'
import { APIKey } from './config/key';

function App() {

  // Como vai ser feito pra se obter os dados da API:

  const [movies, setMovies] = useState([]) //recebe os filmes populares
  const image_path = 'https://image.tmdb.org/t/p/w500'

  useEffect(() => {
    // consumir a api...

    fetch(`
    https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => {console.log(data.results); setMovies(data.results)})
  }, [])


  return (
    <>
      <p>Comunidade para cinéfilos</p>
    </>
  );
}

export default App;