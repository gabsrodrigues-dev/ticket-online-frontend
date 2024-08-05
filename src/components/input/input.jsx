export default function InputComponent({label, placeholder}) {
    return (
        <div className="w-full flex flex-col gap-1">
            <span className="text-md">{label}</span>
            <div className="bg-[#f8faf9] rounded-full p-3 px-5 border border-[#c9d3d0]">
                <input className="bg-[#f8faf9] w-full" type="text" placeholder={placeholder}/>
            </div>
        </div>
    )
}