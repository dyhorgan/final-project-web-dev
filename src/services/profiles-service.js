import axios from 'axios';
//const TUITS_API = 'http://localhost:4000/api/tuits';
//const TUITS_API = 'https://full-stack-developer-server2.herokuapp.com/api/tuits'

const API_BASE = 'http://localhost:4000/api';

const PROFILES_API = `${API_BASE}/profiles`;

console.log("profiles api:");
console.log(PROFILES_API);

export const findAllProfiles = async () => {
  const response = await axios.get(PROFILES_API);

  const profiles = response.data;
  console.log("logging in services");
  console.log(profiles);

  return profiles

}

findAllProfiles();

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
