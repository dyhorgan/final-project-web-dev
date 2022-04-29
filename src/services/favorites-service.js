import axios from 'axios';

//const API_BASE = 'http://localhost:4000/api';
//
//const PROFILES_API = `${API_BASE}/profiles`;

const FAVORITES_API = "https://final-project-web-dev-server.herokuapp.com/api/favorites";

export const findFavorite = async (id) => {

  const response = await axios.get(FAVORITES_API, {params: {id}});

  const favorite = response.data;

  return favorite;
}

export const findAllFavorites = async (id) => {

 const response = await axios.get(FAVORITES_API, {params: {id}});
 const favorites = response.data;
 return favorites;
}
//
//export const deleteTuit = async (tuit) => {
//
// const response = await axios.delete(`${TUITS_API}/${tuit._id}`);
//
// return response.data;
//}
//
export const createFavorite = async (favorite) => {
 console.log("param favorite in service post");
 console.log(favorite);
 const response = await axios.post(FAVORITES_API, favorite);

 return response.data;
}
//
//export const updateTuit = async (tuit) => {
// const response = await axios
//   .put(`${TUITS_API}/${tuit._id}`, tuit);
// return response.data;
//}
//
