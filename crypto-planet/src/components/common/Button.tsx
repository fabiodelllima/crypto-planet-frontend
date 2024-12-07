import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button = ({
  variant = "primary",
  className = "",
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={`
        px-4 py-2 rounded font-medium transition
        ${
          variant === "primary"
            ? `bg-blueAccent text-white hover:bg-opacity-80 ${
                disabled ? "opacity-50 cursor-not-allowed" : ""
              }`
            : `border border-gray-500 text-gray-200 hover:bg-gray-700 ${
                disabled ? "opacity-50 cursor-not-allowed" : ""
              }`
        }
        ${className}
      `}
    >
      {props.children}
    </button>
  );
};

export default Button;
