import { useState } from 'react';
import Link from 'next/link';
import LangSwitcher from './components/LangSwitcher/LangSwitcher';
import NavLinks from './components/NavLinks/NavLinks';
import BurgerButton from './components/BurgerButton/BurgerButton';
import Image from 'next/image';

const Header = ({
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
        <BurgerButton toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        <Link href={'/'} className="xl:w-20 w-15">
          <img src="/LOGO_RPG.svg" alt="Logo" />
        </Link>
        <div className="flex xl:gap-27 md:gap-[30px] items-center">
          <NavLinks
            howItWorksRef={howItWorksRef}
            forWhoThisRef={forWhoThisRef}
            investorsRef={investorsRef}
            contactsRef={contactsRef}
            className="hidden md:flex"
          />
          <LangSwitcher />
        </div>
      </div>
      {isMenuOpen && (
        <div className="xl:hidden flex flex-col just items-start bg-[#090116]  fixed w-full h-screen px-10 py-20">
          <NavLinks
            howItWorksRef={howItWorksRef}
            forWhoThisRef={forWhoThisRef}
            investorsRef={investorsRef}
            contactsRef={contactsRef}
            className="gap-4 flex-col pb-13"
            toggleMenu={toggleMenu}
          />
          <div className="w-full flex  justify-center">
            <Image
              src="/big_letter.png"
              width={200}
              height={200}
              alt="letter"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
