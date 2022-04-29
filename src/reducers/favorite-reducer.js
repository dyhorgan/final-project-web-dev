import {FIND_FAVORITE, CREATE_FAVORITE, FIND_ALL_FAVORITES} from "../actions/favorite-actions"

const favoriteReducer = (state = {favorites: [], favorite: {}}, action) => {
  switch(action.type){
    case CREATE_FAVORITE:
      return action.newFavorite;
    case FIND_FAVORITE:
      return {...state, favorite: action.favorite};
    case FIND_ALL_FAVORITES:
      return {...state, favorites: action.favorites};
    default: return(state)
  }
}

export default favoriteReducer
