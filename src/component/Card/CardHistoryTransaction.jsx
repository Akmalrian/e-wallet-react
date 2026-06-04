const CardHistoryTransaction = ({
  icon,
  title,
  detail,
  text,
  image,
  result = true,
}) => {
  return (
    <div className="text-secondary text-medium mx-6 max-md:mx-0">
      <div
        className={`flex h-18 w-full items-center justify-between gap-5 ${result ? "bg-white" : "bg-[#F9FAFB]"} max-md:my-1 max-md:h-auto max-md:gap-3 max-md:rounded-xl max-md:px-3 max-md:py-3 max-md:shadow-sm`}
      >
        <div className="ml-8 flex items-center max-md:ml-0 max-md:shrink-0">
          <img
            className="h-14 w-14 max-md:h-11 max-md:w-11 max-md:rounded-full"
            src={image}
            alt="photo profile"
          />
        </div>
        <div className="md:flex md:text-center">
          <h6 className="w-65.25 text-center max-md:w-auto max-md:flex-1 max-md:text-left max-md:text-sm max-md:font-semibold max-md:text-black">
            {title}
          </h6>
          <p className="w-50 md:w-77.5"> {detail} </p>
        </div>
        <p
          className={`text-medium w-60.75 font-semibold ${result ? "text-[#D00000]" : "text-[#1EC15F]"} max-md:w-auto max-md:shrink-0 max-md:text-sm max-md:font-bold`}
        >
          {text}
        </p>
        <img
          className="mr-8 max-md:mr-0 max-md:h-5 max-md:w-5 max-md:shrink-0"
          src={icon}
          alt="icon remove"
        />
      </div>
    </div>
  );
};

export default CardHistoryTransaction;
