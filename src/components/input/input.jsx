import { IMaskInput } from "react-imask";

export default function InputComponent({
  name,
  label,
  placeholder,
  type,
  onInputChange
}) {
  return (
    <div className="w-full flex flex-col gap-1">
      <span className="text-md">{label}</span>
      <div className="bg-[#f8faf9] rounded-full p-3 px-5 border border-[#c9d3d0]">
        {type === "phone" ? (
          <IMaskInput
            type="text"
            name={name}
            className="bg-[#f8faf9] w-full"
            placeholder={placeholder}
            onChange={onInputChange}
            mask="(00) 0 0000-0000"
          />
        ) : (
          <input
            type="text"
            name={name}
            className="bg-[#f8faf9] w-full"
            onChange={onInputChange}
            placeholder={placeholder}
          />
        )}
      </div>
    </div>
  );
}
