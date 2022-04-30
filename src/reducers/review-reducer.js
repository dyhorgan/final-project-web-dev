import {FIND_REVIEW, CREATE_REVIEW, FIND_ALL_REVIEWS} from "../actions/review-actions"

const reviewReducer = (state = {reviews: [], review: {}}, action) => {
  switch(action.type){
    case CREATE_REVIEW:
      return {...state, review: action.newReview};
    case FIND_REVIEW:
      return {...state, review: action.review};
    case FIND_ALL_REVIEWS:
      return {...state, reviews: action.reviews};
    default: return(state)
  }
}

export default reviewReducer
