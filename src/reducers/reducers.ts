export const FIELD_CARD = "card";
export const FIELD_NAME = "name";
export const FIELD_DATE = "date";

export const initialState = Object.freeze({
  [FIELD_CARD]: Object.freeze({
    pristine: true,
    value: "",
    errorMessage: "",
    hasError: false,
  }),
  [FIELD_NAME]: Object.freeze({
    pristine: true,
    value: "",
    errorMessage: "",
    hasError: false,
  }),
  [FIELD_DATE]: Object.freeze({
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

export type Fields = typeof FIELD_CARD | typeof FIELD_NAME | typeof FIELD_DATE;

type TouchField = {
  type: "TOUCH_FIELD";
  payload: {
    fieldName: Fields;
  };
};

type OnFieldChange = {
  type: "ON_FIELD_CHANGE";
  payload: {
    fieldName: Fields;
    value: string;
  };
};

type FieldHasError = {
  type: "ON_FIELD_ERROR";
  payload: {
    fieldName: Fields;
    errorMessage: string | undefined;
  };
};

export type Actions = TouchField | OnFieldChange | FieldHasError;

export type State = typeof initialState;
