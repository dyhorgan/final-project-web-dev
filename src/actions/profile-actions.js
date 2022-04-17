import * as service from "../services/profiles-service.js"

export const CREATE_PROFILE = 'CREATE_PROFILE';
export const FIND_ALL_PROFILES = 'FIND_ALL_PROFILES';

export const createProfile = async (dispatch, profile) => {

 const newProfile = await service.createProfile(profile);
 dispatch({
   type: CREATE_PROFILE,
   newProfile
 });
}

export const findAllProfiles = async (dispatch) => {
   console.log("firing")
   const profiles = await service.findAllProfiles();
   console.log("logging profiles in actions")
   console.log(profiles);
   dispatch({
     type: FIND_ALL_PROFILES,
     profiles
   });
}
