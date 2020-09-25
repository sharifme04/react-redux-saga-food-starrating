import { call } from 'redux-saga/effects';
import watchFetchData from './recipesSaga';

export default function* rootSaga() {
  yield call(watchFetchData);
}
