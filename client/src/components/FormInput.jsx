const FormInput = ({ label, type = "text", name, value, onChange, onBlur, invalidMsg = "", ...rest }) => {
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="text-base font-semibold text-left text-indigo-500"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...rest}
        className="w-full px-4 py-2 mt-2 text-black bg-white border-2 border-black rounded-lg focus:ring-emerald-300 focus:outline-none focus:ring"
      />
      <p className="text-sm font-medium text-pink-500">{invalidMsg}</p>
    </div>
  );
};

export default FormInput;