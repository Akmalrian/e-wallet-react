import { useEffect } from "react";
import EnterPinSection from "../component/section/EnterPinSection";

function EnterPin() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <main className="md:bg-primary w-full bg-white">
      <section className="flex h-[120vh] w-full">
        <div className="flex-1 rounded-r-2xl bg-white">
          <EnterPinSection />
        </div>
        <div className="relative hidden flex-1 items-center justify-center md:flex">
          <img
            className="absolute h-full w-full"
            src="/image/Ellipse 1.svg"
            alt="dim background"
          />
          <img
            className="relative z-10 mt-6"
            src="/image/aMan.png"
            alt="Wallet"
          />
        </div>
      </section>
    </main>
  );
}
export default EnterPin;
