import * as service from "../services/reviews-service.js"

export const CREATE_REVIEW = 'CREATE_REVIEW';
export const FIND_REVIEW = 'FIND_REVIEW';
export const FIND_ALL_REVIEWS = 'FIND_ALL_REVIEWS';
export const FIND_FRIEND_REVIEWS = 'FIND_FRIEND_REVIEWS';
export const FIND_ALL_REVIEWS_BY_MOVIE = 'FIND_ALL_REVIEWS_BY_MOVIE';
export const DELETE_REVIEW = "DELETE_REVIEW";
export const DELETE_FRIEND_REVIEW = "DELETE_FRIEND_REVIEW";

export const deleteReview = async (dispatch, _id) => {
  await service.deleteReview(_id);

  dispatch({
    type: DELETE_REVIEW,
    _id
  })
}

export const deleteFriendReview = async (dispatch, _id) => {
  await service.deleteReview(_id);

  dispatch({
    type: DELETE_FRIEND_REVIEW,
    _id
  })
}

export const findFriendReviews = async (dispatch, array) => {
    const reviews = await service.findFriendReviews(array);

    dispatch({
      type: FIND_FRIEND_REVIEWS,
      reviews
    })
}

export const createReview = async (dispatch, review) => {

 const newReview = await service.createReview(review);


 dispatch({
   type: CREATE_REVIEW,
   newReview
 });
}

export const findReview = async (dispatch, rid) => {

   const review = await service.findReview(rid);

   dispatch({
     type: FIND_REVIEW,
     review
   });
}

export const findAllReviews = async (dispatch, uid) => {
   let reviews = await service.findAllReviews(uid);
   if(!reviews){
      reviews = [];
   }
   dispatch({
    type: FIND_ALL_REVIEWS,
    reviews
   })
}

export const findAllReviewsByMovie = async (dispatch, mid) => {
   let reviews = await service.findAllReviewsByMovie(mid);
   if(!reviews){
         reviews = [];
      }
   dispatch({
    type: FIND_ALL_REVIEWS_BY_MOVIE,
    reviews
   })
}
