import { useTranslation } from 'react-i18next';

const TeamList = () => {
  const { t } = useTranslation('teamList');

  return (
    <div className="flex  w-full h-full py-18 px-18">
      <ul className="flex flex-col gap-9">
        {t('list', { returnObjects: true }).map((member, index) => (
          <li className="flex flex-col gap-2 w-[400px]" key={index}>
            <p className="font-medium text-2xl ">
              {member.name} {member.surname}
            </p>
            <p className="font-light text-2xl">{member.position}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamList;
