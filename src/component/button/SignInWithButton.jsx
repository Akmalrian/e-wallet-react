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

const SignInWithButton = ({ icon, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="font-montserrat flex w-full items-center justify-center gap-3 rounded-full border border-gray-300 py-3 transition hover:bg-gray-50"
    >
      <img src={icon} className="h-5 w-5" alt="" />
      <span className="font-medium text-gray-600">{text}</span>
    </button>
  );
};
export default SignInWithButton;
