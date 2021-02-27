const FIELD_CARD = "card";
const FIELD_NAME = "name";
const FIELD_DATE = "date";

export const initialState = Object.freeze({
  [FIELD_CARD]: Object.freeze({
    pristine: true,
    value: "",
  }),
  [FIELD_NAME]: Object.freeze({
    pristine: true,
    value: "",
  }),
  [FIELD_DATE]: Object.freeze({
    pristine: true,
    value: "",
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

export type Actions = TouchField | OnFieldChange;

export type State = typeof initialState;
