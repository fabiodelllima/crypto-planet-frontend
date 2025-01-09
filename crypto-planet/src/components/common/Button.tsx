import { ButtonHTMLAttributes, useEffect, useRef, useState } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  styleType?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "badge"
    | "footerIcon"
    | "floating"
    | "pagination"
    | "logout";
  size?:
    | "footerIcon"
    | "badge"
    | "x-small"
    | "small"
    | "medium"
    | "large"
    | "floating"
    | "pagination";
  iconSide?: "left" | "right";
  disabled?: boolean;
  loading?: boolean;
  formButton?: boolean;
  active?: boolean;
}

const Button = ({
  styleType = "primary",
  size = "medium",
  className = "",
  disabled = false,
  children,
  iconSide,
  loading = false,
  formButton = false,
  active = false,
  ...props
}: ButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [style, setStyle] = useState("");
  const [disabledStyle, setDisabledStyle] = useState("");
  const [buttonSize, setButtonSize] = useState("");

  useEffect(() => {
    switch (styleType) {
      case "primary":
        setStyle("bg-bluePrimary text-white hover:bg-opacity-80");
        setDisabledStyle(
          "bg-bluePrimary text-white opacity-50 cursor-not-allowed"
        );
        break;
      case "secondary":
        setStyle(
          "bg-transparent border border-transparent text-bluePrimary hover:border-bluePrimary"
        );
        setDisabledStyle(
          "bg-transparent border border-transparent text-bluePrimary opacity-50 cursor-not-allowed"
        );
        break;
      case "tertiary":
        setStyle("bg-transparent text-greyPrimary hover:text-white px-2");
        setDisabledStyle(
          "bg-transparent text-greyPrimary px-2 opacity-50 cursor-not-allowed"
        );
        break;
      case "badge":
        setStyle(
          "bg-black border border-greySecondary hover:border-b-greyPrimary"
        );
        setDisabledStyle(
          "bg-black border border-greySecondary opacity-50 cursor-not-allowed"
        );
        break;
      case "footerIcon":
        setStyle("bg-transparent hover:bg-greySecondary");
        break;
      case "floating":
        setStyle(
          "fixed right-8 bottom-8 bg-bluePrimary rounded-full flex items-center justify-center text-white shadow-lg lg:hidden hover:bg-opacity-90"
        );
        break;
      case "pagination":
        if (active) {
          setStyle("bg-bluePrimary text-white border border-bluePrimary");
          setDisabledStyle(
            "bg-bluePrimary text-white border border-bluePrimary"
          );
        } else {
          setStyle(
            "bg-transparent border border-transparent text-greyPrimary hover:text-bluePrimary hover:border-bluePrimary"
          );
          setDisabledStyle(
            "bg-transparent border border-transparent text-greySecondary"
          );
        }
        break;
      case "logout":
        setStyle(
          "w-full text-left px-4 py-2 text-white hover:bg-greySecondary transition-colors"
        );
        setDisabledStyle(
          "w-full text-left px-4 py-2 text-greyPrimary opacity-50 cursor-not-allowed"
        );
        break;
    }

    switch (size) {
      case "large":
        setButtonSize("px-10 py-5 rounded-lg");
        break;
      case "medium":
        setButtonSize("px-10 py-5 rounded-lg");
        break;
      case "small":
        setButtonSize("px-6 py-3 rounded-lg");
        break;
      case "x-small":
        setButtonSize("px-4 py-2 rounded-lg");
        break;
      case "badge":
        setButtonSize("px-0 py-1 rounded-lg");
        break;
      case "footerIcon":
        setButtonSize("p-2 rounded-lg");
        break;
      case "floating":
        setButtonSize("w-20 h-20 rounded-full");
        break;
      case "pagination":
        setButtonSize("w-8 h-8 rounded-lg");
        break;
    }
  }, [styleType, size, active]);

  return (
    <button
      {...props}
      ref={formButton ? buttonRef : null}
      disabled={disabled || loading}
      className={`font-medium transition ${buttonSize} ${className} ${
        disabled || loading ? disabledStyle : style
      }`}
    >
      {iconSide === "left" && children}
      {loading ? <div className="loader" /> : children}
      {iconSide === "right" && children}
    </button>
  );
};

export default Button;
