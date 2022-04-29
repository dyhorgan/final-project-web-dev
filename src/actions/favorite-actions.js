import * as service from "../services/favorites-service.js"

export const CREATE_FAVORITE = 'CREATE_FAVORITE';
export const FIND_FAVORITE = 'FIND_FAVORITE';
export const FIND_ALL_FAVORITES = 'FIND_ALL_FAVORITES';

export const createFavorite = async (dispatch, favorite) => {

 const newFavorite = await service.createFavorite(favorite);

 dispatch({
   type: CREATE_FAVORITE,
   newFavorite
 });
}

export const findFavorite = async (dispatch, fid) => {

   const favorite = await service.findFavorite(fid);

   dispatch({
     type: FIND_FAVORITE,
     favorite
   });
}

export const findAllFavorites = async (dispatch, fid) => {
   const favorites = await service.findAllFavorites(fid);

   dispatch({
    type: FIND_ALL_FAVORITES,
    favorites
   })
}
