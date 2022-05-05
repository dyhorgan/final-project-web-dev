import {FIND_REVIEW, CREATE_REVIEW, FIND_ALL_REVIEWS, FIND_FRIEND_REVIEWS, FIND_ALL_REVIEWS_BY_MOVIE, DELETE_REVIEW, DELETE_FRIEND_REVIEW} from "../actions/review-actions"

const reviewReducer = (state = {reviews: [], review: {}, friendReviews: []}, action) => {
  switch(action.type){
    case CREATE_REVIEW:
      return {...state, review: action.newReview, reviews: [...state.reviews, action.newReview]};
    case FIND_REVIEW:
      return {...state, review: action.review};
    case FIND_ALL_REVIEWS:
      return {...state, reviews: action.reviews};
    case FIND_ALL_REVIEWS_BY_MOVIE:
      return {...state, reviews: action.reviews};
    case FIND_FRIEND_REVIEWS:
      return {...state, friendReviews: action.reviews};
    case DELETE_REVIEW:
      return {...state, reviews: state.reviews.filter((review) => review._id !== action._id)};
    case DELETE_FRIEND_REVIEW:
      return {...state, friendReviews: state.reviews.filter((review) => review._id !== action._id)};
    default: return(state)
  }
}

export default reviewReducer
