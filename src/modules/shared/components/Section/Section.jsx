import clsx from 'clsx';

const Section = ({ className, children, ref }) => {
  return (
    <section
      className={clsx('pb-[60px] md:pt-[100px] pt-10', className)}
      ref={ref}
    >
      {children}
    </section>
  );
};

export default Section;
