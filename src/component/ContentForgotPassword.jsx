import { Link, useNavigate } from "react-router";
import ButtonLogin from "./button/ButtonLogin";
import InputLogin from "./input/InputLogin";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  changePasswordByEmail,
  resetRegister,
} from "../store/slices/registerSlice";
import toast from "react-hot-toast";

const ContentForgotPassword = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { users, isSuccess, error } = useAppSelector((state) => state.register);

  const [step, setStep] = useState(1);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleVerifyEmail = (e) => {
    e.preventDefault();
    setEmailError("");

    const userFound = users.find((u) => u.username === email);
    if (!userFound) {
      setEmailError("Email tidak terdaftar! Silahkan cek kembali.");
      return;
    }

    setStep(2);
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    setPasswordError("");

    if (newPassword.length < 6) {
      setPasswordError("Password minimal 6 karakter!");
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordError("Konfirmasi password tidak cocok!");
      return;
    }

    dispatch(
      changePasswordByEmail({
        username: email,
        newPassword,
      }),
    );
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Password berhasil diubah!", { duration: 3000 });
      dispatch(resetRegister());
      navigate("/login");
    }
    if (error) {
      toast.error(error);
      dispatch(resetRegister());
    }
  }, [isSuccess, error, dispatch, navigate]);

  return (
    <section className="w-full items-center justify-center p-10">
      <div className="container">
        <h4 className="logo text-primary font-nunitoSans my-2 flex items-center gap-2 text-xl">
          <img
            className="h-8 w-8"
            src="/image/MoneyWallet.png"
            alt="Money-Wallet.png"
          />
          E-Wallet
        </h4>

        {step === 1 ? (
          <>
            <p className="font-montserrat my-2 text-3xl">
              <b>Fill Out Form Correctly 👋</b>
            </p>
            <p className="text-secondary font-montserrat mt-4 mb-6">
              We will verify your email before changing the password.
            </p>
          </>
        ) : (
          <>
            <p className="font-montserrat my-2 text-3xl">
              <b>Create New Password</b>
            </p>
            <p className="text-secondary font-montserrat mt-2 mb-6">
              Enter your new password for <b>{email}</b>
            </p>
          </>
        )}
      </div>

      <div className="space-y-6">
        {step === 1 && (
          <form onSubmit={handleVerifyEmail} className="space-y-4">
            <InputLogin
              label="Email"
              type="email"
              placeholder="Enter Your Email"
              id="email"
              icon="/image/mail.png"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {emailError && <p className="text-sm text-red-500">{emailError}</p>}
            <ButtonLogin type="submit">Verify Email</ButtonLogin>

            <p className="text-secondary font-montserrat text-center text-sm">
              Remember your password?{" "}
              <Link className="text-primary hover:underline" to="/login">
                Login
              </Link>
            </p>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleChangePassword} className="space-y-4">
            <div className="bg-white md:w-137.5">
              <InputLogin
                label="New Password"
                type="password"
                placeholder="Enter New Password"
                id="newPassword"
                icon="/image/password.png"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <InputLogin
                label="Confirm Password"
                type="password"
                placeholder="Re-enter New Password"
                id="confirmPassword"
                icon="/image/password.png"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />

              {passwordError && (
                <p className="text-sm text-red-500">{passwordError}</p>
              )}

              {confirmPassword && confirmPassword === newPassword && (
                <p className="text-sm text-green-500">✓ Password cocok</p>
              )}

              <ButtonLogin type="submit">Change Password</ButtonLogin>

              <button
                type="button"
                onClick={() => {
                  setStep(1);
                  setNewPassword("");
                  setConfirmPassword("");
                  setPasswordError("");
                }}
                className="text-secondary hover:text-primary w-full text-center text-sm transition-colors"
              >
                ← Kembali
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContentForgotPassword;
