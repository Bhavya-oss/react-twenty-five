import { ACTION_CREATER } from "./ActionTYpe";

export const add = (id) => {
  return { type: ACTION_CREATER.ADD, payload: id };
};

export const Delete = (id) => {
  return { type: ACTION_CREATER.DELETE, payload: id };
};

export const moveup = (indx) => {
  return { type: ACTION_CREATER.MOVEUP, payload: indx };
};

export const movebottom = (indx) => {
  return { type: ACTION_CREATER.MOVEBOTTUM, payload: indx };
};

export const update = (id) => {
  return { type: ACTION_CREATER.UPDATE, payload: id };
};

export const increment = (value) => {
  console.log("redux store counter", value);

  return { type: ACTION_CREATER.INCREMENT, payload: value };
};

export const decrement = (value) => {
  return { type: ACTION_CREATER.DECREMENT, payload: value };
};

export const reset = (value) => {
  return { type: ACTION_CREATER.RESET, payload: value };
};

export const fetchUsers = () => {
  return async (dispatch) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return dispatch({ type: ACTION_CREATER.FETCH_USERS, payload: data });
  };
};
