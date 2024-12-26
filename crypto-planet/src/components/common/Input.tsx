interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: string;
}

const Input = ({ label, icon, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-greyPrimary text-sm">{label}</label>}
      <div className="relative">
        <input
          {...props}
          className="w-full p-3 bg-inputBackground border border-borderGray text-white rounded-lg placeholder-greyPrimary"
        />
        {icon && (
          <img
            src={icon}
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
            alt="X"
          />
        )}
      </div>
    </div>
  );
};

export default Input;
