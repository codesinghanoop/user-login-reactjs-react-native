import {ForkEffect, call, put, select, takeLatest} from 'redux-saga/effects';
import {
  createUserAction,
  getUserListAction,
  loginAction,
  setAllUserData,
  setUserCountry,
  setUserLang,
  setUserName,
} from '../slice/user/slice';
import {PayloadAction} from '@reduxjs/toolkit';
import {createNewUser, getUserList} from '../network/userApi';

export type IUserPayload = {
  userName: string;
  password: string;
  country: string;
  lang: string;
};

//To create a user from the app
function* createUserSaga({payload}: PayloadAction<IUserPayload>) {
  try {
    const response: any = yield call(createNewUser, payload);
    yield put(setUserCountry(response?.data?.country));
    yield put(setUserLang(response?.data?.lang));
    yield put(setUserName(response?.data?.userName));
  } catch (error: any) {
    // yield put(setErrorAction(error));
  }
}

//To fetch all the users
function* getUserListSaga({payload}: PayloadAction<IUserPayload>) {
  try {
    const response = yield call(getUserList);

    yield put(setAllUserData(response?.data));
  } catch (error: any) {
    // yield put(setErrorAction(error));
  }
}

//To validate the user
function* loginSaga({payload}: PayloadAction<IUserPayload>) {
  try {
    const userList = yield select(state => state.USER_AUTH.allUserData);
    const foundUser = userList?.find(
      user =>
        user?.userName === payload?.userName &&
        user?.password === payload?.password &&
        user?.country === payload?.country,
    );

    if (foundUser && foundUser?.userName) {
      yield put(setUserName(foundUser?.userName));
    }
    // yield put(setAllUserData(response?.data));
  } catch (error: any) {
    // yield put(setErrorAction(error));
  }
}

// Generator function
export function* watchAppUserSagas(): Generator<ForkEffect<never>, void> {
  yield takeLatest(createUserAction.type, createUserSaga);
  yield takeLatest(getUserListAction.type, getUserListSaga);
  yield takeLatest(loginAction.type, loginSaga);
}
