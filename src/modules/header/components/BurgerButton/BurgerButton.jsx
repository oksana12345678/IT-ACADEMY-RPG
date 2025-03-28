const BurgerButton = ({ toggleMenu, isMenuOpen }) => {
  return (
    <button
      className="xl:hidden md:hidden block text-white focus:outline-none"
      onClick={toggleMenu}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`w-8 h-8 transition-transform duration-300 ${
          isMenuOpen ? 'rotate-45 transform' : ''
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          className={`transition-all duration-300 ${
            isMenuOpen ? 'translate-y-2  -rotate-4' : ''
          }`}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16"
        />
        <path
          className={`transition-opacity duration-300 ${
            isMenuOpen ? 'translate-y-6 -rotate-86' : ''
          }`}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 12h16"
        />
        <path
          className={`transition-all duration-300 ${
            isMenuOpen ? 'hidden' : ''
          }`}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 18h16"
        />
      </svg>
    </button>
  );
};

export default BurgerButton;
