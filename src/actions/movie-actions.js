import * as service from "../services/movies-service.js"
export const GET_MOVIES = "GET_MOVIES";
export const SET_QUERY = "SET_QUERY";
export const GET_MOVIE = "GET_MOVIE";
export const GET_MOVIES_ARRAY = "GET_MOVIES_ARRAY";
export const GET_MOVIE_POSTERS = "GET_MOVIE_POSTERS";
export const GET_ONE_POSTER = "GET_ONE_POSTER";

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

export const getMoviePosters = async (dispatch, array) => {
  const posters = await service.getMoviePosters(array);

    dispatch({
      type: GET_MOVIE_POSTERS,
      posters
    })

}

export const getOnePoster = async (dispatch, id) => {
    console.log("logging id in poster action");
    console.log(id);
    let poster = "";
    if(id){
      poster = await service.getOnePoster(id);
    }
    console.log(poster);
    dispatch({
      type: GET_ONE_POSTER,
      poster
    })
}

export const getMoviesArray = async (dispatch, array) => {
  const movies = await service.getMoviesArray(array);
  dispatch({
    type: GET_MOVIES_ARRAY,
    movies
  })
}
