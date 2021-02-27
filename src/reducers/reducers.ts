const FIELD_CARD = "card";
const FIELD_NAME = "name";
const FIELD_DATE = "date";

export const initialState = Object.freeze({
  [FIELD_CARD]: Object.freeze({
    pristine: true,
  }),
  [FIELD_NAME]: Object.freeze({
    pristine: true,
  }),
  [FIELD_DATE]: Object.freeze({
    pristine: true,
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

    default:
      return state;
  }
}

export type Fields = typeof FIELD_CARD | typeof FIELD_NAME | typeof FIELD_DATE;

export type TouchField = {
  type: "TOUCH_FIELD";
  payload: {
    fieldName: Fields;
  };
};

export type Actions = TouchField;

export type State = typeof initialState;
