import {FIND_FOLLOWING, CREATE_FOLLOWING, FIND_ALL_FOLLOWING, FIND_ALL_FOLLOWERS} from "../actions/following-actions"

const followingReducer = (state = {following: [], followers: [], follow: {}}, action) => {
  switch(action.type){
    case CREATE_FOLLOWING:
      return {...state, follow: action.newFollowing};
    case FIND_FOLLOWING:
      return {...state, follow: action.following};
    case FIND_ALL_FOLLOWING:
      return {...state, following: action.following};
    case FIND_ALL_FOLLOWERS:
      return {...state, followers: action.followers}
    default: return(state)
  }
}

export default followingReducer
