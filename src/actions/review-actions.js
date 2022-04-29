import * as service from "../services/reviews-service.js"

export const CREATE_REVIEW = 'CREATE_REVIEW';
export const FIND_REVIEW = 'FIND_REVIEW';
export const FIND_ALL_REVIEWS = 'FIND_ALL_REVIEWS';

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
   const reviews = await service.findAllReviews(uid);

   dispatch({
    type: FIND_ALL_REVIEWS,
    reviews
   })
}
