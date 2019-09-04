import { all, fork } from "redux-saga/effects";
import { UserSagas } from "../users/users.sagas";

export default function* RootSaga() {
  yield all([
     ...UserSagas
  ]);
}
