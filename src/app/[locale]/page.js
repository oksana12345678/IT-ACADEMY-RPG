'use client';

import ForWho from '@/modules/forWho/ForWho';
import Header from '@/modules/header/Header';
import Hero from '@/modules/hero/Hero';
import HoveItWorks from '@/modules/hoveItWorks/HoveItWorks';
import WhyItHaveValue from '@/modules/whayItHaveValue/WhyItHaveValue';
import { useEffect, useRef } from 'react';

export default function Home() {
  const howItWorksRef = useRef(null);
  const forWhoThisRef = useRef(null);
  const investorsRef = useRef(null);
  const contactsRef = useRef(null);

  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
      <Header
        howItWorksRef={howItWorksRef}
        forWhoThisRef={forWhoThisRef}
        investorsRef={investorsRef}
        contactsRef={contactsRef}
      />
      <main>
        <Hero />

        <HoveItWorks ref={howItWorksRef} />
        <ForWho ref={forWhoThisRef} />
        <WhyItHaveValue ref={investorsRef} id="investors"></WhyItHaveValue>
        <section ref={contactsRef} id="contacts"></section>
      </main>
    </div>
  );
}
