import { IMaskInput } from "react-imask";

export default function InputComponent({
  name,
  label,
  placeholder,
  type,
  onInputChange,
  value
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
            mask="(00) 00000-0000"
            value={value}
            onAccept={(value, mask) => {
              onInputChange({ target: { name, value } });
            }}
          />
        ) : (
          <input
            type={type}
            name={name}
            className="bg-[#f8faf9] w-full"
            onChange={onInputChange}
            value={value}
            placeholder={placeholder}
          />
        )}
      </div>
    </div>
  );
}
