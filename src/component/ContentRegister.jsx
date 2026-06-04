import SignInWithButton from "./button/SignInWithButton";
import ButtonLogin from "./button/ButtonLogin";
import { Link, useNavigate } from "react-router";
import InputLogin from "./input/InputLogin";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { registerSchema } from "../schemas/schema.auth.js";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  registerStart,
  registerSuccess,
  registerFailed,
  resetRegister,
} from "../store/slices/registerSlice";

const ContentRegister = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { users, isSuccess, isLoading, error } = useAppSelector(
    (state) => state.register,
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(registerSchema),
  });

  const onSubmit = (data) => {
    dispatch(registerStart());

    const isTaken = users.some((u) => u.username === data.username);

    if (isTaken) {
      dispatch(
        registerFailed("Email sudah digunakan! Silahkan pilih yang lain."),
      );
      return;
    }

    const { repeat_password: _, ...newUser } = data;
    dispatch(registerSuccess(newUser));
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Registrasi Berhasil!");
      dispatch(resetRegister());
      navigate("/login");
    }
    if (error) {
      toast.error(error);
      dispatch(resetRegister());
    }
  }, [isSuccess, error, dispatch, navigate]);

  return (
    <section className="h-screen w-full items-center p-10 md:p-20">
      <div className="container">
        <h4 className="logo text-primary font-nunitoSans my-2 flex items-center gap-2 text-xl">
          <img
            className="h-8 w-8"
            src="/image/MoneyWallet.png"
            alt="Money-Wallet.png"
          />
          E-Wallet
        </h4>
        <p className="font-montserrat my-2 text-3xl">
          <b>
            Start Accessing Banking Needs With All Devices and All Platforms
            With 30.000+ Users
          </b>
        </p>
        <p className="text-secondary font-montserrat mt-4 mb-6">
          Transfering money is eassier than ever, you can access Zwallet
          wherever you are. Desktop, laptop, mobile phone? we cover all of that
          for you!
        </p>
      </div>
      <div className="space-y-6">
        <div className="space-y-3">
          <SignInWithButton
            icon="/image/google.png"
            text="Sign In With Google"
          />
          <SignInWithButton
            icon="/image/facebook.png"
            text="Sign In With Facebook"
          />
        </div>
        <div className="relative flex items-center py-2">
          <div className="grow border-t border-gray-200"></div>
          <span className="mx-4 shrink text-sm text-gray-400">Or</span>
          <div className="grow border-t border-gray-200"></div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <InputLogin
              label="Email"
              type="text"
              placeholder="Enter Your Email"
              id="username"
              icon="/image/mail.png"
              {...register("username")}
            />
            {errors.username && (
              <span className="mt-1 block text-sm text-red-500">
                {errors.username.message}
              </span>
            )}
          </div>
          <div>
            <InputLogin
              label="Password"
              type="password"
              placeholder="Enter Your Password"
              id="password"
              icon="/image/password.png"
              {...register("password")}
            />
            {errors.password && (
              <span className="mt-1 block text-sm text-red-500">
                {errors.password.message}
              </span>
            )}
          </div>
          <div>
            <InputLogin
              label="Confirm Password"
              type="password"
              placeholder="Enter Your Password Again"
              id="repeat_password"
              icon="/image/password.png"
              {...register("repeat_password")}
            />
            {errors.repeat_password && (
              <span className="mt-1 block text-sm text-red-500">
                {errors.repeat_password.message}
              </span>
            )}
          </div>

          <ButtonLogin type="submit" disabled={isLoading}>
            {isLoading ? "Mendaftar..." : "Register"}
          </ButtonLogin>
        </form>
        <p className="text-secondary font-montserrat text-center">
          Have An Account?
          <Link className="text-primary hover:underline" to={"/login"}>
            {" "}
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default ContentRegister;
