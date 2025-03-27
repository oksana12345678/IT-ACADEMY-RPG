import clsx from 'clsx';

const Icon = ({ iconName, className, ...props }) => {
  const iconClass = clsx('', className);
  return (
    <svg className={iconClass} {...props}>
      <use href={`/icons/sprite.svg#${iconName}`}></use>
    </svg>
  );
};

export default Icon;
