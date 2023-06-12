const Button = ({
  type = "button",
  onClick,
  align = "",
  width = "w-full",
  padding = "px-4 py-2",
  disabled,
  children,
  ...rest
}) => {
  return (
    <button
      className={`${
        disabled && "cursor-not-allowed hover:opacity-50"
      } ${align} ${width} min-h-[42px] min-w-[42px] ${padding} mb-1 mr-1 text-xl font-semibold text-black bg-emerald-200 border-2 border-black rounded-lg shadow-[0.2rem_0.2rem_black] ${
        !disabled && "hover:shadow-none hover:translate-x-1 hover:translate-y-1"
      }`}
      type={type}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
