import Button from "./Components/Button";
import "./input.css";

function App() {
  function restart() {
    return alert("clicou");
  }
  return (
    <>
      <div className="bg-gray-700 w-full h-screen">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
      </div>
    </>
  );
}

export default App;
