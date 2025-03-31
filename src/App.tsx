import Button from "./Components/Button";
import "./input.css";

function App() {
  return (
    <>
      <div className="bg-gray-700 w-full h-screen flex justify-center items-center">
        <div className="bg-gray-950 w-[450px] h-52 flex justify-center items-center rounded-md border-2 border-gray-800 gap-4">
          <Button variant="primary" text="Primary"></Button>
          <Button variant="secondary" text="Secondary"></Button>
          <Button variant="danger" text="Danger"></Button>
          <Button variant="sucess" text="Sucess"></Button>
        </div>
      </div>
    </>
  );
}

export default App;
