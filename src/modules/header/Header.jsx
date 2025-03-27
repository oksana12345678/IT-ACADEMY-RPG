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
  return (
    <header className="  bg-[#150320DB] w-full fixed">
      <div className="flex items-center justify-between  px-21">
        <Link href={'/'}>
          <img src="/LOGO_RPG.svg" alt="Logo" />
        </Link>
        <div className="flex gap-4">
          <NavLinks
            howItWorksRef={howItWorksRef}
            forWhoThisRef={forWhoThisRef}
            investorsRef={investorsRef}
            contactsRef={contactsRef}
          />
          <LangSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
