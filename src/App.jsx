import { useEffect, useState } from 'react'
import './App.css'
import Movie from './components/Movie'

let sendMovie

function App() {

  const [search, setMovie] = useState('')
  const [listOfMovies, setListOfMovies] = useState([])
  console.log(listOfMovies)

  const handleSubmit = (event) => {
    event.preventDefault()
    setMovie(sendMovie)

  }

  const handleInput = (event) => {
     sendMovie = event.target.value;
  }


  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=23f8c70f&s=${search}`)
    .then(res => res.json())
    .then(searchData => {
      const {Search} = searchData
      if(Search === []) return
      setListOfMovies(Search) 
    })
  }, [search])

  return (
    <div className='movie-set'>
      <header>
        <h1>Buscador de Películas</h1>
        <form onSubmit={handleSubmit}> 
          <input type="text" placeholder='Avengers, Mario Bros...' onChange={handleInput}/>
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        <Movie movies={listOfMovies} />
      </main>
    </div>
  )
}

export default App
