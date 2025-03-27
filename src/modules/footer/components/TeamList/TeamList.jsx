import { useTranslation } from 'react-i18next';

const TeamList = () => {
  const { t } = useTranslation('teamList');

  return (
    <div className="flex  w-full h-full xl:py-18 xl:px-18 md:py-8 md:px-8">
      <ul className="flex flex-col gap-9">
        {t('list', { returnObjects: true }).map((member, index) => (
          <li
            className="flex flex-col gap-2 xl:w-[400px] md:w-[280px]"
            key={index}
          >
            <p className="font-medium xl:text-2xl md:text-xl ">
              {member.name} {member.surname}
            </p>
            <p className="font-light xl:text-xl md:text-lg">
              {member.position}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamList;
