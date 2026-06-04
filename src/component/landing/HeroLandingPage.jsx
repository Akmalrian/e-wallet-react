import BrandLandingPage from "../Card/BrandLandingPage";
import LeftHeroLanding from "./LeftHeroLanding";

const HeroLandingPage = () => (
  <main className="w-full bg-white">
    <section className="relative top-70 flex h-screen w-full flex-col-reverse p-28 max-md:top-0 max-md:h-auto max-md:flex-col-reverse max-md:p-6 max-md:pt-8 md:static md:flex-row">
      <div className="flex-1 rounded-r-2xl bg-white max-md:rounded-none">
        <LeftHeroLanding />
      </div>
      <div className="grid items-center max-md:flex max-md:justify-center md:flex">
        <img
          className="relative z-10 w-72 not-md:h-100 max-md:mx-auto max-md:h-auto md:w-screen"
          src="/image/onlinePayment.png"
          alt="Wallet"
        />
      </div>
    </section>
    <section className="h-42.75 w-full bg-[#E8E8E84D] max-md:h-auto">
      <div className="mx-14 p-6 max-md:mx-4 max-md:p-4">
        <BrandLandingPage />
      </div>
    </section>
  </main>
);
export default HeroLandingPage;
