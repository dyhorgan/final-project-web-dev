
import {FIND_PROFILE, CREATE_PROFILE, FIND_ALL_PROFILES, SET_OTHER_PROFILE, UPDATE_PROFILE, RESET_PROFILE, SET_OTHER_PROFILE_BY_ID} from "../actions/profile-actions"

const profileReducer = (state = {username: "", profiles: [], _id: "", imageUrl: "", otherProfile:{username: ""}}, action) => {
  switch(action.type){
    case CREATE_PROFILE:
      return {...state, username: action.newProfile.username, _id: action.newProfile._id};
    case FIND_PROFILE:
      if(action.profile){
         return {...state, username: action.profile.username, _id: action.profile._id, imageUrl: action.profile.imageUrl, bio: action.profile.bio};
      }else{
            break;
      }
    case FIND_ALL_PROFILES:
      if(action.profiles){
          return {...state, profiles: action.profiles.filter((element) => element.username !== state.username)};
      }else{
            break;
      }
    case SET_OTHER_PROFILE:
      if(action.profile){
        return {...state, otherProfile: {username: action.profile.username, _id: action.profile._id, imageUrl: action.profile.imageUrl, bio: action.profile.bio}};
      }else{
        break;
      }
    case UPDATE_PROFILE:
      return {...state, ...action.updatedProfile};
    case RESET_PROFILE:
      return {...state, ...action.state};
    case SET_OTHER_PROFILE_BY_ID:
      return {...state, otherProfile: {username: action.profile.username, _id: action.profile._id, imageUrl: action.profile.imageUrl, bio: action.profile.bio}};
    default: return(state)
  }
}

export default profileReducer
