'use client';
import { useNavigationLinks } from '@/shared/hooks/useNavigationLinks';
import clsx from 'clsx';

const NavLinks = ({
  howItWorksRef,
  forWhoThisRef,
  investorsRef,
  contactsRef,
  className,
  toggleMenu,
}) => {
  const { navLinks } = useNavigationLinks();

  const sectionRefs = {
    how_it_works: howItWorksRef,
    for_who_this: forWhoThisRef,
    investors: investorsRef,
    contacts: contactsRef,
  };

  const handleScrollToSection = (href) => {
    const sectionId = href.replace('#', '');
    const sectionRef = sectionRefs[sectionId];
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    toggleMenu();
  };

  return (
    <nav>
      <ul className={clsx('flex md:gap-4', className)}>
        {Object.entries(navLinks).map(([key, { href, text }]) => (
          <li key={key}>
            <button
              onClick={() => handleScrollToSection(href)}
              className="cursor-pointer bg-transparent border-none md:text-base xl:text-xl"
            >
              {text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
