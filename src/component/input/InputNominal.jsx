/**
 * Button Component
 * @type {tipedata}
 * @param {Object} props
 * @param {String} props.label
 * @param {String} props.placeholder
 * @param {String} props.id
 * @param {String} props.icon
 * @return {JSX.Elements}
 *
 */

const InputNominal = ({ label, type, placeholder, id, icon }) => {
  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className="mb-2 block text-base font-semibold text-[#0B132A]"
      >
        {label}
      </label>
      <div className="relative flex items-center">
        {icon && (
          <img
            src={icon}
            alt=""
            className="pointer-events-none absolute left-4 h-5 w-5"
          />
        )}

        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className={`focus:border-primary w-full rounded-md border border-gray-200 bg-transparent py-3 transition outline-none ${icon ? "pl-12" : "pl-4"} pr-4`}
        />
      </div>
    </div>
  );
};

export default InputNominal;
