import initialState from "../store/initialState"
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MOVIE_LIST':
      return {
        ...state,
        movieList: action.payload
      }
  
    default:
      return state
  }
}

export default rootReducer