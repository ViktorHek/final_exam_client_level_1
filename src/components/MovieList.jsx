import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import MovieService from '../modules/MovieService'
import MovieCard from './MovieCard'

const MovieList = () => {
  const dispatch = useDispatch()
  const movies = useSelector(state => state.movieList)
  const fetchMovies = async () => {
    let movies = await MovieService.index()
    dispatch({type: 'SET_MOVIE_LIST', payload: movies})
  }

  useEffect(fetchMovies, [])

  let displayMovies = movies.map((movie) => {
    return <MovieCard movie={movie} />
  })

  return (
    <>
      <div data-cy="movie-index">
        <div data-cy='movie-list'>
          {displayMovies && displayMovies}
        </div>
      </div>
    </>
  )
}

export default MovieList
