import { ChangeEvent, FormEvent } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Input Tests</h1>
      </header>
      <main>
        <fieldset
          onChange={(e: FormEvent<HTMLFieldSetElement>) => {
            console.log((e.target as HTMLInputElement).name);
          }}
          onFocus={(e: FormEvent<HTMLFieldSetElement>) => {
            const { name } = e.target as HTMLInputElement;
            console.log({ name });
          }}
        >
          <input type="text" name="card" placeholder="0000 0000 0000 0000" />
          <input type="text" name="date" placeholder="MM/YY" />
          <input type="text" name="name" placeholder="John Doe" />
        </fieldset>
      </main>
    </div>
  );
}

export default App;
