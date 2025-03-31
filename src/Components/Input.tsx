import clsx from "clsx";
import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  placeholder?: string;
  variant: "default" | "error" | "success";
  icon?: string;
};

function Input({ variant = "default", icon, ...props }: InputProps) {
  const variantClasses = {
    default: "border-gray-300 focus:border-blue-500 focus:ring-blue-500",
    error:
      "border-red-500 focus:border-red-600 focus:ring-red-500 placeholder-red-600",
    success:
      "border-green-500 focus:border-green-600 focus:ring-green-500 placeholder-green-600",
  };

  return (
    <div className="relative w-full flex justify-center">
      {icon && (
        <img
          src={icon}
          alt="Ícone"
          className="absolute left-6 top-1/2 transform -translate-y-1/2 w-5 h-5"
        />
      )}
      <input
        className={clsx(
          "w-11/12 px-3 py-2 rounded-md outline-none focus:ring-2 transition-all",
          variantClasses[variant],
          icon ? "pl-10" : "pl-4"
        )}
        {...props}
      />
    </div>
  );
}

export default Input;
