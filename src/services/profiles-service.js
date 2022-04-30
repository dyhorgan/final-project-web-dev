import axios from 'axios';

//const API_BASE = 'http://localhost:4000/api';
//
//const PROFILES_API = `${API_BASE}/profiles`;

const PROFILES_API = "https://final-project-web-dev-server.herokuapp.com/api/profiles";
const PROFILE_API = "https://final-project-web-dev-server.herokuapp.com/api/profile";

export const findProfile = async (profileInfo) => {

  const response = await axios.get(PROFILE_API, {params: {username: profileInfo.username, password: profileInfo.password}});

  const profile = response.data;



  return profile
}

export const updateProfile = async (obj) => {

   const response = await axios.put(PROFILES_API + "/" + obj._id, {body: obj});
   return response.data;
}

export const findAllProfiles = async () => {
 const response = await axios.get(PROFILES_API);
 const profiles = response.data;

 return profiles;
}
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
