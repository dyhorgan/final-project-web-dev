import axios from 'axios';

const MOVIES_API = "https://api.themoviedb.org/3/search/movie?api_key=0eafd33ab26dc16b94ebb253c6959fb9&include_adult=false&query=";

const MOVIE_API = "https://api.themoviedb.org/3/movie/";

export const getMovies = async (query) => {

  let API = MOVIES_API + query;
  const response = await axios.get(API);
  const movies = response.data.results;

  if(movies){
    return movies;
  }else{
    return [];
  }
}

export const getMovie = async (id) => {
  let API = MOVIE_API + id + "?api_key=0eafd33ab26dc16b94ebb253c6959fb9";
  const response = await axios.get(API);

  const movie = response.data;
  return movie;
}
