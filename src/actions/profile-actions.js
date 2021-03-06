import * as service from "../services/profiles-service.js"

export const CREATE_PROFILE = 'CREATE_PROFILE';
export const FIND_PROFILE = 'FIND_PROFILE';
export const FIND_ALL_PROFILES = 'FIND_ALL_PROFILES';
export const SET_OTHER_PROFILE = "SET_OTHER_PROFILE";
export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const RESET_PROFILE = "RESET_PROFILE";
export const SET_OTHER_PROFILE_BY_ID = "SET_OTHER_PROFILE_BY_ID";
export const SET_EDITING_OTHER = "SET_EDITING_OTHER";

export const setOtherProfileById = async (dispatch, id) => {
  const profile = await service.findProfileById(id);
  dispatch({
     type: SET_OTHER_PROFILE_BY_ID,
     profile
   });
}

export const setEditingOther = (dispatch) => {
  dispatch({
    type: SET_EDITING_OTHER
  })
}

export const createProfile = async (dispatch, profile) => {

 const newProfile = await service.createProfile(profile);

 dispatch({
   type: CREATE_PROFILE,
   newProfile
 });
}

export const resetProfile = (dispatch) => {
  let state = {username: "", profiles: [], _id: "", imageUrl: "", bio: "", email: "", phone: "", otherProfile:{username: "", imageUrl: "", bio: "", phone: ""}, admin: false, editingOther: false};
dispatch({
   type: RESET_PROFILE,
   state
 });
}

export const updateProfile = async (dispatch, obj) => {
  await service.updateProfile(obj);

  dispatch({
    type: UPDATE_PROFILE,
    updatedProfile: obj
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


