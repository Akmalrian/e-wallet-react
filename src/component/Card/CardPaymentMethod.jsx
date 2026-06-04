const CardPaymentMethod = ({ type = "radio", title, name, id, image }) => {
  return (
    <label className="flex h-15 w-full items-center rounded-lg bg-[#E8E8E84D] px-4 max-md:h-auto max-md:gap-2 max-md:py-3">
      <input
        className="text-medium text-[#4f5665]"
        type={type}
        name={name}
        id={id}
      />
      <div className="ml-8 flex items-center max-md:ml-3">
        <img
          className="h-14 w-14 max-md:h-10 max-md:w-10"
          src={image}
          alt="bank transfer"
        />
      </div>
      <h6 className="text-secondary ml-5 w-65.25 max-md:ml-3 max-md:w-auto max-md:text-sm">
        {title}
      </h6>
    </label>
  );
};
export default CardPaymentMethod;
