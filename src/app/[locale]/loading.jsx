'use client';

import Loader from '@/shared/components/Loader/Loader';
import { useEffect } from 'react';

const Loading = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.removeAttribute('style');
    };
  }, []);

  return <Loader />;
};

export default Loading;
