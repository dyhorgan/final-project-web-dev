import * as service from "../services/movies-service.js"
export const GET_MOVIES = "GET_MOVIES";

export const SET_QUERY = "SET_QUERY";

export const GET_MOVIE = "GET_MOVIE";

export const getMovies = async (dispatch, query) => {

  const movies = await service.getMovies(query);

     dispatch({
       type: GET_MOVIES,
       movies
     });
}

export const setQuery = async (dispatch, query) => {

  dispatch({
    type: SET_QUERY,
    query
  });
}

export const getMovie = async (dispatch, id) => {

  const movie = await service.getMovie(id);

  dispatch({
    type: GET_MOVIE,
    movie
  })
}
