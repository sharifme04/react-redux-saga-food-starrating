import {
  FETCH_RECIPES_REQUESTED,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAILURE,
} from '../actionType/recipesType';

export const recipesRequest = () => ({
  type: FETCH_RECIPES_REQUESTED,
});

export const recipesSuccess = recipes => ({
  type: FETCH_RECIPES_SUCCESS,
  recipes,
});

export const recipesFail = error => ({
  type: FETCH_RECIPES_FAILURE,
  error,
});
