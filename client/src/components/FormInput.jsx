const FormInput = ({ label, type = "text", name, value, onChange, required, placeholder = "" }) => {
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
        required={required ? true : false}
        placeholder={placeholder}
        className="w-full px-4 py-2 mt-2 text-black bg-white border-2 border-black rounded-lg focus:ring-emerald-300 focus:outline-none focus:ring"
      />
    </div>
  );
};

export default FormInput;