import Axios from "axios";

const BASE_URL = `http://rem-rest-api.herokuapp.com/api`;

export function fetchUsers() {
  return Axios.get(`${BASE_URL}/users`, {
    withCredentials: true,
    params: {
      limit: 1000
    }
  });
}

export function postUsers({ firstName, lastName }) {
  return Axios.post(
    `${BASE_URL}/users`,
    { firstName, lastName },
    { withCredentials: true }
  );
}

export function removeUser(userId) {
  return Axios.delete(`${BASE_URL}/users/${userId}`, { withCredentials: true });
}
