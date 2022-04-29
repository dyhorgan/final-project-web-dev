import * as service from "../services/reviews-service.js"

export const CREATE_FOLLOWING = 'CREATE_FOLLOWING';
export const FIND_FOLLOWING = 'FIND_FOLLOWING';
export const FIND_ALL_FOLLOWING= 'FIND_ALL_FOLLOWING';

export const createFollowing = async (dispatch, following) => {

 const newFollowing = await service.createFollowing(following);

 dispatch({
   type: CREATE_FOLLOWING,
   newFollowing
 });
}

export const findFollowing = async (dispatch, fid) => {

   const following = await service.findFollowing(fid);

   dispatch({
     type: FIND_FOLLOWING,
     following
   });
}

export const findAllFollowing = async (dispatch, fid) => {
   const following = await service.findAllFollowing(fid);

   dispatch({
    type: FIND_ALL_FOLLOWING,
    following
   })
}

export const findAllFollowers = async (dispatch, fid) => {
   const followers = await service.findAllFollowers(fid);

   dispatch({
    type: FIND_ALL_FOLLOWERS,
    followers
   })
}
