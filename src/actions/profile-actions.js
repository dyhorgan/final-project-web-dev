import * as service from "../services/profiles-service.js"

export const CREATE_PROFILE = 'CREATE_PROFILE';
export const FIND_PROFILE = 'FIND_PROFILE';
export const FIND_ALL_PROFILES = 'FIND_ALL_PROFILES';
export const SET_OTHER_PROFILE = "SET_OTHER_PROFILE";
export const UPDATE_PROFILE = "UPDATE_PROFILE";

export const createProfile = async (dispatch, profile) => {

 const newProfile = await service.createProfile(profile);

 dispatch({
   type: CREATE_PROFILE,
   newProfile
 });
}

export const updateProfile = async (dispatch, obj) => {
  const updatedProfile = await service.updateProfile(obj);

  dispatch({
    type: UPDATE_PROFILE,
    updatedProfile
  })
}

export const findProfile = async (dispatch, info) => {

   let profileInfo = {username: info.username, password: info.password}
   const profile = await service.findProfile(profileInfo);

   dispatch({
     type: FIND_PROFILE,
     profile
   });
}

export const setOtherProfile = async (dispatch, profile) => {

//   let profileInfo = {username: info.username}
//   const profile = await service.findProfile(profileInfo);

   dispatch({
     type: SET_OTHER_PROFILE,
     profile
   });
}

export const findAllProfiles = async (dispatch) => {
   const profiles = await service.findAllProfiles();

   dispatch({
    type: FIND_ALL_PROFILES,
    profiles
   })
}


