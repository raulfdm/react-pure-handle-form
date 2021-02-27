import { useReducer } from "react";

import { reducer, initialState } from "./reducers";

export function useFormHandler() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return [state, dispatch];
}
