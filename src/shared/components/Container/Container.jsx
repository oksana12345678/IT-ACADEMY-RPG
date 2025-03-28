import clsx from 'clsx';
import React from 'react';

const Container = ({ children, className }) => {
  return (
    <div className={clsx('px-5 xl:px-21 md:px-11', className)}>{children}</div>
  );
};

export default Container;
