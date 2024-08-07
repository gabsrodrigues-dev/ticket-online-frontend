import { Link } from "react-router-dom";

export default function ProductCard({
  title,
  description,
  redirect,
  price
}) {
  return (
    <Link to={redirect} className="w-full flex flex-col shadow-md rounded-2xl overflow-hidden">
      <div className="min-h-40 bg-gray-300">
        {/* <img src={image} alt={title} className="w-full h-full object-cover" /> */}
        <div className="w-full h-full bg-gray-300"></div>
      </div>
      <div className="w-full flex flex-col bg-white items-end p-4">
        <div className="w-full flex flex-col">
          <span className="font-bold text-lg">{title}</span>
          <span className="text-sm">{description}</span>
        </div>
        <div className="flex gap-1 items-end">
          <span className="text-sm leading-none">R$</span>
          <span className="text-xl leading-none">{price}</span>
        </div>
      </div>
    </Link>
  );
}
