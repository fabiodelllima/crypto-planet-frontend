type BaseInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">;

interface InputProps extends BaseInputProps {
  inputType: "primary" | "secondary";
  inputSize: "small" | "medium" | "large";
  label?: string;
  icon?: string;
}

const STYLE_VARIANTS: Record<InputProps["inputType"], string> = {
  primary:
    "bg-inputBackground border-borderGray text-white hover:border-bluePrimary",
  secondary:
    "bg-black border-greySecondary text-white hover:border-greyPrimary",
} as const;

const SIZE_VARIANTS: Record<InputProps["inputSize"], string> = {
  large: "px-10 py-5",
  medium: "px-6 py-3",
  small: "px-4 py-2",
} as const;

const Input = ({
  label,
  icon,
  inputType = "primary",
  inputSize = "medium",
  className = "",
  ...props
}: InputProps) => {
  const type = STYLE_VARIANTS[inputType];
  const size = SIZE_VARIANTS[inputSize];

  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-greyPrimary text-sm">{label}</label>}
      <div className="relative">
        <input
          {...props}
          className={`w-full rounded-lg transition-colors focus:outline-none focus:ring-1 focus:ring-bluePrimary ${type} ${size} ${className}`}
        />
        {icon && (
          <img
            src={icon}
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
            alt="Input icon"
          />
        )}
      </div>
    </div>
  );
};

export default Input;
