import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cars: null,
};

export const slice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    fetchCarsRequest: state => {
      state.isLoading = true;
    },
    fetchCarsSuccess: (state, {payload}) => {
      state.isLoading = false;
      state.cars = payload.cars;
    },
    fetchCarsError: (state, {payload}) => {
      state.isLoading = false;
      state.error = payload.message;
    },
    cleanStore: () => initialState,
  },
});

export const {fetchCarsRequest, fetchCarsSuccess, fetchCarsError, cleanStore} = slice.actions;

export default slice.reducer;
