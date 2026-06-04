import { NavLink, useNavigate } from "react-router";
import ButtonDashboardMenu from "../button/ButtonDashboardMenu";
import { useAppDispatch } from "../../store/hooks";
import { logoutUser } from "../../store/slices/authSlice";

function DropdownMenu() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
    navigate("/login");
  };
  return (
    <nav className="absolute top-20 right-5 z-10 h-80 w-58.75 rounded-2xl bg-white shadow md:h-35.5">
      <div className="ml-2 grid gap-2 p-6">
        <div className="grid md:hidden">
          <NavLink
            to={"/dashboard"}
            className={({ isActive }) => {
              return isActive
                ? "bg-primary mr-5 -ml-5 rounded-md text-white"
                : "mr-5 -ml-5 rounded-md bg-white hover:bg-[#798dff]";
            }}
          >
            <ButtonDashboardMenu
              icon="/image/dashboard-two (1).svg"
              text="Dashboard"
            />
          </NavLink>
          <NavLink
            to={"/transfer"}
            className={({ isActive }) => {
              return isActive
                ? "bg-primary mr-5 -ml-5 rounded-md text-white"
                : "mr-5 -ml-5 rounded-md bg-white hover:bg-[#798dff]";
            }}
          >
            <ButtonDashboardMenu icon="/image/2 User.svg" text="Transfer" />
          </NavLink>
          <NavLink
            to={"/history"}
            className={({ isActive }) => {
              return isActive
                ? "bg-primary mr-5 -ml-5 rounded-md text-white"
                : "mr-5 -ml-5 rounded-md bg-white hover:bg-[#798dff]";
            }}
          >
            <ButtonDashboardMenu icon="/image/history.svg" text="History" />
          </NavLink>
          <NavLink
            to={"/topup"}
            className={({ isActive }) => {
              return isActive
                ? "bg-primary mr-5 -ml-5 rounded-md text-white"
                : "mr-5 -ml-5 rounded-md bg-white hover:bg-[#798dff]";
            }}
          >
            <ButtonDashboardMenu icon="/image/Upload.svg" text="Top Up" />
          </NavLink>
        </div>
        <NavLink
          to={"/profile"}
          className={({ isActive }) => {
            return isActive
              ? "bg-primary mr-5 -ml-5 rounded-md text-white"
              : "mr-5 -ml-5 rounded-md bg-white hover:bg-[#798dff]";
          }}
        >
          <ButtonDashboardMenu icon="/image/2 User.svg" text="Profile" />
        </NavLink>
        <NavLink
          to={"/login"}
          onClick={handleLogout}
          className={({ isActive }) => {
            return isActive
              ? "bg-primary rounded-md text-white"
              : "mr-5 -ml-5 rounded-md bg-white hover:bg-[#798dff]";
          }}
        >
          <ButtonDashboardMenu icon="/image/Log Out.svg" text="Keluar" />
        </NavLink>
      </div>
    </nav>
  );
}
export default DropdownMenu;
