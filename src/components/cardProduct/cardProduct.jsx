export default function CardProduct({
  title,
  description,
  price
}) {
  return (
    <div className="w-full flex flex-col bg-black shadow-md rounded-2xl overflow-hidden">
      <div className="min-h-40"></div>
      <div className="w-full flex flex-col bg-[#fff] items-end p-4">
        <div className="w-full flex flex-col">
          <span className="font-bold text-lg">{title}</span>
          <span className="font-medium text-sm">{description}</span>
        </div>
        <div className="flex gap-2 items-end">
          <span className="font-medium text-sm leading-none">R$</span>
          <span className="font-medium text-xl leading-none">{price}</span>
        </div>
      </div>
    </div>
  );
}
