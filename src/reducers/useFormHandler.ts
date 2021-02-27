import { useReducer } from "react";
import { createActions } from "./actionCreators";

import { reducer, initialState } from "./reducers";

export function useFormHandler() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actions = createActions(dispatch);

  return { state, actions };
}
