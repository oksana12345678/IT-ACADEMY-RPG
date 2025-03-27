import { useState } from 'react';
import Link from 'next/link';
import LangSwitcher from './components/LangSwitcher/LangSwitcher';
import NavLinks from './components/NavLinks/NavLinks';

const Header = ({
  t,
  howItWorksRef,
  forWhoThisRef,
  investorsRef,
  contactsRef,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-[#150320DB] w-screen fixed z-50 ">
      <div className="flex items-center justify-between px-5 xl:px-21 md:px-11">
        <button
          className="xl:hidden md:hidden block text-white"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <Link href={'/'} className="xl:w-20 w-15">
          <img src="/LOGO_RPG.svg" alt="Logo" />
        </Link>
        <div className="flex xl:gap-27 md:gap-[30px] items-center">
          <NavLinks
            howItWorksRef={howItWorksRef}
            forWhoThisRef={forWhoThisRef}
            investorsRef={investorsRef}
            contactsRef={contactsRef}
            className="hidden"
          />
          <LangSwitcher />
        </div>
      </div>
      {isMenuOpen && (
        <div className="xl:hidden flex flex-col items-center bg-[#150320DB] py-6">
          <NavLinks
            howItWorksRef={howItWorksRef}
            forWhoThisRef={forWhoThisRef}
            investorsRef={investorsRef}
            contactsRef={contactsRef}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
