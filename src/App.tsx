import { Beef } from "./components/Beef";
import { getAllBeefs } from "./util/getAllBeefs";

export function App() {
  const beefs = getAllBeefs();
  return (
    <div>
      <h1>Every Beef!</h1>
      {beefs.map((beef) => (
        <Beef key={beef} id={beef} />
      ))}
    </div>
  );
}
