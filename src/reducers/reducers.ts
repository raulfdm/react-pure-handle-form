export const initialState = Object.freeze({
  card: Object.freeze({
    pristine: true,
  }),
  date: Object.freeze({
    pristine: true,
  }),
  name: Object.freeze({
    pristine: true,
  }),
});

export function reducer(state: State, action: Actions): State {
  switch (action.type) {
    case "TOUCH_CARD":
      return {
        ...state,
        card: {
          ...state.card,
          pristine: false,
        },
      };

    case "TOUCH_DATE":
      return {
        ...state,
        date: {
          ...state.date,
          pristine: false,
        },
      };

    case "TOUCH_NAME":
      return {
        ...state,
        name: {
          ...state.name,
          pristine: false,
        },
      };

    default:
      return state;
  }
}

export type TouchCardAction = {
  type: "TOUCH_CARD";
};

export type TouchDateAction = {
  type: "TOUCH_DATE";
};

export type TouchNameAction = {
  type: "TOUCH_NAME";
};

export type Actions = TouchCardAction | TouchDateAction | TouchNameAction;

export type State = typeof initialState;
