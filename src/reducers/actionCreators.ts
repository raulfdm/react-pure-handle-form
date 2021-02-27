import { Actions, Fields } from "./reducers";

export function createActions(dispatch: React.Dispatch<Actions>) {
  return {
    touchField(fieldName: Fields): void {
      dispatch({
        type: "TOUCH_FIELD",
        payload: { fieldName },
      });
    },
    changeValue(fieldName: Fields, value: string): void {
      dispatch({
        type: "ON_FIELD_CHANGE",
        payload: { fieldName, value },
      });
    },
  };
}
