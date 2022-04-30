import axios from 'axios';

//const API_BASE = 'http://localhost:4000/api';
//
//const PROFILES_API = `${API_BASE}/profiles`;

const REVIEWS_API = "https://final-project-web-dev-server.herokuapp.com/api/reviews";


console.log("reviews api:");
console.log(REVIEWS_API);

export const findReview = async (id) => {

  const response = await axios.get(REVIEWS_API, {params: {id}});

  const profile = response.data;

  return profile;
}

export const findFriendReviews = async (array) => {

  let reviewArray = await Promise.all(array.map(async (uid) => {
    const response = await axios.get(REVIEWS_API, {params: {uid}});
    const reviews = response.data;
    return reviews[reviews.length - 1];
  })).then((results) => results);

  return reviewArray;
}

export const findAllReviews = async (uid) => {

 const response = await axios.get(REVIEWS_API, {params: {uid}});
 const reviews = response.data;
 return reviews;
}
//
//export const deleteTuit = async (tuit) => {
//
// const response = await axios.delete(`${TUITS_API}/${tuit._id}`);
//
// return response.data;
//}
//
export const createReview = async (review) => {
// let revObject = {...review, user._id};
 const response = await axios.post(REVIEWS_API, review);
// await axios.post(USER_REVIEWS_API, {reviewId: response.data._id, user.userId});
// await axios.post(MOVIE_REVIEWS_API, {reviewId: });
 return response.data;
}
//
//export const updateTuit = async (tuit) => {
// const response = await axios
//   .put(`${TUITS_API}/${tuit._id}`, tuit);
// return response.data;
//}
//
