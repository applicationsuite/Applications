import { getUsers } from '../../services';

export const SEARCH_USER_ACTION_TYPES = {
  LOAD_USERS: 'LOAD_USERS',
  SET_USERS: 'SET_USERS'
};

export const loadUsers = (userParams: any) => async (dispatch: any) => {
  const users = await getUsers(userParams);
  dispatch(setUsers(users));
};
export const setUsers = (users: any) => {
  return { type: SEARCH_USER_ACTION_TYPES.SET_USERS, payload: users };
};
