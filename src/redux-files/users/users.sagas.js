import {
  takeEvery,
  call,
  put,
  takeLatest,
  fork,
  take
} from "redux-saga/effects";
import { UserActionType } from "./user.action-types";
import { fetchUsers, postUsers, removeUser } from "../../API/api.functions";
import { usersErrorReport } from "./users.actions";

//GET API CALL RELATED SAGAS

function* getUserSaga() {
  try {
    let response = yield call(fetchUsers);
    const data = yield response.data.data;
    yield put({ type: UserActionType.GET_USERS_SUCCESS, payload: data });
  } catch (error) {
    yield put(usersErrorReport(error.message));
  }
}

export function* UserWatcher() {
  yield takeEvery(UserActionType.GET_USERS_ASYNC, getUserSaga);
}

//POST API CALL RELATED SAGAS

function* postUserSaga(action) {
  try {
    yield call(postUsers, {
      firstName: action.payload.firstName,
      lastName: action.payload.lastName
    });
    yield call(getUserSaga);
    yield put({ type: UserActionType.CLEAR_USER_INPUT });
  } catch (error) {
    yield put(usersErrorReport(error.message));
  }
}

export function* PostWatcher() {
  // action type auto dispatches the post user async action,
  // and passes down the action as prop to triggered saga
  yield takeLatest(UserActionType.POST_USER_ASYNC, postUserSaga);
}

// remove api call related sagas

function* removeUserSaga({ id }) {
  try {
    yield call(removeUser, id);
    yield call(getUserSaga);
  } catch (error) {
    yield put(usersErrorReport(error.message));
  }
}

export function* RemoveUserWatcher() {
  while (true) {
    const action = yield take(UserActionType.REMOVE_USER_ASYNC);
    yield call(removeUserSaga, { id: action.payload });
  }
}

// spread this to root saga!

export const UserSagas = [
  fork(UserWatcher),
  fork(PostWatcher),
  fork(RemoveUserWatcher)
];
