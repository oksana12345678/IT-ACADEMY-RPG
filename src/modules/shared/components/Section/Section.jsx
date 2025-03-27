import clsx from 'clsx';

const Section = ({ className, children, ref }) => {
  return (
    <section className={clsx('pb-[60px] pt-[100px]', className)} ref={ref}>
      {children}
    </section>
  );
};

export default Section;
