const CardIncome = ({ icon, title, text, detail, arrow, day }) => {
  const isNegative = detail.includes("-");
  return (
    <div className="mt-10 flex h-36.75 w-screen flex-col items-center justify-center rounded-md shadow max-md:h-auto max-md:w-full max-md:rounded-xl max-md:py-5 md:w-60.5 md:items-start">
      <div className="ml-5">
        <div className="flex items-center">
          <img className="mr-2 h-8 w-8" src={icon} alt="icon income" />
          <h6 className="text-secondary text-medium font-medium">{title}</h6>
        </div>
        <p className="mt-2 text-[24px] font-medium text-black">{text}</p>
        <p
          className={`text-tiny mt-2 flex items-center gap-1 ${isNegative ? "text-red-500" : "text-[#00A700]"}`}
        >
          {detail}
          <img src={arrow} alt="arrow" />
          {day}
        </p>
      </div>
    </div>
  );
};

export default CardIncome;
