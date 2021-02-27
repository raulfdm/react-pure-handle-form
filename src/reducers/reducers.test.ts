import { reducer, initialState } from "./reducers";

describe("Reducer", () => {
  afterEach(() => {
    expect(initialState).toBe(initialState);
  });

  it("sets pristine to false if the value is touched", () => {
    let nextState = reducer(initialState, {
      type: "TOUCH_FIELD",
      payload: {
        fieldName: "card",
      },
    });

    expect(nextState.card).toEqual(
      expect.objectContaining({
        pristine: false,
      })
    );

    nextState = reducer(nextState, {
      type: "TOUCH_FIELD",
      payload: {
        fieldName: "date",
      },
    });

    expect(nextState.date).toEqual(
      expect.objectContaining({
        pristine: false,
      })
    );

    nextState = reducer(nextState, {
      type: "TOUCH_FIELD",
      payload: {
        fieldName: "name",
      },
    });

    expect(nextState.name).toEqual(
      expect.objectContaining({
        pristine: false,
      })
    );

    expect(nextState).toMatchInlineSnapshot(`
      Object {
        "card": Object {
          "errorMessage": "",
          "hasError": false,
          "pristine": false,
          "value": "",
        },
        "date": Object {
          "errorMessage": "",
          "hasError": false,
          "pristine": false,
          "value": "",
        },
        "name": Object {
          "errorMessage": "",
          "hasError": false,
          "pristine": false,
          "value": "",
        },
      }
    `);
  });

  it("changes field value", () => {
    let nextState = reducer(initialState, {
      type: "ON_FIELD_CHANGE",
      payload: {
        fieldName: "card",
        value: "0000 0000 0000 0000",
      },
    });

    expect(nextState.card).toEqual(
      expect.objectContaining({
        pristine: false,
        value: "0000 0000 0000 0000",
      })
    );
  });

  it("sets error for a field", () => {
    const errorMessage = "This field has an incorrect value";
    let nextState = reducer(initialState, {
      type: "ON_FIELD_ERROR",
      payload: {
        fieldName: "card",
        errorMessage,
      },
    });

    expect(nextState.card).toEqual(
      expect.objectContaining({
        pristine: false,
        errorMessage,
        hasError: true,
      })
    );
  });

  it("cleans error when message is undefined", () => {
    let nextState = reducer(initialState, {
      type: "ON_FIELD_ERROR",
      payload: {
        fieldName: "card",
        errorMessage: undefined,
      },
    });

    expect(nextState.card).toEqual(
      expect.objectContaining({
        pristine: false,
        errorMessage: "",
        hasError: false,
      })
    );
  });
});
