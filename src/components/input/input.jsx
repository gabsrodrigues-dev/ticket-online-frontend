export default function InputComponent({label, placeholder}) {
    return (
        <div className="w-full flex flex-col gap-1">
            <span className="text-sm">{label}</span>
            <div className="bg-[#f8faf9] rounded-full p-3 border border-[#c9d3d0]">
                <input className="bg-[#f8faf9] mx-2" type="text" placeholder={placeholder}/>
            </div>
        </div>
    )
}