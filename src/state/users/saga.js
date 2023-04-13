import {call, put, takeLatest, delay} from 'redux-saga/effects';
import {UserService} from 'services';
import * as actions from './actions';

export function* fetch() {
  try {
    const {users} = yield call(UserService.fetchUsers);
    yield delay(1000);
    yield put(actions.receiveUsers(users));
  } catch (error) {
    yield put(actions.notifyFailedUsers(error.response?.data?.error || error.message));
  }
}

export default function* saga() {
  yield takeLatest(actions.FETCH_USERS_REQUESTED, fetch);
}
