import Button from "./Components/Button";
import Input from "./Components/Input";
import "./input.css";
import IconError from "./assets/icon-error.png";
import IconSuccess from "./assets/icon-sucess.png";

function App() {
  return (
    <>
      <div className="bg-gray-700 w-full h-screen flex flex-col gap-8 justify-center items-center">
        <div className="bg-gray-950 w-[450px] h-52 flex justify-center items-center rounded-md border-2 border-gray-800 gap-4">
          <Button variant="primary" text="Primary"></Button>
          <Button variant="secondary" text="Secondary"></Button>
          <Button variant="danger" text="Danger"></Button>
          <Button variant="success" text="Success"></Button>
        </div>
        <div className="bg-gray-950 w-[450px] h-52 flex flex-col justify-center items-center rounded-md border-2 border-gray-800 gap-4">
          <Input placeholder="Digite seu nome" variant="default" />
          <Input
            placeholder="Email inválido"
            variant="error"
            icon={IconError}
          />
          <Input placeholder="Sucesso!" variant="success" icon={IconSuccess} />
        </div>
      </div>
    </>
  );
}

export default App;
