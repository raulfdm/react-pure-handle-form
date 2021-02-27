import { reducer, initialState } from "./reducers";

describe("Reducer", () => {
  describe("touch field", () => {
    it("sets pristine to false if the value is touched", () => {
      expect(initialState).toMatchInlineSnapshot(`
        Object {
          "card": Object {
            "pristine": true,
          },
          "date": Object {
            "pristine": true,
          },
          "name": Object {
            "pristine": true,
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
          },
          "date": Object {
            "pristine": false,
          },
          "name": Object {
            "pristine": false,
          },
        }
      `);
    });
  });
});
