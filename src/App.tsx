import Button from "./Components/Button";
import Card from "./Components/Card";
import Input from "./Components/Input";
import "./input.css";
import { XCircle, CheckCircle } from "lucide-react";

function App() {
  return (
    <>
      <div className="bg-gray-700 w-full h-screen flex flex-col gap-8 justify-center items-center">
        <Card gap="gap-4" flexWrap="flex-wrap-reverse">
          <Button variant="primary" text="Primary"></Button>
          <Button variant="secondary" text="Secondary"></Button>
          <Button variant="danger" text="Danger"></Button>
          <Button variant="success" text="Success"></Button>
        </Card>
        <Card h="h-64" flexType="flex-col">
          <Input
            label="Email"
            placeholder="Digite seu email!"
            variant="default"
          />
          <Input
            label="Email"
            placeholder="Email inválido!"
            variant="error"
            icon={XCircle}
          />
          <Input
            label="Sucesso"
            placeholder="Sucesso!"
            variant="success"
            icon={CheckCircle}
          />
        </Card>
      </div>
    </>
  );
}

export default App;
