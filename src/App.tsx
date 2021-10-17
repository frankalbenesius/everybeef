import { useState } from "react";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Every Beef!</h1>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        Clicks: {count}
      </button>
    </div>
  );
}
