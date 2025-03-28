'use client';

import Footer from '@/modules/footer/footer';
import ForWho from '@/modules/forWho/ForWho';
import Header from '@/modules/header/Header';
import Hero from '@/modules/hero/Hero';
import HoveItWorks from '@/modules/hoveItWorks/HoveItWorks';
import { ModalProvider } from '@/shared/hooks/ModalContext';
import WhyItHaveValue from '@/modules/whyItHaveValue/WhyItHaveValue';
import { useRef } from 'react';

export default function Home({ params }) {
  const howItWorksRef = useRef(null);
  const forWhoThisRef = useRef(null);
  const investorsRef = useRef(null);
  const contactsRef = useRef(null);

  return (
    <ModalProvider>
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

        <Footer params={params} />
      </div>
    </ModalProvider>
  );
}
