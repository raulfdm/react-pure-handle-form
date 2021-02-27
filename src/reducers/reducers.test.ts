import { reducer, initialState } from "./reducers";

describe("Reducer", () => {
  it("sets pristine to false if the value is touched", () => {
    expect(initialState).toMatchInlineSnapshot(`
      Object {
        "card": Object {
          "errorMessage": "",
          "hasError": false,
          "pristine": true,
          "value": "",
        },
        "date": Object {
          "errorMessage": "",
          "hasError": false,
          "pristine": true,
          "value": "",
        },
        "name": Object {
          "errorMessage": "",
          "hasError": false,
          "pristine": true,
          "value": "",
        },
      }
    `);

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
    expect(initialState).toMatchInlineSnapshot(`
      Object {
        "card": Object {
          "errorMessage": "",
          "hasError": false,
          "pristine": true,
          "value": "",
        },
        "date": Object {
          "errorMessage": "",
          "hasError": false,
          "pristine": true,
          "value": "",
        },
        "name": Object {
          "errorMessage": "",
          "hasError": false,
          "pristine": true,
          "value": "",
        },
      }
    `);

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
    expect(initialState).toMatchInlineSnapshot(`
      Object {
        "card": Object {
          "errorMessage": "",
          "hasError": false,
          "pristine": true,
          "value": "",
        },
        "date": Object {
          "errorMessage": "",
          "hasError": false,
          "pristine": true,
          "value": "",
        },
        "name": Object {
          "errorMessage": "",
          "hasError": false,
          "pristine": true,
          "value": "",
        },
      }
    `);

    const errorMessage = "This field has an incorrect value";
    let nextState = reducer(initialState, {
      type: "FIELD_HAS_ERROR",
      payload: {
        fieldName: "card",
        errorMessage,
      },
    });

    expect(nextState.card).toEqual(
      expect.objectContaining({
        pristine: false,
        errorMessage,
      })
    );
  });
});
