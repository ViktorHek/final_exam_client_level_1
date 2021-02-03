import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MovieService from '../modules/MovieService'
import MovieCard from './MovieCard'
import { Card } from 'semantic-ui-react'

const MovieList = () => {
  const dispatch = useDispatch()
  const movies = useSelector((state) => state.movieList)
  const fetchMovies = async () => {
    let movies = await MovieService.index()
    dispatch({ type: 'SET_MOVIE_LIST', payload: movies })
  }

  useEffect(fetchMovies, [])

  let displayMovies = movies.map((movie) => {
    return <MovieCard movie={movie} />
  })

  return (
    <>
      <div data-cy="movie-index">
        <div data-cy="movie-list">
          {displayMovies && (
            <Card.Group itemsPerRow={5}>{displayMovies}</Card.Group>
          )}
        </div>
      </div>
    </>
  )
}

export default MovieList
