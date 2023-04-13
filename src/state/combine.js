import {all} from 'redux-saga/effects';
import cars from './cars';
import users from './users';

export function* rootSaga() {
  yield all([users.saga(), cars.saga()]);
}

export const reducers = {
  car: cars.reducer,
  user: users.reducer,
};
