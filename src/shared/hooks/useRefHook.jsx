// useSectionRefs.js
import { useRef } from 'react';

export const useSectionRefs = () => {
  const how_it_works = useRef(null);
  const for_who_this = useRef(null);
  const investors = useRef(null);
  const contacts = useRef(null);

  return {
    how_it_works,
    for_who_this,
    investors,
    contacts,
  };
};
