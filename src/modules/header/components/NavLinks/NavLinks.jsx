'use client';
import { useNavigationLinks } from '@/modules/shared/hooks/useNavigationLinks';

const NavLinks = ({
  howItWorksRef,
  forWhoThisRef,
  investorsRef,
  contactsRef,
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
  };

  return (
    <nav>
      <ul className="flex gap-4">
        {Object.entries(navLinks).map(([key, { href, text }]) => (
          <li key={key}>
            <button
              onClick={() => handleScrollToSection(href)}
              className="cursor-pointer bg-transparent border-none"
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
