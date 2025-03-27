import clsx from 'clsx';
import React from 'react';

const Container = ({ children, className }) => {
  return <div className={clsx('px-21', className)}>{children}</div>;
};

export default Container;
