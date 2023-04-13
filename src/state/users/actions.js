export const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED';
export const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED';
export const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

export const requestUsers = () => ({type: FETCH_USERS_REQUESTED});
export const receiveUsers = users => ({type: FETCH_USERS_SUCCEEDED, users});
export const notifyFailedUsers = message => ({type: FETCH_USERS_FAILED, message});
