import axios from 'axios';

//const API_BASE = 'http://localhost:4000/api';
//
//const PROFILES_API = `${API_BASE}/profiles`;

const PROFILES_API = "https://final-project-web-dev-server.herokuapp.com/api/profiles";

console.log("profiles api:");
console.log(PROFILES_API);

export const findProfile = async (profileInfo) => {
  const response = await axios.get(PROFILES_API, {params: {username: profileInfo.username, password: profileInfo.password}});

  const profile = response.data;
  console.log("logging findProfile in services");
  console.log(profile);

  return profile

}



//export const findAllTuits = async () => {
// const response = await axios.get(TUITS_API);
// const tuits = response.data;
// console.log("logging tuits in services!");
// console.log(tuits);
// return tuits;
//}
//
//export const deleteTuit = async (tuit) => {
//
// const response = await axios.delete(`${TUITS_API}/${tuit._id}`);
//
// return response.data;
//}
//
export const createProfile = async (profile) => {
 console.log("logging in createProfile service");
 const response = await axios.post(PROFILES_API, profile)
 return response.data;
}
//
//export const updateTuit = async (tuit) => {
// const response = await axios
//   .put(`${TUITS_API}/${tuit._id}`, tuit);
// return response.data;
//}
//
