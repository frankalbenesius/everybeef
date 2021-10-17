import { useState } from "react";
import { Beef } from "./components/Beef";

const beefs = ["00BEEF", "0BEEF0", "BEEF00"];

export function App() {
  return (
    <div>
      <h1>Every Beef!</h1>
      {beefs.map((beef) => (
        <Beef key={beef} id={beef} />
      ))}
    </div>
  );
}
