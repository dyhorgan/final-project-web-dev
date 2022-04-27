//import profile from "../data/profile.json"
import {FIND_PROFILE, CREATE_PROFILE} from "../actions/profile-actions"



const profileReducer = (state = {}, action) => {
  switch(action.type){
    case CREATE_PROFILE:
      return action.newProfile
    case FIND_PROFILE:
      return action.profile;
    default: return(state)
  }
}

export default profileReducer
