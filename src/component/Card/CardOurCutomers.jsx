const CardOurCustomers = ({ icon, title, rate, mark, text }) => {
  return (
    <div className="h-100 w-100 rounded-2xl bg-[#E8E8E84D] p-4 md:h-95 md:w-75.75">
      <div className="mt-8 flex flex-col items-center text-center">
        <img src={icon} alt="Customer Photo" />
        <h6 className="mt-6 text-[18px] font-bold text-black">{title}</h6>
        <img className="mt-4" src={rate} alt="rating customer" />
        <img className="mt-6" src={mark} alt="mark image" />
        <p className="text-secondary text-medium mt-4">{text}</p>
      </div>
    </div>
  );
};

export default CardOurCustomers;
