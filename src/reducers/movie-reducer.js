import {GET_MOVIES, SET_QUERY, GET_MOVIE} from "../actions/movie-actions.js"

const movieReducer = (state = {movies: [], query: "", movie: {}}, action) => {

  switch(action.type){
    case GET_MOVIES:
      return {...state, movies: action.movies};
    case SET_QUERY:
      return {...state, query: action.query};
    case GET_MOVIE:
      return {...state, movie: action.movie};
    default: return(state);

  }
}

export default movieReducer
