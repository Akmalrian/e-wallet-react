import { useState } from "react"; // PERBAIKAN: Import useState
import { Link } from "react-router";

function DropdownLanding() {
  return (
    <div>
      <Link to={"/login"}>
        <button className="text-primary h-11 w-full rounded-[5px] bg-white font-medium transition hover:bg-gray-200">
          Sign In
        </button>
      </Link>
      <Link to={"/register"}>
        <button className="text-primary h-11 w-full rounded-[5px] bg-white font-medium transition hover:bg-gray-200">
          Sign Up
        </button>
      </Link>
    </div>
  );
}

function HeaderLandingPage() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropDrown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-primary sticky top-0 z-50 w-full text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <img className="h-8 w-8" src="/image/MoneyWallet.png" alt="Logo" />
          <span className="font-nunitoSans text-xl font-bold">E-Wallet</span>
        </div>

        <div className="relative flex items-center gap-4">
          <div
            className="flex cursor-pointer items-center md:hidden"
            onClick={toggleDropDrown}
          >
            <svg
              className="h-8 w-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </div>

          <div className="hidden gap-4 md:flex">
            <Link to={"/login"}>
              <button className="hover:text-primary h-11 rounded-[5px] border border-white px-6 font-medium transition hover:bg-white">
                Sign In
              </button>
            </Link>
            <Link to={"/register"}>
              <button className="text-primary h-11 rounded-[5px] bg-white px-6 font-medium transition hover:bg-gray-200">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="absolute top-16 flex w-screen justify-center rounded-md bg-white text-black shadow-lg md:hidden">
          <DropdownLanding />
        </div>
      )}
    </header>
  );
}

export default HeaderLandingPage;
