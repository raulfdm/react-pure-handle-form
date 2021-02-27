import { Actions, Fields } from "./types";

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
    validateField(fieldName: Fields, errorMessage?: string): void {
      dispatch({
        type: "ON_FIELD_ERROR",
        payload: { fieldName, errorMessage },
      });
    },
  };
}
