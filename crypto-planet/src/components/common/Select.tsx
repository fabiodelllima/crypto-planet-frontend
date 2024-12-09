interface Option {
  value: string;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
  label?: string;
}

const Select = ({ options, label, ...props }: SelectProps) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-greyPrimary text-sm">{label}</label>}
      <select
        className="px-4 py-2 bg-[#111] border border-gray-700 text-gray-400 rounded-lg 
          appearance-none cursor-pointer hover:border-gray-600 transition-colors
          focus:outline-none focus:ring-1 focus:ring-gray-600
          bg-[url('/icons/chevron-down.svg')] bg-no-repeat bg-right-4 pr-10"
        {...props}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="bg-[#111111] text-gray-400 hover:bg-gray-800"
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
