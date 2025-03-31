import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "danger" | "success";
  text: string;
};

export default function Button({ text, variant = "primary" }: ButtonProps) {
  const variantClasses = {
    primary: "bg-blue-500 hover:bg-blue-600",
    secondary: "bg-gray-500 hover:bg-gray-600",
    danger: "bg-red-500 hover:bg-red-600",
    sucess: "bg-green-700 hover:bg-green-800",
  };
  return (
    <button
      className={clsx(
        "px-4 py-2 rounded-md font-semibold text-white",
        variantClasses[variant]
      )}
      onClick={() => alert(`Você clicou em ${variant}`)}
    >
      {text}
    </button>
  );
}
