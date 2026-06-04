const LeftHeroLanding = () => {
  return (
    <section className="h-97.25 w-xl max-md:h-auto max-md:w-full">
      <div className="max-md:text-left">
        <p className="font-montserrat my-2 text-5xl max-md:text-3xl max-md:leading-tight">
          Smart Way to Your Financial Business
        </p>
        <p className="text-secondary font-montserrat mt-4 mb-6 max-md:text-sm">
          We bring you a mobile app for banking problems that oftenly wasting
          much of your times.
        </p>
        <button className="bg-primary hover:text-primary h-11 rounded-[5px] border px-6 text-white transition hover:bg-white">
          Get Started
        </button>
        <p className="text-secondary font-montserrat my-6 max-md:my-4">
          Available On
        </p>
        <div className="flex gap-10">
          <img src="/image/playStore.png" alt="Icon Playstore" />
          <img src="/image/apple.png" alt="Icon Apple" />
        </div>
      </div>
    </section>
  );
};
export default LeftHeroLanding;
