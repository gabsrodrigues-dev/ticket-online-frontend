import { Link } from "react-router-dom";

export default function Header() {
    return(
    <header className="flex w-full justify-between gap-3 text-black">
        <Link to="/" className="flex justify-center items-center gap-3 w-10 h-10 rounded-xl bg-white">
            <img src="/images/header/home.svg" alt="HomePage" />
          </Link>
        <div className="flex justify-center items-center gap-3 w-12 h-12 rounded-xl">
            <img src="/images/logos/colored-logo.png" alt="HomePage" />
          </div>
          </header>
    )
} 