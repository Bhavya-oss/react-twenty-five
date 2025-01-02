import { ACTION_CREATER } from "./ActionTYpe";

const initialValue = {
  todo: [
    { id: 1, name: "Apple" },
    { id: 2, name: "Mango" },
    { id: 3, name: "Orange" },
    { id: 4, name: "Parroat" },
    { id: 5, name: "Pickock" },
    { id: 6, name: "Crow" },
  ],
  count: 0,
  userData: [],
};
export const reducerCounter = (state = initialValue, action) => {
  switch (action.type) {
    // case ACTION_CREATER.ADD:
    case ACTION_CREATER.INCREMENT:
      return { ...state, count: state.count + action.payload };
    case ACTION_CREATER.DECREMENT:
      return { ...state, count: state.count - action.payload };
    case ACTION_CREATER.RESET:
      return { ...state, count: action.payload };
    case ACTION_CREATER.FETCH_USERS:
      return { ...state, userData: action.payload };
    case ACTION_CREATER.ADD:
      return {};
    default:
      return state;
  }
};
