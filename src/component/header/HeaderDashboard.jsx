import { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import { useAppSelector } from "../../store/hooks";

function HeaderDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser } = useAppSelector((state) => state.auth);

  const toggleDropDrown = () => setIsOpen(!isOpen);

  const displayName = currentUser?.fullName || "User";

  const displayAvatar = currentUser?.avatar || "/image/blank-photo.jpg";

  return (
    <header className="fixed z-60 w-full bg-[#ffffff] shadow md:relative">
      <nav className="flex max-w-full items-center justify-between py-4 pr-12 pl-8">
        <div className="flex items-center gap-2">
          <img className="h-8 w-8" src="/image/MoneyWallet.png" alt="Logo" />
          <span className="font-nunitoSans text-primary text-xl">E-Wallet</span>
        </div>

        <div className="text-secondary font-montserrat flex items-center gap-4">
          <p>{displayName}</p>

          <div
            className="flex cursor-pointer items-center gap-2"
            onClick={toggleDropDrown}
          >
            <img
              src={displayAvatar}
              alt="Profile"
              className="hidden h-10 w-10 rounded-full object-cover md:block"
            />

            {isOpen ? (
              <div className="hidden md:flex">
                <svg
                  className="h-6 w-6 text-black"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            ) : (
              <div className="hidden md:block">
                <img src="/image/down.svg" alt="Icon Down" />
              </div>
            )}

            <div className="block md:hidden">
              <svg
                className="text-primary h-6 w-6"
                fill="none"
                stroke="currentColor"
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
          </div>

          {isOpen && <DropdownMenu />}
        </div>
      </nav>
    </header>
  );
}

export default HeaderDashboard;
