
import {FIND_PROFILE, CREATE_PROFILE, FIND_ALL_PROFILES, SET_OTHER_PROFILE, UPDATE_PROFILE, RESET_PROFILE, SET_OTHER_PROFILE_BY_ID, SET_EDITING_OTHER} from "../actions/profile-actions"

const profileReducer = (state = {posters: [], username: "", profiles: [], _id: "", imageUrl: "", bio: "", email: "", phone: "", otherProfile:{username: "", imageUrl: "", bio: "", phone: ""}, admin: false, editingOther: false}, action) => {
    //console.log("logging state in prof reducer");
    //console.log(state)
  switch(action.type){
    case CREATE_PROFILE:
      return {...state, username: action.newProfile.username, _id: action.newProfile._id, admin: action.newProfile.admin};
    case FIND_PROFILE:
      if(action.profile){
         return {...state, username: action.profile.username, _id: action.profile._id, imageUrl: action.profile.imageUrl, bio: action.profile.bio, email: action.profile.email, phone: action.profile.phone, admin: action.profile.admin};
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
        return {...state, otherProfile: {username: action.profile.username, _id: action.profile._id, imageUrl: action.profile.imageUrl, bio: action.profile.bio, admin: action.profile.admin, email: action.profile.email, phone: action.profile.phone}};
      }else{
        break;
      }
    case UPDATE_PROFILE:
      if(!state.editingOther){
        return {...state, ...action.updatedProfile};
      }else{
        return {...state, otherProfile: {...state.otherProfile, ...action.updatedProfile}};
      }
    case RESET_PROFILE:
      return {...state, ...action.state};
    case SET_EDITING_OTHER:
      return {...state, editingOther: !state.editingOther}
    case SET_OTHER_PROFILE_BY_ID:
      return {...state, otherProfile: {username: action.profile.username, _id: action.profile._id, imageUrl: action.profile.imageUrl, bio: action.profile.bio, email: action.profile.email, phone: action.profile.phone, admin: action.profile.admin}};
    default: return(state)
  }
}

export default profileReducer
