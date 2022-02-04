import { SEARCH_USER_ACTION_TYPES } from "./User.actions";

const initialState = {
  users: [],
};

export const userData = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH_USER_ACTION_TYPES.SET_USERS:
      return { ...state, users: payload };
    default:
      return state;
  }
};
