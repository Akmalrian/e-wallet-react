const CardTransferMoney = ({ icon, title, detail, image, result = true }) => {
  return (
    <div className="text-secondary text-medium mx-6 w-100 max-md:mx-0 max-md:w-full md:w-full">
      <div
        className={`flex h-18 w-full items-center justify-between gap-0 md:gap-5 ${result ? "bg-white" : "bg-[#F9FAFB]"} max-md:my-1 max-md:h-auto max-md:gap-3 max-md:rounded-xl max-md:px-3 max-md:py-3 max-md:shadow-sm`}
      >
        <div className="ml-0 flex items-center max-md:ml-0 max-md:shrink-0 md:ml-20">
          <img
            className="h-14 w-14 max-md:h-11 max-md:w-11 max-md:rounded-full"
            src={image}
            alt="photo profile"
          />
        </div>
        <h6 className="w-108.75 text-center max-md:w-auto max-md:flex-1 max-md:text-left max-md:text-sm max-md:font-semibold max-md:text-black">
          {title}
        </h6>
        <p className="w-40 md:w-60.75">{detail}</p>
        <img className="mr-8" src={icon} alt="icon remove" />
      </div>
    </div>
  );
};

export default CardTransferMoney;
