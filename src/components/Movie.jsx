import '../style/Movie.css'
import React from 'react'

function Movie({movies}) {
  return (
    <ul className='movie-container'>
      {
        movies?.map(movie => {
          return (
            <li key={movie.imdbID}>
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
              <img src={movie.Poster} alt={movie.Title}/>
            </li>
          )
        })
      }
    </ul>
  )
}

export default Movie