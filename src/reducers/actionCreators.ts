import { Actions, Fields } from "./reducers";

export function createActions(dispatch: React.Dispatch<Actions>) {
  return {
    touchField(fieldName: Fields): void {
      dispatch({
        type: "TOUCH_FIELD",
        payload: { fieldName },
      });
    },
  };
}
