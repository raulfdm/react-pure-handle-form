import { FormEvent } from "react";
import { Fields, fieldNames } from "./reducers";
import { useFormHandler } from "./reducers/useFormHandler";

const fieldValidationMap = {
  [fieldNames.CARD]: (value: string): string | undefined => {
    if (value.length < 3) {
      return "Card Must have at least length of 3";
    }
  },
  [fieldNames.NAME]: (value: string): string | undefined => {
    return;
  },
  [fieldNames.DATE]: (value: string): string | undefined => {
    return;
  },
};

function App() {
  const { state, actions } = useFormHandler();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Input Tests</h1>
      </header>
      <main>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <fieldset
            onChange={(e: FormEvent<HTMLFieldSetElement>) => {
              const { name, value } = e.target as HTMLInputElement;

              actions.changeValue(name as Fields, value);
            }}
            onFocus={(e: FormEvent<HTMLFieldSetElement>) => {
              const { name } = e.target as HTMLInputElement;
              actions.touchField(name as Fields);
            }}
            onBlur={(e: FormEvent<HTMLFieldSetElement>) => {
              const { name, value } = e.target as HTMLInputElement;
              const error = fieldValidationMap[name as Fields](value);

              console.log({ error, name, value });

              actions.validateField(name as Fields, error);
            }}
          >
            <input
              type="text"
              name={fieldNames.CARD}
              placeholder="0000 0000 0000 0000"
            />
            <input type="text" name={fieldNames.DATE} placeholder="MM/YY" />
            <input type="text" name={fieldNames.NAME} placeholder="John Doe" />
          </fieldset>

          <button type="submit">Pay 600</button>
        </form>

        <br />
        <br />
        <pre>
          <code>{JSON.stringify(state, null, 2)}</code>
        </pre>
      </main>
    </div>
  );
}

export default App;
