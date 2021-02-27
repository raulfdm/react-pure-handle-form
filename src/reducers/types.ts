export type Fields = "card" | "name" | "date";

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

type FieldState = {
  pristine: boolean;
  value: string;
  errorMessage: string;
  hasError: boolean;
};

export type State = {
  [field: string]: FieldState;
};
