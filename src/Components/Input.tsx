import clsx from "clsx";
import { LucideIcon } from "lucide-react";
import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: "string";
  variant: "default" | "error" | "success";
  icon?: LucideIcon;
};

function Input({
  label,
  variant = "default",
  icon: Icon,
  ...props
}: InputProps) {
  const variantClasses = {
    default: "border-gray-300 focus:border-blue-500 focus:ring-blue-500",
    error:
      "border-red-500 focus:border-red-600 focus:ring-red-500 placeholder-red-600",
    success:
      "border-green-500 focus:border-green-600 focus:ring-green-500 placeholder-green-600",
  };

  return (
    <div className="w-full flex flex-col p-2">
      {label && <label className="text-gray-300 text-sm">{label}</label>}
      <div className="relative w-full flex justify-center">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        )}
        <input
          className={clsx(
            "w-full px-3 py-2 rounded-md outline-none focus:ring-2 transition-all",
            variantClasses[variant],
            Icon ? "pl-10" : "pl-4"
          )}
          aria-invalid={variant === "error"}
          {...props}
        />
      </div>
    </div>
  );
}

export default Input;
