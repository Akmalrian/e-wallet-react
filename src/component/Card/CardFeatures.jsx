const CardFeatures = ({ icon, title, text }) => {
  return (
    <div className="h-16.75 w-98 max-md:h-auto max-md:w-full">
      <div className="flex gap-4">
        <div className="flex items-center">
          <img
            className="h-12 w-20 max-md:h-10 max-md:w-12"
            src={icon}
            alt=""
          />
        </div>
        <div>
          <h6 className="text-[18px] font-bold text-white max-md:text-base">
            {title}
          </h6>
          <p className="text-medium text-white max-md:text-sm">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default CardFeatures;
