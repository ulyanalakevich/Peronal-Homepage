import {
    takeLatest,
    takeEvery,
    call,
    put,
    delay,
  } from "redux-saga/effects";
  import {
fetchRepositories,
fetchRepositoriesError,
fetchRepositoriesSuccess
  } from './homepageSlice'
  import { getRepositories } from "./homepageData";
  
  function* fetchRepositoriesHandler() {
    try {
      yield delay(500);
      const repositories = yield call(getRepositories);
      yield put(fetchRepositoriesSuccess(repositories));
      console.log(repositories);
    } catch (error) {
      yield call(alert, "Coś poszło nie tak!");
      yield put(fetchRepositoriesError());
    }
  }
  
  export function* homepageSaga() {
    yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
  }
  