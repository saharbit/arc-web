const Button = ({ text, onClick }) => {
  return (
    <button
      className="bg-black hover:bg-red-50 hover:text-black text-white font-bold py-4 px-4 rounded-full focus:outline-none focus:shadow-outline transition-all duration-300"
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
