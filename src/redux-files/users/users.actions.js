import { UserActionType } from "./user.action-types";

// CRUD RELATIVE ACTIONS
//get actions
export function getUsersAsync() {
  return {
    type: UserActionType.GET_USERS_ASYNC
  };
}

export function getUserSucces(data) {
  return {
    type: UserActionType.GET_USERS_SUCCESS,
    payload: data
  };
}

//Post Actions

//it will recieve user.input as signle argument => auto destructurise to firsntame, lasntame
export function postUserAsync({ firstName, lastName }) {
  return {
    type: UserActionType.POST_USER_ASYNC,
    payload: { firstName, lastName }
  };
}

//Remove actions

export function removeUserAsync(id) {
  return {
    type: UserActionType.REMOVE_USER_ASYNC,
    payload: id
  };
}

//error handling for api
export function usersErrorReport(error) {
  return {
    type: UserActionType.USERS_ERROR,
    payload: error
  };
}

/////////////////////////////////////////////////////////////////////////////
// form handle actions

export function handleUserInput(event) {
  const { name, value } = event.target;
  if (name === "firstName") {
    return {
      type: UserActionType.HANDLE_USER_INPUT,
      payload: { firstName: value }
    };
  }
  if (name === "lastName") {
    return {
      type: UserActionType.HANDLE_USER_INPUT,
      payload: { lastName: value }
    };
  }
}

export function clearUserInput() {
  return {
    type: UserActionType.CLEAR_USER_INPUT
  };
}
