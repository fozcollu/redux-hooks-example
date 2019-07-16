import { createStore } from "redux";
import reducer from "./reducer";
import { create } from "redux-react-hook";

export function makeStore() {
  return createStore(reducer, INITIAL_STATE);
}

export const INITIAL_STATE = {
  lastUpdated: 0,
  todos: [
    "Make the fire!",
    "Fix the breakfast!",
    "Wash the dishes!",
    "Do the mopping!"
  ]
};

export const { StoreContext, useDispatch, useMappedState } = create();
