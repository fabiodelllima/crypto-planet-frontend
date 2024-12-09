import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  styleType?: "primary" | "secondary" | "tertiary";
}

const Button = ({
  styleType,
  className,
  disabled = false,
  ...props
}: ButtonProps) => {
  const getButtonStyles = () => {
    const defaultButton = "px-10 py-5 rounded-lg font-medium transition";
    const disabledButton = disabled ? "opacity-50 cursor-not-allowed" : "";

    let buttonStyle = "";

    switch (styleType) {
      case "primary":
        buttonStyle = `bg-bluePrimary text-white hover:bg-opacity-80 ${disabledButton}`;
        break;
      case "secondary":
        buttonStyle = `bg-transparent border border-transparent text-bluePrimary hover:border-bluePrimary ${disabledButton}`;
        break;
      case "tertiary":
        buttonStyle = `bg-transparent text-greyPrimary hover:text-white px-2 ${disabledButton}`;
        break;
      default:
        buttonStyle = `bg-transparent text-greyPrimary border border-greySecondary rounded-lg hover:text-bluePrimary hover:border-bluePrimary ${disabledButton}`;
    }

    return `${defaultButton} ${buttonStyle} ${className}`;
  };

  return (
    <button {...props} disabled={disabled} className={getButtonStyles()} />
  );
};

export default Button;
