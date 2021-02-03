import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";

const MovieList = () => {
  const dispatch = useDispatch()
  return (
    <>
      <div data-cy="movie-index">
        <div data-cy='movie-list'>
         greys-anatomy
        criminal-minds
        hawaii-five-0
        </div>
      </div>
    </>
  )
}

export default MovieList
