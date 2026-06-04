import { useEffect } from "react";
import ContentRegister from "../component/ContentRegister";

function RegisterPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <main className="md:bg-primary w-full bg-white">
      <section className="flex h-[130vh] w-full">
        <div className="flex-1 rounded-r-2xl bg-white">
          <ContentRegister />
        </div>
        <div className="relative hidden flex-1 items-center justify-center md:flex">
          <img
            className="absolute h-full w-full"
            src="/image/Ellipse 1.svg"
            alt="dim background"
          />
          <img className="relative z-10" src="/image/wallet.png" alt="Wallet" />
        </div>
      </section>
    </main>
  );
}
export default RegisterPage;
