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
            ? `bg-blueAccent text-textPrimary hover:bg-opacity-80 ${
                disabled ? "opacity-50 cursor-not-allowed" : ""
              }`
            : `border border-borderGray text-textPrimary hover:bg-container ${
                disabled ? "opacity-50 cursor-not-allowed" : ""
              }`
        }
        ${className}
      `}
    />
  );
};

export default Button;
