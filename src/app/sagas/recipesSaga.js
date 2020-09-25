import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_RECIPES_REQUESTED } from '../actionType/recipesType';
import { recipesSuccess, recipesFail } from '../actions/recipes';
import { api } from '../services/services';

function* fetchRecipes(action) {
  const { recipes, error } = yield call(api.fetchData, action);
  if (recipes) yield put(recipesSuccess(recipes));
  else yield put(recipesFail(error));
}

export default function* watchFetchData() {
  yield takeLatest(FETCH_RECIPES_REQUESTED, fetchRecipes);
}
