import { ButtonHTMLAttributes, useRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType:
    | "primary"
    | "secondary"
    | "tertiary"
    | "badge"
    | "footerIcon"
    | "floating"
    | "pagination"
    | "logout";
  buttonSize:
    | "footerIcon"
    | "badge"
    | "xSmall"
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

type StyleFunction = (active: boolean) => string;

interface StyleVariant {
  default: string | StyleFunction;
  disabled: string | StyleFunction;
}

const STYLE_VARIANTS: Record<ButtonProps["buttonType"], StyleVariant> = {
  primary: {
    default: "bg-bluePrimary text-white hover:bg-opacity-80",
    disabled: "bg-bluePrimary text-white opacity-50 cursor-not-allowed",
  },
  secondary: {
    default:
      "bg-transparent border border-transparent text-bluePrimary hover:border-bluePrimary",
    disabled:
      "bg-transparent border border-transparent text-bluePrimary opacity-50 cursor-not-allowed",
  },
  tertiary: {
    default: "bg-transparent text-greyPrimary hover:text-white px-2",
    disabled:
      "bg-transparent text-greyPrimary px-2 opacity-50 cursor-not-allowed",
  },
  badge: {
    default: "bg-black border border-greySecondary hover:border-b-greyPrimary",
    disabled:
      "bg-black border border-greySecondary opacity-50 cursor-not-allowed",
  },
  footerIcon: {
    default: "bg-transparent hover:bg-greySecondary",
    disabled: "bg-transparent opacity-50 cursor-not-allowed",
  },
  floating: {
    default:
      "fixed right-8 bottom-8 bg-bluePrimary rounded-full flex items-center justify-center text-white shadow-lg lg:hidden hover:bg-opacity-90",
    disabled:
      "fixed right-8 bottom-8 bg-bluePrimary rounded-full flex items-center justify-center text-white shadow-lg lg:hidden opacity-50 cursor-not-allowed",
  },
  pagination: {
    default: (active: boolean) =>
      active
        ? "bg-bluePrimary text-white border border-bluePrimary"
        : "bg-transparent border border-transparent text-greyPrimary hover:text-bluePrimary hover:border-bluePrimary",
    disabled: (active: boolean) =>
      active
        ? "bg-bluePrimary text-white border border-bluePrimary"
        : "bg-transparent border border-transparent text-greySecondary",
  },
  logout: {
    default:
      "w-full text-left px-4 py-2 text-white hover:bg-greySecondary transition-colors",
    disabled:
      "w-full text-left px-4 py-2 text-greyPrimary opacity-50 cursor-not-allowed",
  },
} as const;

const SIZE_VARIANTS: Record<ButtonProps["buttonSize"], string> = {
  large: "px-10 py-5 rounded-lg",
  medium: "px-10 py-5 rounded-lg",
  small: "px-6 py-3 rounded-lg",
  xSmall: "px-4 py-2 rounded-lg",
  badge: "px-0 py-1 rounded-lg",
  footerIcon: "p-2 rounded-lg",
  floating: "w-20 h-20 rounded-full",
  pagination: "w-8 h-8 rounded-lg",
} as const;

const Button = ({
  buttonType = "primary",
  buttonSize = "medium",
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
  const size = SIZE_VARIANTS[buttonSize];

  const getStyle = () => {
    const variant = STYLE_VARIANTS[buttonType];
    const state = disabled || loading ? "disabled" : "default";
    const style = variant[state];
    return typeof style === "function" ? style(active) : style;
  };

  return (
    <button
      {...props}
      ref={formButton ? buttonRef : null}
      disabled={disabled || loading}
      className={`font-medium transition ${getStyle()} ${size} ${className}`}
    >
      {iconSide === "left" && children}
      {loading ? <div className="loader" /> : children}
      {iconSide === "right" && children}
    </button>
  );
};

export default Button;
