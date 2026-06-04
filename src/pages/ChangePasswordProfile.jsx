import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import ButtonLogin from "../component/button/ButtonLogin";
import NavigationDashboard from "../component/header/NavigationDashboard";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { changePassword, resetRegister } from "../store/slices/registerSlice";
import toast from "react-hot-toast";

function ChangePasswordProfile() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { currentUser } = useAppSelector((state) => state.auth);
  const { isSuccess, error } = useAppSelector((state) => state.register);

  const [existingPassword, setExistingPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showExisting, setShowExisting] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Password berhasil diubah!");
      dispatch(resetRegister());
      navigate("/profile");
    }
    if (error) {
      toast.error(error);
      dispatch(resetRegister());
    }
  }, [isSuccess, error, dispatch, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!existingPassword || !newPassword || !confirmPassword) {
      toast.error("Semua field harus diisi!");
      return;
    }

    if (newPassword.length < 6) {
      toast.error("Password baru minimal 6 karakter!");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Konfirmasi password tidak cocok!");
      return;
    }

    dispatch(
      changePassword({
        username: currentUser.username,
        existingPassword,
        newPassword,
      }),
    );
  };

  return (
    <main>
      <section className="font-montserrat grid gap-15 md:grid-cols-[1fr_3fr_1.5fr]">
        <nav>
          <NavigationDashboard />
        </nav>
        <section className="text-medium font-montserrat mt-6">
          <div className="mx-4 mb-8 flex items-center gap-4 font-semibold">
            <img src="/image/2User.svg" alt="icon history" />
            <p>Profile</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mx-4 justify-between p-5 shadow md:h-auto md:w-280"
          >
            <div className="mb-10">
              <p className="mb-4 font-bold">Change Password</p>

              {/* Existing Password */}
              <h6 className="mt-3 font-semibold">Existing Password</h6>
              <div className="relative mt-1 flex items-center">
                <img
                  src="/image/Password.svg"
                  alt=""
                  className="pointer-events-none absolute left-4 h-5 w-5"
                />
                <input
                  type={showExisting ? "text" : "password"}
                  placeholder="Enter Your Existing Password"
                  value={existingPassword}
                  onChange={(e) => setExistingPassword(e.target.value)}
                  className="focus:border-primary w-full rounded-md border border-gray-200 bg-transparent py-3 pr-12 pl-12 transition outline-none"
                />
                {/* Toggle show/hide */}
                <button
                  type="button"
                  onClick={() => setShowExisting(!showExisting)}
                  className="hover:text-primary absolute right-4 text-gray-400"
                >
                  {showExisting ? (
                    <img
                      src="/public/image/closed-eye.jpg"
                      className="w-6"
                    ></img>
                  ) : (
                    <img src="/public/image/open-eye.png" className="w-6"></img>
                  )}
                </button>
              </div>

              <h6 className="mt-3 font-semibold">New Password</h6>
              <div className="relative mt-1 flex items-center">
                <img
                  src="/image/Password.svg"
                  alt=""
                  className="pointer-events-none absolute left-4 h-5 w-5"
                />
                <input
                  type={showNew ? "text" : "password"}
                  placeholder="Enter Your New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="focus:border-primary w-full rounded-md border border-gray-200 bg-transparent py-3 pr-12 pl-12 transition outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowNew(!showNew)}
                  className="hover:text-primary absolute right-4 text-gray-400"
                >
                  {showNew ? (
                    <img
                      src="/public/image/closed-eye.jpg"
                      className="w-6"
                    ></img>
                  ) : (
                    <img src="/public/image/open-eye.png" className="w-6"></img>
                  )}
                </button>
              </div>

              <h6 className="mt-3 font-semibold">Confirm New Password</h6>
              <div className="relative mt-1 flex items-center">
                <img
                  src="/image/Password.svg"
                  alt=""
                  className="pointer-events-none absolute left-4 h-5 w-5"
                />
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Re-Type Your New Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={`focus:border-primary w-full rounded-md border bg-transparent py-3 pr-12 pl-12 transition outline-none ${
                    confirmPassword && confirmPassword !== newPassword
                      ? "border-red-400" // merah jika tidak cocok
                      : "border-gray-200" // normal jika kosong atau cocok
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="hover:text-primary absolute right-4 text-gray-400"
                >
                  {showConfirm ? (
                    <img
                      src="/public/image/closed-eye.jpg"
                      className="w-6"
                    ></img>
                  ) : (
                    <img src="/public/image/open-eye.png" className="w-6"></img>
                  )}
                </button>
              </div>

              {confirmPassword && confirmPassword !== newPassword && (
                <p className="mt-1 text-xs text-red-500">
                  Konfirmasi password tidak cocok!
                </p>
              )}

              <div className="mt-5">
                <ButtonLogin type="submit">Submit</ButtonLogin>
              </div>
            </div>
          </form>
        </section>
      </section>
    </main>
  );
}

export default ChangePasswordProfile;
