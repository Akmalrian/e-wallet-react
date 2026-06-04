import { Link } from "react-router";
import ButtonLogin from "./button/ButtonLogin";
import SignInWithButton from "./button/SignInWithButton";
import InputLogin from "./input/InputLogin";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { useNavigate } from "react-router";
import { loginSchema } from "../schemas/schema.auth";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { loginUser, clearMessages } from "../store/slices/authSlice";
import store from "../store/store";

const ContentLogin = () => {
  const dispatch = useAppDispatch();
  const { error, success, needsPin } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(loginSchema),
  });

  const onLogin = (data) => {
    const users = store.getState().register.users;
    dispatch(
      loginUser({ username: data.username, password: data.password, users }),
    );
  };

  useEffect(() => {
    if (success) {
      toast.success(success);
      dispatch(clearMessages());
      setTimeout(() => {
        if (needsPin) {
          navigate("/enter-pin");
        } else {
          navigate("/dashboard");
        }
      }, 1000);
    }
    if (error) {
      toast.error(error);
      dispatch(clearMessages());
    }
  }, [success, error, dispatch, navigate, needsPin]);

  return (
    <section className="h-screen w-full p-10 md:p-20">
      <div className="container">
        <h4 className="logo text-primary font-nunitoSans my-2 flex items-center gap-2 text-xl">
          <Link to="/">
            <img
              className="h-8 w-8"
              src="/image/MoneyWallet.png"
              alt="Money-Wallet.png"
            />
          </Link>{" "}
          E-Wallet
        </h4>
        <p className="font-montserrat my-2 text-3xl">
          <b>Hello Welcome Back 👋</b>
        </p>
        <p className="text-secondary font-montserrat mt-4 mb-6">
          Fill out the form correctly or you can login with several option.
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
        <form onSubmit={handleSubmit(onLogin)} className="space-y-4">
          <InputLogin
            label="Email"
            type="text"
            placeholder="Enter Your Email"
            id="email"
            icon="/image/mail.png"
            {...register("username")}
          />
          {errors.username && (
            <span className="mt-1 block text-sm text-red-500">
              {errors.username.message}
            </span>
          )}
          <InputLogin
            label="Password"
            type="password"
            placeholder="Enter Your Password"
            id="pass"
            icon="/image/password.png"
            {...register("password")}
          />
          {errors.password && (
            <span className="mt-1 block text-sm text-red-500">
              {errors.password.message}
            </span>
          )}
          <div className="font-montserrat text-right">
            <Link
              to={"forgot-password"}
              className="text-primary text-sm hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
          <ButtonLogin type="submit">Login</ButtonLogin>
        </form>
        <p className="text-secondary font-montserrat text-center">
          Not Have An Account?
          <Link className="text-primary hover:underline" to={"/register"}>
            {" "}
            Register
          </Link>
        </p>
      </div>
    </section>
  );
};
export default ContentLogin;
