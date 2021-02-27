import { reducer, initialState } from "./reducers";

describe("Reducer", () => {
  describe("touch field", () => {
    it("sets pristine to false if the value is touched", () => {
      expect(initialState).toMatchInlineSnapshot(`
        Object {
          "card": Object {
            "pristine": true,
            "value": "",
          },
          "date": Object {
            "pristine": true,
            "value": "",
          },
          "name": Object {
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
            "pristine": false,
            "value": "",
          },
          "date": Object {
            "pristine": false,
            "value": "",
          },
          "name": Object {
            "pristine": false,
            "value": "",
          },
        }
      `);
    });
  });
  it("changes field value", () => {
    expect(initialState).toMatchInlineSnapshot(`
    Object {
      "card": Object {
        "pristine": true,
        "value": "",
      },
      "date": Object {
        "pristine": true,
        "value": "",
      },
      "name": Object {
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
});
