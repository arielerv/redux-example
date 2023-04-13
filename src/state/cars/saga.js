import {call, put, takeLatest, delay} from 'redux-saga/effects';
import {CarsService} from 'services';
import * as actions from './reducer';

export function* fetch() {
  try {
    const {cars} = yield call(CarsService.fetchCars);
    yield delay(1000);
    yield put(actions.fetchCarsSuccess({cars}));
  } catch (error) {
    yield put(actions.fetchCarsError({error: error.response?.data?.error || error.message}));
  }
}

export default function* saga() {
  yield takeLatest(actions.fetchCarsRequest, fetch);
}
