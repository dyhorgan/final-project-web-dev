import {FIND_REVIEW, CREATE_REVIEW, FIND_ALL_REVIEWS, FIND_FRIEND_REVIEWS} from "../actions/review-actions"

const reviewReducer = (state = {reviews: [], review: {}, friendReviews: []}, action) => {
  switch(action.type){
    case CREATE_REVIEW:
      return {...state, review: action.newReview};
    case FIND_REVIEW:
      return {...state, review: action.review};
    case FIND_ALL_REVIEWS:
      return {...state, reviews: action.reviews};
    case FIND_FRIEND_REVIEWS:

      return {...state, friendReviews: action.reviews};
    default: return(state)
  }
}

export default reviewReducer
