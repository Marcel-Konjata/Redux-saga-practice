import { UserActionType } from "./user.action-types";

const INITIAL_STATE = {
  listOfUsers: [],
  input: { firstName: "", lastName: "" },
  error: null
};

export default function UsersReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case UserActionType.GET_USERS_SUCCESS:
      return { ...state, listOfUsers: payload };

    case UserActionType.HANDLE_USER_INPUT:
      return {
        ...state,
        input: { ...state.input, ...payload }
      };

    case UserActionType.CLEAR_USER_INPUT:
      return {
        ...state,
        input: {firstName: "", lastName: ""}
      };
      case UserActionType.USERS_ERROR:
          return {...state, error: payload}
    default:
      return state;
  }
}
