import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import ButtonDashboardMenu from "../button/ButtonDashboardMenu";
import { useAppDispatch } from "../../store/hooks";
import { logoutUser } from "../../store/slices/authSlice";
import LogoutModal from "../section/LogoutModal";

function DropdownMenu() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleLogoutClick = (e) => {
    e.preventDefault();
    setIsLogoutModalOpen(true);
  };

  const handleLogoutConfirm = () => {
    dispatch(logoutUser());
    setIsLogoutModalOpen(false);
    navigate("/login");
  };

  const handleLogoutCancel = () => {
    setIsLogoutModalOpen(false);
  };

  return (
    <>
      <LogoutModal
        isOpen={isLogoutModalOpen}
        onConfirm={handleLogoutConfirm}
        onCancel={handleLogoutCancel}
      />

      <nav className="absolute top-20 right-5 z-10 h-80 w-58.75 rounded-2xl bg-white shadow md:h-35.5">
        <div className="ml-2 grid gap-2 p-6">
          <div className="grid md:hidden">
            <NavLink
              to={"/dashboard"}
              className={({ isActive }) =>
                isActive
                  ? "bg-primary mr-5 -ml-5 rounded-md text-white"
                  : "mr-5 -ml-5 rounded-md bg-white hover:bg-[#798dff]"
              }
            >
              <ButtonDashboardMenu
                icon="/image/dashboard-two (1).svg"
                text="Dashboard"
              />
            </NavLink>
            <NavLink
              to={"/transfer"}
              className={({ isActive }) =>
                isActive
                  ? "bg-primary mr-5 -ml-5 rounded-md text-white"
                  : "mr-5 -ml-5 rounded-md bg-white hover:bg-[#798dff]"
              }
            >
              <ButtonDashboardMenu icon="/image/2 User.svg" text="Transfer" />
            </NavLink>
            <NavLink
              to={"/history"}
              className={({ isActive }) =>
                isActive
                  ? "bg-primary mr-5 -ml-5 rounded-md text-white"
                  : "mr-5 -ml-5 rounded-md bg-white hover:bg-[#798dff]"
              }
            >
              <ButtonDashboardMenu icon="/image/history.svg" text="History" />
            </NavLink>
            <NavLink
              to={"/topup"}
              className={({ isActive }) =>
                isActive
                  ? "bg-primary mr-5 -ml-5 rounded-md text-white"
                  : "mr-5 -ml-5 rounded-md bg-white hover:bg-[#798dff]"
              }
            >
              <ButtonDashboardMenu icon="/image/Upload.svg" text="Top Up" />
            </NavLink>
          </div>
          <NavLink
            to={"/profile"}
            className={({ isActive }) =>
              isActive
                ? "bg-primary mr-5 -ml-5 rounded-md text-white"
                : "mr-5 -ml-5 rounded-md bg-white hover:bg-[#798dff]"
            }
          >
            <ButtonDashboardMenu icon="/image/2 User.svg" text="Profile" />
          </NavLink>

          <button
            onClick={handleLogoutClick}
            className="mr-5 -ml-5 rounded-md bg-white text-left hover:bg-[#ff5e49] hover:text-white"
          >
            <ButtonDashboardMenu icon="/image/Log Out.svg" text="Keluar" />
          </button>
        </div>
      </nav>
    </>
  );
}

export default DropdownMenu;