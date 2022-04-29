
import {FIND_PROFILE, CREATE_PROFILE, FIND_ALL_PROFILES, SET_OTHER_PROFILE, UPDATE_PROFILE} from "../actions/profile-actions"

const profileReducer = (state = {username: "", profiles: [], _id: "", otherProfile:{username: ""}}, action) => {
  switch(action.type){
    case CREATE_PROFILE:
      return {...state, username: action.newProfile.username, _id: action.newProfile._id};
    case FIND_PROFILE:
      return {...state, username: action.profile.username, _id: action.profile._id};
    case FIND_ALL_PROFILES:
      return {...state, profiles: action.profiles};
    case SET_OTHER_PROFILE:
      return {...state, otherProfile: {username: action.profile.username, _id: action.profile._id}};
    case UPDATE_PROFILE:
      return {...state, ...action.updatedProfile};
    default: return(state)
  }
}

export default profileReducer
