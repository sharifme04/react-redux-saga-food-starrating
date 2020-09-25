import {
  FETCH_RECIPES_REQUESTED,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAILURE,
} from '../actionType/recipesType';

const initialState = {
  recipes: [],
  error: null,
};

export default function recipes(state = initialState, action) {
  switch (action.type) {
    case FETCH_RECIPES_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_RECIPES_SUCCESS:
      return {
        ...state,
        recipes: action.recipes,
        isLoading: false,
      };
    case FETCH_RECIPES_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
