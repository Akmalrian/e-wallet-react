import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import ButtonDashboardMenu from "../button/ButtonDashboardMenu";
import { useAppDispatch } from "../../store/hooks";
import { logoutUser } from "../../store/slices/authSlice";
import LogoutModal from "../section/LogoutModal";

function NavigationDashboard() {
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

      <nav className="relative z-50 hidden min-h-screen w-full bg-white shadow max-md:fixed max-md:flex max-md:h-16 max-md:min-h-0 max-md:w-full md:flex md:h-[130vh] md:w-65.5">
        <div className="ml-2 grid h-87.5 w-52 gap-2 p-6 max-md:ml-0 max-md:flex max-md:h-full max-md:w-full max-md:flex-row max-md:items-center max-md:justify-around max-md:p-0">
          <NavLink
            to={"/dashboard"}
            className={({ isActive }) =>
              isActive
                ? "bg-primary rounded-md text-white"
                : "rounded-md bg-white hover:bg-[#798dff] hover:text-white"
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
                ? "bg-primary rounded-md text-white"
                : "rounded-md bg-white hover:bg-[#798dff] hover:text-white"
            }
          >
            <ButtonDashboardMenu icon="/image/Send.svg" text="Transfer" />
          </NavLink>

          <NavLink
            to={"/history"}
            className={({ isActive }) =>
              isActive
                ? "bg-primary rounded-md text-white"
                : "rounded-md bg-white hover:bg-[#798dff] hover:text-white"
            }
          >
            <ButtonDashboardMenu icon="/image/history.svg" text="History" />
          </NavLink>

          <NavLink
            to={"/topup"}
            className={({ isActive }) =>
              isActive
                ? "bg-primary rounded-md text-white"
                : "rounded-md bg-white hover:bg-[#798dff] hover:text-white"
            }
          >
            <ButtonDashboardMenu icon="/image/Upload.svg" text="Top Up" />
          </NavLink>

          <NavLink
            to={"/profile"}
            className={({ isActive }) =>
              isActive
                ? "bg-primary rounded-md text-white"
                : "rounded-md bg-white hover:bg-[#798dff] hover:text-white"
            }
          >
            <ButtonDashboardMenu icon="/image/2 User.svg" text="Profile" />
          </NavLink>

          <button
            onClick={handleLogoutClick}
            className="rounded-md bg-white hover:bg-[#ff5e49] hover:text-white max-md:flex max-md:flex-col max-md:items-center max-md:px-3 max-md:py-2"
          >
            <ButtonDashboardMenu icon="/image/Log Out.svg" text="Keluar" />
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavigationDashboard;
