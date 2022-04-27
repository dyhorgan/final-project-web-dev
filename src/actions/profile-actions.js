import * as service from "../services/profiles-service.js"

export const CREATE_PROFILE = 'CREATE_PROFILE';
export const FIND_PROFILE = 'FIND_PROFILE';

export const createProfile = async (dispatch, profile) => {
 console.log("logging profile in createProfile action");
 console.log(profile)
 const newProfile = await service.createProfile(profile);
 console.log("logging newProfile in createProfile action");
 console.log(newProfile)
 dispatch({
   type: CREATE_PROFILE,
   newProfile
 });
}

export const findProfile = async (dispatch, username, password) => {
   let profileInfo = {username: username, password: password}
   const profile = await service.findProfile(profileInfo);

//   let profile = profiles.find((profile) => profile.username === username && profile.password === password);

   dispatch({
     type: FIND_PROFILE,
     profile
   });
}
