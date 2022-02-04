import { SEARCH_USER_ACTION_TYPES } from './User.actions';

const initialState = {
  users: []
};
export interface IAction {
  type: string;
  payload: any;
}

export const userData = (state = initialState, action: IAction) => {
  switch (action.type) {
    case SEARCH_USER_ACTION_TYPES.SET_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};
