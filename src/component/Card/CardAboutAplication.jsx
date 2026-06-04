const CardAboutAplication = ({ icon, title, text }) => {
  return (
    <div className="bg-primary h-72.25 w-52.75 rounded-2xl p-4 max-md:h-auto max-md:w-full max-md:rounded-xl max-md:p-6">
      <div className="flex flex-col items-center text-center">
        <span className="pd-10 mt-2 flex h-15 w-15 items-center justify-center rounded-full bg-white">
          <img className="h-8 w-8" src={icon} alt="" />
        </span>
        <h6 className="mt-2 text-[18px] font-bold text-white max-md:text-base">
          {title}
        </h6>
        <p className="text-medium mt-4 text-white max-md:mt-2 max-md:text-sm">
          {text}
        </p>
      </div>
    </div>
  );
};

export default CardAboutAplication;
