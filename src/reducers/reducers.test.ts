import { reducer, initialState, Actions } from "./reducers";

describe("Reducer", () => {
  describe("Card Actions", () => {
    it("sets pristine to false if the value is touched", () => {
      const action: Actions = {
        type: "TOUCH_CARD",
      };

      expect(initialState.card).toEqual(
        expect.objectContaining({
          pristine: true,
        })
      );
      const nextState = reducer(initialState, action);

      expect(nextState.card).toEqual(
        expect.objectContaining({
          pristine: false,
        })
      );
    });
  });

  describe("Date Actions", () => {
    it("sets pristine to false if the value is touched", () => {
      const action: Actions = {
        type: "TOUCH_DATE",
      };

      expect(initialState.date).toEqual(
        expect.objectContaining({
          pristine: true,
        })
      );
      const nextState = reducer(initialState, action);

      expect(nextState.date).toEqual(
        expect.objectContaining({
          pristine: false,
        })
      );
    });
  });

  describe("Name Actions", () => {
    it("sets pristine to false if the value is touched", () => {
      const action: Actions = {
        type: "TOUCH_NAME",
      };

      expect(initialState.name).toEqual(
        expect.objectContaining({
          pristine: true,
        })
      );
      const nextState = reducer(initialState, action);

      expect(nextState.name).toEqual(
        expect.objectContaining({
          pristine: false,
        })
      );
    });
  });
});
