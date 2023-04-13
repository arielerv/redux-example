import * as actions from 'state/users/actions';

const reducer = (state = {users: []}, action) => {
  switch (action.type) {
    case actions.FETCH_USERS_REQUESTED:
      return {...state, isLoading: true};
    case actions.FETCH_USERS_SUCCEEDED:
      return {...state, isLoading: false, users: action.users};
    case actions.FETCH_USERS_FAILED:
      return {...state, isLoading: false, message: action.error};
    default:
      return state;
  }
};

export default reducer;
