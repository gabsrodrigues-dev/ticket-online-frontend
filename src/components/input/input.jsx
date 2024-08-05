export default function InputComponent({ label, placeholder, type }) {
  if (type === phone)
    return (
<div className="w-full flex flex-col gap-1">
      <span className="text-md">{label}</span>
      <div className="bg-[#f8faf9] rounded-full p-3 px-5 border border-[#c9d3d0]">
      <IMaskInput
        type="text"
        name="phone"
        placeholder="Digite seu telefone"
        className={`p-3 border border-gray-300 rounded-xl`}
        mask="(00) 0 0000-0000"
      />
      </div>
    </div>
      
    );
  return (
    <div className="w-full flex flex-col gap-1">
      <span className="text-md">{label}</span>
      <div className="bg-[#f8faf9] rounded-full p-3 px-5 border border-[#c9d3d0]">
        <input
          className="bg-[#f8faf9] w-full"
          type="text"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
