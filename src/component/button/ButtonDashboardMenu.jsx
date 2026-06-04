/**
 * Button Component
 * @type {tipedata}
 * @param {Object} props
 * @param {String} props.text
 * @param {String} props.icon
 * @param {Function} props.onClick
 * @return {JSX.Elements}
 *
 */

const ButtonDashboardMenu = ({ icon, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group font-montserrat flex h-11.25 w-52 items-center gap-2"
    >
      <span className="ml-2 rounded-full bg-white p-1">
        <img src={icon} className="h-6 w-6" alt="icon menu" />
      </span>
      <span className="">{text}</span>
    </button>
  );
};
export default ButtonDashboardMenu;
