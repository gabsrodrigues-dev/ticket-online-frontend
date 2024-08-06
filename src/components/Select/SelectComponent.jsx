import { useState } from "react";
import { HiMiniCheck } from "react-icons/hi2";

export default function SelectComponent({ label, id, onChange }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    onChange(id, !isSelected);
    setIsSelected(!isSelected);
  };

  return (
    <div
      className="flex gap-2 items-center cursor-pointer w-fit"
      onClick={handleClick}>
      <span className="flex justify-center items-center max-sm:hidden">
        <div
          className={`flex items-center justify-center transition-all duration-300 w-6 h-6 rounded-[3px] border ${
            isSelected
              ? "bg-[#6D9773] border-[#6D9773]"
              : "bg-[#D9D9D9]  border-[#D9D9D9]"
          }`}>
          <span className="flex items-center justify-center transition-all duration-300 w-6 h-6 rounded-[3px] overflow-hidden">
            <HiMiniCheck
              className={`transition-all text-md ease-in-out duration-300 text-white ${
                !isSelected && "opacity-0 translate-y-6"
              }`}
            />
          </span>
        </div>
      </span>
      <span className="text-md select-none">{label}</span>
    </div>
  );
}
