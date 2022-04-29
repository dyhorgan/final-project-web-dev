import axios from 'axios';

const FOLLOWING_API = "https://final-project-web-dev-server.herokuapp.com/api/following";

export const findFollower = async (id) => {

  const response = await axios.get(FOLLOWING_API, {params: {id}});

  const follower = response.data;

  return follower;
}

export const findAllFollowers = async (id) => {

 const response = await axios.get(FOLLOWING_API, {params: {id}});
 const followers = response.data;
 return followers;
}
export const findAllFollowing = async (id) => {

 const response = await axios.get(FOLLOWING_API, {params: {id}});
 const following = response.data;
 return following;
}
//
//export const deleteTuit = async (tuit) => {
//
// const response = await axios.delete(`${TUITS_API}/${tuit._id}`);
//
// return response.data;
//}
//
export const createFollowing = async (following) => {
// let revObject = {...review, user._id};
 const response = await axios.post(FOLLOWING_API, following);
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
