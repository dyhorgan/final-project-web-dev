//import profile from "../data/profile.json"
import {FIND_ALL_PROFILES, CREATE_PROFILE} from "../actions/profile-actions"


const profileReducer = (state = [], action) => {
  switch(action.type){
    case CREATE_PROFILE:
      return [
                   ...state,
                   action.newProfile
                 ];
    case FIND_ALL_PROFILES:
      console.log("logging in reducer");
      console.log(action);

      return action.profiles;
    default: return(state)
  }
}

export default profileReducer
