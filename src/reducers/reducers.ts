import { Actions, State } from "./types";

export const fieldNames = {
  CARD: "card",
  NAME: "name",
  DATE: "date",
};

export const initialState = Object.freeze({
  [fieldNames.CARD]: Object.freeze({
    pristine: true,
    value: "",
    errorMessage: "",
    hasError: false,
  }),
  [fieldNames.NAME]: Object.freeze({
    pristine: true,
    value: "",
    errorMessage: "",
    hasError: false,
  }),
  [fieldNames.DATE]: Object.freeze({
    pristine: true,
    value: "",
    errorMessage: "",
    hasError: false,
  }),
});

export function reducer(state: State, action: Actions): State {
  switch (action.type) {
    case "TOUCH_FIELD": {
      const { fieldName } = action.payload;

      return {
        ...state,
        [fieldName]: {
          ...state[fieldName],
          pristine: false,
        },
      };
    }

    case "ON_FIELD_CHANGE": {
      const { fieldName, value } = action.payload;

      return {
        ...state,
        [fieldName]: {
          ...state[fieldName],
          pristine: false,
          value,
        },
      };
    }

    case "ON_FIELD_ERROR": {
      const { fieldName, errorMessage } = action.payload;

      if (typeof errorMessage === "undefined") {
        return {
          ...state,
          [fieldName]: {
            ...state[fieldName],
            pristine: false,
            hasError: false,
            errorMessage: "",
          },
        };
      }

      return {
        ...state,
        [fieldName]: {
          ...state[fieldName],
          pristine: false,
          hasError: true,
          errorMessage,
        },
      };
    }

    default:
      return state;
  }
}
