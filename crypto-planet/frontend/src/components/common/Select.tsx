import { ChevronDown } from "lucide-react";

interface Option {
  value: string;
  label: string;
}

type BaseSelectProps = Omit<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  "size"
>;

type SelectType = "primary" | "secondary";
type SelectSize = "small" | "medium" | "large";

interface SelectProps extends BaseSelectProps {
  selectType?: SelectType;
  selectSize?: SelectSize;
  label?: string;
  options: Option[];
}

const STYLE_VARIANTS: Record<SelectType, string> = {
  primary:
    "bg-input-background border-divider text-white hover:border-blue-primary appearance-none cursor-pointer",
  secondary:
    "bg-black border-grey-secondary text-white hover:border-grey-primary appearance-none cursor-pointer",
} as const;

const SIZE_VARIANTS: Record<SelectSize, string> = {
  large: "px-10 py-5",
  medium: "px-6 py-3",
  small: "px-4 py-2",
} as const;

const Select = ({
  options,
  label,
  selectType = "primary",
  selectSize = "medium",
  className = "",
  ...props
}: SelectProps) => {
  const type = STYLE_VARIANTS[selectType];
  const size = SIZE_VARIANTS[selectSize];

  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-grey-primary text-sm">{label}</label>}
      <div className="relative">
        <select
          className={`w-full rounded-lg transition-colors focus:outline-none focus:ring-1 focus:ring-blue-primary ${type} ${size} ${className}`}
          {...props}
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="bg-input-background text-white"
            >
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <ChevronDown className="text-grey-primary" size={20} />
        </div>
      </div>
    </div>
  );
};

export default Select;
